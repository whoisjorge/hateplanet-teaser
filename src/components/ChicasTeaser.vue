<template lang="pug">
  div#ChicasTeaser.flex-container

    div.left-flex
      workingSVG

    div.right-flex
      nosotrasSVG
      Formulario

      //-
      appFooter
</template>



<script>
import workingSVG from '@/assets/img/workingSVG.svg'
import nosotrasSVG from '@/assets/img/chicash.svg'
import Formulario from '@/components/Formulario'

import appFooter from '@/components/Footer'

export default {
  name: 'ChicasTeaser',

  components: {
    workingSVG,
    nosotrasSVG,
    Formulario,
    appFooter
  }

}
</script>



<style lang="sass" scoped>
@import '../assets/styles/_mixins'

#ChicasTeaser
  min-height: 100vh

.flex-container
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.right-flex
  flex: 1 0 0
  flex-direction: column
  @media only screen and (max-width: 480px)
    margin-top: 2rem

.left-flex
  flex: 1 0 0
  // padding-left: 70px
  @media only screen and (max-width: 900px)
    display: none



// !not
.flex-center-mobile
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column
</style>
