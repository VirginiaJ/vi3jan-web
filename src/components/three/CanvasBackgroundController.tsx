import { useEffect } from "react"

import { useThree } from "@react-three/fiber"
import { useThemeContext } from "src/App"
import { coreColors } from "src/designConfig/coreColors"

export const CanvasBackgroundController = () => {
  const { theme } = useThemeContext()
  const { gl } = useThree()

  useEffect(() => {
    gl.setClearColor(theme === "dark" ? "#000" : coreColors.gray50)
  }, [gl, theme])

  return <></>
}
