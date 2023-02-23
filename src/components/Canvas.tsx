import { OrbitControls, Sparkles } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Intro } from "./html/Intro"

export const MyCanvas = () => (
  <Canvas
    id="canvas"
    onCreated={({ gl }) => gl.setClearColor("#000")}
    dpr={[1, 1.5]}
    camera={{
      position: [0, 0, 10],
      near: 0.01,
      far: 100,
      fov: 45,
    }}
  >
    <Sparkles
      position={[0, 0, 0]}
      count={200}
      speed={0.4}
      scale={[10, 3, 6]}
      size={4}
      color="#f5f"
    />
    <ambientLight intensity={2} />
    <OrbitControls />
    <Intro />
  </Canvas>
)
