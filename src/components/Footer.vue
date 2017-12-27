<template lang="pug">
  footer
    a(id="show-modal", @click="showModal = !showModal")
      img(src="../assets/img/bottle.png" width="20" height="49" alt="[ ? ]")
    Modal(v-if="showModal", @close="showModal = !showModal")
</template>


<script>
  import Modal from '@/components/Modal'

  export default {
    name: 'Footer',

    components: { Modal },

    data: () => ({
      showModal: false
    }),

    methods: {
      handleResize () {
        if (document.documentElement.clientWidth > 901) {
          this.showModal = false
        }
      }
    },

    beforeMount () {
      if (document.documentElement.clientWidth < 901) {
        this.showModal = true
      }
    },

    mounted () {
      window.addEventListener('resize', this.handleResize)
    },

    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    }

  }
</script>


<style lang="sass" scoped>
  footer
    text-align: center
    margin: 1.6rem 0 0 0

    > svg, img
      cursor: pointer
      animation: bottle 1800ms ease-in-out infinite
      @media only screen and (min-width: 901px)
        display: none

  // Animation
  @keyframes bottle
    0%, 100%
      transform: translateY(0)
    50%
      transform: translateY(-10%)
</style>
