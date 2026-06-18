<template>
  <nav :class="{ scrolled }">
    <router-link class="nav-logo" to="/"><span>PORT</span>FOLIO</router-link>
    <ul class="nav-links" :class="{ open: menuOpen }">
      <router-link to="/" custom v-slot="{ navigate, isActive }">
        <li><a href="/" :class="{ active: isActive }" @click.prevent="navigate(); closeMenu()">Home</a></li>
      </router-link>
      <router-link to="/about" custom v-slot="{ navigate, isActive }">
        <li><a href="/about" :class="{ active: isActive }" @click.prevent="navigate(); closeMenu()">About</a></li>
      </router-link>
      <router-link to="/projects" custom v-slot="{ navigate, isActive }">
        <li><a href="/projects" :class="{ active: isActive }" @click.prevent="navigate(); closeMenu()">Projecten</a></li>
      </router-link>
      <router-link to="/contact" custom v-slot="{ navigate, isActive }">
        <li><a href="/contact" :class="{ active: isActive }" @click.prevent="navigate(); closeMenu()">Contact</a></li>
      </router-link>
    </ul>
    <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function closeMenu() {
  menuOpen.value = false
}
</script>
