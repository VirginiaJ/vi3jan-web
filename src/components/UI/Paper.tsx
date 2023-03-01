import { styled, theme } from "../../designConfig"

const StyledPaper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 12px",
  transition: "background-color 0.2s ease",
  borderRadius: theme.radii.default,
  opacity: 0.7,
  backgroundColor: theme.colors.surface,
  color: theme.colors.textOnPrimary,
})

export const Paper = ({
  children,
  ...props
}: React.ComponentProps<typeof StyledPaper>) => (
  <StyledPaper {...props}>{children}</StyledPaper>
)
