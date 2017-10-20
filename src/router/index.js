import Vue from 'vue'
import Router from 'vue-router'

// Views
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    // Error pages redirect
    {
      path: '*',
      redirect: '/'
    }
  ]
})
