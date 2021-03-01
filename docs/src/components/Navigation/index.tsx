import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Hide, Stack } from "@kiwicom/orbit-components";

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

  return (
    <>
      <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet"]}>
        <Stack spacing="medium" align="center">
          {collections.map(({ name, id }, i) => (
            <React.Fragment key={id}>
              <StyledLink to={`/${name}/`}>{capitalize(name.split("-").join(" "))}</StyledLink>
              {i + 1 !== collections.length ? <span>&#xb7;</span> : null}
            </React.Fragment>
          ))}
        </Stack>
      </Hide>
      <Hide on={["desktop", "largeDesktop"]}>
        <Sidenav>
          <ul role="menu">
            {collections.map(({ id, name }) => (
              <MobileNavigation key={id} name={name} />
            ))}
          </ul>
        </Sidenav>
      </Hide>
    </>
  );
};

export default NavigationLinks;
