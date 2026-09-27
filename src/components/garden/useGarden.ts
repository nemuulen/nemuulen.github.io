import { useEffect, useState } from "react";
import { PALETTE, SPECIES, type PaletteName, type Species } from "./flowers";

/** The bed is an invisible GRID_SIZE × GRID_SIZE grid; each flower is rooted in one square and may overlap its neighbours. */
export const GRID_SIZE = 100;

const STORAGE_KEY = "nemuulen-notanactualai-garden-v3";
const OLD_KEYS = ["nemuulen-notanactualai-garden", "nemuulen-notanactualai-garden-v2"];
const OLD_GRID_SIZE = 6;
const PALETTE_NAMES = Object.keys(PALETTE) as PaletteName[];
const MAX_QUERY_LENGTH = 80;

export interface PlantedFlower {
  id: string;
  x: number;
  y: number;
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

function inGrid(value: unknown) {
  return Number.isInteger(value) && (value as number) >= 0 && (value as number) < GRID_SIZE;
}

function isFlower(value: unknown): value is PlantedFlower {
  const f = value as PlantedFlower;
  return (
    !!f &&
    typeof f.id === "string" &&
    inGrid(f.x) &&
    inGrid(f.y) &&
    SPECIES.includes(f.species) &&
    PALETTE_NAMES.includes(f.color) &&
    typeof f.tilt === "number" &&
    typeof f.scale === "number" &&
    typeof f.plantedAt === "number" &&
    typeof f.query === "string"
  );
}

/** Carries flowers over from the earlier 6×6 garden, rooting each one in the middle of its old plot. */
function migrateV2(raw: string | null): PlantedFlower[] {
  try {
    const parsed: unknown = JSON.parse(raw ?? "[]");
    if (!Array.isArray(parsed)) return [];
    const plot = GRID_SIZE / OLD_GRID_SIZE;
    return parsed
      .map((old) => ({
        ...old,
        id: `${old.plantedAt}-${old.cell}`,
        x: Math.floor(((old.cell % OLD_GRID_SIZE) + 0.5) * plot),
        y: Math.floor((Math.floor(old.cell / OLD_GRID_SIZE) + 0.5) * plot),
      }))
      .filter(isFlower);
  } catch {
    return [];
  }
}

function loadGarden(): PlantedFlower[] {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const flowers =
      saved === null
        ? migrateV2(window.localStorage.getItem(OLD_KEYS[1]))
        : (JSON.parse(saved) as unknown[]).filter(isFlower);
    OLD_KEYS.forEach((key) => window.localStorage.removeItem(key));
    return flowers;
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
      // localStorage may be disabled or full; the garden still works for this session.
    }
  }, [flowers]);

  /** Plants a random flower rooted in a random square of the bed. There is no limit. */
  const plant = (query: string): PlantedFlower => {
    const plantedAt = Date.now();
    const flower: PlantedFlower = {
      id: `${plantedAt}-${Math.random().toString(36).slice(2, 8)}`,
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
      species: pick(SPECIES),
      color: pick(PALETTE_NAMES),
      tilt: Math.round((Math.random() - 0.5) * 20),
      scale: 0.85 + Math.random() * 0.3,
      plantedAt,
      query: query.slice(0, MAX_QUERY_LENGTH),
    };

    setFlowers((current) => [...current, flower]);
    return flower;
  };

  const reset = () => setFlowers([]);

  return { flowers, plant, reset };
}
