// routes.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {
  HomeView,
  AboutView,
  FeaturedImagesView,
  CarouselView,
} from "./views/main";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/featuredImages",
    name: "FeaturedImages",
    component: FeaturedImagesView,
  },
  {
    path: "/imageCarousel",
    name: "ImageCarousel",
    component: CarouselView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
