import { motion } from "motion/react";

export const SPECIES = ["daisy", "tulip", "cosmos", "bell", "bud"] as const;
export type Species = (typeof SPECIES)[number];

export const PALETTE = {
  navy: "#012169",
  blue: "#00539B",
  pink: "#EC4899",
  coral: "#F97366",
  amber: "#F59E0B",
  lilac: "#A78BFA",
} as const;
export type PaletteName = keyof typeof PALETTE;

const STEM = "#3F8F5A";
const CENTER = "#FCD34D";

function Head({ species, color }: { species: Species; color: string }) {
  switch (species) {
    case "daisy":
      return (
        <g>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
            <ellipse key={r} cx="20" cy="9" rx="2.6" ry="5.5" fill={color} transform={`rotate(${r} 20 14)`} />
          ))}
          <circle cx="20" cy="14" r="3.4" fill={CENTER} />
        </g>
      );
    case "tulip":
      return (
        <g>
          <path d="M13 8 Q12 19 20 20 Q28 19 27 8 L23.5 12 L20 6 L16.5 12 Z" fill={color} />
          <path d="M20 6 L16.5 12 Q18 18 20 20 Q22 18 23.5 12 Z" fill="#fff" opacity="0.18" />
        </g>
      );
    case "cosmos":
      return (
        <g>
          {[0, 72, 144, 216, 288].map((r) => (
            <path
              key={r}
              d="M20 14 Q15 8 17 4 Q20 2 23 4 Q25 8 20 14 Z"
              fill={color}
              transform={`rotate(${r} 20 14)`}
            />
          ))}
          <circle cx="20" cy="14" r="2.6" fill={CENTER} />
        </g>
      );
    case "bell":
      return (
        <g>
          <path d="M20 7 Q13 8 13 17 L15 15.5 L17.5 18 L20 15.5 L22.5 18 L25 15.5 L27 17 Q27 8 20 7 Z" fill={color} />
          <circle cx="20" cy="18" r="1.1" fill={CENTER} />
        </g>
      );
    case "bud":
      return (
        <g>
          <ellipse cx="20" cy="12" rx="4" ry="6" fill={color} />
          <path d="M15.5 14 Q20 21 24.5 14 Q22 18 20 18 Q18 18 15.5 14 Z" fill={STEM} />
        </g>
      );
  }
}

interface FlowerSvgProps {
  species: Species;
  color: string;
  animate: boolean;
}

/** A single flower drawn in a 40×40 box: stem grows up, then the head opens. */
export function FlowerSvg({ species, color, animate }: FlowerSvgProps) {
  const stemTop = species === "tulip" ? 22 : species === "bell" || species === "bud" ? 20 : 17;

  return (
    <svg viewBox="0 0 40 40" width="100%" height="100%" aria-hidden focusable="false">
      <motion.path
        d={`M20 40 Q18 ${(40 + stemTop) / 2} 20 ${stemTop}`}
        stroke={STEM}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
      <motion.path
        d="M19.5 32 Q13 30 12 25 Q17 25 19.5 30 Z"
        fill={STEM}
        initial={animate ? { scale: 0 } : false}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.25 }}
        style={{ transformBox: "fill-box", transformOrigin: "100% 100%" }}
      />
      <motion.g
        initial={animate ? { scale: 0, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: animate ? 0.4 : 0, type: "spring", stiffness: 320, damping: 16 }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        <g transform="translate(20 15.5) scale(1.35) translate(-20 -14)">
          <Head species={species} color={color} />
        </g>
      </motion.g>
    </svg>
  );
}
