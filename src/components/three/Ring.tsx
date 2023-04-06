import { MeshProps, useThree } from "@react-three/fiber"
import { coreColors } from "src/designConfig/coreColors"

export const Ring = (props: MeshProps) => {
  const { viewport } = useThree()
  const diam = viewport.width / 2

  return (
    <mesh {...props}>
      <ringGeometry args={[diam - 0.1, diam, 100, 100, 0, Math.PI]} />
      <meshBasicMaterial toneMapped={false} color={coreColors.purple400} />
    </mesh>
  )
}
