import { styled, theme } from "src/designConfig"

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
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
})

const ImageContainer = styled("div", {
  height: "100%",
  overflow: "hidden",
  borderRadius: theme.radii.default,
})

const StyledHeading = styled("h4", {
  margin: "0",
  fontSize: theme.fontSizes.subtitle,
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
    <a href={link} target="_blank" rel="noreferrer">
      <ImageContainer>
        <StyledImg src={imgUrl} alt={name} />
      </ImageContainer>
    </a>
    <StyledHeading>{name}</StyledHeading>
  </StyledCard>
)
