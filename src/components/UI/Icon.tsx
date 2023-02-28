import React from "react"

import { styled } from "src/designConfig"
import { ReactComponent as Moon } from "src/icons/moon.svg"

const icons = {
  moon: Moon,
}

const Wrapper = styled("div", {
  "> svg": {
    width: "100%",
    height: "100%",
  },
  variants: {
    size: {
      small: {
        width: 8,
        height: 8,
      },
      medium: {
        width: 12,
        height: 12,
      },
      large: {
        width: 24,
        height: 24,
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

export type IconName = keyof typeof icons

interface IconProps extends React.ComponentProps<typeof Wrapper> {
  iconName: IconName
}

export const Icon = ({ iconName, ...props }: IconProps) => (
  <Wrapper {...props}>{React.createElement(icons[iconName])}</Wrapper>
)
