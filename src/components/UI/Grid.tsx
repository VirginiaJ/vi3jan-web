import { styled, theme } from "src/designConfig"

const StyledGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.space.medium,
})

export const Grid = ({
  children,
  ...props
}: React.ComponentProps<typeof StyledGrid>) => (
  <StyledGrid {...props}>{children}</StyledGrid>
)
