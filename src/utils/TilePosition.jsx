export function calculateTilePosition(
  i,
  isCorner,
  width,
  height,
  halfBoard,
  cornerSize,
  isTopRow = false,
  isLeftRow = false,
  isRightRow = false,
  isBottomRow = false
) {
  let xOffset = 0;
  let yOffset = 0;

  if (i === 0) {
    // For the first tile (corner), no offset
    return {
      x: isRightRow ? halfBoard : -halfBoard, // for left/right columns
      y: isTopRow ? halfBoard : -halfBoard, // for top/bottom rows
      width,
      height,
      offset: 0,
    };
  } else if (i === 1) {
    // Handle the second tile and further tiles (non-corner tiles)
    if (isTopRow || isBottomRow) {
      // For top/bottom rows, use xOffset based on row direction
      xOffset = width / 2; // Example for side tiles, you can adjust this
      return {
        x: i * (cornerSize / 2) - halfBoard + xOffset, // Calculate the x position dynamically
        y: isTopRow ? halfBoard : -halfBoard, // Set y for top/bottom rows
        width,
        height,
        offset: xOffset,
      };
    }

    if (isLeftRow || isRightRow) {
      // For left/right columns, adjust y offset
      yOffset = height / 2;
      return {
        x: isRightRow ? halfBoard : -halfBoard, // x for left/right column
        y: i * (cornerSize / 2) - halfBoard + yOffset, // Adjust for vertical positions
        height,
        width,
        offset: yOffset,
      };
    }
  } else if (isTopRow && i === 10) {
    xOffset = halfBoard;
    return {
      x: halfBoard, // for left/right columns
      y: halfBoard, // for top/bottom rows
      width,
      height,
      offset: 0,
    };
  } else {
    if (isTopRow || isBottomRow) {
      // For top/bottom rows, use xOffset based on row direction
      xOffset = width / 4; // Example for side tiles, you can adjust this
      return {
        x: i * width - halfBoard + xOffset, // Calculate the x position dynamically
        y: isTopRow ? halfBoard : -halfBoard, // Set y for top/bottom rows
        width,
        height,
        offset: xOffset,
      };
    }

    if (isLeftRow || isRightRow) {
      // For left/right columns, adjust y offset

      yOffset = height / 4;
      return {
        x: isRightRow ? halfBoard : -halfBoard, // x for left/right column
        y: i * height - halfBoard + yOffset, // Adjust for vertical positions
        width,
        height,
        offset: yOffset,
      };
    }
  }
}
