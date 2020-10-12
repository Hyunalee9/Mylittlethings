import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login.vue')
  },
  {
    path:'/joinus',
    name:'Joinus',
    
    component:() => import('../views/Joinus.vue')
  },

  {
    path:'/cart',
    name:'Cart',
    
    component:() => import('../views/Cart.vue')
  },

  {
    path:'/mypage',
    name:'Mypage',
    
    component:() => import('../views/Mypage.vue')
  },

  {
    path:'/living',
    name:'Living',
    
    component:() => import('../views/Living.vue')
  },

  {
    path:'/stationary',
    name:'Stationary',
    
    component:() => import('../views/Stationary.vue')
  },
  {
    path:'/findid',
    name:'Findid',
    
    component:() => import('../views/Findid.vue')
  },
  {
    path:'/findpassword',
    name:'Findpassword',
    
    component:() => import('../views/Findpassword.vue')
  },

  {
    path:'/plate',
    name:'Plate',
    
    component:() => import('../views/Plate.vue')
  },

  {
    path:'/candle',
    name:'Candle',
    
    component:() => import('../views/Candle.vue')
  },

  {
    path:'/sticker',
    name:'Sticker',
    
    component:() => import('../views/Sticker.vue')
  },
  {
    path:'/joinus_two',
    name:'Joinus_two',
    
    component:() => import('../views/Joinus_two.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
