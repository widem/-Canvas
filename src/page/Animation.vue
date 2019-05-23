<template>
  <div style="height: 100%;">
    <div class="wrap">
      <h3>你是风儿，我是沙</h3>
      <p>你是风儿我是沙 缠缠绵绵绕天涯</p>
      <p>你是风儿我是沙 缠缠绵绵绕天涯</p>
      <p>珍重再见 今宵有酒今宵醉</p>
      <p>对酒当歌 长忆蝴蝶款款飞</p>
      <p>莫再留恋 富贵荣华都是假</p>
      <p>缠缠绵绵 你是风儿我是沙</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
.wrap{
  text-align: center;
  padding-top:0.533333333rem;
  background:url('../assets/love.jpeg');
  height: 100%;
  background-size: 100% 100%;
  p, h3{
    font-size: 0.42666667rem;
    line-height: 1.06666667rem;
    -webkit-animation: identifier 2s forwards;
    animation: identifier 2s forwards;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    opacity: 0;
  }
  p:nth-child(2) {
    animation-delay: 0.45s;
  }
  p:nth-child(3) {
    animation-delay: 0.6s;
  }
  p:nth-child(4) {
    animation-delay: 0.75s;
  }
  p:nth-child(5) {
    animation-delay: 0.9s;
  }
  p:nth-child(6) {
    animation-delay: 1.05s;
  }
  p:nth-child(7) {
    animation-delay: 1.2s;
  }
}
@keyframes identifier {
  0%{
    opacity: 0;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100%{
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}
</style>
