<template>
  <div class="loader" v-once>
    <div class="loader__content">

      <LogoSVG />

      <p class="loader__tip">
        {{ messages | randomize }}
      </p>

      <!-- <div class="spinner loader__spinner"></div> -->

    </div>
  </div>
</template>


<script>
import LogoSVG from '../assets/logo.svg'

export default {

  name: 'preload',

  components: { LogoSVG },

  data () {
    return {
      messages: [
        'Loading ...',
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
    animation: zoomInDown;
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  &__tip {
    @include font-smoothing();
    font-size: 19px;
    line-height: 1.4;
    margin-top: 30px;
    margin-bottom: 36px;
    color: #616161;
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


@keyframes zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  to {
    opacity: 0;
  }
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

</style>