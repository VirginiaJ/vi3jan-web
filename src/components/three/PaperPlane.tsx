import { useMemo, useRef } from "react"

import { Html } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { coreColors } from "src/designConfig/coreColors"
import { Mesh, Shape } from "three"

const getShape = (width: number, height: number, radius: number) => {
  const shape = new Shape()
  const x = -width / 2
  const y = -height / 2
  shape.moveTo(x, y + radius)
  shape.lineTo(x, y + height - radius)
  shape.quadraticCurveTo(x, y + height, x + radius, y + height)
  shape.lineTo(x + width - radius, y + height)
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
  shape.lineTo(x + width, y + radius)
  shape.quadraticCurveTo(x + width, y, x + width - radius, y)
  shape.lineTo(x + radius, y)
  shape.quadraticCurveTo(x, y, x, y + radius)
  return shape
}

export const PaperPlane = () => {
  const { viewport } = useThree()
  const margin = 0.5
  const rectWidth = (viewport.width - 2 * margin) / 2
  const paperPlaneRef = useRef<Mesh>(null)
  const roundedRectShape = useMemo(
    () => getShape(rectWidth, 3, 0.3),
    [rectWidth]
  )

  return (
    <mesh ref={paperPlaneRef} position={[viewport.width / 4, 0, 0]}>
      <shapeGeometry args={[roundedRectShape]} />
      <meshPhongMaterial
        color={coreColors.gray100}
        transparent={true}
        opacity={0.7}
      />
      <Html transform position={[0, 0, -2]}>
        <div style={{ color: "pink" }}>Text Text Text</div>
      </Html>
    </mesh>
  )
}
