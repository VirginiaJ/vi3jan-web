import { useRef } from "react"

import { MeshProps, useFrame } from "@react-three/fiber"
import { coreColors } from "src/designConfig/coreColors"
import { Mesh, Vector3Tuple } from "three"

export const Ring = ({ position }: MeshProps) => {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.3
    const pos = position as Vector3Tuple
    ref.current?.rotation.set(
      pos[0] * Math.cos(t),
      pos[1] * Math.sin(t),
      pos[2] * Math.cos(t)
    )
    if (ref.current) {
      ref.current.position.x = pos[0] + Math.cos(t) * 0.3
      ref.current.position.y = Math.sin(t) * pos[1]
      ref.current.position.z = Math.cos(t) * pos[2]
    }
  })

  return (
    <mesh ref={ref} position={position} scale={Math.random() + 0.5}>
      <torusGeometry args={[0.3, 0.1, 40]} />
      <meshPhongMaterial color={coreColors.purple300} toneMapped={false} />
    </mesh>
  )
}
