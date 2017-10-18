<template lang="pug">
  form(v-on-click-outside="close")

      div.form-group(@click.prevent="open")
        correoSVG.c0rreo
        input.rainbow(type="email", v-model="correo", v-if="see", placeholder="¡No te enviaremos SPAM!*", aria-describedby="eTerm")

        a(@click.prevent="avisaMe()")
          enviarSVG
        small#eTerm.form-text
          sup (*)
          |  Tu correo&nbsp;
          u sólo
          |  se utilizará para que podamos avisarte de que la web ya no está en construcción, y además te enviaremos un
          b  código
          |  con el que tendrás los
          b  gastos de envio gratis
          |  en tu primera compra.
</template>


<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

import correoSVG from '../assets/img/correo.svg'
import enviarSVG from '../assets/img/enviar.svg'

export default {

  name: 'EmailSubmit',

  components: { correoSVG, enviarSVG },

  data () {
    return {
      correo: '',
      see: false
    }
  },

  methods: {
    avisaMe () {
      console.log('enviando')
    },
    open () {
      this.see = true
    },

    close () {
      this.see = false
    }
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

.form-control
  display: flex
  margin: 0 auto

.form-text
  display: block
  max-width: 420px
  color: #333
  padding: 1rem

input
  border: none
  position: absolute
  top: -5px
  min-width: 200px
  height: 26px
  background: white
  &:focus
    outline: none

</style>



<style>
/* Tweakments */

/*
** Submit SVG :hover color
*/
a svg {
  cursor: pointer
}
a path {
    transition: fill .6s ease;
}
a:hover path.bgsvg {
  fill: fuchsia!important
}


/*
** olé
*/
.c0rreo {
  margin-top: -13px
}
::placeholder {
  text-align: center;
}
:focus::placeholder {
  color: transparent
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