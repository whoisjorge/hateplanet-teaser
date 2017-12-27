import './styles/main.sass'

import Vue from 'vue'
import router from './router'

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
const ਊ = new Vue({
  router,
  ...App
})

document.addEventListener('DOMContentLoaded', function () {
  ਊ.$mount('#app')
})

/* eslint-disable no-console, no-useless-escape */
console.log('~ -------------------------------------------- ~')
console.log('| ¡Gracias por visitar la consola! Si quieres  |')
console.log('|   saber más puedes encontrarme en GitHub:    |')
console.log('[     🐲 https://github.com/whoisjorge         ]')
console.log('~ -------------------------------------------- ~')
