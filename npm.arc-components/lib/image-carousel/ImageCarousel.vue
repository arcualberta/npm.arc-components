<template>
  <div
    :class="['image-carousel', cssClass]"
    @mouseenter="stopAutoScroll"
    @mouseleave="startAutoScroll"
  >
    <div
      class="slides-container"
      :class="{ 'no-transition': noTransition }"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="slide">
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
        v-for="(_, index) in slideInfo"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: index === currentSlide % slideInfo.length }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { SlideInfo } from "./models";

const props = defineProps<{
  slideInfo: SlideInfo[];
  cssClass: string;
  displaySideIndicators?: boolean; // Optional prop
  displayBottomIndicator?: boolean; // Optional prop
  interval?: number;
}>();

const currentSlide = ref(1);
const slides = ref([
  props.slideInfo[props.slideInfo.length - 1],
  ...props.slideInfo,
  props.slideInfo[0],
]);
const autoScrollInterval = ref<NodeJS.Timeout | null>(null);
const noTransition = ref(false);

// Default values for optional props
const displaySideIndicators = props.displaySideIndicators ?? true;
const displayBottomIndicator = props.displayBottomIndicator ?? true;
const interval = props.interval ?? 3000;

const nextSlide = () => {
  currentSlide.value++;
  if (currentSlide.value === slides.value.length - 1) {
    setTimeout(() => {
      noTransition.value = true;
      currentSlide.value = 1;
      setTimeout(() => {
        noTransition.value = false;
      }, 50); // Small delay to apply the transition class back
    }, 500); // Time must be equal to the transition time in CSS
  }
};

const prevSlide = () => {
  currentSlide.value--;
  if (currentSlide.value === 0) {
    setTimeout(() => {
      noTransition.value = true;
      currentSlide.value = slides.value.length - 2;
      setTimeout(() => {
        noTransition.value = false;
      }, 50); // Small delay to apply the transition class back
    }, 500); // Time must be equal to the transition time in CSS
  }
};

const goToSlide = (index: number) => {
  currentSlide.value = index + 1;
};

const startAutoScroll = () => {
  stopAutoScroll(); // Clear any existing interval
  autoScrollInterval.value = setInterval(() => {
    nextSlide();
  }, interval);
};

const stopAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value);
  }
};

onMounted(() => {
  startAutoScroll();
});

onBeforeUnmount(() => {
  stopAutoScroll();
});
</script>

<style scoped>
@import "./styles.module.css";

.no-transition {
  transition: none !important;
}
</style>
