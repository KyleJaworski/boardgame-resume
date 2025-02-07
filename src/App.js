import "./App.css";
import { Canvas } from "@react-three/fiber";

import { Board } from "./components/Board";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Model(props) {
  // Using useGLTF hook to load the model
  const { nodes } = useGLTF("/assets/PlayerToken/meeple.gltf"); // path to your .glb or .gltf file
  // Access the geometry and material (replace 'SVGMat.001' with the correct key)
  console.log("Nodes:", nodes);

  const geometry = nodes.Scene?.children?.[0]?.geometry; // Adjust key if needed
  const material = nodes.Scene?.children?.[0]?.material; // Adjust key if needed
  console.log(material);

  if (!geometry) {
    console.error("Geometry not found for the mesh.");
    return null; // Return nothing or a placeholder if geometry is not found
  }

  return (
    <mesh {...props} geometry={geometry} material={material}>
      {/* You can apply additional properties or effects here */}
    </mesh>
  );
}

function App() {
  return (
    <Canvas camera={{ position: [0, 10, 10], fov: 100 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model position={[0, 2, 0]} scale={2} />
      <OrbitControls />
      <Board />
    </Canvas>
  );
}

export default App;
