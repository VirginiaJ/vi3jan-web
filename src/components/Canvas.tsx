import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export const MyCanvas = () => (
  <Canvas
    id="canvas"
    style={{ background: "#000" }}
    camera={{
      position: [0, 5, 10],
      near: 0.01,
      far: 100,
      fov: 45,
    }}
  >
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="pink" />
    </mesh>
    <ambientLight intensity={2} />
    <OrbitControls />
  </Canvas>
)
