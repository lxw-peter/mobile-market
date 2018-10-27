<template>
  <div class="about">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="ct-container">
      <div class="ct-left">
        <ul>
          <li class=""><a href="javascript:;">有品推荐</a></li>
          <li class="active"><a href="javascript:;">家用电器</a></li>
          <li class=""><a href="javascript:;">智能家庭</a></li>
          <li class=""><a href="javascript:;">餐具厨房</a></li>
          <li class=""><a href="javascript:;">服饰装配</a></li>
          <li class=""><a href="javascript:;">鞋靴箱包</a></li>
          <li class=""><a href="javascript:;">手机数码</a></li>
          <li class=""><a href="javascript:;">运动健康</a></li>
          <li class=""><a href="javascript:;">出行户外</a></li>
          <li class=""><a href="javascript:;">洗护美妆</a></li>
          <li class=""><a href="javascript:;">日杂文创</a></li>
          <li class=""><a href="javascript:;">母婴亲子</a></li>
          <li class=""><a href="javascript:;">饮食酒水</a></li>
          <li class=""><a href="javascript:;">数码配件</a></li>
          <li class=""><a href="javascript:;">品牌</a></li>
        </ul>
      </div>
      <div class="ct-right">
        <div class="ct-banner">
          <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_e0fd16ba8675b53dc044d41534a1c22c.jpeg&w=786&h=395&t=webp" width='100%' alt="" srcset="">
        </div>
        <div class="ct-products">
          <ul>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
            <li><a href=""><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp" alt=""> <span>生活电器</span> </a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    var screenHeight = document.body.clientHeight
    var ctContainer = document.querySelector('.ct-container')
    ctContainer.style.height = screenHeight - 44 - 50 + 'px'
    var ctLeft = document.querySelector('.ct-left')
    var leftHeight = ctLeft.offsetHeight
    var ulBox = ctLeft.querySelector('ul:first-of-type')
    var ulHeight = ulBox.offsetHeight
    // 静止状态下top最小值最大值
    var minTop = leftHeight - ulHeight
    var maxTop = 0
    // 滑动状态下top的最小值和最大值
    var minMoveTop = minTop - 50
    var maxMoveTop = 50
    var startY = 0
    var moveY = 0
    var distanceY = 0
    var currentY = 0
    ulBox.addEventListener('touchstart', function (e) {
      console.log(e)
      startY = e.targetTouches[0].clientY
      console.log(startY)
    })
    ulBox.addEventListener('touchmove', function (e) {
      moveY = e.targetTouches[0].clientY
      distanceY = moveY - startY
      // 清除过渡
      ulBox.style.transition = 'none'
      if (currentY + distanceY < maxMoveTop && currentY + distanceY > minMoveTop) {
        ulBox.style.top = currentY + distanceY + 'px'
      }
      console.log(ulBox.style.top)
    })
    ulBox.addEventListener('touchend', function (e) {
      if (currentY + distanceY > maxTop) {
        ulBox.style.transition = 'top .5s'
        ulBox.style.top = maxTop + 'px'
        currentY = maxTop
      } else if (currentY + distanceY < minTop) {
        ulBox.style.transition = 'top .5s'
        ulBox.style.top = minTop + 'px'
        currentY = minTop
      } else {
        currentY += distanceY
      }
    })
  },
  methods: {
    onNavClick (index) {
      this.mainActiveIndex = index
    },
    onItemClick (data) {
      this.activeId = data.id
    },
    onSearch () {
    }
  }
}
</script>
<style lang="less" scoped>
@bgColor: #f3f3f3;
@themeColor:#845f3f;
.ct-container {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  background-color: #fff;
  .ct-left {
    // height: 100%;
    width: 75px;
    overflow: hidden;
    position: relative;
    ul {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      border-right: 1px solid #e5e5e5;
      box-sizing: border-box;
      li {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        font-size: .6rem;
        text-align: center;
        position: relative;
        a {
          color: #989898;
        }
      }
      & li.active a:before {
        position: absolute;
        content: '';
        width: 2px;
        height: 1rem;
        background-color: @themeColor;
        top: 50%;
        left: 0;
        transform: translateY(-50%)
      }
      & li.active a{
          color: @themeColor;
      }
    }
  }
  .ct-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .ct-banner {
      padding: .5rem;
      img {
          width: 100%;
          display: block;
      }
    }
    .ct-products {
      width: 100%;
      flex: 1;
      overflow: hidden;
      position: relative;
      background-color: #fff;
      ul {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        li {
          float: left;
          width: 33.3%;
          text-align: center;
          padding: .5rem;
          box-sizing: border-box;
          font-size: .6rem;
          a{
            color: #9a9a9a;
          }
          img {
            display: block;
            width: 100%;
            padding-bottom: .5rem;
          }
        }
      }
    }
  }
}
</style>
