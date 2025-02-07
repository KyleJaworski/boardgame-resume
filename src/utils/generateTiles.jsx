import { calculateTilePosition } from "./calculateTiles";

export const generateTiles = () => {
  const tileWidth = 1.0; // Regular tile width
  const tileHeight = 1.5; // Regular tile height
  const cornerSize = 1.5; // Corner tiles are square
  const boardSize = tileWidth * 9 + cornerSize * 2;
  const halfBoard = (boardSize - cornerSize) / 2; // Center alignment

  // Arrays for each side of the board
  const bottomRow = [];
  const rightColumn = [];
  const topRow = [];
  const leftColumn = [];

  // 🟢 **Top Row (Right to Left)**
  for (let i = 0; i < 10; i++) {
    const isCorner = i === 0; // Corner tile at the start
    const width = isCorner ? cornerSize : tileWidth;
    const height = isCorner ? cornerSize : tileHeight;

    const tile = calculateTilePosition(
      i,
      width,
      height,
      halfBoard,
      cornerSize,
      "top"
    );
    topRow.push({
      x: tile.x,
      y: tile.y,
      label: `T${i + 1}`,
      width: tile.width,
      height: tile.height,
    });
  }

  // 🔵 **Right Column (Bottom to Top)**
  for (let i = 0; i < 10; i++) {
    const isCorner = i === 0; // Corner tile at the start
    const width = isCorner ? cornerSize : tileHeight;
    const height = isCorner ? cornerSize : tileWidth;

    const tile = calculateTilePosition(
      i,
      width,
      height,
      halfBoard,
      cornerSize,
      "right"
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
  for (let i = 0; i < 10; i++) {
    const isCorner = i === 0; // Corner tile at the start
    const width = isCorner ? cornerSize : tileHeight;
    const height = isCorner ? cornerSize : tileWidth;

    const tile = calculateTilePosition(
      i,
      height,
      width,
      halfBoard,
      cornerSize,
      "bottom"
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
      width,
      height,
      halfBoard,
      cornerSize,
      "left"
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
};
