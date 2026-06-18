<template>
  <div v-if="!project" class="not-found">
    <h2>Project niet gevonden</h2>
    <p>Dit project bestaat niet of is verwijderd.</p>
    <router-link class="btn btn-ghost" to="/projects" style="margin-top:1.5rem; display:inline-flex;"><IconArrowLeft /> Terug naar overzicht</router-link>
  </div>

  <template v-else>
    <div class="back-container">
      <router-link class="back-link" to="/projects"><IconArrowLeft /> Terug naar projecten</router-link>
    </div>
    <div class="detail-section">
      <div class="detail-thumb">
        <img :src="project.image" :alt="project.title" />
      </div>

      <div class="detail-body">
        <div class="project-tags" style="margin-bottom:1rem;">
          <span class="tag" v-for="t in project.tags" :key="t">{{ t }}</span>
        </div>

        <h1 class="detail-title">{{ project.title }}</h1>
        <p><strong style="color:var(--text);">{{ project.short }}</strong></p>

        <div id="project-description-container" class="detail-body-text">
          <p v-if="descriptionLoading" style="opacity: 0.5;">Laden...</p>
          <div v-else v-html="description"></div>
        </div>

        <div class="detail-meta">
          <div class="meta-item">
            <span class="meta-label">Jaar</span>
            <span class="meta-val">{{ project.year }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Rol</span>
            <span class="meta-val">{{ project.role }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Status</span>
            <span class="meta-val blue">{{ project.status }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Skills</span>
            <span class="meta-val">{{ project.tags.join(', ') }}</span>
          </div>
        </div>

        <div class="detail-actions">
          <a v-if="project.live" class="btn btn-primary" :href="project.live" target="_blank">Live bekijken <IconArrowUpRight /></a>
          <a v-if="project.playstore" class="btn btn-primary" :href="project.playstore" target="_blank">Play Store <IconArrowUpRight /></a>
          <a v-if="project.appstore" class="btn btn-primary" :href="project.appstore" target="_blank">App Store <IconArrowUpRight /></a>
        </div>

        <div :class="galleryClass" style="margin-top: 3rem;">
          <div v-for="img in project.screenshots" :key="img" :class="itemClass">
            <img :src="img" alt="Screenshot">
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects-data.js'
import IconArrowLeft from '../components/icons/IconArrowLeft.vue'
import IconArrowUpRight from '../components/icons/IconArrowUpRight.vue'

const route = useRoute()

const project = computed(() => projects.find(p => p.id === Number(route.params.id)))

const isMobileApp = computed(() => project.value && (project.value.tags.includes('Flutter') || project.value.tags.includes('App')))
const galleryClass = computed(() => isMobileApp.value ? 'project-gallery mobile-screens' : 'project-gallery')
const itemClass = computed(() => isMobileApp.value ? 'gallery-item phone-mockup' : 'gallery-item')

const description = ref('')
const descriptionLoading = ref(true)

watchEffect(() => {
  const p = project.value
  if (!p) return

  document.title = `${p.title} — Lucas van de Pol`
  descriptionLoading.value = true

  if (p.descriptionFile) {
    fetch(p.descriptionFile)
      .then(response => {
        if (!response.ok) throw new Error('Bestand niet gevonden')
        return response.text()
      })
      .then(text => {
        description.value = text
        descriptionLoading.value = false
      })
      .catch(err => {
        console.error(err)
        description.value = `<p>${p.long}</p>`
        descriptionLoading.value = false
      })
  } else {
    description.value = `<p>${p.long}</p>`
    descriptionLoading.value = false
  }
})
</script>

<style scoped>
.back-container {
  padding: 2rem 5% 0;
  width: 100%;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.detail-section {
  padding: 2rem 5% 6rem;
  max-width: 900px;
  margin: 0 auto;
}

.back-link:hover {
  color: var(--accent);
}

.detail-thumb {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  margin-bottom: 2.5rem;
  background: var(--bg3);
}

.detail-thumb img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.detail-title {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.15;
  letter-spacing: -0.5px;
}

.detail-body p {
  color: var(--muted);
  font-size: 1rem;
  margin-bottom: 1rem;
  max-width: 680px;
}

.detail-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  margin: 2rem 0;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-size: 0.72rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--muted);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}

.meta-val {
  font-family: 'Manrope', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
}

.meta-val.blue {
  color: var(--accent);
}

.detail-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.not-found {
  padding: 6rem 5%;
  text-align: center;
  color: var(--muted);
}

.not-found h2 {
  font-family: 'Manrope', sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text);
}
</style>
