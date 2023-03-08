import { styled, theme } from "../../designConfig"

const StyledPaper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 12px",
  transition: "background-color 0.2s ease",
  borderRadius: theme.radii.default,
  backgroundColor: "rgba(233,233,233,0.7)",
  color: theme.colors.textOnSurface,
})

export const Paper = ({
  children,
  ...props
}: React.ComponentProps<typeof StyledPaper>) => (
  <StyledPaper {...props}>{children}</StyledPaper>
)
