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
      defaultSm: "16px",
      subtitleSm: "24px",
      titleSm: "36px",
      defaultLg: "24px",
      subtitleLg: "36px",
      titleLg: "48px",
    },
    lineHeights: {
      defaultSm: "22px",
      subtitleSm: "30px",
      titleSm: "42px",
      defaultLg: "30px",
      subtitleLg: "42px",
      titleLg: "54px",
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
