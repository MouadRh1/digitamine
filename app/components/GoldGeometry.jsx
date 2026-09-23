export default function GoldGeometry({ size = 520 }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.36; // était 0.42 — cercles un peu plus resserrés

  // Position des labels autour de l'orbe
  const labels = [
    { text: "STRATÉGIE",  angle: -90 },  // haut
    { text: "CRÉATION",   angle: 0   },  // droite
    { text: "DIFFUSION",  angle: 90  },  // bas
    { text: "CONVERSION", angle: 180 },  // gauche
  ];

  // Points dorés sur les orbites (positions de départ, avant rotation)
  const orbitDots = [
    { angle: -45, orbit: 0.92 },
    { angle: 20,  orbit: 0.68 },
    { angle: 115, orbit: 0.92 },
    { angle: 160, orbit: 0.68 },
    { angle: 250, orbit: 0.92 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      {/* Halo extérieur très subtil */}
      <div
        className="absolute rounded-full animate-pulse-glow pointer-events-none"
        style={{
          width: size * 0.95,
          height: size * 0.95,
          background: `radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 65%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Cercles concentriques + losange + centre (statique, ne tourne pas) */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="relative pointer-events-none"
      >
        {/* Cercle extérieur fin */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="#C9A227"
          strokeWidth="0.5"
          opacity="0.35"
        />

        {/* Cercle intérieur plus marqué */}
        <circle
          cx={cx}
          cy={cy}
          r={r * 0.62}
          stroke="#C9A227"
          strokeWidth="0.7"
          opacity="0.5"
        />

        {/* Losange central */}
        <polygon
          points={`${cx},${cy - r * 0.5} ${cx + r * 0.5},${cy} ${cx},${cy + r * 0.5} ${cx - r * 0.5},${cy}`}
          stroke="#C9A227"
          strokeWidth="0.9"
          opacity="0.75"
          fill="rgba(201,162,39,0.02)"
        />

        {/* Petit point central additionnel (ambiance) */}
        <circle cx={cx} cy={cy} r="1.5" fill="#C9A227" opacity="0.35" />
      </svg>

      {/* Points dorés en orbite — calque séparé, en rotation continue */}
      <div
        className="absolute animate-slow-rotate pointer-events-none"
        style={{
          width: size,
          height: size,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)",
        }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
          <defs>
            <filter id="dot-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {orbitDots.map((dot, i) => {
            const a = (dot.angle * Math.PI) / 180;
            const rr = r * dot.orbit;
            const dx = cx + Math.cos(a) * rr;
            const dy = cy + Math.sin(a) * rr;
            return (
              <g key={i}>
                {/* halo doux autour du point */}
                <circle cx={dx} cy={dy} r="5" fill="#E6C95C" opacity="0.15" filter="url(#dot-glow)" />
                {/* point plein, bien rond */}
                <circle cx={dx} cy={dy} r="2.6" fill="#C9A227" opacity="0.95" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Texte central "DG / SYSTÈME DIGITAL" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center leading-none">
          <div
            className="font-display tracking-[0.05em]"
            style={{
              fontSize: size * 0.048,
              fontWeight: 400,
              color: "#C9A227",
            }}
          >
            DG
          </div>
          <div
            className="font-display tracking-[0.22em] uppercase mt-1"
            style={{
              fontSize: size * 0.014,
              fontWeight: 400,
              color: "#C9A227",
            }}
          >
            SYSTÈME
          </div>
          <div
            className="font-display tracking-[0.22em] uppercase"
            style={{
              fontSize: size * 0.014,
              fontWeight: 400,
              color: "#C9A227",
            }}
          >
            DIGITAL
          </div>
        </div>
      </div>

      {/* Labels autour (STRATÉGIE, CRÉATION, DIFFUSION, CONVERSION) */}
      {labels.map((label) => {
        const a = (label.angle * Math.PI) / 180;
        const R = r * 1.12; // rayon des labels (juste au-dessus du cercle extérieur)
        const x = 50 + (Math.cos(a) * R * 100) / size;
        const y = 50 + (Math.sin(a) * R * 100) / size;

        return (
          <div
            key={label.text}
            className="absolute font-display tracking-[0.25em] uppercase pointer-events-none whitespace-nowrap"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              fontSize: "9px",
              color: "rgba(201,162,39,0.85)",
              fontWeight: 400,
            }}
          >
            {label.text}
          </div>
        );
      })}
    </div>
  );
}