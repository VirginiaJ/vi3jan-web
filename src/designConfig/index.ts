import { createStitches, createTheme } from "@stitches/react"

import { coreColors } from "./coreColors"
import { darkThemeColors } from "./darkThemeColors"
import { lightThemeColors } from "./lightThemeColors"

export const defaultMargin = 12

const space = {
  small: "8px",
  default: `${defaultMargin}px`,
  medium: "24px",
  large: "48px",
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
      default: "24px",
      subtitle: "36px",
      title: "48px",
    },
    lineHeights: {
      default: "30px",
      subtitle: "42px",
      title: "54px",
    },
    space,
    radii: {
      large: "48px",
      medium: "24px",
      default: "12px",
      small: "8px",
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
