<template>
  <div class="goodsInfo">
    <div class="goods-img">
      <img v-lazy='goodsImage' width="90%">
    </div>
    <span class="goods-name">{{goodsName}}</span>
    <span class="goods-price">{{goodsPrice | moneyFilter}}</span>
  </div>
</template>
<script>
import {toMoney} from '../filter/moneyFilter.js'
export default {
  props: ['goodsImage, goodsName, goodsPrice'],
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  // watch: {
  //   hotGoods (val) {
  //     this.goodsImg = this.goodsImage, 
  //     this.goodsName =goodsName, 
  //     this.goodsName =goodsPrice
  //   }
  // }
}
</script>
<style lang="less" scoped>
  .goods-img {
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
