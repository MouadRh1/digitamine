// ═══════════════════════════════════════════════════════════
// DONNÉES : Réalisations
// ═══════════════════════════════════════════════════════════

/**
 * Catégories utilisées pour les filtres.
 * L'ordre détermine l'ordre d'affichage.
 */
export const categories = [
  "Tout",
  "Social Media Marketing",
  "Sites web",
  "Production audiovisuelle",
  "Couverture Media",
];

/**
 * Liste complète des projets.
 * Chaque projet a un "size" qui détermine son ratio dans la grille Masonry.
 * sizes possibles : large | tall | medium | square | wide
 *
 * Champs :
 * - id     : identifiant unique
 * - title  : titre affiché sur la card
 * - cat    : catégorie (utilisée pour les filtres)
 * - year   : année
 * - desc   : description (peut être null)
 * - img    : image de couverture OU poster de la vidéo
 * - video  : chemin vers la vidéo (optionnel — si présent, la card est une vidéo)
 * - size   : ratio Masonry
 * - link   : lien externe (optionnel)
 */
export const projects = [
  // ═══════════════════════════════════════════
  // SOCIAL MEDIA MARKETING 6 photos ───
  // ═══════════════════════════════════════════
  {
    id: 401,
    title: "Ifdce",
    cat: "Social Media Marketing",
    year: "2026",
    desc: "Stratégie social media et production créative pour une marque lifestyle.",
    img: "/images/realisations/smma/ifdce.PNG",
    video: null,
    size: "large",
    link: null,
  },
  {
    id: 402,
    title: "Itgiah",
    cat: "Social Media Marketing",
    year: "2025",
    desc: "Identité de marque, système de logo et charte graphique.",
    img: "/images/realisations/smma/itgiah.PNG",
    video: null,
    size: "square",
    link: null,
  },
  {
    id: 403,
    title: "Itgiah",
    cat: "Social Media Marketing",
    year: "2025",
    desc: "Stratégie social multi-plateforme et production mensuelle.",
    img: "/images/realisations/smma/itgiah_1.PNG",
    video: null,
    size: "square",
    link: null,
  },
  {
    id: 404,
    title: "workaura",
    cat: "Social Media Marketing",
    year: "2025",
    desc: "Campagne social media — direction artistique et production visuelle.",
    img: "/images/realisations/smma/workaura.PNG",
    video: null,
    size: "large",
    link: null,
  },
  {
    id: 405,
    title: "Onigt",
    cat: "Social Media Marketing",
    year: "2025",
    desc: "Contenu créatif pour marque lifestyle — série photo.",
    img: "/images/realisations/smma/onigt.PNG",
    video: null,
    size: "tall",
    link: null,
  },
  {
    id: 406,
    title: "Maison Ensemble",
    cat: "Social Media Marketing",
    year: "2025",
    desc: "Production visuelle pour réseaux sociaux — format carré.",
    img: "/images/realisations/smma/maison.PNG",
    video: null,
    size: "square",
    link: null,
  },

  // ═══════════════════════════════════════════
  // SITES WEB
  // ═══════════════════════════════════════════
  {
    id: 100,
    title: "IFDCE",
    cat: "Sites web",
    year: "2025",
    desc: "Plateforme digitale pour l'Institut de Formation et de Développement des Compétences.",
    img: "/images/siteweb/ifdce.png",
    video: null,
    size: "large",
    link: "https://ifdce.ma/",
  },
  {
    id: 101,
    title: "WORKAURA",
    cat: "Sites web",
    year: "2025",
    desc: "Site vitrine pour espaces de coworking premium à Casablanca.",
    img: "/images/siteweb/workaura.png",
    video: null,
    size: "tall",
    link: "https://workaura.ma/",
  },
  {
    id: 103,
    title: "CAES ARCHITECTURE",
    cat: "Sites web",
    year: "2025",
    desc: "Site institutionnel pour cabinet d'architecture et design d'intérieur.",
    img: "/images/siteweb/caes.png",
    video: null,
    size: "square",
    link: "https://www.caesarchitecture.com/en",
  },
  {
    id: 104,
    title: "OPIC MAROC",
    cat: "Sites web",
    year: "2025",
    desc: "Plateforme corporate pour OPIC Maroc, solutions industrielles.",
    img: "/images/siteweb/opic.png",
    video: null,
    size: "wide",
    link: "https://opicmaroc.com/",
  },
  {
    id: 105,
    title: "CLINIQUE SAADA",
    cat: "Sites web",
    year: "2025",
    desc: "Site médical pour clinique dentaire avec prise de rendez-vous en ligne.",
    img: "/images/siteweb/clinique_smile.png",
    video: null,
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
    video: null,
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
    video: null,
    size: "wide",
    link: null,
  },

  // ═══════════════════════════════════════════
  // PRODUCTION AUDIOVISUELLE (21 vidéos)
  // ═══════════════════════════════════════════

  // ─── CASA HARRIS (7 vidéos) ───
  {
    id: 200,
    title: "CASA HARRIS 1",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/casa-harris/01.jpg",
    video: "/videos/realisations/casa_harris/casa_harris_1.mp4",
    size: "tall",
    link: null,
  },
  {
    id: 201,
    title: "CASA HARRIS 2",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/casa-harris/02.jpg",
    video: "/videos/realisations/casa_harris/casa_harris_2.mp4",
    size: "medium",
    link: null,
  },
  {
    id: 202,
    title: "CASA HARRIS 3",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/casa-harris/03.jpg",
    video: "/videos/realisations/casa_harris/casa_harris_3.mp4",
    size: "wide",
    link: null,
  },
  {
    id: 203,
    title: "CASA HARRIS 4",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/casa-harris/04.jpg",
    video: "/videos/realisations/casa_harris/casa_harris_4.mp4",
    size: "square",
    link: null,
  },
  {
    id: 204,
    title: "CASA HARRIS 5",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/casa-harris/05.jpg",
    video: "/videos/realisations/casa_harris/casa_harris_5.mp4",
    size: "tall",
    link: null,
  },
  {
    id: 205,
    title: "CASA HARRIS 6",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/casa-harris/06.jpg",
    video: "/videos/realisations/casa_harris/casa_harris_6.mp4",
    size: "medium",
    link: null,
  },
  {
    id: 206,
    title: "CASA HARRIS 7",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/casa-harris/07.jpg",
    video: "/videos/realisations/casa_harris/casa_harris_7.mp4",
    size: "wide",
    link: null,
  },

  // ─── IFDCE (8 vidéos) ───
  {
    id: 210,
    title: "IFDCE 1",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/ifdce/01.jpg",
    video: "/videos/realisations/ifdce/ifdce_1.mp4",
    size: "wide",
    link: null,
  },
  {
    id: 211,
    title: "IFDCE 2",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/ifdce/02.jpg",
    video: "/videos/realisations/ifdce/ifdce_2.mp4",
    size: "tall",
    link: null,
  },
  {
    id: 212,
    title: "IFDCE 3",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/ifdce/03.jpg",
    video: "/videos/realisations/ifdce/ifdce_3.mp4",
    size: "medium",
    link: null,
  },
  {
    id: 213,
    title: "IFDCE 4",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/ifdce/04.jpg",
    video: "/videos/realisations/ifdce/ifdce_4.mp4",
    size: "square",
    link: null,
  },
  {
    id: 214,
    title: "IFDCE 5",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/ifdce/05.jpg",
    video: "/videos/realisations/ifdce/ifdce_5.mp4",
    size: "wide",
    link: null,
  },
  {
    id: 215,
    title: "IFDCE 6",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/ifdce/06.jpg",
    video: "/videos/realisations/ifdce/ifdce_6.mp4",
    size: "tall",
    link: null,
  },
  {
    id: 216,
    title: "IFDCE 7",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/ifdce/07.jpg",
    video: "/videos/realisations/ifdce/ifdce_7.mp4",
    size: "medium",
    link: null,
  },
  {
    id: 217,
    title: "IFDCE 8",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/ifdce/08.jpg",
    video: "/videos/realisations/ifdce/ifdce_8.mp4",
    size: "square",
    link: null,
  },

  // ─── WORKAURA (6 vidéos) ───
  {
    id: 220,
    title: "WORKAURA 1",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/workaura/01.jpg",
    video: "/videos/realisations/workaura/workaura_1.mp4",
    size: "tall",
    link: null,
  },
  {
    id: 221,
    title: "WORKAURA 2",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/workaura/02.jpg",
    video: "/videos/realisations/workaura/workaura_2.mp4",
    size: "wide",
    link: null,
  },
  {
    id: 222,
    title: "WORKAURA 3",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/workaura/03.jpg",
    video: "/videos/realisations/workaura/workaura_3.mp4",
    size: "medium",
    link: null,
  },
  {
    id: 223,
    title: "WORKAURA 4",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/workaura/04.jpg",
    video: "/videos/realisations/workaura/workaura_4.mp4",
    size: "square",
    link: null,
  },
  {
    id: 224,
    title: "WORKAURA 5",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/workaura/05.jpg",
    video: "/videos/realisations/workaura/workaura_5.mp4",
    size: "tall",
    link: null,
  },
  {
    id: 225,
    title: "WORKAURA 6",
    cat: "Production audiovisuelle",
    year: "2025",
    desc: null,
    img: "/images/realisations/workaura/06.jpg",
    video: "/videos/realisations/workaura/workaura_6.mp4",
    size: "wide",
    link: null,
  },

  // ═══════════════════════════════════════════
  // COUVERTURE MEDIA (5 vidéos d'événements)
  // ═══════════════════════════════════════════
  {
    id: 300,
    title: "COUVERTURE ÉVÉNEMENT 1",
    cat: "Couverture Media",
    year: "2025",
    desc: null,
    img: "/images/realisations/couverture-media/01.jpg",
    video: "/videos/realisations/events/event_1.mp4",
    size: "wide",
    link: null,
  },
  {
    id: 301,
    title: "COUVERTURE ÉVÉNEMENT 2",
    cat: "Couverture Media",
    year: "2025",
    desc: null,
    img: "/images/realisations/couverture-media/02.jpg",
    video: "/videos/realisations/events/event_2.mp4",
    size: "tall",
    link: null,
  },
  {
    id: 302,
    title: "COUVERTURE ÉVÉNEMENT 3",
    cat: "Couverture Media",
    year: "2025",
    desc: null,
    img: "/images/realisations/couverture-media/03.jpg",
    video: "/videos/realisations/events/event_3.mp4",
    size: "medium",
    link: null,
  },
  {
    id: 303,
    title: "COUVERTURE ÉVÉNEMENT 4",
    cat: "Couverture Media",
    year: "2025",
    desc: null,
    img: "/images/realisations/couverture-media/04.jpg",
    video: "/videos/realisations/events/event_4.mp4",
    size: "square",
    link: null,
  },
  {
    id: 304,
    title: "COUVERTURE ÉVÉNEMENT 5",
    cat: "Couverture Media",
    year: "2025",
    desc: null,
    img: "/images/realisations/couverture-media/05.jpg",
    video: "/videos/realisations/events/event_5.mp4",
    size: "wide",
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