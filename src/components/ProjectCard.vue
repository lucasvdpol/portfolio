<template>
  <router-link class="project-card" :to="`/projects/${project.id}`">
    <div class="project-thumb">
      <img :src="project.image" :alt="project.title" />
    </div>
    <div class="project-body">
      <h3>{{ project.title }}</h3>
      <div class="project-tags">
        <span class="tag" v-for="t in project.tags" :key="t">{{ t }}</span>
      </div>
      <p>{{ project.short }}</p>
      <div class="project-links">
        <span class="project-link primary" v-if="project.live">Live <IconArrowUpRight /></span>
        <span class="project-link store android" v-if="project.playstore"><IconDownload /> Play Store</span>
        <span class="project-link store apple" v-if="project.appstore"><IconDownload /> App Store</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import IconDownload from './icons/IconDownload.vue'
import IconArrowUpRight from './icons/IconArrowUpRight.vue'

defineProps({
  project: { type: Object, required: true },
})
</script>
