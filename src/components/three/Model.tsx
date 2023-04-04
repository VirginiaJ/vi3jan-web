import { Caustics, MeshTransmissionMaterial, useGLTF } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"

export const Model = ({ position }: MeshProps) => {
  const { nodes } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf"
  ) as any

  //   worldRadius={0.01} ior={1.2} intensity={0.005}

  return (
    <Caustics
      color="hotpink"
      lightSource={[5, 5, -10]}
      worldRadius={0.6}
      ior={1.2}
      intensity={0.05}
      causticsOnly={false}
      backside={false}
      position={position}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dragon.geometry}
        dispose={null}
      >
        <MeshTransmissionMaterial
          color="hotpink"
          resolution={128}
          thickness={0.5}
          anisotropy={2}
          temporalDistortion={0.1}
          distortion={10}
          distortionScale={1}
        />
      </mesh>
    </Caustics>
  )
}

useGLTF.preload(
  "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf"
)
