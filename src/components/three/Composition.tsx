import { useMemo } from "react"

import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

import { Model } from "./Model"
import { ObjectGroup } from "./ObjectGroup"
import { Ring } from "./Ring"
import { ScrollContent } from "./ScrollContent"

const vec = new Vector3()

export const Composition = () => {
  const ringPositions = useMemo(() => [-6, -4.5, -3, -1.5, 0, 1.5, 3], [])

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
        {ringPositions.map((pos) => (
          <group key={`ring${pos}`}>
            <Ring position={[0, -2, pos]} />
          </group>
        ))}
      </ObjectGroup>
      <Model position={[0, -1.99, 0]} scale={1.5} />
      <ScrollContent />
    </>
  )
}
