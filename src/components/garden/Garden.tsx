import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Sprout } from "lucide-react";
import { FlowerSvg, PALETTE } from "./flowers";
import { GRID_SIZE, PLOT_COUNT, type PlantedFlower } from "./useGarden";

interface GardenProps {
  flowers: PlantedFlower[];
  status: string;
  onReset: () => void;
}

export function Garden({ flowers, status, onReset }: GardenProps) {
  const mountedAt = useRef(Date.now());
  const reduceMotion = useReducedMotion();
  const [focused, setFocused] = useState<PlantedFlower | null>(null);
  const [confirmingReset, setConfirmingReset] = useState(false);

  useEffect(() => {
    if (!confirmingReset) return;
    const timer = window.setTimeout(() => setConfirmingReset(false), 3000);
    return () => window.clearTimeout(timer);
  }, [confirmingReset]);

  const byCell = new Map(flowers.map((f) => [f.cell, f]));
  const caption = focused
    ? `Planted when someone asked “${focused.query}”`
    : status || (flowers.length === 0 ? "Ask something to plant the first flower." : "Tap or hover a flower to see what grew it.");

  return (
    <aside className="naa-garden" aria-label="Question garden">
      <div className="naa-garden-head">
        <div>
          <p className="naa-garden-title">
            <Sprout aria-hidden className="naa-garden-icon" />
            little garden
          </p>
          <p className="naa-garden-sub">Every question plants a flower.</p>
        </div>
        <span className="naa-garden-count">
          {flowers.length}/{PLOT_COUNT}
        </span>
      </div>

      <div
        className="naa-plots"
        role="group"
        aria-label={`Garden with ${flowers.length} of ${PLOT_COUNT} plots planted`}
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
        onMouseLeave={() => setFocused(null)}
      >
        {Array.from({ length: PLOT_COUNT }, (_, cell) => {
          const flower = byCell.get(cell);
          const shade = (Math.floor(cell / GRID_SIZE) + cell) % 2 === 0 ? "naa-plot--light" : "naa-plot--dark";
          if (!flower) return <div key={cell} className={`naa-plot ${shade}`} />;

          return (
            <button
              key={`${cell}-${flower.plantedAt}`}
              type="button"
              className={`naa-plot ${shade} naa-plot--planted`}
              aria-label={`${flower.color} ${flower.species}, planted for “${flower.query}”`}
              onMouseEnter={() => setFocused(flower)}
              onFocus={() => setFocused(flower)}
              onBlur={() => setFocused(null)}
            >
              <span
                className="naa-flower"
                style={{ transform: `rotate(${flower.tilt}deg) scale(${flower.scale})` }}
              >
                <FlowerSvg
                  species={flower.species}
                  color={PALETTE[flower.color]}
                  animate={!reduceMotion && flower.plantedAt > mountedAt.current}
                />
              </span>
            </button>
          );
        })}
      </div>

      <div className="naa-garden-foot">
        <p className="naa-garden-caption">{caption}</p>
        <span className="naa-sr-only" aria-live="polite">
          {status}
        </span>
        {flowers.length > 0 && (
          <button
            type="button"
            className="naa-garden-reset"
            onClick={() => {
              if (confirmingReset) {
                onReset();
                setConfirmingReset(false);
                setFocused(null);
              } else {
                setConfirmingReset(true);
              }
            }}
          >
            {confirmingReset ? "Tap again to clear" : "Start over"}
          </button>
        )}
      </div>
    </aside>
  );
}
