import { styled, theme } from "../../designConfig"

const StyledPaper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 12px",
  transition: "background-color 0.2s ease",
  borderRadius: theme.radii.default,
  variants: {
    color: {
      primary: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.textOnPrimary,
        "&:hover": {
          backgroundColor: theme.colors.primaryHover,
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
})

export const Paper = ({
  children,
  ...props
}: React.ComponentProps<typeof StyledPaper>) => (
  <StyledPaper {...props}>{children}</StyledPaper>
)
