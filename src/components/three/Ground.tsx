import { MeshReflectorMaterial } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

export const Ground = ({ position }: MeshProps) => {
  const { theme } = useThemeContext()

  return (
    <group position={position} rotation-x={-Math.PI / 2}>
      <mesh receiveShadow>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          resolution={2048}
          blur={[400, 400]}
          mirror={0.5}
          mixBlur={1}
          mixStrength={theme === "dark" ? 80 : 1.5}
          depthScale={1.2}
          minDepthThreshold={0.7}
          maxDepthThreshold={1}
          metalness={0.6}
          roughness={theme === "dark" ? 1 : 0.7}
          color={theme === "dark" ? coreColors.black : coreColors.gray50}
        />
      </mesh>
    </group>
  )
}
