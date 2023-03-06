import { Sparkles } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

import { ScrollContent } from "./three/ScrollContent"
import { Torch } from "./three/Torch"

export const MyCanvas = () => {
  const { theme } = useThemeContext()

  return (
    <Canvas
      shadows
      id="canvas"
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 10],
        near: 0.01,
        far: 100,
        fov: 45,
      }}
    >
      <color
        attach="background"
        args={[theme === "dark" ? "#000" : coreColors.gray50]}
      />
      <ScrollContent />
      <Torch />
      <Sparkles
        position={[0, 0, -1]}
        count={200}
        speed={0.4}
        scale={[10, 3, 1]}
        size={4}
        color={coreColors.purple500}
      />
      <ambientLight intensity={theme === "dark" ? 0.01 : 2} />
    </Canvas>
  )
}
