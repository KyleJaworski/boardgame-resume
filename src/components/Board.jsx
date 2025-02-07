import { useMemo } from "react";
import { Tile } from "./Tile";
import { calculateTilePosition } from "../utils/TilePosition";

const tileWidth = 1.0; // Regular tile width
const tileHeight = 1.5; // Regular tile height
const cornerSize = 1.5; // Corner tiles are square

export function Board() {
  const tiles = useMemo(() => {
    const boardSize = tileWidth * 9 + cornerSize * 2;
    const halfBoard = (boardSize - cornerSize) / 2; // Center alignment

    // Arrays for each side of the board
    const bottomRow = [];
    const rightColumn = [];
    const topRow = [];
    const leftColumn = [];

    // 🟢 **Top Row (Left to right)**
    for (let i = 0; i < 10; i++) {
      const isCorner = i === 0; // Corner tile at the start
      const width = isCorner ? cornerSize : tileWidth;
      const height = isCorner ? cornerSize : tileHeight;

      const tile = calculateTilePosition(
        i,
        isCorner,
        width,
        height,
        halfBoard,
        cornerSize,
        false,
        false,
        false,
        true
      );
      topRow.push({
        x: tile.x,
        y: tile.y,
        label: `T${i + 1}`,
        width: tile.width,
        height: tile.height,
      });
    }

    // 🔵 **Right Column (Top to Bottom)**
    for (let i = 0; i < 10; i++) {
      const isCorner = i === 0; // Corner tile at the start
      const width = isCorner ? cornerSize : tileHeight;
      const height = isCorner ? cornerSize : tileWidth;

      const tile = calculateTilePosition(
        i,
        isCorner,
        width,
        height,
        halfBoard,
        cornerSize,
        false,
        false,
        true,
        false
      );

      rightColumn.push({
        x: tile.x,
        y: tile.y,
        label: `R${i + 1}`,
        width: tile.width,
        height: tile.height,
      });
    }

    // 🔴 **BottomRow (Left to Right)**
    for (let i = 0; i < 11; i++) {
      const isCorner = i === 0 || i === 10; // Corner tile at the start
      const width = isCorner ? cornerSize : tileHeight;
      const height = isCorner ? cornerSize : tileWidth;

      const tile = calculateTilePosition(
        i,
        isCorner,
        height,
        width,
        halfBoard,
        cornerSize,
        true,
        false,
        false,
        false
      );
      bottomRow.push({
        x: tile.x,
        y: tile.y,
        label: `B${i + 1}`,
        width: tile.width,
        height: tile.height,
      });
    }

    // 🟡 **Left Column (Bottom to Top)**
    for (let i = 0; i < 10; i++) {
      const isCorner = i === 0; // Corner tile at the start
      const width = isCorner ? cornerSize : tileHeight;
      const height = isCorner ? cornerSize : tileWidth;

      const tile = calculateTilePosition(
        i,
        isCorner,
        width,
        height,
        halfBoard,
        cornerSize,
        false,
        true,
        false,
        false
      );
      leftColumn.push({
        x: tile.x,
        y: tile.y,
        label: `L${i + 1}`,
        width: tile.width,
        height: tile.height,
      });
    }

    // Combine all tiles into a single array
    return [...bottomRow, ...rightColumn, ...topRow, ...leftColumn];
  }, []);

  return (
    <group>
      {tiles.map(({ x, y, label, width, height }, index) => {
        // Render the individual tiles
        return (
          <Tile
            key={index}
            position={[x, 0.01, y]}
            label={label}
            width={width}
            height={height}
          />
        );
      })}
      {/* Render the middle plane directly */}
      <mesh position={[0, 0.01, 0.5]} rotation={[Math.PI / -2, 0, 0]}>
        <planeGeometry args={[11, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}
