<template lang="pug">
  transition(name="modal")
    div.modal-mask
      div.modal-wrapper
        //- Close
        a.close(@click="$emit('close')")
          CloseSVG
        //- Message
        workingSVG
</template>



<script>
  import workingSVG from '@/assets/img/workingSVG.svg'
  import CloseSVG from '@/assets/img/close.svg'

  export default {
    name: 'Modal',
    components: { workingSVG, CloseSVG }
  }
</script>


<style lang="sass" scoped>
.modal-mask
  position: fixed
  z-index: 999
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(255, 255, 255, .95)
  transition: opacity .3s ease

  > .modal-wrapper
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    flex-direction: column

    > .close
      cursor: pointer
      display: block
      position: fixed
      top: 1rem
      right: 1.5rem
      &:focus
        display: none

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled.
 */
.modal-enter
  transition: opacity .5s ease-out
  opacity: 0

.modal-leave-active
  transition: opacity .5s ease-out
  opacity: 0


// .modal-enter .modal-wrapper,
// .modal-leave-active .modal-wrapper
//   transform: scale(2)
</style>
