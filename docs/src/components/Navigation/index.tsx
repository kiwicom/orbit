import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

import useCollections from "../../hooks/useCollections";
import MobileNavigation from "./MobileNavigation";
import { capitalize } from "../../utils/common";
import Sidenav from "../Sidenav";

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

  const { isDesktop } = useMediaQuery();

  return isDesktop ? (
    collections.map(({ name, id }, i) => (
      <React.Fragment key={id}>
        <StyledLink to={`/${name}/`}>{capitalize(name.split("-").join(" "))}</StyledLink>
        {i + 1 !== collections.length ? <span>&#xb7;</span> : null}
      </React.Fragment>
    ))
  ) : (
    <Sidenav>
      <ul role="menu">
        {collections.map(({ id, name }) => (
          <MobileNavigation key={id} name={name} />
        ))}
      </ul>
    </Sidenav>
  );
};

export default NavigationLinks;
