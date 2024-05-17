<template>
  <div id="app">
    <ImageCarousel
      :urls="imageList1"
      cssClass="carousel-one"
      :displaySideIndicators="true"
      :displayBottomIndicator="true"
    />
    <ImageCarousel
      :urls="imageList2"
      cssClass="carousel-two"
      :displaySideIndicators="true"
      :displayBottomIndicator="false"
    />
    <ImageCarousel
      :urls="imageList3"
      cssClass="carousel-three"
      :displaySideIndicators="false"
      :displayBottomIndicator="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ImageCarousel } from "../lib/main";
import image1 from "../assets/image-carousel/image_01.jpg";
import image2 from "../assets/image-carousel/image_02.jpg";
import image3 from "../assets/image-carousel/image_03.jpg";
import image4 from "../assets/image-carousel/image_04.jpg";
import image5 from "../assets/image-carousel/image_05.jpg";
import image6 from "../assets/image-carousel/image_06.jpg";
import image7 from "../assets/image-carousel/image_07.jpg";
import image8 from "../assets/image-carousel/image_08.jpg";
import image9 from "../assets/image-carousel/image_09.jpg";

const imageList1 = [image1, image2, image3];
const imageList2 = [image4, image5, image6];
const imageList3 = [image7, image8, image9];
</script>

<style>
@import "../lib/image-carousel/styles.module.css";
</style>
