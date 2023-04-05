import { useEffect, useState } from "react"

import { useAspect } from "@react-three/drei"
import { sRGBEncoding } from "three"

export const VideoBackground = () => {
  const scale = useAspect(1080, 1920, 0.7)
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "video/pexels-artem-podrez.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  )

  useEffect(() => void video.play(), [video])

  return (
    <mesh scale={scale} position={[0, 0, -7]}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={true}>
        <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  )
}
