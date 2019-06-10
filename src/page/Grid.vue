<template>
  <div>
    <h2 style="text-align: center;">grid</h2>
    <div class="wrapper">
      <div v-for="item in 2" :key="item" :class="`item${item}`" @click="clickItem(item)">{{item==1?'返回':'我的'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    clickItem (item) {
      if (item === 1) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  color: #fff ;
  .item1{
    // grid-column-start: 1;
    // grid-column-end: 4;
    background: #999;
  }
  .item2{
    background: rgb(142, 191, 82);
  }
}
</style>
