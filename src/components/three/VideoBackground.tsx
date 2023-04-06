import { useEffect, useMemo, useState } from "react"

import { Vector3Tuple, sRGBEncoding } from "three"

interface VideoProps {
  url: string
  width: number
  height: number
  scale: number
  position: Vector3Tuple
}

export const VideoBackground = ({
  url,
  scale,
  width,
  height,
  position,
}: VideoProps) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: url,
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  )

  const { aspectWidth, aspectHeight } = useMemo(
    () => ({
      aspectWidth: width / width > height ? height : width,
      aspectHeight: height / width > height ? height : width,
    }),
    [width, height]
  )

  useEffect(() => void video.play(), [video])

  return (
    <mesh scale={scale} position={position}>
      <planeGeometry args={[aspectWidth, aspectHeight]} />
      <meshBasicMaterial toneMapped={true}>
        <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  )
}
