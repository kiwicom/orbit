// @flow
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import mq from "../utils/mediaQuery";
import defaultTheme from "../defaultTheme";
import DrawerClose from "./components/DrawerClose";
import { TYPES, POSITIONS } from "./consts";
import getPosition from "./helpers/getPosition";
import getTransitionAnimation from "./helpers/getTransitionAnimation";
import { isBox, isNavigation } from "./helpers/isType";
import useTheme from "../hooks/useTheme";
import useStateWithTimeout from "../hooks/useStateWithTimeout";

import type { Props } from ".";

const StyledDrawer = styled.div`
  display: flex;
  visibility: ${({ overlayShown }) => (overlayShown ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, shown }) =>
    shown ? convertHexToRgba(theme.orbit.paletteInkNormal, 50) : "transparent"};
  // TODO: use z-index framework
  z-index: 825;
  transition: background-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
`;

StyledDrawer.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerSide = styled(({ theme, width, position, shown, ...props }) => (
  <aside {...props} />
))`
  display: block;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  height: 100%;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  overflow-y: auto;
  // TODO: use new elevation levels
  box-shadow: 0 4px 8px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 16)},
    0 8px 24px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 24)};
  background: ${({ theme }) => theme.orbit.paletteWhite}; // TODO: create token backgroundDrawer
  transition: transform ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  width: 100%;
  ${mq.largeMobile(css`
    max-width: ${({ width }) => width};
  `)};
  ${getPosition};
  ${getTransitionAnimation};
`;

StyledDrawerSide.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerContent = styled(({ theme, type, ...props }) => <div {...props} />)`
  ${({ type }) =>
    isBox(type) &&
    css`
      padding: ${({ theme }) => theme.orbit.spaceMedium};
      ${mq.largeMobile(css`
        padding: ${({ theme }) => theme.orbit.spaceXLarge};
      `)};
    `};
  ${({ type }) =>
    isNavigation(type) &&
    css`
      margin-bottom: ${({ theme }) => theme.orbit.spaceLarge};
    `};
`;

StyledDrawerContent.defaultProps = {
  theme: defaultTheme,
};

const Drawer = ({
  children,
  type = TYPES.BOX,
  onClose,
  shown = true,
  width = "320px",
  position = POSITIONS.RIGHT,
  dataTest,
}: Props) => {
  const theme = useTheme();
  const overlayRef = useRef(null);
  const timeoutLength = useMemo(() => parseFloat(theme.orbit.durationNormal) * 1000, [
    theme.orbit.durationNormal,
  ]);
  const [overlayShown, setOverlayShown, setOverlayShownWithTimeout] = useStateWithTimeout<boolean>(
    shown,
    timeoutLength,
  );
  const handleOnClose = useCallback(
    ev => {
      if (onClose && ev.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );
  useEffect(() => {
    if (overlayShown !== shown) {
      if (shown) {
        setOverlayShown(true);
      } else if (!shown) {
        setOverlayShownWithTimeout(false);
      }
    }
  }, [overlayShown, setOverlayShown, setOverlayShownWithTimeout, shown]);
  return (
    <StyledDrawer
      role="button"
      overlayShown={overlayShown}
      shown={shown}
      onClick={handleOnClose}
      data-test={dataTest}
      aria-hidden={!shown}
      ref={overlayRef}
    >
      <StyledDrawerSide shown={shown} width={width} position={position} role="navigation">
        {onClose && <DrawerClose type={type} onClick={onClose} />}
        <StyledDrawerContent type={type}>{children}</StyledDrawerContent>
      </StyledDrawerSide>
    </StyledDrawer>
  );
};

export default Drawer;
