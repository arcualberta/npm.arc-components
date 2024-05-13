<template>
  <div id="app">
    <h1>Featured Images</h1>
    <div class="featured-images">
      <FeaturedImage
        imageUrl="../assets/image_03.jpg"
        title="Humming Bird"
        :keywords="['nature', 'Humming bird']"
        reference="https://pixabay.com/photos/bird-hummingbird-ornithology-fly-8733716/"
        linkText="Learn More"
      />
      <FeaturedImage
        imageUrl="../assets/image_01.jpg"
        title="Gray Spicer Bird"
        :keywords="['Spring', 'bird watching']"
        reference="https://pixabay.com/photos/bird-branch-perched-feathers-2295431/"
        linkText="Learn More"
      />
      <FeaturedImage
        imageUrl="../assets/image_02.jpg"
        title="Tufled Bird"
        :keywords="['Song bird', 'Wildlife']"
        reference="https://pixabay.com/photos/bird-tufted-titmouse-songbird-8360220/"
        linkText="Learn More"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FeaturedImage } from '../lib/main';

export default defineComponent({
  name: 'App',
  components: {
    FeaturedImage,
  },
});
</script>

<style scoped>
@import '../lib/featured-image/styles.module.css'
</style>