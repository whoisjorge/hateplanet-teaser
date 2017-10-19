<template lang="pug">
  main#app

    //- Preloader
    transition(name="fade")
      template(v-if="preloading")
        Preloader
    //----------------------------

    router-view

    div#bgshadow
</template>


<script>
import Preloader from '@/components/Preloader'

export default {
  name: 'App',

  data () {
    return {
      preloading: true
    }
  },

  components: {
    Preloader
  },

  methods: {
    fadePreloader () {
      const app = this
      setTimeout(() => {
        app.preloading = false
      }, 1500)
    },
    boot () {
      // To DO: Preload
      // ...then ()
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

// Background soft lights effect
#bgshadow{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    pointer-events: none;
    background: radial-gradient(at center center, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.1) 100%);
}


// SVG hover cutrool (Not IE compatible?)
svg {
  a:hover path {
    pointer-events: bounding-box;
  }
	a.fb:hover path {
    fill: #3b5998;
  }
	a.ig:hover path {
    fill: #e1306c;
  }
}
</style>
