import { useCallback, useEffect, useRef } from "react"

import { useLayout } from "src/hooks/useLayout"
import { Group } from "three"

import { ObjectGroup } from "./ObjectGroup"
import { Ring } from "./Ring"
import { ScrollContent } from "./ScrollContent"

export const Composition = () => {
  const { left, right } = useLayout()
  const objectGroupRef = useRef<Group>(null)

  const onWheel = useCallback((e: any) => {
    const pageY = e.pageY
    if (objectGroupRef.current) objectGroupRef.current.rotation.y += 0.1
  }, [])

  useEffect(() => {
    document.addEventListener("mousewheel", onWheel)
    return () => {
      document.removeEventListener("mousewheel", onWheel)
    }
  }, [onWheel])

  return (
    <>
      <ObjectGroup ref={objectGroupRef} position={[0, 0, 0]}>
        <Ring position={[-4, -1.4, 2]} />
        <Ring position={[-3, 0.9, -4]} />
        <Ring position={[-2.5, 0.6, -2]} />
        <Ring position={[-1.8, -1, 5]} />
        <Ring position={[-1, 1.2, -3]} />
      </ObjectGroup>
      <mesh castShadow receiveShadow position={[-2, -1, -5]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="pink" metalness={1} roughness={0.4} />
      </mesh>
      <ScrollContent />
    </>
  )
}
