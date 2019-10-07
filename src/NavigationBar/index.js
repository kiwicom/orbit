// @flow
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import MenuHamburger from "../icons/MenuHamburger";
import ButtonLink from "../ButtonLink";
import useDictionary from "../hooks/useDictionary";
import { pureTranslate } from "../Translate";
import useStateWithCallback from "../hooks/useStateWithCallback";

import type { Props } from ".";

const NAVBAR_HEIGHT = 64;

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
  height: ${NAVBAR_HEIGHT}px; // TODO: create token
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: 0 0 2px 0 rgba(37, 42, 49, 0.16), 0 2px 4px 0 rgba(37, 42, 49, 0.12); // TODO: use elevation levels
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  box-sizing: border-box;
  z-index: 700;
  transition: transform ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  transform: translate3d(0, ${({ shown }) => (shown ? "0" : `-${NAVBAR_HEIGHT}px`)}, 0);
`;

StyledNavigationBar.defaultProps = {
  theme: defaultTheme,
};

const NavigationBar = ({ onMenuOpen, children, dataTest, onShow, onHide }: Props) => {
  const dictionary = useDictionary();
  const resolveCallback = useCallback(
    state => {
      if (onHide && !state) onHide();
      if (onShow && state) onShow();
    },
    [onHide, onShow],
  );
  const [shown, setShown] = useStateWithCallback<boolean>(true, resolveCallback);

  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const handleNavigationBarPosition = useCallback(() => {
    const currentScrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop);
    if (prevScrollPosition < currentScrollPosition && currentScrollPosition > NAVBAR_HEIGHT) {
      setShown(false);
    } else {
      setShown(true);
    }
    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition, setShown]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigationBarPosition);
    return () => {
      window.removeEventListener("scroll", handleNavigationBarPosition);
    };
  });
  return (
    <StyledNavigationBar data-test={dataTest} shown={shown}>
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
