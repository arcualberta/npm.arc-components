<template>
  <div
    :class="['image-carousel', cssClass]"
    @mouseenter="stopAutoScroll"
    @mouseleave="startAutoScroll"
  >
    <div class="slides-container">
      <div
        v-for="(slide, index) in slideInfo"
        :key="index"
        class="slide"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div class="slide-content">
          <img
            :src="slide.imageUrl"
            :alt="'Slide ' + (index + 1)"
            class="slide-image"
          />
          <div
            v-if="slide.title || slide.description || slide.link"
            class="slide-info"
          >
            <h1 v-if="slide.title">{{ slide.title }}</h1>
            <h4 v-if="slide.description" class="desc-in-carousel">
              {{ slide.description }}
            </h4>
            <a v-if="slide.link" :href="slide.link" class="slide-link">{{
              slide.linkText || "Learn more"
            }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div v-if="displaySideIndicators" class="navigation">
      <button @click="prevSlide" class="prev-btn">&#10094;</button>
      <button @click="nextSlide" class="next-btn">&#10095;</button>
    </div>

    <!-- Pagination -->
    <div v-if="displayBottomIndicator" class="pagination">
      <span
        v-for="(_slide, index) in slideInfo"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: index === currentSlide }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { SlideInfo } from "./models";

const props = defineProps<{
  slideInfo: SlideInfo[];
  cssClass: string;
  displaySideIndicators?: boolean; // Optional prop
  displayBottomIndicator?: boolean; // Optional prop
}>();

const currentSlide = ref(0);
const autoScrollInterval = ref<NodeJS.Timeout | null>(null);

// Default values for optional props
const displaySideIndicators = props.displaySideIndicators ?? true;
const displayBottomIndicator = props.displayBottomIndicator ?? true;

const nextSlide = () => {
  if (currentSlide.value < props.slideInfo.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = props.slideInfo.length - 1;
  }
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

const startAutoScroll = () => {
  autoScrollInterval.value = setInterval(() => {
    nextSlide();
  }, 3000);
};

const stopAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value);
  }
};

onMounted(() => {
  startAutoScroll();
});
</script>

<style scoped>
@import "./styles.module.css";
</style>
