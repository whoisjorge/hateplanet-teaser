<!-- Root Component -->
<template lang="pug">
  main#app
    //- Preloader
    transition(name="fade")
      template(v-if="preloading")
        Preload
    //----------------------------

    router-view

    div#bgshadow
</template>


<script>
import Preload from '@/components/Preload'

export default {

  name: 'app',

  data () {
    return {
      preloading: true,
      currentColor: {
        name: null,
        colors: ['#ffffff', '#ffffff']
      }
    }
  },

  components: {
    Preload
  },

  methods: {
    fadePreloader () {
      const app = this
      setTimeout(() => {
        app.preloading = false
      }, 2000)
    },
    boot () {
      // Preload
      this.fadePreloader()
    }
  },

  mounted () {
    this.boot()
  }
}
</script>


<style src="./assets/styles/main.sass" lang="sass"></style>
<style lang="scss">
// Last minute tweaks
#app {
  -webkit-tap-highlight-color: transparent;
  button, img, svg {
    user-select: none
  }
}

#bgshadow{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    pointer-events: none;
    background: radial-gradient(at center center, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.1) 100%);
}
</style>
