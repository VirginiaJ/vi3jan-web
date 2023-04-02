import { useScroll } from "@react-three/drei"
import { useLayout } from "src/hooks/useLayout"

import { ObjectGroup } from "./ObjectGroup"
import { Ring } from "./Ring"

export const Composition = () => {
  const { left, right } = useLayout()
  const data = useScroll()

  return (
    <>
      <ObjectGroup position={[0, 0, 0]}>
        <Ring position={[-4, -1.4, 2]} />
        <Ring position={[-3, 0.9, -4]} />
        <Ring position={[-2.5, 0.6, -2]} />
        <Ring position={[-1.8, -1, 5]} />
        <Ring position={[-1, 1.2, -3]} />
      </ObjectGroup>
      <mesh castShadow receiveShadow position={[-2, -1, -5]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="pink" metalness={1} roughness={0.4} />
      </mesh>
    </>
  )
}
