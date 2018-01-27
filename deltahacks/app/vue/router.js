import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/HomePage.vue';


Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: HomePage
    }
  ]
});

export default {
  getRouter: () => {
    return router;
  }
};
