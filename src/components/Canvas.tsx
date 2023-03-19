import {
  AccumulativeShadows,
  Environment,
  RandomizedLight,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

import { Ground } from "./three/Ground"
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
      <fog
        attach="fog"
        args={[theme === "dark" ? "#000" : coreColors.gray50, 0, 30]}
      />
      <ScrollContent />
      <Torch />
      <mesh castShadow receiveShadow position={[-2, -1, -3]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="pink" metalness={1} roughness={0.4} />
      </mesh>
      {/* <Caustics
        color="#FF8F20"
        position={[-3, -1.99, -2]}
        lightSource={[-10, 10, 5]}
        worldRadius={0.003}
        ior={1.16}
        intensity={0.004}
        causticsOnly={false}
        backside={false}
      >
        <mesh castShadow receiveShadow position={[-3, 1, -2]}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshTransmissionMaterial
            resolution={1024}
            distortion={0.25}
            color="#FF8F20"
            thickness={1}
            anisotropy={1}
            distortionScale={0.5}
            temporalDistortion={0}
          />
        </mesh>
      </Caustics> */}

      <Ground position={[0, -2, 0]} />

      <mesh position={[-4, -1.5, 0]} castShadow>
        <ringGeometry args={[0.2, 0.3, 40]} />
        <meshBasicMaterial color={coreColors.purple300} toneMapped={false} />
      </mesh>

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
      {theme === "dark" && (
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} mipmapBlur intensity={1.5} />
        </EffectComposer>
      )}
      <Environment preset="city" />
      <ambientLight intensity={theme === "dark" ? 0.01 : 1} />
      {/* <OrbitControls /> */}
    </Canvas>
  )
}
