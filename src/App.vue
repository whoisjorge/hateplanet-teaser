<template lang="pug">
  main#app

    //- "Pre"loader...
    transition(name="fade")
      template(v-if="preloading")
        Preloader
    //----------------------------

    router-view

    div#background
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
    background: radial-gradient(at center center, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.025) 100%);
}

// App Background
#background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -999;
  background-image: url('./assets/img/bg.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  opacity: .27;
  filter: alpha(opacity=27);
}


// SVG hover ... (Not IE compatible?)
// Weird but works
svg {
  a:hover path {
    pointer-events: bounding-box;
  }
  a.fb, a.ig {
    cursor: crosshair
  }
	a.fb:hover path {
    fill: #3b5998;
  }
	a.ig:hover path {
    fill: #e1306c;
  }
}
</style>
