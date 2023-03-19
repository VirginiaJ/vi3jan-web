import { styled, theme } from "src/designConfig"

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: theme.space.medium,
  color: theme.colors.textOnSurface,
  ul: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
  a: {
    color: theme.colors.textOnSurface,
  },
})

export const Contacts = ({
  ...props
}: React.ComponentProps<typeof StyledContainer>) => (
  <StyledContainer {...props}>
    <ul>
      <li>
        <strong>Email: </strong>
        <a href="mailto:vjanuskaite@gmail.com" target="_blank" rel="noreferrer">
          vjanuskaite@gmail.com
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <strong>Linkedin: </strong>
        <a
          href="https://www.linkedin.com/in/virginija-januskaite/"
          target="_blank"
          rel="noreferrer"
        >
          Virginija Januškaitė
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <strong>Github: </strong>
        <a href="https://github.com/VirginiaJ" target="_blank" rel="noreferrer">
          VirginiaJ
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <strong>Twitter: </strong>
        <a href="https://twitter.com/vi3jan" target="_blank" rel="noreferrer">
          @vi3jan
        </a>
      </li>
    </ul>
  </StyledContainer>
)
