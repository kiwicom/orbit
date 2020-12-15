import React from "react";
import styled from "styled-components";
import useCollections from "../hooks/useCollections";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled(GatsbyLink)`
  font-size: 1em;
  line-height: 22px;
  color: ${({ theme }) => theme.orbit.colorTextLinkSecondary};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in;
  &:hover {
    color: ${({ theme }) => theme.orbit.colorTextLinkSecondaryHover};
  }
`;

const NavigationLinks = () => {
  const collections = useCollections([
    "guides",
    "accessibility",
    "components",
    "design-tokens",
    "foundation",
  ]);

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  return collections.map(({ name, id }, i) => (
    <React.Fragment key={id}>
      <StyledLink to={`/${name}/`}>{capitalize(name.split("-").join(" "))}</StyledLink>
      {i + 1 !== collections.length ? <span>&#xb7;</span> : null}
    </React.Fragment>
  ));
};

export default NavigationLinks;
