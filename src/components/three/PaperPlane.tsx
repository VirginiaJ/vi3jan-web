import { ReactNode, useMemo, useRef } from "react"

import { MeshProps, useThree } from "@react-three/fiber"
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

interface PaperPlaneProps extends MeshProps {
  children: ReactNode
}

export const PaperPlane = ({ children, ...props }: PaperPlaneProps) => {
  const { viewport } = useThree()
  const marginX = 0.8
  const marginY = 0.1
  const rectWidth = (viewport.width - 2 * marginX) / 2
  const rectHeight = (viewport.height - 2 * marginY) / 2
  const paperPlaneRef = useRef<Mesh>(null)
  const roundedRectShape = useMemo(
    () => getShape(rectWidth, rectHeight, 0.3),
    [rectWidth, rectHeight]
  )

  return (
    <mesh receiveShadow ref={paperPlaneRef} {...props}>
      <shapeGeometry args={[roundedRectShape]} />
      <meshPhongMaterial
        color={coreColors.gray100}
        transparent={true}
        opacity={0.7}
      />
      {children}
    </mesh>
  )
}
