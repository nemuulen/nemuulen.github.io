import { useEffect, useState } from "react";
import { PALETTE, SPECIES, type PaletteName, type Species } from "./flowers";

export const GRID_SIZE = 6;
export const PLOT_COUNT = GRID_SIZE * GRID_SIZE;

const STORAGE_KEY = "nemuulen-notanactualai-garden-v2";
const LEGACY_KEY = "nemuulen-notanactualai-garden";
const PALETTE_NAMES = Object.keys(PALETTE) as PaletteName[];

export interface PlantedFlower {
  cell: number;
  species: Species;
  color: PaletteName;
  tilt: number;
  scale: number;
  plantedAt: number;
  query: string;
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function isFlower(value: unknown): value is PlantedFlower {
  const f = value as PlantedFlower;
  return (
    !!f &&
    Number.isInteger(f.cell) &&
    f.cell >= 0 &&
    f.cell < PLOT_COUNT &&
    SPECIES.includes(f.species) &&
    PALETTE_NAMES.includes(f.color) &&
    typeof f.tilt === "number" &&
    typeof f.scale === "number" &&
    typeof f.plantedAt === "number" &&
    typeof f.query === "string"
  );
}

function loadGarden(): PlantedFlower[] {
  try {
    window.localStorage.removeItem(LEGACY_KEY);
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    const taken = new Set<number>();
    return parsed.filter((item): item is PlantedFlower => {
      if (!isFlower(item) || taken.has(item.cell)) return false;
      taken.add(item.cell);
      return true;
    });
  } catch {
    return [];
  }
}

export function useGarden() {
  const [flowers, setFlowers] = useState<PlantedFlower[]>(loadGarden);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(flowers));
    } catch {
      // localStorage may be disabled; the garden still works for this session.
    }
  }, [flowers]);

  /** Plants a random flower in a random empty plot, replacing the oldest one when the garden is full. */
  const plant = (query: string): PlantedFlower => {
    let current = flowers;
    if (current.length >= PLOT_COUNT) {
      const oldest = current.reduce((a, b) => (a.plantedAt <= b.plantedAt ? a : b));
      current = current.filter((f) => f !== oldest);
    }

    const taken = new Set(current.map((f) => f.cell));
    const empty = Array.from({ length: PLOT_COUNT }, (_, i) => i).filter((i) => !taken.has(i));

    const flower: PlantedFlower = {
      cell: pick(empty),
      species: pick(SPECIES),
      color: pick(PALETTE_NAMES),
      tilt: Math.round((Math.random() - 0.5) * 20),
      scale: 0.85 + Math.random() * 0.25,
      plantedAt: Date.now(),
      query,
    };

    setFlowers([...current, flower]);
    return flower;
  };

  const reset = () => setFlowers([]);

  return { flowers, plant, reset };
}
