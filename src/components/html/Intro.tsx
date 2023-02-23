import { useEffect } from "react"

import { Html } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

import { coreColors } from "../../designConfig/coreColors"
import { useStore } from "../../store"

export const Intro = () => {
  const { gl } = useThree()
  const isDarkModeEnabled = useStore((state) => state.isDarkModeEnabled)

  useEffect(() => {
    gl.setClearColor(isDarkModeEnabled ? coreColors.black : coreColors.white)
  }, [gl, isDarkModeEnabled])

  return (
    <Html>
      <div style={{ color: "#fff", backgroundColor: "#000" }}>Component</div>
    </Html>
  )
}
