import { styled, theme } from "../../designConfig"

const StyledButton = styled("button", {
  appearance: "none",
  outline: "none",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 12px",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  userSelect: "none",
  fontWeight: 600,
  borderRadius: theme.radii.default,
  variants: {
    size: {
      small: {
        height: 20,
      },
      big: {
        height: 36,
        padding: "0 16px",
      },
    },
    isFullWidth: {
      true: {
        width: "100%",
      },
    },
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

export const Button = ({
  children,
  ...props
}: React.ComponentProps<typeof StyledButton>) => (
  <StyledButton {...props}>{children}</StyledButton>
)
