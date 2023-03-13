import { styled, theme } from "../../designConfig"

const StyledPaper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.space.medium,
  padding: theme.space.medium,
  borderRadius: theme.radii.default,
  backgroundColor: theme.colors.surfaceTransparent,
  color: theme.colors.textOnSurface,
})

export const Paper = ({
  children,
  ...props
}: React.ComponentProps<typeof StyledPaper>) => (
  <StyledPaper {...props}>{children}</StyledPaper>
)
