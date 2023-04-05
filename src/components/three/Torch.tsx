import { useCallback, useEffect, useRef } from "react"

import { useThree } from "@react-three/fiber"
import { PointLight, Vector3 } from "three"

const offset = new Vector3(0, 0.2, 0.1)

export const Torch = () => {
  const { mouse, camera, scene, raycaster } = useThree()
  const torchRef = useRef<PointLight>(null)

  const onMouseMove = useCallback(() => {
    raycaster.setFromCamera(mouse, camera)
    const interactions = raycaster.intersectObjects(scene.children)
    if (interactions.length > 0) {
      torchRef.current?.position.copy(interactions[0].point).add(offset)
    }
  }, [camera, mouse, raycaster, scene.children])

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => document.removeEventListener("mousemove", onMouseMove)
  }, [onMouseMove])

  return (
    <pointLight ref={torchRef} color="#FF9F1D" intensity={5} distance={2} />
  )
}
