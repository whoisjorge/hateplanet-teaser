<template lang="pug">
  form(@submit.prevent="submitEmail", v-on-click-outside="close")

      div.form-group(@click.prevent="open")
        correoSVG
        input.rainbow(type="email", v-model="newUser.email", v-show="see", :placeholder="placeholder", :disabled="sent", aria-describedby="eTerm" autofocus)

      div.form-group
        a(@click.prevent="submitEmail")
          enviarSVG

        //- UX from the future
        p(v-show="this.invalid")
          small.invalid(v-show="!validation.email == true && this.sent == false") Introduce una dirección de correo válida.
        p(v-show="!this.invalid")
          small.valid(v-show="this.sent == true") Enviado correctamente.

        small#eTerm.form-text
          sup (*)
          |  Tu correo&nbsp;
          u sólo
          |  lo utilizaremos para avisarte cuando la web ya no esté en construcción. Y además te enviaremos un
          b  código
          |  con el que tendrás los gastos de
          b  envío gratis
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
      placeholder: '',
      see: false,
      invalid: false,
      sent: false
    }
  },

  methods: {
    submitEmail () {
      if (this.isValid) {
        usersRef.push(this.newUser)
        this.newUser.email = ''
        this.placeholder = '¡Gracias por tu interés!'
        this.invalid = false
        this.sent = true
      } else {
        this.invalid = true
      }
    },
    open () {
      this.see = true
    },
    close () {
      this.see = false
      this.placeholder = '¡No te enviaremos SPAM!*'
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

::placeholder
  text-align: center


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
    cursor: text

.form-control
  display: flex
  margin: 0 auto

.form-text
  display: block
  max-width: 370px
  color: #333
  padding: 1rem
  b
   font-weight: 600

// Introduce Correo
input
  border: none
  position: absolute
  top: -6px
  min-width: 200px
  height: 26px
  background: white
  &:focus
    outline: none
  /* IE 10+ fix position */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active)
    margin: 0 auto
    left: 0px
    right: 0px

// Enviar
a svg
  cursor: pointer

// Valida't
p
  margin: 0
  small
    &.invalid
      color: #f04124
    &.valid
      color: #41b883
</style>




<style>
/* Not Last Minute Tweaks... */
:focus::placeholder {
  color: transparent
}
a path.bgsvg {
    transition: fill .666s ease;
}
a:hover path.bgsvg {
  fill: fuchsia!important
}
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
