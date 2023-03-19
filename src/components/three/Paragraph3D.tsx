import { Text } from "@react-three/drei"
import { theme } from "src/designConfig"
import { coreColors } from "src/designConfig/coreColors"

export const Paragraph3D = () => (
  <>
    <Text fontSize={0.5} position={[0, 0, 0.001]}>
      <meshPhongMaterial
        attach="material"
        color={theme === "dark" ? coreColors.purple700 : coreColors.purple300}
      />
      Header
    </Text>
    <Text fontSize={0.3} position={[0, -2, 0.001]}>
      <meshPhongMaterial
        attach="material"
        color={theme === "dark" ? coreColors.purple700 : coreColors.purple300}
      />
      paragraph
    </Text>
  </>
)
