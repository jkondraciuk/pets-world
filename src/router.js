import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/saved',
      name: 'saved',
      component: () => import('./views/Saved/Saved.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About/About.vue'),
    },
  ],
});
