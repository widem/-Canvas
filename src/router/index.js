import Vue from 'vue'
import Router from 'vue-router'
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
      component: resolve => require(['@/page/Canvas'], resolve),
      meta: { title: '刮刮乐' }
    },
    {
      path: '/suction',
      name: 'suctionTop',
      component: resolve => require(['@/page/SuctionTop'], resolve),
      meta: { title: '吸顶' }
    }
  ]
})
