import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  base:'/',
  mode:'history',
  routes: [
    { 
    path: '/home/:id', 
    name: 'home',
    component: () => import('./components/Home.vue'),
    children: [{
      path: '/child',
      name: 'child',
      component: () => import ('./components/Child.vue'),
    }]
   }
  ]
});
