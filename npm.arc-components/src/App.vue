<template>
  <div id="app">
    <h1 class="heading">Featured Images</h1>
    <div class="featured-images">
      <FeaturedImage
        url="../assets/image_03.jpg"
        title="Humming Bird"
        :keywords="['nature', 'Humming bird']"
        description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
        link="https://pixabay.com/photos/bird-hummingbird-ornithology-fly-8733716/"
        linkText="Learn More"
      />
      <!-- linkText is missing ----- title will act as hyperlink -->
      <FeaturedImage
        url="../assets/image_01.jpg"
        title="Blue Bird"
        :keywords="['Wildlife', 'Bird']"
        description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
        link="https://pixabay.com/photos/bird-branch-perched-feathers-2295431/"
        linkText=""
      />
      <!-- Title=Tufled Titmouse Bird ----- title, keyword and linkText both are absent------- image will act as hyperlink-->
      <FeaturedImage
        url="../assets/image_02.jpg"
        title=""
        :keywords=[]
        description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
        link="https://pixabay.com/photos/bird-tufted-titmouse-songbird-8360220/"
        linkText=""
      />
      <!-- Description & keywords are missing -->
      <FeaturedImage
        url="../assets/image_04.jpg"
        title="Sun Bird"
        :keywords=[]
        description=""
        link="https://pixabay.com/photos/bird-poppies-bokeh-red-flowers-7403593/"
        linkText="Learn More"
      />
      <!-- keywords are missing -->
      <!-- <FeaturedImage
        url="../assets/image_05.jpg"
        title="Turaco Bird"
        description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
        link="https://pixabay.com/photos/bird-white-cheeked-turaco-7576994/"
        linkText="Learn More"
      /> -->

      <!-- Only the image -->
      <FeaturedImage
        url="../assets/image_05.jpg"
        link="https://pixabay.com/photos/bird-white-cheeked-turaco-7576994/"
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