import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { Sku, Dialog, Search, Tabbar, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, TabbarItem, SubmitBar, Checkbox, CheckboxGroup, Stepper, Card, CouponCell, TreeSelect, CouponList, Button, Row, Col, Icon, Swipe, SwipeItem, Lazyload, NavBar, Toast, Field, List, Step, Steps } from 'vant'
Vue.use(VueAwesomeSwiper)
Vue.use(Dialog).use(Tabbar).use(TabbarItem).use(Checkbox).use(CheckboxGroup).use(TreeSelect).use(Button).use(Row).use(Col).use(Icon).use(Swipe).use(Step).use(Steps)
Vue.use(Sku).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(SubmitBar).use(Stepper).use(Card).use(Search).use(SwipeItem).use(Lazyload).use(NavBar).use(Toast).use(Field).use(List).use(CouponCell).use(CouponList)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
