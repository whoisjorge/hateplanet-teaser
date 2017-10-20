<template>
  <div class="loader" v-once>
    <div class="loader__content">

      <logoSVG />

      <p class="loader__tip">
        <!-- {{ messages | randomize }} -->
      </p>
      <spinner line-fg-color="#ff00ff" line-bg-color="#99999" text-fg-color="#ff00ff" size="small" :message="this.messages|randomize"></spinner>

    </div>
  </div>
</template>



<script>
import logoSVG from '@/assets/img/logo.svg'
import Spinner from 'vue-simple-spinner'

export default {
  name: 'Preloader',

  components: { logoSVG, Spinner },

  data () {
    return {
      messages: [
        // '¡Ya casi está listo!'
        // 'Cargando ...',
        // 'Enseguida estará listo ...',
        // 'Frase aleatoria.'
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
  position: fixed;
  z-index: 666;
  background-color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    text-align: center;
    max-width: 400px;
  }

  &__tip {
    @include font-smoothing();
    font-size: 19px;
    line-height: 1.4;
    margin-top: 30px;
    margin-bottom: 66px;
    color: #616161;
    // animation: zoomIn .75s;
  }

  &__spinner {
    display: inline-block;
  }
}


// __tip animation
// @keyframes zoomIn {
//   from {
//     opacity: 0;
//     transform: scale3d(.3, .3, .3);
//   }
//   50% {
//     opacity: 1;
//   }
// }

// Simple Vue transition to fade-out the preloader
.fade-enter-active, .fade-leave-active { transition: opacity .6s ease-out }
.fade-enter, .fade-leave-to { opacity: 0 }
</style>