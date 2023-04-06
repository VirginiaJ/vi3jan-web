import { useGLTF } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"

export const Model = ({ position, rotation, scale }: MeshProps) => {
  const { nodes } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf"
  ) as any

  return (
    <mesh
      castShadow
      geometry={nodes.dragon.geometry}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <meshStandardMaterial color="hotpink" roughness={0.3} metalness={0.95} />
    </mesh>
  )
}

useGLTF.preload(
  "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf"
)
