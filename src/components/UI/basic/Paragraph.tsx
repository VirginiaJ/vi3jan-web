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
  fontSize: theme.fontSizes.title,
  lineHeight: theme.lineHeights.title,
  color: theme.colors.textOnPrimary,
})

const StyledText = styled("div", {
  fontSize: theme.fontSizes.default,
  lineHeight: theme.lineHeights.default,
  color: theme.colors.textOnSurface,
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
