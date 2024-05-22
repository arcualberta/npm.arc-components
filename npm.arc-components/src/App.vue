<template>
  <div id="app">
    <ImageCarousel
      :slideInfo="slideInfo1"
      cssClass="carousel-one"
      :displaySideIndicators="true"
      :displayBottomIndicator="true"
    />
    <ImageCarousel
      :slideInfo="slideInfo2"
      cssClass="carousel-two"
      :displaySideIndicators="true"
      :displayBottomIndicator="false"
    />
    <ImageCarousel
      :slideInfo="slideInfo3"
      cssClass="carousel-three"
      :displaySideIndicators="false"
      :displayBottomIndicator="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ImageCarousel } from "../lib/main";
import { SlideInfo } from "../lib/image-carousel/models";
import image1 from "../assets/image-carousel/image_01.jpg";
import image2 from "../assets/image-carousel/image_02.jpg";
import image3 from "../assets/image-carousel/image_03.jpg";
import image4 from "../assets/image-carousel/image_04.jpg";
import image5 from "../assets/image-carousel/image_05.jpg";
import image6 from "../assets/image-carousel/image_06.jpg";
import image7 from "../assets/image-carousel/image_07.jpg";
import image8 from "../assets/image-carousel/image_08.jpg";
import image9 from "../assets/image-carousel/image_09.jpg";

const slideInfo1: SlideInfo[] = [
  {
    imageUrl: image1,
    title: "Humming Bird",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    link: "https://pixabay.com/photos/bird-hummingbird-ornithology-fly-8733716/",
    linkText: "Read more",
  },
  {
    imageUrl: image2,
    title: "Black Bird",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  },
  { imageUrl: image3 },
];

const slideInfo2: SlideInfo[] = [
  {
    imageUrl: image4,
    title: "Red bird",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    link: "https://pixabay.com/photos/bird-branch-perched-feathers-2295431/",
    linkText: "Read more",
  },
  { imageUrl: image5, title: "Green Bird" },
  { imageUrl: image6 },
];

const slideInfo3: SlideInfo[] = [
  {
    imageUrl: image7,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  },
  { imageUrl: image8, title: "Title 8", link: "#", linkText: "Read more" },
  { imageUrl: image9 },
];
</script>

<style>
@import "../lib/image-carousel/styles.module.css";
</style>
