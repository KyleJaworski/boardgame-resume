import { useGLTF } from "@react-three/drei";
import { useGameState } from "../state/gameState";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function PlayerToken(props) {
  const { meeplePosition } = useGameState(); // Get meeple position from game state
  const { scene } = useGLTF("/assets/PlayerToken/meeple.gltf"); // Load meeple model
  const meepleRef = useRef();

  // Animate the meeple to move when meeplePosition updates
  useFrame(() => {
    if (meepleRef.current) {
      meepleRef.current.position.set(...meeplePosition);
    }
  });

  return <primitive ref={meepleRef} object={scene} {...props} />;
}
