export function calculateTilePosition(
  i,
  width,
  height,
  halfBoard,
  cornerSize,
  side
) {
  let offset = 0;

  if (i === 0) {
    // For the first tile (corner), no offset
    if (side === "bottom") {
      return {
        x: -halfBoard,
        y: halfBoard,
        width,
        height,
      };
    } else if (side === "right") {
      return {
        x: halfBoard,
        y: halfBoard,
        height,
        width,
      };
    } else if (side === "top") {
      return {
        x: halfBoard,
        y: -halfBoard,
        height,
        width,
      };
    } else if (side === "left") {
      return {
        x: -halfBoard,
        y: -halfBoard,
        height,
        width,
      };
    }
  } else if (i === 1) {
    // Handle the second tile and further tiles (non-corner tiles)
    if (side === "bottom") {
      // For top/bottom rows, use offset based on row direction
      offset = width / 2; // Example for side tiles, you can adjust this
      return {
        x: -halfBoard + cornerSize / 2 + offset, // Calculate the x position dynamically
        y: halfBoard, // Set y for top/bottom rows
        width,
        height,
      };
    } else if (side === "right") {
      offset = height / 2;
      return {
        x: halfBoard,
        y: halfBoard - cornerSize / 2 - offset,
        width,
        height,
      };
    } else if (side === "top") {
      offset = width / 2;
      return {
        x: halfBoard - cornerSize / 2 - offset,
        y: -halfBoard,
        width,
        height,
      };
    } else if (side === "left") {
      offset = height / 2;
      return {
        x: -halfBoard,
        y: -halfBoard + cornerSize / 2 + offset,
        width,
        height,
      };
    }
  } else {
    if (side === "bottom") {
      // For top/bottom rows, use offset based on row direction
      offset = width / 4; // Example for side tiles, you can adjust this
      return {
        x: i * width - halfBoard + offset, // Calculate the x position dynamically
        y: halfBoard, // Set y for top/bottom rows
        width,
        height,
      };
    } else if (side === "right") {
      // For top/bottom rows, use offset based on row direction
      offset = height / 4; // Example for side tiles, you can adjust this
      return {
        x: halfBoard, // Calculate the x position dynamically
        y: halfBoard - i * height - offset, // Set y for top/bottom rows
        width,
        height,
      };
    } else if (side === "top") {
      // For top/bottom rows, use offset based on row direction
      offset = width / 4; // Example for side tiles, you can adjust this
      return {
        x: halfBoard - i * width - offset, // Calculate the x position dynamically
        y: -halfBoard, // Set y for top/bottom rows
        width,
        height,
      };
    } else if (side === "left") {
      // For top/bottom rows, use offset based on row direction
      offset = height / 4; // Example for side tiles, you can adjust this
      return {
        x: -halfBoard, // Calculate the x position dynamically
        y: -halfBoard + i * height + offset, // Set y for top/bottom rows
        width,
        height,
      };
    }
  }
}
