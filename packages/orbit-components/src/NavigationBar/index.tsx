import * as React from "react";
import styled, { css } from "styled-components";

import { right } from "../utils/rtl";
import transition from "../utils/transition";
import defaultTheme from "../defaultTheme";
import MenuHamburger from "../icons/MenuHamburger";
import ButtonLink from "../ButtonLink";
import useStateWithCallback from "../hooks/useStateWithCallback";
import useTranslate from "../hooks/useTranslate";
import mq from "../utils/mediaQuery";
import type { Props } from "./types";

const NAVBAR_HEIGHT = { MOBILE: 52, DESKTOP: 64 };

const StyledNavigationBarContent = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    margin-${right}: ${theme.orbit.spaceXSmall};
  `}
`;

StyledNavigationBarContent.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationBar = styled.nav<{ shown: boolean }>`
  ${({ theme, shown }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${NAVBAR_HEIGHT.MOBILE}px;
    width: 100%;
    display: flex;
    align-items: center;
    background: ${theme.orbit.paletteWhite};
    box-shadow: ${theme.orbit.boxShadowFixed};
    padding: ${theme.orbit.spaceSmall};
    box-sizing: border-box;
    z-index: 700;
    transition: ${transition(["transform"], "normal", "ease-in-out")};
    transform: translate3d(0, ${shown ? "0" : `-${NAVBAR_HEIGHT.MOBILE}px`}, 0);
    ${mq.tablet(css`
      height: ${NAVBAR_HEIGHT.DESKTOP}px;
      transform: translate3d(0, ${shown ? "0" : `-${NAVBAR_HEIGHT.DESKTOP}px`}, 0);
    `)};
  `}
`;

StyledNavigationBar.defaultProps = {
  theme: defaultTheme,
};

const NavigationBar = ({
  onMenuOpen,
  children,
  dataTest,
  id,
  onShow,
  onHide,
  hideOnScroll = true,
}: Props) => {
  const translate = useTranslate();
  const resolveCallback = React.useCallback(
    state => {
      if (onHide && !state) onHide();
      if (onShow && state) onShow();
    },
    [onHide, onShow],
  );
  const [shown, setShown] = useStateWithCallback<boolean>(true, resolveCallback);

  const [prevScrollPosition, setPrevScrollPosition] = React.useState(0);

  const handleNavigationBarPosition = React.useCallback(() => {
    const currentScrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop);

    if (!hideOnScroll) return;

    if (
      prevScrollPosition < currentScrollPosition &&
      currentScrollPosition > NAVBAR_HEIGHT.DESKTOP
    ) {
      setShown(false);
    } else {
      setShown(true);
    }

    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition, setShown, hideOnScroll]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleNavigationBarPosition);
    return () => {
      window.removeEventListener("scroll", handleNavigationBarPosition);
    };
  });

  return (
    <StyledNavigationBar data-test={dataTest} id={id} shown={shown}>
      <StyledNavigationBarContent>{children}</StyledNavigationBarContent>
      {onMenuOpen && (
        <ButtonLink
          type="secondary"
          onClick={onMenuOpen}
          iconLeft={<MenuHamburger />}
          title={translate("navigationbar_open_menu")}
        />
      )}
    </StyledNavigationBar>
  );
};

export default NavigationBar;
