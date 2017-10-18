<template lang="pug">
transition(name="fade")
  footer(v-if="show")
    section.columns
      div.column
        Instagram
        a(:href="url.instagram") Instagram
      div.column
        Etsy
        a(:href="url.etsy") Etsy
</template>


<script>
import Instagram from '../assets/img/instagram.svg'
import Etsy from '../assets/img/etsy.svg'

export default {
  name: 'Footer',

  components: { Instagram, Etsy },

  data: () => ({
    show: false,
    url: {
      instagram: 'https://www.instagram.com/hate.x.planet/',
      etsy: 'https://www.etsy.com/es/shop/HateXPlanet'
    }
  }),

  mounted () {
    this.show = true
  }

}
</script>


<style lang="sass" scoped>

footer
  text-align: center
  margin-top: 1rem
  .columns
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    flex-basis: 0
    flex-grow: 1
    flex-shrink: 1
    .column
      animation-name: fadeInDown
      animation-duration: 1s

      padding-right: 3.625rem
      padding-left: 3.625rem
      &:nth-child(1)
        animation-delay: 4s
        text-align: left
      &:nth-child(2)
        animation-delay: 4.6s
        text-align: right
      a
        padding-left: .75rem
        text-rendering: auto
        user-select: none
        font-weight: 800
        font-size: 2rem
        text-align: left
        outline: none
        cursor: pointer
        // Link style
        color: rgba(0,0,0,.05)
        text-shadow: none
        text-decoration: none
        transition: text-shadow 0.666s ease-in-out, color 1.666s
        &:hover
          color: rgba(0,0,0,0)
          text-shadow: 1px 0px 1px rgba(255,0,128,0.7)

svg
  width: 13px
  fill: #bbb






@keyframes fadeInDown
  from
    opacity: 0
    transform: translate3d(0, -100%, 0)
  to
    opacity: 1
    transform: none



.fade-enter-active, .fade-leave-active
  transition: opacity 1s

.fade-enter, .fade-leave-active
   opacity: 0
</style>
