// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { WechatPlugin } from 'vux'
import 'lib-flexible/flexible'
import Directives from './Fun/directives'

Vue.use(WechatPlugin)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Directives)
// window.onresize = setHtmlFontSize
// function setHtmlFontSize () {
//   const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
//   const htmlDom = document.getElementsByTagName('html')[0]
//   htmlDom.style.fontSize = htmlWidth / 10 + 'px'
// }
// setHtmlFontSize()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
