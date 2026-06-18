<template>
  <section>
    <div class="section-label">Over mij</div>
    <div class="section-title">Wie ben ik?</div>
    <div class="divider"></div>

    <div class="about-grid">
      <div class="avatar-wrap">
        <div class="avatar-placeholder">
          <img src="/assets/images/profielfoto_rond.png" class="avatar-img" alt="Profielfoto">
          <div class="avatar-badge"><IconCheck /> Open for hire</div>
        </div>
      </div>

      <div class="about-text">
        <h2 class="section-title" style="font-size:1.8rem; margin-bottom:1.2rem;">
          Hoi! Ik ben<br><span style="color:var(--accent)">Lucas van de Pol</span>
        </h2>
        <p>
          Ik ben een student Informatica met een passie voor het bouwen van mooie, functionele applicaties.
          Ik ben nieuwsgierig, gedreven en leer elke dag bij.
        </p>
        <p>
          Naast school ben ik veel bezig met het ontwerpen van mijn eigen app. Verder ben ik veel aan het werk en hou ik heel erg van sporten.
        </p>
        <p>
          Op dit portfolio vind je een selectie van projecten waar ik trots op ben.
          Elk project heeft me iets nieuws geleerd en me een stap verder gebracht.
        </p>

        <div class="skills-list">
          <span class="skill-tag">HTML / CSS</span>
          <span class="skill-tag">Java / Spring Boot</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Flutter</span>
          <span class="skill-tag">Git &amp; GitHub</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">Figma</span>
          <span class="skill-tag">SQL</span>
        </div>
      </div>
    </div>
  </section>

  <section style="padding-top: 1rem;">
    <div class="section-label">Ervaring &amp; Opleiding</div>
    <div class="section-title" style="font-size: 1.8rem;">Mijn Pad</div>
    <div class="divider"></div>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-year">September, 2024 - heden</div>
          <h4>Student Informatica</h4>
          <p>Student Informatica op de Hogeschool Leiden en daarnaast bezig met mijn eigen projecten.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-year">Mei, 2024</div>
          <h4>Hogeschool Leiden</h4>
          <p>De TU was voor mij iets te hoog gegrepen. Daarom heb ik mij aangemeld voor een HBO studie Informatica.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-year">September, 2023</div>
          <h4>Computer Science & Engineering</h4>
          <p>Begonnen met de studie Computer Sciene & Engineering op de TU Delft.</p>
        </div>
      </div>
    </div>
  </section>

  <section style="padding-top: 1rem;">
    <div class="section-label">Buiten het coderen</div>
    <div class="section-title" style="font-size: 1.8rem;">Interesses</div>
    <div class="divider"></div>

    <div class="interests-grid">
      <div class="interest-card">
        <div class="interest-icon"><IconDumbbell /></div>
        <div>
          <div class="interest-name">Sporten</div>
          <div class="interest-sub">Krachttraining &amp; Voeding</div>
        </div>
      </div>
      <div class="interest-card">
        <div class="interest-icon"><IconCode /></div>
        <div>
          <div class="interest-name">Programmeren</div>
          <div class="interest-sub">Apps &amp; Software</div>
        </div>
      </div>
      <div class="interest-card">
        <div class="interest-icon"><IconFlame /></div>
        <div>
          <div class="interest-name">Barbecueën</div>
          <div class="interest-sub">Biefstuk &amp; Kip</div>
        </div>
      </div>
    </div>

    <div style="margin-top: 3rem;">
      <router-link class="btn btn-primary" to="/contact">Neem contact op</router-link>
    </div>
  </section>
</template>

<script setup>
import IconCheck from '../components/icons/IconCheck.vue'
import IconDumbbell from '../components/icons/IconDumbbell.vue'
import IconCode from '../components/icons/IconCode.vue'
import IconFlame from '../components/icons/IconFlame.vue'
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.avatar-wrap { position: relative; }
.avatar-placeholder {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  position: relative;
  margin: 0 auto;
}
.avatar-badge {
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--accent);
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  white-space: nowrap;
  z-index: 10;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid var(--bg2);
  display: block;
}
.about-text p { color: var(--muted); margin-bottom: 1rem; }

.timeline { margin-top: 3rem; }
.timeline-item {
  display: flex;
  gap: 1.5rem;
  padding-bottom: 2rem;
  position: relative;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: 10px; top: 24px;
  width: 1px;
  height: calc(100% - 10px);
  background: var(--border);
}
.timeline-item:last-child::before { display: none; }
.timeline-dot {
  width: 20px; height: 20px;
  border-radius: 50%;
  background: var(--bg3);
  border: 2px solid var(--accent);
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
  margin-top: 4px;
}
.timeline-year {
  font-family: 'Manrope', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 4px;
}
.timeline-content h4 {
  font-family: 'Manrope', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.timeline-content p { color: var(--muted); font-size: 0.85rem; margin: 0; }

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
.interest-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.interest-card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.interest-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: 10px;
}
.interest-name {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 1rem;
}
.interest-sub { color: var(--muted); font-size: 0.78rem; }

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .avatar-placeholder { max-width: 100%; }
}
</style>
