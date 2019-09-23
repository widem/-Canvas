import copy from './vCopy'

const derectives = {
  copy
}

// 批量注册指令
export default {
  install (Vue) {
    Object.keys(derectives).forEach(el => {
      Vue.directive(el, derectives[el])
    })
  }
}
