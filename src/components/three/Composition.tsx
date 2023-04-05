import { useMemo, useRef } from "react"

import { useFrame } from "@react-three/fiber"
import { useLayout } from "src/hooks/useLayout"
import { Group, Vector3 } from "three"

import { Model } from "./Model"
import { ObjectGroup } from "./ObjectGroup"
import { ScrollContent } from "./ScrollContent"
import { Tube } from "./Tube"

const vec = new Vector3()

export const Composition = () => {
  const { left, right } = useLayout()
  const objectGroupRef = useRef<Group>(null)

  const tubePositions = useMemo(
    () => [-12, -10.5, -9, -7.5, -6, -4.5, -3, -1.5, 0, 1.5, 3],
    []
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
      <ObjectGroup ref={objectGroupRef} position={[0, 0, 0]}>
        {/* <Ring position={[-4, -1.4, 2]} />
        <Ring position={[-3, 0.9, -4]} />
        <Ring position={[-2.5, 0.6, -2]} />
        <Ring position={[-1.8, -1, 5]} />
        <Ring position={[-1, 1.2, -3]} /> */}
      </ObjectGroup>
      <ObjectGroup position={[0, 0, 0]}>
        {tubePositions.map((pos) => (
          <group key={`tubes${pos}`}>
            <Tube
              position={[2 * left, -2, pos]}
              rotation={[0, 0, -Math.PI / 4]}
            />
            <Tube
              position={[2 * right, -2, pos]}
              rotation={[0, 0, Math.PI / 4]}
            />
          </group>
        ))}
      </ObjectGroup>
      <Model position={[0, -1.99, 0]} scale={1.5} />
      <ScrollContent />
    </>
  )
}
