<template lang="pug">
  div#ChicasTeaser.flex-container
    div.left-flex
      txt01SVG
      p
      txt02SVG

    div.right-flex
      nosotrasSVG
      EmailSubmit

      appFooter
</template>


<script>
import txt01SVG from '../assets/txt01.svg'
import txt02SVG from '../assets/txt02.svg'

import nosotrasSVG from '../assets/img/nosotras.svg'
import EmailSubmit from '@/components/EmailSubmit'
import appFooter from '@/components/Footer'

export default {
  name: 'ChicasTeaser',

  components: { txt01SVG, txt02SVG, nosotrasSVG, EmailSubmit, appFooter },

  data () {
    return {
    }
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
  flex: 2 0 0
  flex-direction: column


.left-flex
  flex: 1 0 0
  padding-left: 80px
  +mobile
    display: none
  +tablet
    display: none
  p
    font-size: 8rem







.flex-center-mobile
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column

</style>
