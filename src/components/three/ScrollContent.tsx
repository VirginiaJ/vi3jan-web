import { useMemo } from "react"

import { Preload, Scroll, ScrollControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { theme } from "src/designConfig"

import { HtmlBlock } from "./HtmlBlock"
import { Grid } from "../UI/basic/Grid"
import { Header } from "../UI/basic/Header"
import { Paper } from "../UI/basic/Paper"
import { Paragraph } from "../UI/basic/Paragraph"
import { Contacts } from "../UI/Contacts"
import { SandboxCard } from "../UI/SandboxCard"

export const ScrollContent = () => {
  const { viewport, size } = useThree()

  const sandboxData = useMemo(
    () => [
      {
        imgUrl: "/images/3D-bezier-curve-editor.png",
        name: "3D bezier curve editor",
        link: "https://codesandbox.io/s/3d-bezier-curve-editor-54k6be",
      },
      {
        imgUrl: "/images/space-odyssey.png",
        name: "Space odyssey: various three.js techniques",
        link: "https://codesandbox.io/s/space-odyssey-gm7xwc",
      },
      {
        imgUrl: "/images/wizard-spells.png",
        name: "Custom character controls",
        link: "https://codesandbox.io/s/wizard-spells-o7x15",
      },
      {
        imgUrl: "/images/threejs-cubemap-refraction.png",
        name: "Threejs cubemap refraction",
        link: "https://codesandbox.io/s/threejs-cubemap-refraction-yb1c6",
      },
    ],
    []
  )

  return (
    <ScrollControls damping={0.2} pages={3} distance={0.5}>
      <Scroll>
        <group position={[viewport.width / 4, 0, 0]}>
          <HtmlBlock center>
            <Paper
              style={{
                width: `calc(${size.width / 2}px - 8 * ${theme.space.large})`,
              }}
            >
              <Paragraph
                header={"Hello!"}
                text={
                  "I'm Virginia Januškaitė, a front-end and 3D web developer aiming to unchain websites from 2D chains. I like to work on projects that are unique and showcase new types of digital interactions."
                }
              />
            </Paper>
          </HtmlBlock>
          {/* <mesh position={[-3, 1, 0.15]} castShadow>
            <sphereGeometry args={[0.3, 20]} />
            <meshPhongMaterial color="red" />
          </mesh> */}
        </group>
        <HtmlBlock
          center
          position={[-viewport.width / 4, (-2 * viewport.height) / 3, 0]}
        >
          <Paper
            style={{
              width: `calc(${size.width / 2}px - 8 * ${theme.space.large})`,
            }}
          >
            <Paragraph
              header={"Experience"}
              text={
                "Started coding in 2019, professionally working since 2020."
              }
            />
          </Paper>
        </HtmlBlock>
        <HtmlBlock center position={[0, -2 * viewport.height, 0]}>
          <Paper
            alignContent="center"
            style={{
              width: `calc(${size.width}px - 8 * ${theme.space.large})`,
            }}
          >
            <Paragraph
              textAlign="center"
              header={"CodeSandboxes"}
              text={"Projects demonstrating three.js and @react-three/fiber"}
            />
            <Grid>
              {sandboxData.map((data) => (
                <SandboxCard
                  key={data.name}
                  imgUrl={data.imgUrl}
                  name={data.name}
                  link={data.link}
                />
              ))}
            </Grid>
          </Paper>
        </HtmlBlock>
        <HtmlBlock
          center
          position={[viewport.width / 4, -viewport.height * 3, 0]}
        >
          <Paper
            style={{
              width: `calc(${size.width / 2}px - 8 * ${theme.space.large})`,
            }}
          >
            <Header text={"Get in touch"} />
            <Contacts />
          </Paper>
        </HtmlBlock>
      </Scroll>
      <Preload />
    </ScrollControls>
  )
}
