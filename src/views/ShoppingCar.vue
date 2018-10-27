<template>
  <div class="shoppingCar">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="editOrder"
    />
    <div class="goods-order">
      <van-row v-for="(item,index) in cartInfo" :key='index'>
        <van-col span='2'><van-checkbox v-model="item.checked"></van-checkbox></van-col>
        <van-col span='22'>
          <van-card
            :num="item.count"
            tag="热卖"
            :price="item.price"
            :title="item.goodsName"
            :thumb="item.image"
            :origin-price="item.price"
          >
            <div slot="footer">
              <van-stepper :min='1' v-model="item.count" @change='changeCount(item.count)'/>
            </div>
          </van-card>
        </van-col>

      </van-row>
    </div>
    <van-submit-bar
      :price="allPrice"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="isChecked" @change='allChecked()'>全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import { Dialog } from 'vant'
export default {
  data () {
    return {
      checked: true,
      imageURL: 'http://images.baixingliangfan.cn/compressedPic/20180411083404_6619.jpg',
      cartInfo: [],
      isEmpty: false,
      isChecked: false
    }
  },
  computed: {
    allPrice: function () {
      var sum = 0
      for (var i = 0, len = this.cartInfo.length; i < len; i++) {
        sum += this.cartInfo[i].price * this.cartInfo[i].count
      }
      sum = sum * 100
      return sum
    }
  },
  created () {
    this.getCarTinfo()
  },
  // beforeMount () {
  //   document.querySelector('.goods-order').style.height=
  //   document.body.offsetHeight -
  //   document.querySelector('.van-nav-bar').offsetHeight -
  //   document.querySelector('.van-submit-bar__bar').offsetHeight -
  //   document.querySelector('.van-tabbar').offsetHeight
  // },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    editOrder () {
      Dialog.confirm({
        title: '删除操作',
        message: '确认删除所选项'
      }).then(() => {
        // on confirm
        // 下面这种删除一个后，其余的就删不了了，因为数组个数变了
        /*  for(var i=0,len=this.cartInfo.length; i < len; i++) {
          if (this.cartInfo[i].checked === true) {
            this.cartInfo.splice(i,1)
          }
        } */
        console.log(localStorage.cartInfo)
        for (var i = this.cartInfo.length - 1; i >= 0; i--) {
          if (this.cartInfo[i].checked === true) {
            this.cartInfo.splice(i, 1)
            // 将新的数组cartInfo传入的locastorage中
            localStorage.cartInfo = JSON.stringify(this.cartInfo)
          }
        }
      }).catch(() => {
        // on cancel
      })
    },
    onSubmit () {
    },
    allChecked () {
      console.log(this.isChecked)
      for (var i = 0, len = this.cartInfo.length; i < len; i++) {
        this.cartInfo[i].checked = !this.isChecked
        console.log(this.cartInfo[i].checked)
      }
    },
    getCarTinfo () {
      if (localStorage.cartInfo) {
        this.cartInfo = JSON.parse(localStorage.cartInfo)
      }
      // console.log('this.cartInfo:'+JSON.stringify(this.cartInfo))
      this.isEmpty = this.cartInfo.length > 0 ? 'true' : 'false'
    },
    changeCount (count) {
      console.log(count)
    }
  }
}

</script>
<style lang="less" scoped>
.goods-order {
  overflow: auto;
  height: 400px;
  background-color: #fff;
  .van-row {
    border-bottom: 1px solid #f3f3f3;
  }
}
.van-submit-bar {
  bottom: 50px;
}
</style>
