import { Text } from "@react-three/drei"
import { theme } from "src/designConfig"
import { coreColors } from "src/designConfig/coreColors"

export const IntroText = () => (
  <Text fontSize={1} position={[0, 0, 0.001]}>
    <meshPhongMaterial
      attach="material"
      color={theme === "dark" ? coreColors.purple700 : coreColors.purple300}
    />
    Hello
  </Text>
)
