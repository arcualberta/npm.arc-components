<!-- FeaturedImagesView.vue -->
<template>
  <div class="container">
    <h1 class="heading">Featured Images</h1>
    <div class="row">
      <div class="col">
        <FeaturedImage
          url="../assets/image_03.jpg"
          title="Humming Bird"
          :keywords="['nature', 'Humming bird']"
          description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
          link="https://pixabay.com/photos/bird-hummingbird-ornithology-fly-8733716/"
          linkText="Learn More"
        />
      </div>
      <div class="col">
        <FeaturedImage
          url="../assets/image_01.jpg"
          title="Blue Bird"
          :keywords="['Wildlife', 'Bird']"
          description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
          link="https://pixabay.com/photos/bird-branch-perched-feathers-2295431/"
          linkText=""
        />
      </div>
      <div class="col">
        <FeaturedImage
          url="../assets/image_02.jpg"
          title=""
          :keywords=[]
          description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
          link="https://pixabay.com/photos/bird-tufted-titmouse-songbird-8360220/"
          linkText=""
        />
      </div>
      <div class="col">
        <FeaturedImage
          url="../assets/image_04.jpg"
          title="Sun Bird"
          :keywords=[]
          description=""
          link="https://pixabay.com/photos/bird-poppies-bokeh-red-flowers-7403593/"
          linkText="Learn More"
        />
      </div>
      <div class="col">
        <FeaturedImage
          url="../assets/image_05.jpg"
          link="https://pixabay.com/photos/bird-white-cheeked-turaco-7576994/"
        />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { FeaturedImage } from '../../lib/main';
</script>


  <style scoped>
  @import '../../lib/featured-image/styles.module.css'
  </style>