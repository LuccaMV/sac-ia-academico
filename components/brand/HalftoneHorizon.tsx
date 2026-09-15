import { useId } from "react";

// Direção de imagem do brand kit: amanhecer em Alfenas em retícula, sobre lago e horizonte.
// A cena é sempre escura, como uma fotografia, nos dois temas.
export function HalftoneHorizon({ className }: { className?: string }) {
  const suffix = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const id = (name: string) => `${name}-${suffix}`;
  const ref = (name: string) => `url(#${id(name)})`;

  return (
    <svg
      className={className}
      viewBox="0 0 640 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={id("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#061A2B" />
          <stop offset="0.62" stopColor="#0B3A5C" />
          <stop offset="1" stopColor="#0E5577" />
        </linearGradient>
        <pattern id={id("dot-l")} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="2.3" fill="#00ABC5" />
        </pattern>
        <pattern id={id("dot-m")} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.5" fill="#00ABC5" />
        </pattern>
        <pattern id={id("dot-s")} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.8" fill="#BDEFF6" />
        </pattern>
        <pattern id={id("sun-dots")} width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="1.9" fill="#F5B83D" />
        </pattern>
        <pattern id={id("scan")} width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="1.2" fill="rgba(189,239,246,.22)" />
        </pattern>
        <radialGradient id={id("sun-fade")} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.55" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={id("sun-mask")}>
          <circle cx="470" cy="150" r="84" fill={ref("sun-fade")} />
        </mask>
        <linearGradient id={id("fade-up")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <mask id={id("hill-mask")}>
          <rect width="640" height="260" fill={ref("fade-up")} />
        </mask>
      </defs>

      <rect width="640" height="260" fill={ref("sky")} />
      <rect width="640" height="260" fill={ref("dot-s")} opacity="0.25" />
      <rect x="386" y="66" width="168" height="168" fill={ref("sun-dots")} mask={ref("sun-mask")} opacity="0.85" />
      <path
        d="M0 150 C80 128 150 118 230 136 C310 154 360 110 440 114 C520 118 580 140 640 128 V260 H0 Z"
        fill={ref("dot-m")}
        opacity="0.45"
      />
      <path
        id={id("front")}
        d="M0 176 C90 156 160 166 250 158 C340 150 390 172 470 166 C550 160 600 170 640 164 V260 H0 Z"
        fill="#0B2F4C"
      />
      <path
        d="M0 176 C90 156 160 166 250 158 C340 150 390 172 470 166 C550 160 600 170 640 164 V260 H0 Z"
        fill={ref("dot-l")}
        mask={ref("hill-mask")}
        opacity="0.7"
      />
      <rect y="202" width="640" height="58" fill="#061A2B" />
      <rect y="202" width="640" height="58" fill={ref("scan")} />
      <path d="M410 212 H530 M430 222 H510 M448 232 H492" stroke="#F5B83D" strokeWidth="1.4" opacity="0.55" />
    </svg>
  );
}
