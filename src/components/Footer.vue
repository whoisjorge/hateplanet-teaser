<template lang="pug">
  footer
    a(:href="url.repo")
      helpSVG

</template>


<script>
import helpSVG from '../assets/img/help.svg'

export default {
  name: 'Footer',

  components: { helpSVG },

  data: () => ({
    url: {
      repo: 'https://github.com/whoisjorge/hateplanet-teaser'
    }
  })

}
</script>


<style lang="sass" scoped>
footer
  text-align: center
  margin: 1rem 0
  svg
    width: 18px
    @media only screen and (min-width: 901px)
      display: none
</style>
