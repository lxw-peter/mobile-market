<template>
<div class="cell">
  <van-nav-bar
    title="优惠券"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <van-coupon-cell
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    @click="showList = true"
  />
  <!-- 优惠券列表 -->
  <van-popup v-model="showList" position="bottom">
    <van-coupon-list
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      :disabled-coupons="disabledCoupons"
      @change="onChange"
      @exchange="onExchange"
    />
  </van-popup>
</div>

</template>
<script>
const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  originCondition: 0,
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000
}
export default {
  data () {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    }
  },

  methods: {
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange (code) {
      this.coupons.push(coupon)
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
