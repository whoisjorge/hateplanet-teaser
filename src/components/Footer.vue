<template lang="pug">
  footer
    a(id="show-modal", @click="showModal = true")
      helpSVG
    Modal(v-if="showModal", @close="showModal = false")
</template>


<script>
import helpSVG from '../assets/img/help.svg'
import Modal from '@/components/Modal'

export default {
  name: 'Footer',

  components: { helpSVG, Modal },

  data: () => ({
    showModal: false
  })

}
</script>


<style lang="sass" scoped>
footer
  text-align: center
  margin: 1rem 0 0 0
  svg
    width: 18px
    animation: bottle 1200ms ease-in-out infinite
    @media only screen and (min-width: 901px)
      display: none

@keyframes bottle
  0%, 100%
    transform: translateY(0)
  50%
    transform: translateY(-9%)
</style>
