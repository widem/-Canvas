<template>
  <div style="padding:0.26666667rem;">
    <div class="flex flex-wrap justify-sb">
      <div v-for="(item, index) in list" :key="index" class="cover-item" @click="push(item.key)">{{item.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {value: '刮刮乐', key: 'canvas'},
        {value: 'Top', key: 'suctionTop'},
        {value: '动画', key: 'animation'}
      ]
    }
  },
  methods: {
    push (item) {
      this.$router.push({name: item})
    }
  }
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.justify-sb {
  justify-content: space-between;
}
.cover-item {
  margin-bottom: 15px;
  width:2.66666667rem;
  height: 2.66666667rem;
  background: green;
  border-radius: 5px;
  opacity: .95;
  text-align: center;
  line-height: 2.66666667rem;
  color: #fff;
  box-shadow: 0 10px 20px -4px green;
}
</style>
