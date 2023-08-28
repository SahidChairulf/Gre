import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleProduk from "../views/SingleProduct.vue"
import CartCompponentVue from '../components/CartCompponent.vue';
import CheckoutCompponent from '../components/CheckoutCommpponent.vue'
import OrderCommponent from '../components/OrderCommponent.vue'

const merk = 'ArtisanAlley';

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
if(localStorage.getItem('token'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/categori',
      name: 'categori',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import('../views/BrandView.vue')
    },
    {
      path : '/product/singleproduct/:slug',
      name : 'SingleProduct',
      component : SingleProduk,
      props : true
    },
    {
      path : '/cart',
      name : 'Cart',
      beforeEnter : guardMyroute,
      component : CartCompponentVue
     
    },
    { 
      path: '/user',
      name: 'User',
      beforeEnter : guardMyroute,
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CheckoutCompponent
    },
    {
      path: '/order/:orderCode',
      name: 'Order',
      component: OrderCommponent,
      props: true,
      meta: { title: merk + ' | ' + 'Order' },
    },
  ]
})

export default router
