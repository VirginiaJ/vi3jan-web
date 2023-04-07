import { useRef } from "react"

import { MeshProps, useThree } from "@react-three/fiber"
import { coreColors } from "src/designConfig/coreColors"
import { Mesh } from "three"

export const Ring = (props: MeshProps) => {
  const ref = useRef<Mesh>(null)
  const { viewport } = useThree()
  const diam = viewport.width / 2

  return (
    <mesh ref={ref} {...props}>
      <ringGeometry args={[diam - 0.1, diam, 100, 100, 0, Math.PI]} />
      <meshBasicMaterial toneMapped={false} color={coreColors.purple400} />
    </mesh>
  )
}
