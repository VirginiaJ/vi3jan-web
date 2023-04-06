import { useMemo, useRef } from "react"

import { useFrame } from "@react-three/fiber"
import { coreColors } from "src/designConfig/coreColors"
import { useLayout } from "src/hooks/useLayout"
import { Object3D, Vector3, Vector3Tuple } from "three"

import { Model } from "./Model"
import { ObjectGroup } from "./ObjectGroup"
import { Ring } from "./Ring"
import { ScrollContent } from "./ScrollContent"
import { VideoBackground } from "./VideoBackground"

const vec = new Vector3()
const targ = new Object3D()

export const Composition = () => {
  const { left, right } = useLayout()
  const ringPositions = useMemo(() => [-6, -4.5, -3, -1.5, 0, 1.5, 3], [])
  const ringScales = useMemo(() => [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1], [])
  const targRef1 = useRef(null)
  const targRef2 = useRef(null)
  const targRef3 = useRef(null)

  const videoTextures = useMemo(
    () => [
      {
        url: "video/pexels-artem-podrez.mp4",
        position: [0, 3.5, -6.5],
      },
      {
        url: "video/pexels-artem-podrez-blue.mp4",
        position: [3 * left, 5, -9],
      },
      {
        url: "video/pexels-artem-podrez-blue.mp4",
        position: [3 * right, 5, -9],
      },
    ],
    [left, right]
  )

  useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 10),
      0.05
    )
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <ObjectGroup position={[0, 0, 0]}>
        {ringPositions.map((pos, i) => (
          <group key={`ring${pos}`}>
            <Ring position={[0, -2, pos]} scale={ringScales[i]} />
          </group>
        ))}
      </ObjectGroup>
      <Model position={[0, -1.99, 0]} scale={1.5} rotation={[0, 0.2, 0]} />
      <ScrollContent />
      {videoTextures.map((texture, i) => (
        <VideoBackground
          key={`${i}${texture.url}`}
          url={texture.url}
          width={1080}
          height={1920}
          scale={6}
          position={texture.position as Vector3Tuple}
        />
      ))}

      <spotLight
        castShadow
        position={[3 * right, 4, -10]}
        angle={0.7}
        penumbra={0.7}
        intensity={0.7}
        color={coreColors.blue600}
        target={targRef2.current ?? targ}
      />
      <spotLight
        castShadow
        position={[3 * left, 4, -10]}
        angle={0.7}
        penumbra={0.7}
        intensity={0.7}
        color={coreColors.blue600}
        target={targRef1.current ?? targ}
      />
      <spotLight
        castShadow
        position={[-3, 5, 2]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#FF9F1D"
        distance={20}
        target={targRef3.current ?? targ}
      />
      <spotLight
        castShadow
        position={[0, 5, -7.5]}
        angle={0.7}
        penumbra={0.7}
        intensity={1}
        color="pink"
        distance={25}
      />
      <group ref={targRef1} position={[2 * left, 1, 1]} />
      <group ref={targRef2} position={[2 * right, 1, 1]} />
      <group ref={targRef3} position={[-1.5, 0.3, 0]} />
    </>
  )
}
