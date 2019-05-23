import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', redirect: { name: 'list' }
    },
    {
      path: '/list',
      name: 'list',
      component: resolve => require(['@/page/List'], resolve),
      meta: { title: '列表' }
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
    },
    {
      path: '/animation',
      name: 'animation',
      component: resolve => require(['@/page/Animation'], resolve),
      meta: { title: '动画' }
    }
  ]
})
