import { useRef } from "react"

import { coreColors } from "src/designConfig/coreColors"
import { Mesh } from "three"

export const PaperPlane = () => {
  const paperPlaneRef = useRef<Mesh>(null)

  return (
    <mesh ref={paperPlaneRef}>
      <planeGeometry args={[5, 3]} />
      <meshPhongMaterial color={coreColors.gray100} />
    </mesh>
  )
}
