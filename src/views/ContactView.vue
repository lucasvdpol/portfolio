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
            <div class="contact-link-icon"><IconLinkedIn /></div>
            <div>
              <div class="contact-link-name">LinkedIn</div>
              <div class="contact-link-handle">https://www.linkedin.com/in/lucas-van-de-pol-b027a43b6/</div>
            </div>
          </a>

          <a class="contact-link-item" href="mailto:lucasvdpol04@gmail.com">
            <div class="contact-link-icon"><IconMail /></div>
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
import IconLinkedIn from '../components/icons/IconLinkedIn.vue'
import IconMail from '../components/icons/IconMail.vue'

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
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: var(--text);
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.contact-link-item:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-md);
  transform: translateX(4px);
}
.contact-link-icon {
  width: 44px; height: 44px;
  border-radius: var(--radius-md);
  background: var(--accent-soft);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: var(--accent);
}
.contact-link-name {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 1rem;
}
.contact-link-handle { color: var(--muted); font-size: 0.82rem; }

.availability {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.9rem 1.2rem;
  background: var(--success-soft);
  border: 1px solid var(--success-border);
  border-radius: var(--radius-md);
  margin-bottom: 2rem;
}
.avail-dot {
  width: 10px; height: 10px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse 2s infinite;
  flex-shrink: 0;
}
.availability p {
  font-size: 0.85rem;
  color: var(--success);
  margin: 0;
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
