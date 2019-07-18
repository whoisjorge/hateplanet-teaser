import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'PageIndex',
      component: index
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
