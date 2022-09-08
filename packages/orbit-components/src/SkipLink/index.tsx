import * as React from "react";
import styled, { css } from "styled-components";

import KEY_CODE_MAP from "../common/keyMaps";
import defaultTheme from "../defaultTheme";
import { Props } from "./types";

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
    font-size: ${theme.orbit.fontSizeTextLarge}; /* TODO: ADD TOKEN */
    border-radius: ${theme.orbit.borderRadiusNormal}; /* TODO: ADD TOKEN */
    color: ${theme.orbit.paletteInkNormal}; /* TODO: ADD TOKEN */

    &:focus {
      top: 1rem;
      left: 1rem;
      clip: auto;
      height: auto;
      width: auto;
      margin: 0;
      overflow: visible;
      padding: ${theme.orbit.spaceMedium}; /* TODO: ADD TOKEN */
      background-color: ${theme.orbit.paletteWhite}; /* TODO: ADD TOKEN */
      z-index: ${theme.orbit.zIndexOnTheTop}; /* TODO: ADD TOKEN */
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
