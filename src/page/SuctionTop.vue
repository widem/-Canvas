<template>
  <div>
    <div class="topShow"></div>
    <div class="title_box" ref="pride_tab_fixed" v-if="number == 0">
      <div class="suction" :class="isFixed ? 'isFixed' : ''">使用`getBoundingClientRect`实现</div>
    </div>
    <div class="title_box sticky" v-else>使用 `position:sticky` 实现</div>
    <div class="botttom"></div>
    <div class="bottom_tab">
      <div class="sub_tab" v-for="(dateTab, index) in dateTabs" :key="index" @click="change(index)" :class='{active:index===number}'>{{dateTab}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFixed: false,
      dateTabs: ['第一种', '第二种'],
      number: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScrollThree)
  },
  methods: {
    handleScrollThree () {
      let offsetTop = this.$refs.pride_tab_fixed.getBoundingClientRect().top
      this.isFixed = offsetTop < 0
    },
    change (index) {
      this.number = index
      if (this.number === 0) {
        window.addEventListener('scroll', this.handleScrollThree)
      } else {
        window.removeEventListener('scroll', this.handleScrollThree)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.topShow{
  width: 100%;
  height: 5rem;
  background: #274ea0;
}
.botttom{
  width: 100%;
  height: 25rem;
  background: gray;
}
.title_box {
  font-size: 0.5rem;
  height: 2rem;
  background: #999;
  .suction{
    height: 2rem;
    width: 100%;
    background: pink;
    text-align: center;
    line-height: 2rem;
  }
  .isFixed{
    position:fixed;
    top: 0;
    left: 0;
    z-index:99;
  }
}
.bottom_tab {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.sub_tab {
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  line-height: 1.5rem;
  text-align: center;
  background: #2980b9;
  background-image: -webkit-linear-gradient(top, #274ea0, #1e3d80);
  background-image: -moz-linear-gradient(top, #274ea0, #1e3d80);
  background-image: -ms-linear-gradient(top, #274ea0, #1e3d80);
  background-image: -o-linear-gradient(top, #274ea0, #1e3d80);
  background-image: linear-gradient(to bottom, #274ea0, #1e3d80);
  color:rgb(8, 8, 116);

}
.active {
  background: #1e3d80;
  background-image: -webkit-linear-gradient(top, #1e3d80, #274ea0);
  background-image: -moz-linear-gradient(top, #1e3d80, #274ea0);
  background-image: -ms-linear-gradient(top, #1e3d80, #274ea0);
  background-image: -o-linear-gradient(top, #1e3d80, #274ea0);
  background-image: linear-gradient(to bottom, #1e3d80, #274ea0);
  color: #fff;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  text-align: center;
  line-height: 2rem;
  background: pink;
}
</style>
