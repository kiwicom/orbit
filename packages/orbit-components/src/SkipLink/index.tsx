import * as React from "react";
import styled, { css } from "styled-components";

import KEY_CODE_MAP from "../common/keyMaps";
import defaultTheme from "../defaultTheme";
import type { Props } from "./types";

const StyledNavigation = styled.nav``;

const StyledLink = styled.a`
  ${({ theme }) => css`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    font-family: ${theme.orbit.fontFamily};
    text-decoration: ${theme.orbit.textDecorationTextLinkPrimary};
    font-size: ${theme.orbit.fontSizeTextLarge};
    border-radius: ${theme.orbit.borderRadiusNormal};
    color: ${theme.orbit.paletteInkDark};

    &:focus {
      top: 1rem;
      left: 1rem;
      clip: auto;
      height: auto;
      width: auto;
      margin: 0;
      overflow: visible;
      padding: ${theme.orbit.spaceMedium};
      background-color: ${theme.orbit.paletteWhite};
      z-index: ${theme.orbit.zIndexOnTheTop};
    }
  `}
`;

StyledLink.defaultProps = {
  theme: defaultTheme,
};

const SkipLink = ({ links, buttonLabel }: Props) => {
  return (
    <StyledNavigation aria-label={buttonLabel}>
      {links &&
        links.map(({ href, name, onClick }, index) => {
          return (
            <StyledLink
              key={encodeURIComponent(name + index)}
              href={href}
              tabIndex={onClick && 0}
              role={href ? "link" : "button"}
              onClick={onClick}
              onKeyDown={ev => {
                if (ev.keyCode === KEY_CODE_MAP.ENTER && onClick) {
                  onClick(ev);
                }
              }}
            >
              {name}
            </StyledLink>
          );
        })}
    </StyledNavigation>
  );
};

export default SkipLink;
export { Props };
