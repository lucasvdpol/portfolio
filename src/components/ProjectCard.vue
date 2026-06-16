<template>
  <router-link class="project-card" :to="`/projects/${project.id}`">
    <div class="project-thumb-svg" v-html="thumbnail"></div>
    <div class="project-body">
      <div class="project-tags">
        <span class="tag" v-for="t in project.tags" :key="t">{{ t }}</span>
      </div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.short }}</p>
      <div class="project-links">
        <span class="project-link primary" v-if="project.live">Live ↗</span>
        <span class="project-link store android" v-if="project.playstore">▶ Play Store</span>
        <span class="project-link store apple" v-if="project.appstore">⬡ App Store</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { makeThumbnailSVG } from '../data/projects-data.js'

const props = defineProps({
  project: { type: Object, required: true },
})

const thumbnail = computed(() => makeThumbnailSVG(props.project))
</script>
