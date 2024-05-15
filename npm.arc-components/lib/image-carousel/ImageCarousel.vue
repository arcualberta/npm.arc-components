<template>
  <div
    class="image-carousel"
    @mouseenter="stopAutoScroll"
    @mouseleave="startAutoScroll"
  >
    <div class="slides-container">
      <div
        v-for="(_slide, index) in slides"
        :key="index"
        class="slide"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <img :src="_slide.image" alt="Slide {{ index + 1 }}" />
      </div>
    </div>

    <!-- Navigation -->
    <div v-if="navigation" class="navigation">
      <button @click="prevSlide" class="prev-btn">&#10094;</button>
      <button @click="nextSlide" class="next-btn">&#10095;</button>
    </div>

    <!-- Pagination -->
    <div v-if="pagination" class="pagination">
      <span
        v-for="(_slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: index === currentSlide }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Slide {
  image: string;
}

const slides: Slide[] = [
  { image: "https://picsum.photos/id/1032/900/400" },
  { image: "https://picsum.photos/id/1033/900/400" },
  { image: "https://picsum.photos/id/1037/900/400" },
  { image: "https://picsum.photos/id/1035/900/400" },
  { image: "https://picsum.photos/id/1036/900/400" },
];

const currentSlide = ref(0);
const navigation = ref(true);
const pagination = ref(true);
const autoScrollInterval = ref<NodeJS.Timeout | null>(null);

const nextSlide = () => {
  if (currentSlide.value < slides.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = slides.length - 1;
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
