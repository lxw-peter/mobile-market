<template>
  <div class="shoppingMail">
    <div class="search-bar">
      <van-row>
        <van-col span="3"><van-icon name="location" /></van-col>
        <van-col span="17"><input type="text" class="search-input"></van-col>
        <van-col span="4"><van-button size="mini" type="default">搜索</van-button></van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerPicArray" :key="index">
          <img v-lazy="item.image" width=100%/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for='(item, index) in category' :key='index'>
        <div>
          <img src="" v-lazy='item.image' alt="" width=90%/>
          <span>{{item.mallCategoryName}}</span>
        </div>
      </div>
    </div>
    <div class="ads">
      <img v-lazy='adBanner.PICTURE_ADDRESS' width=100% alt=""/>
    </div>
    <div class="recommend-area">
      <div class="recommend-title">
        <span>商品推荐</span>
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide, index) in recommendGoods" :key="index">
            <div class="goods-rd" @click="goGoodsPage(slide)">
              <img v-lazy='slide.image' width="40%">
              <span>￥{{slide.price | moneyFilter }}</span>
              <span>￥{{slide.mallPrice | moneyFilter }}</span>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="floor-area">
      <floor :floorData='floor1' :floorName='floorName.floor1' :floorNumber='1'></floor>
      <floor :floorData='floor2' :floorName='floorName.floor2' :floorNumber='2'></floor>
      <floor :floorData='floor3' :floorName='floorName.floor3' :floorNumber='3'></floor>
    </div>
    <div class="hotGoods-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-list>
          <van-row>
            <van-col span='12' v-for='(item, index) in hotGoods' :key='index'>
              <!-- <goodsInfo :goodsImage='item.image' :goodsName='item.name' :goodsPrice='item.price'></goodsInfo> -->
              <div class="goodsInfo" @click="goGoodsPage(item)">
                  <div class="goods-img">
                    <img v-lazy='item.image' width="90%">
                  </div>
                  <div class="goods-name">{{item.name}}</div>
                  <div class="goods-price"> <span>￥</span>{{item.price | moneyFilter}}</div>
              </div>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
import axios from 'axios'
import floor from '../components/Floor'
import {toMoney} from '../filter/moneyFilter.js'
import goodsInfo from '../components/goodsInfo'
export default {
  name: 'shoppingMail',
  // 组件引入需要用花括号包起来才生效
  components: {
    floor,
    goodsInfo
  },
  // 过滤器
  filters: {
    moneyFilter(money) {
      return toMoney(money)
    }
  },
  data () {
    return {
      bannerPicArray: '',
      category: '',
      adBanner: '',
      recommendGoods: [],
      swiperOption: {
        slidesPerView: '3',
      },
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      hotGoods: {},
      loading: true,
      finished: true,
      list: []
    }
  },
  created () {
    axios.get('https://www.easy-mock.com/mock/5bc87da6192f8e4aa5df0453/shoppingMail')
    .then( res => {
      // console.log(res)
      if (res.status === 200) {
        this.category = res.data.data.category
        this.adBanner = res.data.data.advertesPicture
        this.bannerPicArray = res.data.data.slides
        this.recommendGoods = res.data.data.recommend
        this.floor1 = res.data.data.floor1
        this.floor2 = res.data.data.floor2
        this.floor3 = res.data.data.floor3
        this.floorName = res.data.data.floorName
        this.hotGoods = res.data.data.hotGoods
      }
    })
    .catch((error) => {
      console.log(error)
    })
  },
  methods: {
    onLoad () {
      // 异步更新数据
      /* setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.hotGoods.length) {
          this.finished = true;
        }
      }, 500); */
    },
    goGoodsPage (item) {
      this.$router.push({name: 'Goods',query:{goodsInfo: item}})
    }
  }
}
</script>
<style lang="less" scoped>
@lilac: #d12d7c;
@bgColor: #f3f3f3;
@themeColor:#daa653;
.shoppingMail {
  background-color: @bgColor;
  .search-bar {
    height: 2.2rem;
    border: 1px solid #ccc;
    line-height: 2.2rem;
    background-color: @themeColor;
    color: #fff;
    .search-input {
      width: 100%;
      height: 1.3rem;
      border: none;
      border-bottom: 1px solid #ccc;
      background-color: @themeColor;
      color: #fff;
    }
  }
  .swiper-area {
    width: 20rem;
    clear: both;
  }
  .type-bar {
    background-color: #fff;
    display: flex;
    flex-wrap: nowrap;
    margin: 0 .3rem .3rem .3rem;
    font-size: 14px;
    flex-direction: row;
    border-radius: .3rem;
    div {
      padding: .3rem;
      font-size: 12px;
      text-align: center;
    }
  }
  .recommend-area {
    background-color: #fff;    
    .recommend-title {
      font-size: 0.9rem;
      font-weight: 700;
      color: @lilac;
      text-align: left;
      border-bottom: 1px solid #eee;
      height: 2rem;
      line-height: 2rem;
    }
    .recommend-body {
      .goods-rd {
        border-right: 1px solid #eee;
        font-size: .8rem;
        display: flex; 
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        position: relative;
        img {
          height: 7rem;
          width: 100%;
        }
        span:last-of-type {
          text-decoration: line-through;
          font-size: .5rem;
        }
        &::after{
          content: '推荐';
          width: 2rem;
          height: 0.8rem;
          position: absolute;
          background-color: red;
          border-radius: .5rem 0 0 .5rem;
          right: 2px;
          top: 50%;
          transform: translateY(-50%);
          color: #fff;
          font-size: 0.4rem;
          line-height: 0.8rem;
        }
      }
    }
  }
  .hotGoods-area {
    background-color: #eee;
    border-bottom: 1px solid #ccc;
    .hot-title {
      font-size: 0.9rem;
      font-weight: 700;
      background-color: #fff;
      color: @lilac;
      text-align: left;
      border-bottom: 1px solid #eee;
      height: 2rem;
      line-height: 2rem;
    }
    .hot-goods {
      padding: 0 4px;
      margin-bottom: 3rem;
      .goodsInfo {
        border-radius: 8px;
        box-sizing: border-box;
        background-color: #fff;
        margin: 8px 4px 0 4px;
        img {
          padding: 0 8px;
        }
        .goods-name {
          padding: 3px 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: .5rem;
        }
        .goods-price {
          display: inline-block;
          height: 1rem;
          overflow: hidden;
          font-size: .8rem;
          color: red;
          span{
            font-size: .5rem;
            padding-left: 6px;
          }
        }
      }
      
    }
    
  }
}
</style>
