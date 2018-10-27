<template>
  <div >
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
        Slide {{item}}
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        // direction: "vertical",
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style scoped>
.swiper-slide {
  height: 4rem;
  width: 30%;
  text-align: center;
  line-height: 4rem;
}
.swiper {
  height: 7rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
