import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Model(props) {
  // Using useGLTF hook to load the model
  const { nodes, materials } = useGLTF("/path/to/your/model.glb"); // path to your .glb or .gltf file

  return (
    <mesh
      {...props}
      geometry={nodes.mesh_0.geometry}
      material={materials.material_0}
    >
      {/* You can apply materials, textures, or even animations */}
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={1} />
      <Model position={[-1.2, 0, 0]} scale={0.5} />
      <OrbitControls />
    </Canvas>
  );
}
