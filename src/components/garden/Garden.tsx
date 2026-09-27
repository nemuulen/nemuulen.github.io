import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Sprout } from "lucide-react";
import { FlowerSvg, PALETTE } from "./flowers";
import { GRID_SIZE, type PlantedFlower } from "./useGarden";

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

  // Flowers rooted further down the bed are closer to the viewer, so they paint on top.
  const ordered = [...flowers].sort((a, b) => a.y - b.y || a.plantedAt - b.plantedAt);
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
        <span className="naa-garden-count">{flowers.length} planted</span>
      </div>

      <div className="naa-bed-wrap">
        <div
          className="naa-bed"
          role="group"
          aria-label={`Garden with ${flowers.length} flower${flowers.length === 1 ? "" : "s"}`}
          onMouseLeave={() => setFocused(null)}
        >
          {ordered.map((flower) => (
            <button
              key={flower.id}
              type="button"
              className="naa-flower"
              aria-label={`${flower.color} ${flower.species}, planted for “${flower.query}”`}
              onMouseEnter={() => setFocused(flower)}
              onFocus={() => setFocused(flower)}
              onBlur={() => setFocused(null)}
              style={{
                left: `${((flower.x + 0.5) / GRID_SIZE) * 100}%`,
                top: `${((flower.y + 0.5) / GRID_SIZE) * 100}%`,
                transform: `translate(-50%, -100%) rotate(${flower.tilt}deg) scale(${flower.scale})`,
              }}
            >
              <FlowerSvg
                species={flower.species}
                color={PALETTE[flower.color]}
                animate={!reduceMotion && flower.plantedAt > mountedAt.current}
              />
            </button>
          ))}
        </div>
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
