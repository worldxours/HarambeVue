import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Menu from '@/pages/Menu.vue';
import Gallery from '@/pages/Gallery.vue';
import Contact from '@/pages/Contact.vue';
import NotFound from '@/pages/not-found.vue'; // Ensured this is the correct name

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all for 404
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(), // Assuming served from root, import.meta.env.BASE_URL is not strictly needed here
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new page
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' }; // Added smooth scroll
    }
  }
});

export default router;
