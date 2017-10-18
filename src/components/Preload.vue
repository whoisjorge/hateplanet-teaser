<template>
  <div class="loader" v-once>
    <div class="loader__content">

      <logoSVG />

      <p class="loader__tip">
        {{ messages | randomize }}
      </p>

      <!-- <div class="spinner loader__spinner"></div> -->

    </div>
  </div>
</template>


<script>
import logoSVG from '../assets/img/logo.svg'

export default {

  name: 'preload',

  components: { logoSVG },

  data () {
    return {
      messages: [
        'Cargando ...',
        'Enseguida estará listo ...',
        'Frase aleatoria.'
      ]
    }
  },

  filters: {
    randomize (messages) {
      if (!messages) return ''
      const randomMessage = Math.floor(Math.random() * messages.length)
      return messages[randomMessage]
    }
  }

}
</script>


<style lang="scss" scoped>
@import '../assets/styles/_mixins';

.loader {
  position: absolute;
  z-index: 666;
  background-color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  // display: none;
  display: flex;

    // @include respond-to(small) {
    //   display: flex;
    // }

  &__content {
    text-align: center;
    max-width: 400px;
  }

  & svg {
  }

  &__tip {
    @include font-smoothing();
    font-size: 19px;
    line-height: 1.4;
    margin-top: 30px;
    margin-bottom: 36px;
    color: #616161;
    animation: zoomIn .75s;
  }

  &__spinner {
    display: inline-block;
  }
}

/**
 * Simple Vue transition to fade-out the preloader
 */
.fade-enter-active, .fade-leave-active { transition: opacity .5s ease-out }
.fade-enter, .fade-leave-to { opacity: 0 }

// __tip animation
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
}

</style>