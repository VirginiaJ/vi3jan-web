import { useEffect } from "react"

import { Html } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { coreColors } from "src/designConfig/coreColors"
import { useStore } from "src/store"

import { Paper } from "./UI/Paper"

export const Intro = () => {
  const { gl } = useThree()
  const isDarkModeEnabled = useStore((state) => state.isDarkModeEnabled)

  useEffect(() => {
    gl.setClearColor(isDarkModeEnabled ? coreColors.black : coreColors.white)
  }, [gl, isDarkModeEnabled])

  return (
    <Html>
      <Paper>
        <div>Component</div>
      </Paper>
    </Html>
  )
}
