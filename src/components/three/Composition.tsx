import { useCallback, useEffect, useRef } from "react"

import { useFrame } from "@react-three/fiber"
import { useLayout } from "src/hooks/useLayout"
import { Group, Object3D, Quaternion } from "three"

import { Model } from "./Model"
import { ObjectGroup } from "./ObjectGroup"
import { Ring } from "./Ring"
import { ScrollContent } from "./ScrollContent"

const obj = new Object3D()
const quat = new Quaternion(0, Math.PI / 2, 0)

export const Composition = () => {
  const { left, right } = useLayout()
  const objectGroupRef = useRef<Group>(null)

  const onWheel = useCallback((e: any) => {
    const pageY = e.pageY
    if (objectGroupRef.current) {
      obj.rotation.copy(objectGroupRef.current.rotation)

      if (!objectGroupRef.current.quaternion.equals(quat)) {
        objectGroupRef.current.quaternion.rotateTowards(quat, 0.01)
      }
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousewheel", onWheel)
    return () => {
      document.removeEventListener("mousewheel", onWheel)
    }
  }, [onWheel])

  useFrame(() => {
    if (!objectGroupRef.current?.quaternion.equals(quat)) {
      objectGroupRef.current?.quaternion.rotateTowards(quat, 0.01)
    }
  })

  return (
    <>
      <ObjectGroup ref={objectGroupRef} position={[0, 0, 0]}>
        <Ring position={[-4, -1.4, 2]} />
        <Ring position={[-3, 0.9, -4]} />
        <Ring position={[-2.5, 0.6, -2]} />
        <Ring position={[-1.8, -1, 5]} />
        <Ring position={[-1, 1.2, -3]} />
      </ObjectGroup>
      <Model position={[-2, -1.99, 0]} />
      <ScrollContent />
    </>
  )
}
