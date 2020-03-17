<template>
  <div>
    <div class="button_style" @click="clickNum">点击</div>
    <p class="text">{{num}}</p>
  </div>
</template>

<script>
import untils from '../Fun/untils'
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    clickNum: untils.debounce(function () {
      this.num++
    })
  }
}
</script>

<style lang="less" scoped>
.button_style{
  margin: 50px auto;
  width: 150px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: pink;
  border-radius: 10px;
}
.text{
  text-align: center;
  margin-top: 50px;
}
</style>
