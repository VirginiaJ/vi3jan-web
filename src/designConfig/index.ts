import { createStitches, createTheme } from "@stitches/react"

import { coreColors } from "./coreColors"
import { darkThemeColors } from "./darkThemeColors"
import { lightThemeColors } from "./lightThemeColors"

export const defaultMargin = 12

const space = {
  small: "8px",
  default: `${defaultMargin}px`,
  large: "48px",
  medium: "16px",
}

type SpaceValue = keyof typeof space

const stitches = createStitches({
  media: {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1024px)",
  },
  theme: {
    colors: {
      ...coreColors,
      ...lightThemeColors,
    },
    fontSizes: {
      default: "14px",
      title: "18px",
    },
    lineHeights: {
      default: "16px",
      title: "20px",
    },
    space,
    radii: {
      large: "48px",
      medium: "16px",
      default: "8px",
      small: "4px",
      circular: "9999px",
    },
    shadows: {
      default: "0px 2px 4px rgba(0, 0, 0, 0.16)",
    },
  },
  utils: {
    mx: (value: SpaceValue) => ({
      marginLeft: space[value],
      marginRight: space[value],
    }),
    my: (value: SpaceValue) => ({
      marginTop: space[value],
      marginBottom: space[value],
    }),
  },
})

export const { styled, theme } = stitches

export const darkMode = createTheme("dark-mode", {
  colors: {
    ...darkThemeColors,
  },
})
