import { ReactNode } from "react"

import { styled, theme } from "src/designConfig"

const StyledHeader = styled("h1", {
  marginTop: 0,
  marginBottom: theme.space.default,
  fontSize: theme.fontSizes.titleLg,
  color: theme.colors.textOnPrimary,
  "@mobile": {
    fontSize: theme.fontSizes.titleSm,
  },
})

interface ParagraphProps extends React.ComponentProps<typeof StyledHeader> {
  text: ReactNode
}

export const Header = ({ text, ...props }: ParagraphProps) => (
  <StyledHeader {...props}>{text}</StyledHeader>
)
