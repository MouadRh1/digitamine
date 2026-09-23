const SHAPES = [
  // 00 — triangle facetté
  <>
    <polygon points="20,4 36,32 4,32" />
    <polygon points="20,4 20,32" opacity="0.5" />
    <polygon points="20,17 36,32 4,32" opacity="0.35" />
  </>,
  // 01 — losange double
  <>
    <polygon points="20,3 34,20 20,37 6,20" />
    <line x1="6" y1="20" x2="34" y2="20" opacity="0.5" />
    <polygon points="20,3 27,20 20,20" opacity="0.35" />
  </>,
  // 02 — prisme
  <>
    <polygon points="10,10 30,10 36,20 30,30 10,30 4,20" />
    <line x1="10" y1="10" x2="10" y2="30" opacity="0.5" />
    <line x1="30" y1="10" x2="30" y2="30" opacity="0.5" />
  </>,
  // 03 — hexagone à facettes
  <>
    <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" />
    <polygon points="20,4 20,36" opacity="0.4" />
    <polygon points="6,12 34,12" opacity="0.3" />
  </>,
  // 04 — étoile à quatre branches
  <>
    <polygon points="20,2 24,17 38,20 24,23 20,38 16,23 2,20 16,17" />
  </>,
  // 05 — cube isométrique
  <>
    <polygon points="20,4 35,12 35,28 20,36 5,28 5,12" />
    <polygon points="20,4 20,20 35,28" opacity="0.45" />
    <polygon points="20,20 5,28 20,36" opacity="0.3" />
  </>,
];

/**
 * Petite icône polyédrique filaire — écho volontaire de la structure 3D du
 * hero, pour garder une seule signature visuelle sur tout le site.
 * `variant` : index 0–5.
 */
export default function GeoIcon({ variant = 0, className = "" }) {
  const shape = SHAPES[variant % SHAPES.length];
  return (
    <svg
      viewBox="0 0 40 40"
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {shape}
    </svg>
  );
}