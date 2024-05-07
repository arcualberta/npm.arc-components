<script setup lang="ts">
import { HelloWorld, SimpleCounter } from '@arc/arc-components'
</script>

<template>
  <h1>ARC Components Test App</h1>
  <hello-world />
  <simple-counter />
  <simple-counter :min=10 :max=15 />
  <simple-counter :min=10 :max=20 :start="15"/>
 
</template>

<style scoped>

</style>
