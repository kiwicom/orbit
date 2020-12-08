import React from "react";
import styled from "styled-components";
import useCollections from "../hooks/useCollections";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled(GatsbyLink)`
  font-size: 1em;
  line-height: 22px;
  color: #252a31;
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

  return collections && collections.length > 0
    ? collections.map(({ name, id }) => (
        <StyledLink key={id} to={`/${name}/`}>
          {capitalize(name.split("-").join(" "))}
        </StyledLink>
      ))
    : null;
};

export default NavigationLinks;
