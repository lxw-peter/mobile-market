<template>
<div class="floor-area">
  <div class="floor-title">
    <span>{{floorNumber}}F</span>
    <span>{{floorName}}</span>
  </div>
  <div class="floor-goods">
    <div class="floor-anormal">
      <div class="floor-left">
        <img src="" v-lazy='floorData0.image' width="100%" alt="">
      </div>
      <div class="floor-right">
        <img src="" v-lazy='floorData1.image' width="100%" alt="">
        <img src="" v-lazy='floorData2.image' width="100%" alt="">
      </div>
    </div>
    <div class="floor-normal" >
      <div v-for='(item, index) in floorData.slice(3)' :key='index'>
        <img v-lazy='item.image' width="100%">
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  nome: 'floor',
  props: ['floorData', 'floorName', 'floorNumber'],
  data () {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    }
  },
  watch: {
    floorData (val) {
      // console.log(this.floorData)
      this.floorData0 = this.floorData[0]
      this.floorData1 = this.floorData[1]
      this.floorData2 = this.floorData[2]
    }
  }
}
</script>
<style lang="less" scoped>
.floor-area {
    .floor-title {
      height: 2rem;
      line-height: 2rem;
      color: #d2451c;
      font-size: .9rem;
      text-align: center;
      &>span:first-child{
        border-radius: 50%;
        background-color: #d2451c;
        color: #fff;
        margin-right: .3rem;
        padding:.2rem;
        font-size: .8rem;
      }
    }
    .floor-goods {
      // font-size: 0;
      .floor-anormal {
        display: flex;
        flex-direction: row;
          box-sizing: border-box;
        border-bottom: 1px solid #eee;
        div {
          width: 10rem;
          font-size: 0;
        }
        .floor-left {
          border-right: 1px solid #eee;
        }
        .floor-right img:first-child{
          border-bottom: 1px solid #eee;
        }
      }
      .floor-normal {
        font-size: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        div {
          width: 10rem;
          box-sizing: border-box;
          border-right: 1px solid #eee;
        }
        & div:nth-child(odd){
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
</style>
