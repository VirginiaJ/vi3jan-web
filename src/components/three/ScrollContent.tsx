import { Preload, Scroll, ScrollControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

import { HtmlTextBlock } from "./HtmlTextBlock"
import { Paper } from "../UI/Paper"
import { Paragraph } from "../UI/Paragraph"

export const ScrollContent = () => {
  const { viewport } = useThree()

  return (
    <ScrollControls damping={0.2} pages={3} distance={0.5}>
      <Scroll>
        <group position={[viewport.width / 4, 0, 0]}>
          <HtmlTextBlock>
            <Paper>
              <Paragraph
                header={"Header"}
                text={"paragraph text text text text text text text text"}
              />
            </Paper>
          </HtmlTextBlock>
          <mesh position={[-3, 1, 0.15]} castShadow>
            <sphereGeometry args={[0.3, 20]} />
            <meshPhongMaterial color="red" />
          </mesh>
        </group>
        <HtmlTextBlock position={[-viewport.width / 4, -viewport.height, 0]}>
          <Paper>
            <Paragraph
              header={"Header2"}
              text={"paragraph text text text text text text text text"}
            />
          </Paper>
        </HtmlTextBlock>
      </Scroll>
      <Preload />
    </ScrollControls>
  )
}
