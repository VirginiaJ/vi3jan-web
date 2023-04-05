import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

import { Composition } from "./three/Composition"
import { Ground } from "./three/Ground"
import { Torch } from "./three/Torch"
import { VideoBackground } from "./three/VideoBackground"

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
        args={[theme === "dark" ? "#000" : coreColors.blue50]}
      />
      <fog
        attach="fog"
        args={[theme === "dark" ? "#000" : coreColors.blue50, 15, 30]}
      />

      <Composition />
      <Torch />

      <spotLight
        castShadow
        position={[0, 2, -6]}
        penumbra={1}
        intensity={1}
        color={coreColors.blue600}
      />
      <spotLight
        castShadow
        position={[5, 2, -10]}
        penumbra={1}
        intensity={1}
        color={coreColors.blue600}
      />
      <spotLight
        castShadow
        position={[-5, 2, -10]}
        penumbra={1}
        intensity={1}
        color={coreColors.blue600}
      />

      <EffectComposer>
        {theme === "dark" ? (
          <Bloom luminanceThreshold={0.1} mipmapBlur intensity={1.5} />
        ) : (
          <></>
        )}
      </EffectComposer>

      <Environment preset="city" />
      <ambientLight intensity={theme === "dark" ? 0.01 : 1} />
      <Ground position={[0, -2, 0]} />
      <VideoBackground />
    </Canvas>
  )
}
