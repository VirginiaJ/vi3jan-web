import { styled, theme } from "src/designConfig"

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
  variants: {
    alignContent: {
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
    alignContent: "left",
  },
})

export const Paper = ({
  children,
  ...props
}: React.ComponentProps<typeof StyledPaper>) => (
  <StyledPaper {...props}>{children}</StyledPaper>
)
