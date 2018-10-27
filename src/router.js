import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMail from './views/ShoppingMail.vue'
import Login from './components/pages/Login.vue'
import Register from './components/pages/Register.vue'
import Goods from './views/Goods.vue'
import GoodsSort from './views/GoodsSort.vue'
import PersonCenter from './views/PersonCenter.vue'
import CouponCell from './components/pages/CouponCell.vue'
import ShoppingCar from './views/ShoppingCar.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    //  删除父路由的name属性
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'ShoppingMail',
          component: ShoppingMail
        },
        {
          path: 'goodsSort',
          name: 'GoodsSort',
          component: GoodsSort
        },
        {
          path: 'personCenter',
          name: 'PersonCenter',
          component: PersonCenter
        },
        {
          path: 'shoppingCar',
          name: 'ShoppingCar',
          component: ShoppingCar
        }
      ]
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/couponCell',
      name: 'CouponCell',
      component: CouponCell
    }
  ]
})
