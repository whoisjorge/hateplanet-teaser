<template lang="pug">
  div.loader
    div.loader__content
      logoSVG
      //- p.loader__tip
      //-   | {{ messages | randomize }}

      //- span.loader__spinner
</template>

<script>
import logoSVG from '@/assets/img/logo.svg'

export default {
  name: 'Preloader',

  components: { logoSVG },

  data: () => ({
    messages: [
      // 'Mis odios no son exigentes',
    ]
  }),

  filters: {
    randomize (messages) {
      if (!messages) return ''
      const randomMessage = Math.floor(Math.random() * messages.length)
      return messages[randomMessage]
    }
  },

  mounted () {
    setTimeout(() => {
      this.$destroy()
    }, 2500)
  },

  beforeDestroy () {
    this.$parent.preloading = false
  }

}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins';

// Simple Vue transition to fade-out the preloader
.fade-enter-active, .fade-leave-active { transition: opacity .6s ease-out }
.fade-enter, .fade-leave-to { opacity: 0 }

//
.loader {
  position: fixed;
  z-index: 1000;
  background-color: #f5f5f5;
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

  // &__spinner {
  //   display: inline-block;
  //   border: 1px solid fuchsia;
  //   border-top: 1px normal transparent;
  //   padding: 15px;
  //   border-radius: 25px;
  //   animation: rotation 1s linear infinite;
  // }
}

// &__tip animation
// @keyframes zoomIn {
//   from {
//     opacity: 0;
//     transform: scale3d(.3, .3, .3);
//   }
//   50% {
//     opacity: 1;
//   }
// }

// @keyframes rotation {
//   0% {
//     border-color: #5C258D;
//     border-top-color: transparent;
//     transform: rotate(0deg);
//   }
//   25% {
//     border-color: cyan;
//     border-top-color: transparent;
//   }
//   50% {
//     border-color: fuchsia;
//     border-top-color: transparent;
//   }
//   100% {
//     border-color: #4389A2;
//     border-top-color: transparent;
//     transform: rotate(359deg);
//   }
// }
</style>
