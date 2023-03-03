import { Preload, Scroll, ScrollControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

import { IntroText } from "./Intro"
import { PaperPlane } from "./PaperPlane"

export const ScrollContent = () => {
  const { viewport } = useThree()

  return (
    <ScrollControls damping={0.2} pages={3} distance={0.5}>
      <Scroll>
        <PaperPlane position={[viewport.width / 4, 0, 0]}>
          <IntroText />
          <mesh position={[-3, 1, 0.15]} castShadow>
            <sphereGeometry args={[0.3, 20]} />
            <meshPhongMaterial color="red" />
          </mesh>
        </PaperPlane>
        <PaperPlane position={[-viewport.width / 4, -viewport.height, 0]}>
          <IntroText />
        </PaperPlane>
      </Scroll>
      <Preload />
    </ScrollControls>
  )
}
