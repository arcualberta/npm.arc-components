<template>
    <div class="featured-image">
      <a v-if="!(title || linkText)" :href="link || '#'">
        <img :src="url" :alt="title" class="image"/>
      </a>
      <img v-else :src="url" :alt="title" />
      <div class="body">
        <a v-if="!linkText" :href="link || '#'">
          <h6 class="title">{{ title }}</h6>
        </a>
        <h6 v-else class="originalTitle">{{ title }}</h6>
        <div class="keyword-box">
          <span v-for="keyword in keywords" :key="keyword" class="keyword">{{ keyword }}</span>
        </div>
        <div class="description">{{ description }}</div>
        <a v-if="linkText" :href="link" target="_blank" class="link-button">{{ linkText }}</a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps<{
    url: string
    title?: string 
    link?: string
    description?: string
    keywords?: string[]
    linkText?: string
  }>();
  </script>

<style scoped>
@import './styles.module.css'
</style>