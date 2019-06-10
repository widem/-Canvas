<template>
  <div style="height: 100%;background:pink;">
    <div class="box_big">
      <div class="loading">

      </div>
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

<style lang="less" scoped>
.box_big{
  width: 400px;
  height: 400px;
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%)
}
.loading{
  width: 100px;
  height: 100px;
  border-radius: 50px;
	transform: scale(1, 1) translate(0, 0px);
	animation: animationBeat 1s 0.3s linear infinite;
	background: #409EFF;
	margin: 0 auto;
	position: relative;
}
@keyframes animationBeat {
	0% {
		transform: scale(1, 1) translate(0, 0px);
  }
	30% {
		transform: scale(1, 1) translate(0, 0px);
	}
	40% {
		transform: scale(1.13, 0.87) translate(0, 0px);
  }
  
  50% {
		transform: scale(0.88, 1.12) translate(0, -60px);
	}
	60% {
		transform: scale(1.11, 1.05) translate(0, 0px);
  }

	70% {
		transform: scale(0.92, 1.08) translate(0, -40px);
	}
	80% {
		transform: scale(1.05, 0.95) translate(0, 0px);
  }
  
	90% {
		transform: scale(0.98, 1.02) translate(0, -20px);
	}
	100% {
		transform: scale(1, 1) translate(0, 0px);
	}
}
</style>

