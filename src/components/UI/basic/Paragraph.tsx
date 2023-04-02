import { ReactNode } from "react"

import { styled, theme } from "src/designConfig"

const StyledParagraph = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  variants: {
    textAlign: {
      left: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      right: {
        alignItems: "flex-end",
      },
    },
  },
  defaultVariants: {
    textAlign: "left",
  },
})

const StyledHeader = styled("h1", {
  marginTop: 0,
  marginBottom: theme.space.default,
  fontSize: theme.fontSizes.titleLg,
  lineHeight: theme.lineHeights.titleLg,
  color: theme.colors.textOnPrimary,
  "@mobile": {
    fontSize: theme.fontSizes.titleSm,
    lineHeight: theme.lineHeights.titleSm,
  },
})

const StyledText = styled("div", {
  fontSize: theme.fontSizes.defaultLg,
  lineHeight: theme.lineHeights.defaultLg,
  color: theme.colors.textOnSurface,
  "@mobile": {
    fontSize: theme.fontSizes.defaultSm,
    lineHeight: theme.lineHeights.defaultSm,
  },
})

interface ParagraphProps extends React.ComponentProps<typeof StyledParagraph> {
  header: ReactNode
  text: ReactNode
}

export const Paragraph = ({ header, text, ...props }: ParagraphProps) => (
  <StyledParagraph {...props}>
    <StyledHeader>{header}</StyledHeader>
    <StyledText>{text}</StyledText>
  </StyledParagraph>
)
