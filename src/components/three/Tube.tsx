import { MeshProps } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

export const Tube = (props: MeshProps) => {
  const { theme } = useThemeContext()

  return (
    <mesh castShadow {...props}>
      <cylinderGeometry args={[0.05, 0.05, 16.555, 36]} />
      <meshBasicMaterial
        toneMapped={false}
        color={theme === "dark" ? coreColors.purple300 : coreColors.purple400}
      />
    </mesh>
  )
}
