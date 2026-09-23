"use client";

import dynamic from "next/dynamic";

// Chargement dynamique côté client uniquement
const SVG3D = dynamic(
  () => import("3dsvg").then((m) => ({ default: m.SVG3D })),
  { ssr: false }
);

export default function SVG3DIcon({ svg, size = 70 }) {
  return (
    <SVG3D
      svg={svg}
      material="gold"
      color="#C9A227"
      depth={1.5}
      smoothness={0.3}
      interactive={false}
      shadow={false}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}