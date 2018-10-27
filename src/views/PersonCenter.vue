<template>
  <div class="person">
    <div class="header">
      <van-row>
        <van-col span="4">
          <div class="header-icon"></div>
        </van-col>
        <van-col span="16">
          <div class="user-name">{{userName}}</div>
          <div class="win-steps">
            <van-steps :active="signNum" class="stepsStyle">
              <van-step>1</van-step>
              <van-step>2</van-step>
              <van-step>3</van-step>
              <van-step><van-icon name='point-gift' class='icon-gift'></van-icon></van-step>
            </van-steps>
          </div>
        </van-col>
        <van-col span="4">
          <van-icon name="chat" class="message"/>
          <div class="sign">
            <van-button
            type="default"
            size='small'
            round
            @click="signBtn"
            >签到</van-button>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="indent">
      <div class="my-indent">
        <span>我的订单</span>
        <span>全部订单></span>
      </div>
      <div class="indent-type">
        <div><i class='iconfont icon-pay'></i><span>待付款</span></div>
        <div><i class='iconfont icon-deliver'></i><span>待收货</span></div>
        <div><i class='iconfont icon-comment'></i><span>待评价</span></div>
        <div><i class='iconfont icon-shouhoutuikuan'></i><span>退款/售后</span></div>
      </div>
    </div>
    <div class="ads">
      <img v-lazy='adBanner' width=100% alt=""/>
    </div>
    <div class="extension">
      <div><i class="iconfont icon-pintuangou"></i><span>拼团订单</span><span></span></div>
      <div><i class="iconfont icon-shoucang"></i><span>收藏</span><span></span></div>
      <div><i class="iconfont icon-youhuiquan"></i><span>优惠券</span><span></span></div>
      <div><i class="iconfont icon-yaoqing"></i><span>新人邀请</span><span></span></div>
      <div><i class="iconfont icon-zichan"></i><span>我的资产</span><span></span></div>
      <div><i class="iconfont icon-dizhi"></i><span>地址管理</span><span></span></div>
      <div><i class="iconfont icon-fuwuerji"></i><span>服务中心</span><span></span></div>
      <div><i class="iconfont icon-bangzhu"></i><span>帮助中心</span><span></span></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // headerIcon: require('../assets/icon.jpg'),
      userName: '未登录',
      signNum: 0,
      adBanner: require('../assets/new.jpg')
    }
  },
  methods: {
    signBtn () {
      if (this.signNum < 3) {
        this.signNum++
      }
    }
  }
}
</script>
<style lang="less" scoped>
@bgColor: #f3f3f3;
@themeColor:#daa653;
.person {
  background-color: @bgColor;
  .header {
    background-color: @themeColor;
    .header-icon {
      width: 2rem;
      height: 2rem;
      background: url('../assets/icon.jpg') center center no-repeat;
      background-size: 2rem;
      border-radius: 50%;
      margin-top: 1rem;
      margin-left: 1rem;

    }
    .win-steps {
      margin-top: 0.5rem;
      margin-bottom: 2rem;

      .stepsStyle {
        border-radius: 1.5rem;
      }
    }
    .user-name {
      font-size: .8rem;
      margin-top: 1.5rem;
      margin-left: .5rem;
    }
    .icon-gift {
      font-size: 12px;
    }
    .message {
      margin-top: 1rem;
      margin-left: 1.2rem;
    }
    .sign {
      margin-top: 1.1rem;
      margin-right: 0.3rem;
    }
  }
  .indent {
    width: 90%;
    margin-left: 5%;
    margin-top: -1rem;
    padding: 0.5rem 0;
    background-color: #fff;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .3);
    border-radius: 0.3rem;
    position: absolute;
    .my-indent {
      margin: 0.5rem 0;
      span:first-child {
        font-size: 1rem;
        font-weight: 500;
        padding-left: 1rem;
      }
      span:last-child {
        font-size: .8rem;
        float: right;
        color: #adadad;
        padding-right:.8rem;
      }
    }
    .indent-type {
      display: flex;
      justify-content: space-around;
      text-align: center;
      .iconfont {
        font-size: 1.5rem;
        color: @themeColor;
      }
      span {
        display: block;
        font-size: 0.8rem;
        margin: 0.2rem 0;
      }
    }
  }
  .ads {
    margin-top: 6rem;
    // width: 100%;
    // height: 2rem;
    // background: url('../assets/ad.jpg') center center no-repeat;
    // background-size: contain;
  }
  .extension {
    background-color: #fff;
    // padding: .5rem;
    display: flex;
    // flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    div {
      width: 25%;
      height: 3rem;
      text-align: center;
      padding: .5rem 0;
      border-bottom: 1px solid #f6f6f6;
      .iconfont {
        font-size: 1.2rem;
        color: @themeColor;
      }
      span {
        display: block;
        font-size: .8rem;
      }
    }
  }
}
</style>
