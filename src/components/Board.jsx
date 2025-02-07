import { Tile } from "./Tile";
import { useGameState } from "../state/gameState";

export function Board() {
  const { tiles } = useGameState();
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
