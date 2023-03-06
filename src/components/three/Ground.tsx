import { MeshReflectorMaterial } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

export const Ground = ({ position }: MeshProps) => {
  const { theme } = useThemeContext()
  return (
    <group position={position} rotation-x={-Math.PI / 2}>
      <mesh>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          resolution={2048}
          blur={[400, 100]}
          mirror={0.5}
          mixBlur={4}
          mixStrength={1.5}
          depthScale={1}
          minDepthThreshold={0.7}
          maxDepthThreshold={1}
          metalness={0.6}
          roughness={0.75}
          color={theme === "dark" ? "#000" : coreColors.gray50}
        />
      </mesh>
    </group>
  )
}
