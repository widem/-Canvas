<template>
    <div id="wrap_canver">
      <div></div>
      <canvas></canvas>
    </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  monted () {
  },
  created () {
    this.$nextTick(function () {
      var canvas = document.querySelector('canvas')
      canvas.width = document.documentElement.clientWidth
      canvas.height = document.documentElement.clientHeight
      var _this = this
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d')
        var img = new Image()
        img.src = require('@/assets/love.jpeg')
        img.onload = function () {
          _this.draw(ctx, img, canvas)
        }
      }
    })
  },
  methods: {
    draw (ctx, img, canvas) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      canvas.addEventListener('touchstart', function (ev) {
        ev = ev || event
        var touch = ev.changedTouches[0]
        var x = touch.clientX
        var y = touch.clientY
        ctx.save()
        ctx.beginPath()
        ctx.globalCompositeOperation = 'destination-out'
        ctx.arc(x, y, 20, 0, 360 * Math.PI / 180)
        ctx.fill()
        ctx.restore()
      })
      canvas.addEventListener('touchmove', function (ev) {
        ev = ev || event
        var touch = ev.changedTouches[0]
        var x = touch.clientX
        var y = touch.clientY
        ctx.save()
        ctx.beginPath()
        ctx.globalCompositeOperation = 'destination-out'
        ctx.arc(x, y, 20, 0, 360 * Math.PI / 180)
        ctx.fill()
        ctx.restore()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
*{
  padding: 0;
  margin: 0;
}
#wrap_canver{
  height:100%;
}
#wrap_canver>div{
  height: 100%;
  background: url('../assets/bg_picture.jpg') no-repeat;
  background-size:100% 100%;
}
canvas{
  position:absolute;
  left:0;
  top:0;
}
</style>
