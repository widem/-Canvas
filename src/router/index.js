import Vue from 'vue'
import Router from 'vue-router'
import Canvas from '../page/Canvas'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/', redirect: { name: 'canvas' }
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas
    }
  ]
})
