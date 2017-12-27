<template lang="pug">
  div#app
    //- Preloader <---------------
    transition(name="fade")
      Preloader(v-if="preloading")

    //-
    router-view


    div#bgshadow
</template>


<script>
  import Preloader from '@/components/Preloader'

  export default {
    name: 'App',

    data: () => ({
      preloading: true
    }),

    components: {
      Preloader
    }

  }
</script>


<style lang="scss">
// Last minute tweaks
#app {
  -webkit-tap-highlight-color: transparent;
  button, img, svg {
    user-select: none
  }
  svg a {
    outline: none
  }
}

// Soft lights background effect
#bgshadow {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    pointer-events: none;
    background: radial-gradient(at center center, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.025) 100%);
}



/* Cutre TweenMax style... beta -> workingSVG */
.fb {
  animation: floating 3s ease-in-out 3s infinite alternate;
}
.ig {
  animation: floating 3s ease-in-out 0s infinite alternate;
}
.exp {
  animation: exp 6s ease-in-out 2s infinite alternate;
  animation-delay: 1s
}
@keyframes floating { from {transform: none;} to {transform: translateY(-5px);} }
@keyframes exp { from {transform: none;} to {transform: scale3d(1.02, .98, .93);} }
</style>
