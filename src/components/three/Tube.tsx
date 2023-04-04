import { MeshProps } from "@react-three/fiber"
import { coreColors } from "src/designConfig/coreColors"

export const Tube = ({ position, ...props }: MeshProps) => (
  <mesh {...props} position={position}>
    <cylinderGeometry args={[0.05, 0.05, 12.4, 36]} />
    <meshBasicMaterial color={coreColors.purple300} toneMapped={false} />
  </mesh>
)
