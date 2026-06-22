<template>
  <section class="hero">
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="dot-grid"></div>
    <div class="badge"><IconCheck /> Beschikbaar voor opdrachten</div>
    <h1 class="hero-title">
      <span class="blue">Lucas van de Pol</span>
    </h1>
    <p class="role-line">{{ role }}<span class="caret">|</span></p>
    <p class="hero-sub">
      Ik studeer informatica aan de Hogeschool Leiden en bouw graag mooie, functionele
      applicaties: van webapps tot mobiele apps.
    </p>
    <div class="btn-group">
      <router-link class="btn btn-primary" to="/projects">
        Bekijk Projecten
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </router-link>
      <router-link class="btn btn-ghost" to="/contact">Contact</router-link>
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
import { ref, onMounted, onUnmounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import IconCheck from '../components/icons/IconCheck.vue'
import { projects } from '../data/projects-data.js'

const roles = ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'Student Informatica']
const role = ref('')
let roleIndex = 0
let charIndex = 0
let deleting = false
let timer = null

function tick() {
  const current = roles[roleIndex]
  if (!deleting) {
    charIndex++
    role.value = current.slice(0, charIndex)
    if (charIndex === current.length) {
      deleting = true
      timer = setTimeout(tick, 1800)
      return
    }
  } else {
    charIndex--
    role.value = current.slice(0, charIndex)
    if (charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }
  timer = setTimeout(tick, deleting ? 40 : 80)
}

onMounted(() => { timer = setTimeout(tick, 600) })
onUnmounted(() => clearTimeout(timer))

const stack = [
  { name: 'Java / Spring Boot' },
  { name: 'Vue.js' },
  { name: 'Python' },
  { name: 'Flutter' },
  { name: 'Docker' },
  { name: 'SQL' },
  { name: 'Git & GitHub' },
  { name: 'Figma' },
]
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
.hero-glow {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.55;
  pointer-events: none;
}
.hero-glow-1 {
  width: 480px; height: 480px;
  top: -15%; right: 0%;
  background: radial-gradient(circle, var(--accent-soft-2) 0%, transparent 70%);
}
.hero-glow-2 {
  width: 420px; height: 420px;
  bottom: -20%; left: 0%;
  background: radial-gradient(circle, var(--cyan-soft) 0%, transparent 70%);
}
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
.role-line {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 700;
  min-height: 1.4em;
  margin-top: 1.25rem;
  animation: fadeUp 0.7s 0.15s ease both;
}
.caret {
  display: inline-block;
  color: var(--accent);
  animation: pulse 0.9s steps(1) infinite;
}

.hero-sub {
  max-width: 500px;
  color: var(--muted);
  font-size: 1.05rem;
  margin: 1rem auto 2.5rem;
  animation: fadeUp 0.7s 0.2s ease both;
}
.btn-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeUp 0.7s 0.3s ease both;
}
.stack-section {
  padding: 5rem 5%;
  background: var(--bg2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
.stack-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: 0.9rem 1rem;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--text-2);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.stack-item:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.stack-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: 8px;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
}
.stack-item:nth-child(3n+2) .stack-icon { background: var(--cyan-soft); color: var(--cyan); }
.stack-item:nth-child(3n+3) .stack-icon { background: var(--warning-soft); color: var(--warning); }
.featured-section { padding: 6rem 5%; }
.cta-section { padding: 5rem 5% 6rem; }
.cta-card {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dim) 100%);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-accent);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}
.cta-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 90% 0%, rgba(255,255,255,0.16) 0%, transparent 55%);
}
.cta-card .section-title { color: #fff; }
.cta-card p { color: rgba(255,255,255,0.85); max-width: 420px; }
.cta-card .btn-ghost {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.3);
  color: #fff;
}
.cta-card .btn-ghost:hover { background: rgba(255,255,255,0.18); border-color: #fff; }
.cta-card .btn-primary { background: #fff; color: var(--accent-dim); }
.cta-card .btn-primary:hover { background: rgba(255,255,255,0.9); box-shadow: none; }
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
</style>
