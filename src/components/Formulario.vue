<template lang="pug">
  form(@submit.prevent="submitEmail", v-on-click-outside="close")

    div.form-group(@click.prevent="open")
      CorreoSVG
      input.rainbow(type="email", v-model="newUser.email", v-show="see", :placeholder="placeholder", :disabled="sent", aria-describedby="eTerm" autofocus)

      a(@click.prevent="submitEmail")
        EnviarSVG
      //- Very futuristic UX
      p(v-show="this.invalid")
        small.invalid(v-show="!validation.email == true && this.sent == false") Introduce una dirección de correo válida.
      p(v-show="!this.invalid")
        small.valid(v-show="this.sent == true") Enviado correctamente.

      small#eTerm
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
import CorreoSVG from '@/assets/img/correo.svg'
import EnviarSVG from '@/assets/img/enviar.svg'

Vue.use(VueFire)

const db = Firebase.initializeApp({ databaseURL: 'https://hate-planet.firebaseio.com' }).database()
const usersRef = db.ref('emails')

/* eslint-disable no-useless-escape */
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  components: { CorreoSVG, EnviarSVG },

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

  mixins: [onClickOutside],

  firebase: {
    users: usersRef
  }
}
</script>

<style lang="sass" scoped>
::placeholder
  text-align: center

.form-group
  position: relative
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column

  // Correo
  > svg
    margin-top: -13px
    cursor: text
  > input
    border: none
    position: absolute
    top: -6px
    min-width: 200px
    height: 26px
    background: #fff
    &:focus
      outline: none
    /* IE 10+ fix position */
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active)
      margin: 0 auto
      left: 0px
      right: 0px

  // Enviar
  > a svg
    cursor: pointer

  // Valida't
  > p
    margin: 0
    small
      &.invalid
        color: #f04124
      &.valid
        color: #41b883

  // Términos
  > #eTerm
    display: block
    max-width: 370px
    padding: 1rem
    b
      font-weight: bold
</style>

<style>
/* Not Last Minute Tweaks... */
:focus::placeholder {
  color: transparent
}

a path.backgroundColor {
  transition: fill .666s ease
}

a:hover path.backgroundColor {
  fill: fuchsia!important
}

.rainbow:focus {
  animation:rainbow 1.750s infinite
}

@keyframes rainbow {
  0% {color: #ff0000;}
  10% {color: #ff8000;}
  20% {color: #eecd69}
  30% {color: limegreen;}
  40% {color: #00ff00;}
  50% {color: #00ff80;}
  60% {color: cyan;}
  70% {color: #0080ff;}
  80% {color: #0000ff;}
  90% {color: #8000ff;}
  100% {color: fuchsia;}
}
</style>
