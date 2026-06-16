<template>
  <NavBar />
  <div class="page-content">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>
