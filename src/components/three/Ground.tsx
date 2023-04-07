import { useMemo } from "react"

import { MeshReflectorMaterial } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

export const Ground = ({ position }: MeshProps) => {
  const { theme } = useThemeContext()

  const config = useMemo(
    () =>
      theme === "light"
        ? {
            mixBlur: 0.7,
            mixStrength: 80,
            maxDepthThreshold: 1.5,
            metalness: 0.8,
          }
        : {
            mixBlur: 1,
            mixStrength: 100,
            maxDepthThreshold: 1,
            metalness: 0.2,
          },
    [theme]
  )

  return (
    <group position={position} rotation-x={-Math.PI / 2}>
      <mesh receiveShadow>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          color={theme === "dark" ? coreColors.black : coreColors.gray150}
          mixBlur={config.mixBlur}
          mixStrength={config.mixStrength}
          maxDepthThreshold={config.maxDepthThreshold}
          metalness={config.metalness}
          minDepthThreshold={0.6}
          resolution={2048}
          blur={[300, 30]}
          depthScale={1.2}
          roughness={1}
          mirror={0}
        />
      </mesh>
    </group>
  )
}
