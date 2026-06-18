<template>
  <section class="hero">
    <div class="dot-grid"></div>
    <div class="badge"><IconCheck /> Available for opportunities</div>
    <h1 class="hero-title">
      Hoi, ik ben<br>
      <span class="blue">Lucas van de Pol</span><br>
    </h1>
    <p class="hero-sub">
      Ik studeer informatica aan de Hogeschool Leiden met een oog voor Software Engineering.
    </p>
    <div class="btn-group">
      <router-link class="btn btn-primary" to="/projects">
        Bekijk Projecten
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </router-link>
      <router-link class="btn btn-ghost" to="/contact">Contact</router-link>
    </div>
    <div class="hero-stats">
      <div class="stat"><div class="stat-num">4+</div><div class="stat-label">Projecten</div></div>
      <div class="stat"><div class="stat-num">2</div><div class="stat-label">Jaar ervaring</div></div>
      <div class="stat"><div class="stat-num">∞</div><div class="stat-label">Ambitie</div></div>
    </div>
  </section>

  <div class="featured-section">
    <div class="featured-header">
      <div>
        <div class="section-label">Uitgelicht</div>
        <div class="section-title" style="font-size:1.8rem;">Recente Projecten</div>
        <div class="divider"></div>
      </div>
      <router-link class="view-all" to="/projects">Alle projecten →</router-link>
    </div>
    <div class="projects-grid">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import IconCheck from '../components/icons/IconCheck.vue'
import { projects } from '../data/projects-data.js'
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 68px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 5%;
  position: relative;
  overflow: hidden;
}
.hero > * { position: relative; z-index: 1; }
.hero .dot-grid { z-index: 0; }
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.82rem;
  color: var(--accent);
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  background: var(--accent-soft);
  margin-bottom: 2rem;
  animation: fadeDown 0.6s ease both;
}
.hero-title {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(2.75rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1px;
  animation: fadeUp 0.7s 0.1s ease both;
}
.hero-title .blue { color: var(--accent); }
.hero-title .dim  { color: var(--muted); }
.hero-sub {
  max-width: 500px;
  color: var(--muted);
  font-size: 1.05rem;
  margin: 1.5rem auto 2.5rem;
  animation: fadeUp 0.7s 0.2s ease both;
}
.btn-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeUp 0.7s 0.3s ease both;
}
.hero-stats {
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
  animation: fadeUp 0.7s 0.4s ease both;
}
.stat { text-align: center; }
.stat-num {
  font-family: 'Manrope', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
}
.stat-label {
  font-size: 0.8rem;
  color: var(--muted);
}
.featured-section { padding: 2rem 5% 6rem; }
.featured-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
.view-all {
  color: var(--accent);
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  transition: opacity 0.2s;
}
.view-all:hover { opacity: 0.7; }
@media (max-width: 480px) {
  .hero-stats { flex-direction: column; gap: 1.5rem; }
}
</style>
