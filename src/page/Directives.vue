<template>
  <div>
    <div class="warp_copy">
      <span>{{message}}</span>
    </div>
    <div class="button_wrap">
      <button v-copy="message" class="button-style">复制</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '人生苦短，我用python'
    }
  }
}
</script>

<style lang="less" scoped>
.warp_copy{
  margin:10px;
  border: 1px solid #999;
  height:200px;
  text-align: center;
  line-height: 200px;
}
.button_wrap{
  text-align: center;
}
.button-style{
  background: #409EFF;
  padding: 5px 20px;
  color: #fff;
  border: none;
  border-radius: 3px;
}
</style>