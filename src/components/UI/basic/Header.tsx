import { ReactNode } from "react"

import { styled, theme } from "src/designConfig"

const StyledHeader = styled("h1", {
  marginTop: 0,
  marginBottom: theme.space.default,
  fontSize: theme.fontSizes.title,
  color: theme.colors.textOnPrimary,
})

interface ParagraphProps extends React.ComponentProps<typeof StyledHeader> {
  text: ReactNode
}

export const Header = ({ text, ...props }: ParagraphProps) => (
  <StyledHeader {...props}>{text}</StyledHeader>
)
