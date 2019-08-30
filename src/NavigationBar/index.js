// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import MenuHamburger from "../icons/MenuHamburger";
import Stack from "../Stack";

const StyledNavigationBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: 0 0 2px 0 rgba(37, 42, 49, 0.16), 0 2px 4px 0 rgba(37, 42, 49, 0.12);
  padding: 0 0 0 12px;
  box-sizing: border-box;
  z-index: 700;
`;

StyledNavigationBar.defaultProps = {
  theme: defaultTheme,
};

const Hamburger = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 12px;
`;

const NavigationBar = ({ onOpen, children }) => (
  <StyledNavigationBar>
    {children}
    <Stack grow={false} align="center" justify="end" shrink basis="0%">
      {onOpen && (
        <Hamburger onClick={onOpen}>
          <MenuHamburger />
        </Hamburger>
      )}
    </Stack>
  </StyledNavigationBar>
);

export default NavigationBar;
