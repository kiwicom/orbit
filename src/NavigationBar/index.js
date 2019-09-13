// @flow
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import MenuHamburger from "../icons/MenuHamburger";
import ButtonLink from "../ButtonLink";
import useDictionary from "../hooks/useDictionary";
import { pureTranslate } from "../Translate";

import type { Props } from ".";

const StyledNavigationBarContent = styled.div`
  display: block;
  width: 100%;
  margin-right: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

StyledNavigationBarContent.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px; // TODO: create token
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: 0 0 2px 0 rgba(37, 42, 49, 0.16), 0 2px 4px 0 rgba(37, 42, 49, 0.12); // TODO: use elevation levels
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  box-sizing: border-box;
  z-index: 700;
  }
`;

StyledNavigationBar.defaultProps = {
  theme: defaultTheme,
};

const NavigationBar = ({ onMenuOpen, children, dataTest }: Props) => {
  const dictionary = useDictionary();
  const prevScrollPosition =
  const prevScrollpos = window.pageYOffset;
  const handleNavigationBarPosition = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }, [prevScrollpos]);
  useEffect(() => {
    window.addEventListener("scroll", handleNavigationBarPosition);
    return () => {
      window.removeEventListener("scroll", handleNavigationBarPosition);
    };
  });
  return (
    <StyledNavigationBar data-test={dataTest}>
      <StyledNavigationBarContent>{children}</StyledNavigationBarContent>
      {onMenuOpen && (
        <ButtonLink
          type="secondary"
          onClick={onMenuOpen}
          iconLeft={<MenuHamburger />}
          transparent
          title={pureTranslate(dictionary, "navigationbar_open_menu")}
        />
      )}
    </StyledNavigationBar>
  );
};

export default NavigationBar;
