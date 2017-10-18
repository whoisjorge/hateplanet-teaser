import Vue from 'vue'
import Router from 'vue-router'

// Views
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    }
  ]
})
