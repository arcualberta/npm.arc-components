<template>
  <div id="app">
    <ImageCarousel />
  </div>
</template>

<script setup lang="ts">
import { ImageCarousel } from "../lib/main";
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
