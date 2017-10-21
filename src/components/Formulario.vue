<template lang="pug">
  form(v-on-click-outside="close")

      div.form-group(@click.prevent="open")
        correoSVG
        input.rainbow(type="email", v-model="newUser.email", v-if="see", :placeholder="placeholder", :disabled="send == true", aria-describedby="eTerm")

        a(@click.prevent="saveEmail")
          enviarSVG
        div(v-show="this.invalid")
          small.invalid(v-show="!validation.email == true && this.send == false") Introduce una dirección de correo válida.
        div(v-show="!this.invalid")
          small.valid(v-show="this.send == true") Enviado correctamente.

        //- eTerm
        small#eTerm.form-text
          sup (*)
          |  Tu correo&nbsp;
          u sólo
          |  lo utilizaremos para avisarte de que la web ya no está en construcción, y además te enviaremos un
          b  código
          |  con el que tendrás los
          b  gastos de envío gratis
          |  en tu primera compra.
</template>



<script>
import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'

import { mixin as onClickOutside } from 'vue-on-click-outside'

import correoSVG from '@/assets/img/correo.svg'
import enviarSVG from '@/assets/img/enviar.svg'

Vue.use(VueFire)

var db = Firebase.initializeApp({ databaseURL: 'https://hate-planet.firebaseio.com' }).database()
var usersRef = db.ref('emails')

/* eslint-disable no-useless-escape */
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  name: 'Formulario',

  components: { correoSVG, enviarSVG },

  data () {
    return {
      newUser: {
        email: ''
      },
      placeholder: '¡No te enviaremos SPAM!*',
      see: false,
      invalid: false,
      send: false
    }
  },

  methods: {
    saveEmail () {
      if (this.isValid) {
        usersRef.push(this.newUser)
        this.newUser.email = ''
        this.placeholder = '¡Gracias por tu interés!'
        this.invalid = false
        this.send = true
      } else {
        this.invalid = true
      }
    },
    open () {
      this.see = true
    },
    close () {
      this.see = false
    }
  },

  computed: {
    validation () {
      return {
        email: emailRE.test(this.newUser.email)
      }
    },
    isValid () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },

  firebase: {
    users: usersRef
  },

  mixins: [onClickOutside]

}
</script>



<style lang="sass" scoped>
.flex-center
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column

.form-group
  position: relative
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column
  > svg
    margin-top: -13px

.form-control
  display: flex
  margin: 0 auto

.form-text
  display: block
  max-width: 405px
  color: #333
  padding: 1rem
  b
   font-weight: 600

input
  border: none
  position: absolute
  top: -6px
  min-width: 200px
  height: 26px
  background: white
  &:focus
    outline: none

small.invalid
  color: #f04124
small.valid
  color: #41b883
</style>




<style>
::placeholder { text-align: center }
:focus::placeholder { color: transparent }

/*
** Submit SVG :hover color
*/
a svg {
  cursor: pointer;
}
a path.bgsvg {
    transition: fill .6s ease;
}
a:hover path.bgsvg {
  fill: fuchsia!important
}


/*
** N..ice?
*/
.rainbow:focus {
animation:rainbow 1.250s infinite;
}
@keyframes rainbow {
  0% {color: fuchsia;}
  10% {color: #ff8000;}
  20% {color: paleturquoise;}
  30% {color: #80ff00;}
  40% {color: #00ff00;}
  50% {color: cyan;}
  60% {color: #00ffff;}
  70% {color: #0080ff;}
  80% {color: #0000ff;}
  90% {color: #8000ff;}
  100% {color: #ff0080;}
}
</style>
