<template>
<div class="login">
  <van-nav-bar
  title="用户登录"
  left-text="返回"
  left-arrow
  @click-left="goBack"
  />
  <div class="login-panel">
    <van-field
        v-model="username"
        icon="clear"
        placeholder="请输入用户名"
        @click-icon="username = ''"
    />
    <van-field
        v-model="password"
        type="password"
        icon="clear"
        placeholder="请输入密码"
    />
    <div class="login-button">
        <van-button type="primary" size="large">登录</van-button>
    </div>
    <div class="otherLoginWay">
        <span><a href="/register">前往注册</a></span>
        <span>使用第三方登录</span>
        <i class="iconfont icon-weixin"></i>
        <i class="iconfont icon-z-alipay"></i>
        <i class="iconfont icon-qq"></i>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='less' scoped>
.login {
  .login-panel {
    width: 96%;
    border-radius: 5px;
    margin: 40px auto;
    padding-bottom: 50px;
  }
  .login-button {
    margin-top: 10px;
  }
  .otherLoginWay {
    margin-top: 20px;
    text-align: center;
    span {
      display: block;
      font-size: .5rem;
      margin-bottom: .5rem;
    }
    & span:first-child {
      text-align: right;
      font-size: .8rem;
    }
    .iconfont {
        padding: 1rem;
        font-size: .8rem;
      }
  }
}

</style>
