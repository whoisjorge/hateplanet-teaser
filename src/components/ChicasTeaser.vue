<template lang="pug">
  div#Teaser.flex-center

    ChicasSVG

    form(v-on-click-outside="close")

      div.form-group(@click.prevent="open")
        CorreoSVG.c0rreo
        input.rainbow(type="email", v-model="correo", placeholder="¡No te enviaremos SPAM!*", v-if="see")

        //- input(type="email", class="form-control", aria-describedby="emailTerms", placeholder="Correo electrónico")
        a(@click.prevent="avisaMe()")
          EnviarSVG
        small#emailTerms.form-text
          sup (*)
          |  Tu correo sólo se utilizará para que podamos avisarte de que la web ya no está en construcción, y además te enviaremos un
          b  código
          |  con el que tendrás los
          b  gastos de envio gratis
          |  en tu primera compra.
          br
          u ¡Y nada más!

</template>


<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

// SVG
import ChicasSVG from '../assets/nosotras.svg'
import CorreoSVG from '../assets/correo.svg'
import EnviarSVG from '../assets/enviar.svg'

export default {

  name: 'ChicasTeaser',

  components: { ChicasSVG, CorreoSVG, EnviarSVG },

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
  top: 0
  min-width: 200px
  height: 26px
  background: white
  &:focus
    outline: none

</style>



<style>
/* Tweakments */
.c0rreo {
  margin-top: -7px
}
a svg {
  cursor: pointer
}
a path {
    transition: fill .6s ease;
}
a:hover path.bgsvg {
  fill: fuchsia!important
}



/*CSS rainbow*/
::placeholder {
  text-align: center
}
.rainbow:focus {
-webkit-animation:rainbow 1s infinite;
-ms-animation:rainbow 1s infinite;
-o-animation:rainbow 1s infinite;
animation:rainbow 1s infinite;
}

@keyframes rainbow {
0% {color: #ff0000;}
10% {color: #ff8000;}
20% {color: #ffff00;}
30% {color: #80ff00;}
40% {color: #00ff00;}
50% {color: #00ff80;}
60% {color: #00ffff;}
70% {color: #0080ff;}
80% {color: #0000ff;}
90% {color: #8000ff;}
100% {color: #ff0080;}
}
</style>