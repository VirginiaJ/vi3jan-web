import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

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
      <color
        attach="background"
        args={[theme === "dark" ? "#000" : coreColors.gray150]}
      />
      <fog
        attach="fog"
        args={[theme === "dark" ? "#000" : coreColors.gray150, 15, 30]}
      />

      <Composition />
      {/* <Torch /> */}

      <EffectComposer>
        {theme === "dark" ? (
          <Bloom luminanceThreshold={0.1} mipmapBlur intensity={1.5} />
        ) : (
          <></>
        )}
      </EffectComposer>

      <ambientLight intensity={theme === "dark" ? 0.01 : 1.5} />
      <Ground position={[0, -2, 0]} />
    </Canvas>
  )
}
