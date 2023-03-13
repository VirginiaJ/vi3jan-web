import { styled, theme } from "../../designConfig"

const StyledCard = styled("div", {
  display: "grid",
  gridTemplateRows: "1fr auto",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  gap: theme.space.default,
  color: theme.colors.textOnSurface,
})

const StyledImg = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: theme.radii.default,
})

const StyledHeading = styled("h4", {
  margin: "0",
  fontSize: theme.fontSizes.title,
  color: theme.colors.textOnPrimary,
})

interface SandboxCardProps extends React.ComponentProps<typeof StyledCard> {
  imgUrl: string
  name: string
  link: string
}

export const SandboxCard = ({
  imgUrl,
  name,
  link,
  ...props
}: SandboxCardProps) => (
  <StyledCard {...props}>
    <a href={link} target="_blank" rel="noreferrer" style={{ height: "100%" }}>
      <StyledImg src={imgUrl} alt={name} />
    </a>
    <StyledHeading>{name}</StyledHeading>
  </StyledCard>
)
