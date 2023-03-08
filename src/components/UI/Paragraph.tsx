import { ReactNode } from "react"

import { styled, theme } from "src/designConfig"

const StyledParagraph = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  padding: "4px 12px",
})

const StyledHeader = styled("div", {
  fontWeight: 600,
  fontSize: theme.fontSizes.title,
  color: theme.colors.headerOnSurface,
})

const StyledText = styled("div", {
  fontSize: theme.fontSizes.default,
  color: theme.colors.textOnSurface,
})

interface ParagraphProps {
  header: ReactNode
  text: ReactNode
}

export const Paragraph = ({ header, text }: ParagraphProps) => (
  <StyledParagraph>
    <StyledHeader>{header}</StyledHeader>
    <StyledText>{text}</StyledText>
  </StyledParagraph>
)
