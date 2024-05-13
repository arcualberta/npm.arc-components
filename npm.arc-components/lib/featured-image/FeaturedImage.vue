<template>
    <div class="featured-image">
        <img :src="imageUrl" :alt="title" />
        <div class="body">
            <h6 class="title">{{ title }}</h6>
            <div class="keyword-box">
                <span v-for="keyword in keywords" :key="keyword" class="keyword">{{ keyword }}</span>
            </div>
            <a :href="reference" target="_blank" class="link-button">{{ linkText }}</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        imageUrl: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        keywords: {
            type: Array as () => string[],
            required: true,
        },
        reference: {
            type: String,
            required: true,
        },
        linkText: {
            type: String,
            default: 'View More',
        },
    },
});
</script>

<style scoped>
@import './styles.module.css';
</style>