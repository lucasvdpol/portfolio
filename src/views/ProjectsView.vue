<template>
  <div class="page-hero">
    <div class="section-label">Overzicht</div>
    <div class="section-title">Mijn Projecten</div>
    <div class="divider"></div>
    <p class="section-desc">
      Een overzicht van alles wat ik heb gemaakt. Van apps tot tools — elk project is een leerervaring.
    </p>

    <div class="filter-tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="filter-tab"
        :class="{ active: activeFilter === tab }"
        @click="activeFilter = tab"
      >{{ tab === 'all' ? 'Alles' : tab }}</button>
    </div>

    <div class="project-count">Toont <span id="countNum">{{ filteredProjects.length }}</span> projecten</div>
    <div class="projects-grid">
      <ProjectCard v-for="p in filteredProjects" :key="p.id" :project="p" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects-data.js'

const tabs = ['all', 'Frontend', 'Backend', 'Fullstack']
const activeFilter = ref('all')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.role.toLowerCase().includes(activeFilter.value.toLowerCase()))
})
</script>

<style scoped>
.page-hero {
  padding: 5rem 5% 3rem;
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  top: -60px; right: -60px;
  width: 350px; height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, #4a6cf720, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
}

.filter-tabs {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.filter-tab {
  padding: 7px 18px;
  border-radius: 4px;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--muted);
  transition: all 0.2s;
}
.filter-tab:hover { border-color: var(--blue); color: var(--blue); }
.filter-tab.active {
  background: var(--blue);
  border-color: var(--blue);
  color: #fff;
}

.project-count {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 1.5rem;
}
.project-count span { color: var(--blue); }
</style>
