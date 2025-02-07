import { Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame, extend } from "@react-three/fiber";

// Extend Three.js LineSegments into Fiber
extend({ LineSegments: THREE.LineSegments });

export function Tile({ position, width, height, label, color = "white" }) {
  const meshRef = useRef();
  const edgesRef = useRef();

  return (
    <group position={position}>
      {/* Main Tile */}
      <mesh ref={meshRef}>
        <boxGeometry args={[width, 0.2, height]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Full Edge Outline */}
      <lineSegments ref={edgesRef}>
        <edgesGeometry
          attach="geometry"
          args={[new THREE.BoxGeometry(width, 0.2, height)]}
        />
        <lineBasicMaterial attach="material" color="black" linewidth={2} />
      </lineSegments>

      {/* Tile Label */}
      <Text position={[0, 0.7, 0]} fontSize={0.4} color="black">
        {label}
      </Text>
    </group>
  );
}
