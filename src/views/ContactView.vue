<template>
  <section>
    <div class="section-label">Contact</div>
    <div class="section-title">Neem contact met mij op</div>
    <div class="divider"></div>
    <p class="section-desc">
      Heb je een vraag, idee of wil je samenwerken? Stuur me een bericht en ik reageer zo snel mogelijk!
    </p>

    <div class="availability">
      <div class="avail-dot"></div>
      <p>Momenteel beschikbaar voor een stage</p>
    </div>

    <div class="contact-grid">
      <div>
        <div class="section-label" style="margin-bottom: 0.5rem;">Vind mij online</div>
        <p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 0;">
          Verbinden via een van de onderstaande platforms.
        </p>
        <div class="contact-links">
          <a class="contact-link-item" href="https://www.linkedin.com/in/lucas-van-de-pol-b027a43b6/" target="_blank">
            <div class="contact-link-icon">in</div>
            <div>
              <div class="contact-link-name">LinkedIn</div>
              <div class="contact-link-handle">https://www.linkedin.com/in/lucas-van-de-pol-b027a43b6/</div>
            </div>
          </a>

          <a class="contact-link-item" href="mailto:lucasvdpol04@gmail.com">
            <div class="contact-link-icon">✉</div>
            <div>
              <div class="contact-link-name">Email</div>
              <div class="contact-link-handle">lucasvdpol04@gmail.com</div>
            </div>
          </a>
        </div>
      </div>

      <div>
        <div class="section-label" style="margin-bottom: 0.5rem;">Stuur een bericht</div>
        <p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 0.8rem;">
          Of neem contact op via het onderstaande formulier.
        </p>
        <iframe
          data-tally-src="https://tally.so/embed/eq9y8o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="350"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Neem Contact Op">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) return
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://tally.so/widgets/embed.js'
  document.body.appendChild(script)
})
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-links { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }

.contact-link-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text);
  transition: border-color 0.2s, transform 0.2s;
}
.contact-link-item:hover {
  border-color: var(--blue);
  transform: translateX(4px);
}
.contact-link-icon {
  width: 44px; height: 44px;
  border-radius: 8px;
  background: var(--blue-glow);
  border: 1px solid var(--blue);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  color: var(--blue);
}
.contact-link-name {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 1rem;
}
.contact-link-handle { color: var(--muted); font-size: 0.82rem; }

.availability {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.9rem 1.2rem;
  background: #0d1f0e;
  border: 1px solid #2a7a4a;
  border-radius: 8px;
  margin-bottom: 2rem;
}
.avail-dot {
  width: 10px; height: 10px;
  background: #5ce6a0;
  border-radius: 50%;
  animation: pulse 2s infinite;
  flex-shrink: 0;
}
.availability p {
  font-size: 0.85rem;
  color: #5ce6a0;
  margin: 0;
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
