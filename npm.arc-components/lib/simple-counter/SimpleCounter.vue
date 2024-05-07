<script setup lang="ts">
import { computed, ref } from 'vue';


const props = defineProps<{
    min?: number,
    max?: number,
    start?: number
}>();

const min = props.min ? props.min : 0;
const max = props.max ? props.max : 100;
let count = ref(props.start ? props.start : min)

const up = () => {
    if(count.value < max){
        ++count.value;
    }
}
const down = () => {
    if(count.value > min){
        --count.value;
    }
}

const isUpDisabled = computed(() => count.value >= max);
const isDownDisabled = computed(() => count.value <= min);

</script>
<template>
    <div class="wrapper">
        <h2>Counter ({{ min }}-{{ max }})</h2>
        <div>
            <span><button @click="down()" :disabled="isDownDisabled">Down</button></span>
            <span>Count {{ count }}</span>
            <span><button @click="up()" :disabled="isUpDisabled">Up</button></span>
        </div>
    </div>

</template>

<style scoped>
@import './styles.module.css'
</style>