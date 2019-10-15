import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
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
    },
    {
      path: '/grid',
      name: 'grid',
      component: resolve => require(['@/page/Grid'], resolve),
      meta: { title: '网格布局' }
    },
    {
      path: '/beat',
      name: 'beat',
      component: resolve => require(['@/page/Beat'], resolve),
      meta: { title: '跳动' }
    },
    {
      path: '/directives',
      name: 'directives',
      component: resolve => require(['@/page/Directives'], resolve),
      meta: { title: 'copy指令' }
    }
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
