<template lang="pug">
  footer
    a(id="show-modal", @click="showModal = !showModal")
      //- helpSVG
      <img src="../assets/img/bottle.png" width="20" height="49" alt="click me! (ayuda)"/>
    Modal(v-if="showModal", @close="showModal = !showModal")
</template>



<script>
// import helpSVG from '@/assets/img/bottle.svg'
import Modal from '@/components/Modal'

export default {
  name: 'Footer',

  components: {
    // helpSVG,
    Modal
  },

  data: () => ({
    showModal: false
  })

}
</script>



<style lang="sass" scoped>
footer
  text-align: center
  margin: 1rem 0 0 0
  svg, img
    cursor: pointer
    animation: bottle 1200ms ease-in-out infinite
    @media only screen and (min-width: 901px)
      display: none

// Animation
@keyframes bottle
  0%, 100%
    transform: translateY(0)
  50%
    transform: translateY(-9%)
</style>
