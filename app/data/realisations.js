// ═══════════════════════════════════════════════════════════
// DONNÉES : Réalisations
// ═══════════════════════════════════════════════════════════

/**
 * Catégories utilisées pour les filtres.
 * L'ordre détermine l'ordre d'affichage.
 */
export const categories = [
  "Tout",
  "Stratégie & contenu",
  "Sites web",
  "Meta Ads",
  "Production audiovisuelle",
];

/**
 * Liste complète des projets.
 * Chaque projet a un "size" qui détermine son ratio dans la grille Masonry.
 * sizes possibles : large | tall | medium | square | wide
 */
export const projects = [
  // ═══════════════════════════════════════════
  // STRATÉGIE & CONTENU
  // ═══════════════════════════════════════════
  {
    id: 1,
    title: "PROJECT 01",
    cat: "Stratégie & contenu",
    year: "2026",
    desc: "Stratégie social media et production créative pour une marque lifestyle.",
    img: "/images/realisations/project-01.jpg",
    size: "large",
    link: null, // lien externe optionnel
  },
  {
    id: 4,
    title: "VISUAL IDENTITY",
    cat: "Stratégie & contenu",
    year: "2025",
    desc: "Identité de marque, système de logo et charte graphique.",
    img: "/images/realisations/project-04.jpg",
    size: "square",
    link: null,
  },
  {
    id: 9,
    title: "SOCIAL STRATEGY",
    cat: "Stratégie & contenu",
    year: "2025",
    desc: "Stratégie social multi-plateforme et production mensuelle.",
    img: "/images/realisations/project-09.jpg",
    size: "square",
    link: null,
  },

  // ═══════════════════════════════════════════
  // SITES WEB (tes vraies réalisations)
  // ═══════════════════════════════════════════
  {
    id: 100,
    title: "IFDCE",
    cat: "Sites web",
    year: "2025",
    desc: "Plateforme digitale pour l'Institut de Formation et de Développement des Compétences.",
    img: "/images/realisations/ifdce.jpg",
    size: "large",
    link: "https://ifdce.ma/",
  },
  {
    id: 101,
    title: "WORKAURA",
    cat: "Sites web",
    year: "2025",
    desc: "Site vitrine pour espaces de coworking premium à Casablanca.",
    img: "/images/realisations/workaura.jpg",
    size: "tall",
    link: "https://workaura.ma/",
  },
  {
    id: 102,
    title: "DR CHERKAOUI",
    cat: "Sites web",
    year: "2025",
    desc: "Site médical pour cabinet dentaire moderne et expérience patient optimisée.",
    img: "/images/realisations/dr-cherkaoui.jpg",
    size: "medium",
    link: "https://drcherkaouiabir.com/",
  },
  {
    id: 103,
    title: "CAES ARCHITECTURE",
    cat: "Sites web",
    year: "2025",
    desc: "Site institutionnel pour cabinet d'architecture et design d'intérieur.",
    img: "/images/realisations/caes.jpg",
    size: "square",
    link: "https://www.caesarchitecture.com/en",
  },
  {
    id: 104,
    title: "OPIC MAROC",
    cat: "Sites web",
    year: "2025",
    desc: "Plateforme corporate pour OPIC Maroc, solutions industrielles.",
    img: "/images/realisations/opic.jpg",
    size: "wide",
    link: "https://opicmaroc.com/",
  },
  {
    id: 105,
    title: "CLINIQUE SAADA",
    cat: "Sites web",
    year: "2025",
    desc: "Site médical pour clinique dentaire avec prise de rendez-vous en ligne.",
    img: "/images/realisations/clinique-saada.jpg",
    size: "medium",
    link: "https://cliniquedentairesaada.com/",
  },

  // ═══════════════════════════════════════════
  // META ADS
  // ═══════════════════════════════════════════
  {
    id: 5,
    title: "DIGITAL CAMPAIGN",
    cat: "Meta Ads",
    year: "2026",
    desc: "Campagne publicitaire performante sur Meta et Google.",
    img: "/images/realisations/project-05.jpg",
    size: "wide",
    link: null,
  },
  {
    id: 11,
    title: "PERFORMANCE ADS",
    cat: "Meta Ads",
    year: "2026",
    desc: "Création et stratégie média pour publicité à la performance.",
    img: "/images/realisations/project-11.jpg",
    size: "wide",
    link: null,
  },

  // ═══════════════════════════════════════════
  // PRODUCTION AUDIOVISUELLE
  // ═══════════════════════════════════════════
  {
    id: 2,
    title: "BRAND CAMPAIGN",
    cat: "Production audiovisuelle",
    year: "2026",
    desc: "Identité visuelle complète et système de marque pour un label émergent.",
    img: "/images/realisations/project-02.jpg",
    size: "tall",
    link: null,
  },
  {
    id: 6,
    title: "EDITORIAL SHOOT",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: "Photographie produit et lifestyle pour une campagne saisonnière.",
    img: "/images/realisations/project-06.jpg",
    size: "tall",
    link: null,
  },
  {
    id: 7,
    title: "BRAND FILM",
    cat: "Production audiovisuelle",
    year: "2026",
    desc: "Film de marque cinématographique pour lancement produit.",
    img: "/images/realisations/project-07.jpg",
    size: "wide",
    link: null,
  },
  {
    id: 10,
    title: "CAMPAIGN SHOOT",
    cat: "Production audiovisuelle",
    year: "2026",
    desc: "Photographie de campagne pour lancement collection été.",
    img: "/images/realisations/project-10.jpg",
    size: "medium",
    link: null,
  },
  {
    id: 12,
    title: "MOTION CONTENT",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: "Motion design et vidéo courte pour les réseaux sociaux.",
    img: "/images/realisations/project-12.jpg",
    size: "square",
    link: null,
  },
];

/**
 * Map des ratios d'aspect selon la clé "size" de chaque projet.
 * Utilisé pour la grille Masonry.
 */
export const aspectMap = {
  large: "16/10",
  tall: "3/4",
  medium: "4/3",
  square: "1/1",
  wide: "16/9",
};