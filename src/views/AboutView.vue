<template>
  <section>
    <div class="section-label">Over mij</div>
    <div class="section-title">Wie ben ik?</div>
    <div class="divider"></div>

    <div class="about-grid">
      <div class="avatar-wrap">
        <div class="avatar-placeholder">
          <img src="/assets/images/profielfoto_rond.png" class="avatar-img" alt="Profielfoto">
          <div class="avatar-badge">Open for hire ✦</div>
        </div>
      </div>

      <div class="about-text">
        <h2 class="section-title" style="font-size:1.8rem; margin-bottom:1.2rem;">
          Hoi! Ik ben<br><span style="color:var(--blue)">Lucas van de Pol</span>
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
        <div class="interest-icon">💪</div>
        <div>
          <div class="interest-name">Sporten</div>
          <div class="interest-sub">Krachttraining &amp; Voeding</div>
        </div>
      </div>
      <div class="interest-card">
        <div class="interest-icon">⌨️</div>
        <div>
          <div class="interest-name">Programmeren</div>
          <div class="interest-sub">Apps &amp; Software</div>
        </div>
      </div>
      <div class="interest-card">
        <div class="interest-icon">🍖</div>
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
.avatar-placeholder::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, #4a6cf718, transparent 65%);
}
.avatar-badge {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: var(--blue);
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 1px;
  white-space: nowrap;
  z-index: 10;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
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
  border: 2px solid var(--blue);
  flex-shrink: 0;
  margin-top: 4px;
}
.timeline-year {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: var(--blue);
  letter-spacing: 1px;
  margin-bottom: 4px;
}
.timeline-content h4 {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
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
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: border-color 0.2s;
}
.interest-card:hover { border-color: var(--blue); }
.interest-icon { font-size: 1.6rem; }
.interest-name {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 1rem;
}
.interest-sub { color: var(--muted); font-size: 0.78rem; }

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .avatar-placeholder { max-width: 100%; }
}
</style>
