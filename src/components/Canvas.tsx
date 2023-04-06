import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useThemeContext } from "src/App"

import { Composition } from "./three/Composition"
import { Ground } from "./three/Ground"

export const MyCanvas = () => {
  const { theme } = useThemeContext()

  return (
    <Canvas
      shadows
      id="canvas"
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0.7, 10],
        near: 0.01,
        far: 100,
        fov: 45,
      }}
      performance={{ min: 0.1 }}
      gl={{ antialias: false }}
    >
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#000", 17, 30]} />

      <Composition />
      {/* <Torch /> */}

      <EffectComposer>
        {theme === "dark" ? (
          <Bloom luminanceThreshold={0.1} mipmapBlur intensity={1.5} />
        ) : (
          <></>
        )}
      </EffectComposer>

      <ambientLight intensity={theme === "dark" ? 0.01 : 1} />
      <Ground position={[0, -2, 0]} />
    </Canvas>
  )
}
