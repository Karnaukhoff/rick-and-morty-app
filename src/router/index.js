import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Episodes from '../views/Episodes.vue';
import Locations from '../views/Locations.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations
  }
];

const router = createRouter({
  history: createWebHistory(''),
  routes
});

export default router;
