// ═══════════════════════════════════════════════════════════
// PROJECTS DATA — Aanpassen naar jouw eigen projecten!
// ═══════════════════════════════════════════════════════════

export const projects = [
  {
    id: 0,
    title: "VOYD Fitness App",
    short: "Een fitness tracking app gemaakt voor echte sporters.",
    long: "VOYD Fitness is een fullstack fitness applicatie die ik heb gebouwd als persoonlijk project. Gebruikers kunnen workouts plannen, sets en reps bijhouden, en hun progressie over tijd bekijken via grafieken. De app heeft een native feel met soepele animaties en een intuïtief design. Het backend is gebouwd met Node.js en de data wordt opgeslagen in SQLite.",
    tags: ["Flutter", "Spring Boot", "PostgreSQL", "Railway"],
    year: "2025",
    role: "Fullstack Developer",
    status: "Live",
    playstore: "https://play.google.com/store/apps/details?id=com.invictumfitness.app",
    appstore: "https://apps.apple.com/nl/app/invictum-fitness/id6756327222",
    live: "https://voydfitness.com",
    color: "#4a6cf7",
    color2: "#2d4fd4",
    icon: "💪",
    image: "/assets/images/voyd/logo.png",
    descriptionFile: "/assets/descriptions/voyd.txt",
    screenshots: [
      "/assets/images/voyd/frame11.png",
      "/assets/images/voyd/frame16.png",
      "/assets/images/voyd/frame15.png",
      "/assets/images/voyd/frame14.png",
      "/assets/images/voyd/frame13.png",
      "/assets/images/voyd/frame12.png",
    ]
  },
  {
    id: 1,
    title: "Betabuddies",
    short: "Een app voor het verbinden van de bewoners van het Betaplein in Leiden.",
    long: "Tijdens dit project heb ik gewerkt als ontwerper van de app. De app is gemaakt om meer verbindne te creëeren tussen de bewoners van het Betaplein. Daarbij zijn wij gekomen tot evenementen, vrienden toevoegen, vouchers met lokale ondernemingen en communities.",
    tags: ["Product Design", "Flutter", "UX Research", "Ethics by Design", "Figma"],
    year: "2026",
    role: "Product Designer",
    status: "MVP",
    descriptionFile: "/assets/descriptions/betabuddies.txt",
    // github: "https://github.com",
    // live: "#",
    color: "#5ce1e6",
    color2: "#3ab8bc",
    icon: "🌤",
    image: "/assets/images/betabuddies/bever2.png",
    screenshots: [
      "/assets/images/betabuddies/low-fi.png",
      "/assets/images/betabuddies/final_product.png",
      "/assets/images/betabuddies/hi-fi.png",
      "/assets/images/betabuddies/features.png",
      "/assets/images/betabuddies/style_guide.png",
      "/assets/images/betabuddies/qr_resultaten.png",
    ]
  },
  {
    id: 2,
    title: "Luxury Products Holding",
    short: "Features bouwen voor een opdrachtgever in een bestaande website.",
    long: "Een krachtige CLI-tool waarmee je taken kunt aanmaken, prioriteren, filteren en markeren als voltooid. Taken worden opgeslagen in een SQLite database zodat alles bewaard blijft tussen sessies. Het project heeft me veel geleerd over Python, databases en terminal UX design. De tool heeft ook een export-functie naar CSV en markdown.",
    tags: ["Java", "PostgreSQL", "Docker", "HTML"],
    year: "2025",
    role: "Fullstack Developer",
    status: "MVP",
    // github: "https://github.com",
    live: null,
    color: "#a78bfa",
    color2: "#7c3aed",
    icon: "✅",
    image: "/assets/images/holding/insofad.png",
    descriptionFile: "/assets/descriptions/luxuryproductsholding.txt",
    screenshots: [
      "/assets/images/holding/retour_aanvraag.png",
      "/assets/images/holding/retour_zonder_reden.png",
      "/assets/images/holding/retour_met_reden.png",
      "/assets/images/holding/retour_aangevraagd.png",
      "/assets/images/holding/retour_label.png",
      "/assets/images/holding/RetourERD.drawio.png",
      "/assets/images/holding/usecasediagram.drawio.png",
      "/assets/images/holding/docker.png",
    ]
  },
];

export function makeThumbnailSVG(p, w = 640, h = 360) {
  const gridV = Array.from({length: 8}, (_, i) =>
    `<line x1="${i*(w/7)}" y1="0" x2="${i*(w/7)}" y2="${h}" stroke="${p.color}" stroke-opacity="0.06" stroke-width="1"/>`
  ).join('');

  const gridH = Array.from({length: 5}, (_, i) =>
    `<line x1="0" y1="${i*(h/4)}" x2="${w}" y2="${i*(h/4)}" stroke="${p.color}" stroke-opacity="0.06" stroke-width="1"/>`
  ).join('');

  // VERANDERING HIER:
  // We gebruiken nu 'meet' in plaats van 'slice' om inzoomen te voorkomen.
  // We zetten de height op 70% van de container zodat hij niet tegen de randen plakt.
  const mainContent = p.image
    ? `<image href="${p.image}" x="0" y="${h*0.1}" width="100%" height="${h*0.7}" preserveAspectRatio="xMidYMid meet" />`
    : `<text x="${w*0.5}" y="${h*0.52}" text-anchor="middle" font-size="${h*0.28}" dominant-baseline="middle">${p.icon}</text>`;

  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tg${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.color}" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="${p.color2}" stop-opacity="0.05"/>
      </linearGradient>
      <filter id="blur${p.id}"><feGaussianBlur stdDeviation="40"/></filter>
    </defs>

    <rect width="${w}" height="${h}" fill="#0f1220"/>
    <circle cx="${w*0.65}" cy="${h*0.4}" r="${h*0.55}" fill="${p.color}" opacity="0.08" filter="url(#blur${p.id})"/>

    ${gridV}${gridH}

    ${mainContent}

    <rect x="${w*0.3}" y="${h*0.82}" width="${w*0.4}" height="2" rx="1" fill="${p.color}" opacity="0.5"/>
    <rect x="0" y="0" width="4" height="${h}" fill="${p.color}" opacity="0.5"/>
    <text x="${w-20}" y="24" text-anchor="end" font-family="monospace" font-size="11" fill="${p.color}" opacity="0.6">${p.year}</text>
  </svg>`;
}
