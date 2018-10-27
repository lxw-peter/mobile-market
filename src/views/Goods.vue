<template>
<div class="goods">
  <van-nav-bar
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="header">
    <div class="topImg">
        <img v-lazy='goodsInfo.image' width='100%' alt="">
      </div>
      <div class="goods-price"><span>￥</span>{{goodsInfo.price}}</div>
      <div class="goods-name">{{goodsInfo.name}}</div>
      <div class='store-info'>
        <span>快递：免运费</span>
        <span>月销5</span>
        <span>上海</span>
      </div>
  </div>
  <div class='extra-info'>
    <div>
      <span>服务</span>
      <span>7天无理由·24小时发货</span>
      <van-icon name='arrow'></van-icon>
    </div>
    <div>
      <span>规格</span>
      <span>选择颜色分类</span>
      <van-icon name='arrow'></van-icon>
    </div>
    <div>
      <span>参数</span>
      <span>平牌 型号...</span>
      <van-icon name='arrow'></van-icon>
    </div>
  </div>
  <div>
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat" text="客服"  />
      <van-goods-action-mini-btn icon="cart" text="购物车" info="5" @click="toCart" />
      <van-goods-action-big-btn text="加入购物车" @click="addGoodsToCart" />
      <van-goods-action-big-btn text="立即购买" primary />
    </van-goods-action>
  </div>
  <!-- 商品型号选择 -->
  <!-- <van-sku
    v-model="showBase"
    :sku="sku"
    :goods="goods"
    :goods-id="goodsId"
    :hide-stock="sku.hide_stock"
    :quota="quota"
    :quota-used="quotaUsed"
    :reset-stepper-on-hide="resetStepperOnHide"
    :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
    :close-on-click-overlay="closeOnClickOverlay"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked"
  /> -->
</div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      goodsId: '',
      goodsInfo: {}
    }
  },
  created () {
    // this.goodsId = this.$route.query.goodsId
    this.goodsInfo = this.$route.query.goodsInfo.goodsId ? this.$route.query.goodsInfo : JSON.parse(localStorage.cartInfo)[JSON.parse(localStorage.cartInfo).length - 1]
    // console.log(this.goodsInfo)
  },
  methods: {
    toCart () {
      this.$router.push({ name: 'ShoppingCar' })
    },
    addGoodsToCart () {
      Toast('加购')
      let cartInfo = localStorage.cartInfo ? JSON.parse(localStorage.cartInfo) : []
      let isHaveGoods = cartInfo.find(cart => cart.goodsId === this.goodsInfo.goodsId)
      // console.log(isHaveGoods)
      if (!isHaveGoods) {
        let newGoodsInfo = {
          goodsId: this.goodsInfo.goodsId,
          goodsName: this.goodsInfo.name,
          price: this.goodsInfo.price,
          image: this.goodsInfo.image,
          count: 1
        }
        cartInfo.push(newGoodsInfo)
        localStorage.cartInfo = JSON.stringify(cartInfo)
        Toast.success('添加成功')
      } else {
        Toast.success('已有此商品')
      }
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
@gray: #aaa;

.goods {
  .header {
    background-color: #fff;
    .topImg {
      img {
        display: block;
        height: 15rem;
        width: 100%;
      }
    }
    .goods-name {
      font-size: .8rem;
      margin: 5px;
      font-weight: 700;
    }
    .goods-price {
      color: red;
      font-size: 1rem;
      position: relative;
      span {
        font-size: .8rem;
        padding-left: 5px;
      }
      &:after {
        content: '热卖促销';
        color: red;
        background-color: rgba(255,0,0,.2);
        font-size: .5rem;
        position: absolute;
        margin: 5px;
      }
    }
    .store-info {
      display: flex;
      font-size: .8rem;
      justify-content: space-between;
      padding: 5px;
      color: @gray;
    }
  }
  .extra-info {
    font-size: .8rem;
    background-color: #fff;
    margin: 10px 0;
    padding: 0 5px;
    > div {
      height: 1.5rem;
      line-height: 1.5rem;
      span:first-of-type {
        color: @gray;
        padding-right: 10px;
      }
      i {
        float: right;
        // margin-right: 5px;
        margin-top: 7px;
        font-size: 12px;
      }
    }
  }
}
</style>
