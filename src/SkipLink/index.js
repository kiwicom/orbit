// @flow

import React from 'react';
import styled from 'styled-components';

import KEY_CODE_MAP from '../common/keyMaps';
import defaultTheme from '../defaultTheme';
import type { Props } from './index.js.flow';

const StyledNavigation = styled.nav``;

const StyledLink = styled.a`
  position: absolute;
  width: 0px;
  height: 0px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  text-decoration: ${({ theme }) => theme.orbit.textDecorationTextLinkPrimary};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextLarge}; /* TODO: ADD TOKEN */
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal}; /* TODO: ADD TOKEN */
  color: ${({ theme }) => theme.orbit.paletteInkNormal}; /* TODO: ADD TOKEN */

  &:focus {
    top: 1rem;
    left: 1rem;
    clip: auto;
    height: auto;
    width: auto;
    margin: 0;
    overflow: visible;
    padding: ${({ theme }) => theme.orbit.spaceMedium}; /* TODO: ADD TOKEN */
    background-color: ${({ theme }) => theme.orbit.paletteWhite}; /* TODO: ADD TOKEN */
    z-index: ${({ theme }) => theme.orbit.zIndexOnTheTop}; /* TODO: ADD TOKEN */
  }
`;

StyledLink.defaultProps = {
  theme: defaultTheme,
};

const StyledDescription = styled.p`
  background-color: red;
  visibility: none;
  position: absolute;
  width: 0px;
  height: 0px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const SkipLink = ({ links, description }: Props) => {
  return (
    <StyledNavigation>
      {description && <StyledDescription>{description}</StyledDescription>}
      {links &&
        links.map(({ href, name, onClick }, index) => {
          return (
            <StyledLink
              key={encodeURIComponent(name + index)}
              href={href}
              tabIndex={href ? '' : '0'}
              role={href ? '' : 'Button'}
              onClick={onClick}
              onKeyDown={ev => {
                if (ev.keyCode === KEY_CODE_MAP.ENTER && onClick) {
                  onClick();
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
