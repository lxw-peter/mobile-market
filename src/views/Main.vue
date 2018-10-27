<template>
<div>
  <div class="main">
    <router-view></router-view>
  </div>
  <van-tabbar v-model="active" @change='changeTabbar(active)'>
    <van-tabbar-item icon="shop">首页</van-tabbar-item>
    <van-tabbar-item icon="records">分类</van-tabbar-item>
    <van-tabbar-item icon="cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      nowPath: ''
    }
  },
  created () {
    this.changeTabbarActive()
  },
  methods: {
    changeTabbar (active) {
      // console.log(active)
      switch (active) {
        case 0:
          this.$router.push({ name: 'ShoppingMail' })
          break
        case 1:
          this.$router.push({ name: 'GoodsSort' })
          break
        case 2:
          this.$router.push({ name: 'ShoppingCar' })
          break
        case 3:
          this.$router.push({ name: 'PersonCenter' })
          break
      }
    },
    changeTabbarActive () {
      // this.nowPath = this.$route.path
      // console.log(this.nowPath)
      // switch(this.nowPath) {
      //   case '/shoppingCar':
      //     this.active = 2
      //     break
      //   case '/goodsSort':
      //     this.active = 1
      //     break
      //   case '/personCenter':
      //     this.active = 3
      //     break
      // }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
