<template>
  <div id="app">
    <router-view/>
    <!-- <div class="baseBar">
      <div><router-link to="/"><i class='iconfont icon-icon-test'></i><span>首页</span></router-link></div>
      <div><router-link to="/goodsSort"><i class='iconfont icon-fenlei'></i><span>分类</span></router-link></div>
      <div><router-link to="/shoppingCar"><i class='iconfont icon-gouwuche'></i><span>购物车</span></router-link></div>
      <div><router-link to="/personCenter"><i class='iconfont icon-geren'></i><span>个人</span></router-link></div>
    </div> -->
  </div>
</template>
<style lang="less">
@bgColor: #f3f3f3;
@themeColor:#daa653;
#app {
  background-color: @bgColor;
  position: relative;
  .baseBar {
    position: fixed;
    width: 100%;
    height: 2.5rem;
    background-color: #fafafa;
    bottom: 0;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: .2rem 0;
    div {
      width: 25%;
      text-align: center;
      color: @themeColor;
      .iconfont {
        font-size: 1.3rem;
      }
      span {
        display: block;
        font-size: .6rem;
      }
    }
  }
}
</style>
