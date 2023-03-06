import {
  AccumulativeShadows,
  Environment,
  RandomizedLight,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

import { Ground } from "./three/Ground"
import { ScrollContent } from "./three/ScrollContent"

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
      <ScrollContent />
      {/* <Torch /> */}
      <mesh castShadow receiveShadow position={[-3, -1, -2]}>
        <sphereBufferGeometry />
        <meshStandardMaterial color="pink" metalness={0.8} />
      </mesh>

      <Ground position={[0, -2, 0]} />

      <AccumulativeShadows
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
      </AccumulativeShadows>
      <spotLight
        position={[-10, 10, 5]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        color="hotpink"
      />

      {/* <EffectComposer multisampling={8}>
        <Bloom
          kernelSize={1}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.3}
          intensity={0.4}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.5}
        />
      </EffectComposer> */}
      <Environment preset="city" />
      <ambientLight intensity={theme === "dark" ? 0.01 : 1} />
    </Canvas>
  )
}
