<script setup lang="ts">
import { HelloWorld, SimpleCounter } from '../lib/main';

</script>

<template>
<h1>Components Sandbox</h1>
<hello-world />
<simple-counter />
<simple-counter :min=10 :max=15 />
<simple-counter :min=10 :max=20 :start="15"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
