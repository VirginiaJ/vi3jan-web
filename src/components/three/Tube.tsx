import { MeshProps } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

export const Tube = ({ position, ...props }: MeshProps) => {
  const { theme } = useThemeContext()

  return (
    <mesh castShadow {...props} position={position}>
      <cylinderGeometry args={[0.05, 0.05, 16.5, 36]} />
      <meshBasicMaterial
        color={theme === "dark" ? coreColors.purple300 : coreColors.purple400}
        toneMapped={false}
      />
    </mesh>
  )
}
