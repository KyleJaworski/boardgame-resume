import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Board } from "./components/Board";
import { OrbitControls } from "@react-three/drei";
import { PlayerToken } from "./components/PlayerToken";

function App() {
  return (
    <Canvas camera={{ position: [0, 10, 10], fov: 50 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <PlayerToken scale={4} />
      <OrbitControls />
      <Board />
      <gridHelper args={[100, 100]} />
      <axesHelper args={[5]} />
    </Canvas>
  );
}

export default App;
