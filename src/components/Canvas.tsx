import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

import { Composition } from "./three/Composition"
import { Ground } from "./three/Ground"
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
      <fog
        attach="fog"
        args={[theme === "dark" ? "#000" : coreColors.gray50, 0, 30]}
      />
      <Composition />
      <Torch />

      {/* <AccumulativeShadows
        frames={100}
        alphaTest={0.8}
        scale={50}
        position={[0, -2, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={4}
          ambient={0.5}
          intensity={1}
          position={[-10, 10, 5]}
        />
      </AccumulativeShadows> */}
      <spotLight
        castShadow
        position={[-10, 10, 5]}
        penumbra={1}
        intensity={1}
        color="hotpink"
      />
      {theme === "dark" && (
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} mipmapBlur intensity={1.5} />
        </EffectComposer>
      )}
      <Environment preset="city" />
      <ambientLight intensity={theme === "dark" ? 0.01 : 1} />
      <Ground position={[0, -2, 0]} />
    </Canvas>
  )
}
