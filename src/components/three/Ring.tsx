import { MeshProps, useThree } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

export const Ring = (props: MeshProps) => {
  const { theme } = useThemeContext()
  const { viewport } = useThree()
  const diam = viewport.width / 2

  return (
    <mesh {...props}>
      <ringGeometry args={[diam - 0.1, diam, 100]} />
      <meshPhongMaterial
        toneMapped={false}
        color={theme === "dark" ? coreColors.purple300 : coreColors.purple400}
      />
    </mesh>
  )
}
