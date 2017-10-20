<template lang="pug">
  transition(name="modal")
    div.modal-mask
      main.modal-wrapper
        //- Close
        a.close(@click="$emit('close')")
          CloseSVG
        //- Message
        workingSVG
</template>



<script>
import workingSVG from '@/assets/img/working.svg'
import CloseSVG from '@/assets/img/close.svg'

export default {
  name: 'Modal',

  components: {
    workingSVG, CloseSVG
  }

}
</script>



<style lang="sass" scoped>
.modal-mask
  position: fixed
  z-index: 9997
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(255, 255, 255, .95)
  transition: opacity .3s ease

.modal-wrapper
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column

.close
  cursor: pointer
  display: block
  position: fixed
  top: 1rem
  right: 1.5rem
  &:focus
    display: none

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 */
.modal-enter
  transition: opacity .5s ease-out
  opacity: 0

.modal-leave-active
  transition: opacity .5s ease-out
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)
</style>