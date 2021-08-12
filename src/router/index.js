import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Pair from '../views/pair.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'pair',
    component: Pair,
  },
];

const router = new VueRouter({
  routes
});

export default router;
