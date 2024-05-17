<template>
  <div
    :class="['image-carousel', cssClass]"
    @mouseenter="stopAutoScroll"
    @mouseleave="startAutoScroll"
  >
    <div class="slides-container">
      <div
        v-for="(slide, index) in urls"
        :key="index"
        class="slide"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <img :src="slide" :alt="'Slide ' + (index + 1)" />
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
        v-for="(_slide, index) in urls"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: index === currentSlide }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
  urls: string[];
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
  if (currentSlide.value < props.urls.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = props.urls.length - 1;
  }
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

const startAutoScroll = () => {
  autoScrollInterval.value = setInterval(() => {
    nextSlide();
  }, 2000);
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
