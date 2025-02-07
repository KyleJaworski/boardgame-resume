import { useMemo, useState } from "react";
import { generateTiles } from "../utils/generateTiles";

export const useGameState = () => {
  const [meepleIndex, setMeepleIndex] = useState(0);

  // Load tiles from the utility function
  const tiles = useMemo(() => generateTiles(), []);

  const meeplePosition = tiles[meepleIndex]
    ? [tiles[meepleIndex].x, 0.01, tiles[meepleIndex].y] // Correctly maps x and y into a position array
    : [0, 0.01, 0]; // Fallback in case meepleIndex is out of bounds

  const moveMeeple = () => {
    const newIndex = (meepleIndex + 1) % tiles.length;
    setMeepleIndex(newIndex);
  };

  return { tiles, meepleIndex, meeplePosition, moveMeeple };
};
