// routes.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { HomeView, AboutView, FeaturedImagesView } from './views/main'


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