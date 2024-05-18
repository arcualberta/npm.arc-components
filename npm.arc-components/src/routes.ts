// routes.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import FeaturedImagesView from './views/FeaturedImageView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/featuredImages',
    name: 'FeaturedImages',
    component: FeaturedImagesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router