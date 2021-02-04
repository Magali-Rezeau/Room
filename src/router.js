import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/',
      component: Home,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/shop',
      component: Shop,
    },
    {
      path: '/contact',
      component: Shop,
    },
    {
      path: '/cart',
      component: Shop,
    },
  ]
});

export default router;