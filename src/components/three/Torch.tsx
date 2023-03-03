import { useCallback, useEffect, useRef } from "react"

import { useThree } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { PointLight, Vector3 } from "three"

const vector = new Vector3()

export const Torch = () => {
  const { theme } = useThemeContext()
  const { mouse, camera } = useThree()
  const torchRef = useRef<PointLight>(null)

  const onMouseMove = useCallback(() => {
    vector.set(mouse.x, mouse.y, 0.5)
    vector.unproject(camera)
    const dir = vector.sub(camera.position).normalize()
    const distance = -camera.position.z / dir.z
    const pos = camera.position.clone().add(dir.multiplyScalar(distance))
    torchRef.current?.position.set(pos.x, pos.y, 1)
  }, [camera, mouse.x, mouse.y])

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => document.removeEventListener("mousemove", onMouseMove)
  }, [onMouseMove])

  return (
    <pointLight
      ref={torchRef}
      color="#FF9F1D"
      intensity={theme === "dark" ? 5 : 0}
      distance={2}
      castShadow
    />
  )
}
