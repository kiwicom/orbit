import * as React from "react";
import styled, { css } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import KEY_CODE_MAP from "../common/keyMaps";
import useFocusTrap from "../hooks/useFocusTrap";
import useLockScrolling from "../hooks/useLockScrolling";
import transition from "../utils/transition";
import mq from "../utils/mediaQuery";
import type { Theme } from "../defaultTheme";
import defaultTheme from "../defaultTheme";
import DrawerClose from "./components/DrawerClose";
import POSITIONS from "./consts";
import getPosition from "./helpers/getPosition";
import getTransitionAnimation from "./helpers/getTransitionAnimation";
import useTheme from "../hooks/useTheme";
import Stack from "../Stack";
import useStateWithTimeout from "../hooks/useStateWithTimeout";
import Heading from "../Heading";
import { rtlSpacing } from "../utils/rtl";
import type { Props } from "./types";

const getPadding = ({
  noPadding,
  theme,
  hasTopPadding,
}: {
  noPadding?: boolean;
  theme: Theme;
  hasTopPadding?: boolean;
}) => {
  const padding = (space: string) => (!hasTopPadding ? rtlSpacing(`0 ${space} ${space}`) : space);
  return (
    !noPadding &&
    css`
      padding: ${padding(theme.orbit.spaceMedium)};
      ${mq.largeMobile(css`
        padding: ${padding(theme.orbit.spaceXLarge)};
      `)};
    `
  );
};

const StyledDrawer = styled.div<{ overlayShown?: boolean; shown?: boolean }>`
  ${({ theme, overlayShown, shown }) => css`
    display: flex;
    visibility: ${overlayShown ? "visible" : "hidden"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: ${shown ? convertHexToRgba(theme.orbit.paletteInkDark, 50) : "transparent"};
    z-index: ${theme.orbit.zIndexDrawer};
    transition: ${transition(["background-color"], "fast", "ease-in-out")};
  `}
`;

StyledDrawer.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerSide = styled.aside`
  ${({
    theme,
    suppressed,
    width,
  }: {
    theme: Theme;
    suppressed?: boolean;
    width: string;
    position: "right" | "left";
    shown?: boolean;
  }) => css`
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    bottom: 0;
    height: 100%;
    font-family: ${theme.orbit.fontFamily};
    overflow-y: auto;
    box-shadow: ${theme.orbit.boxShadowRaised};
    background: ${suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhite};
    transition: ${transition(["transform"], "normal", "ease-in-out")};
    width: 100%;
    ${mq.largeMobile(css`
      max-width: ${width};
    `)};
    ${getPosition};
    ${getTransitionAnimation};
  `}
`;

StyledDrawerSide.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerContent = styled.div<{
  hasClose?: boolean;
  noPadding?: boolean;
  hasTopPadding?: boolean;
}>`
  ${({ theme, noPadding, hasClose, hasTopPadding }) => css`
    ${getPadding({ noPadding, hasTopPadding, theme })};
    margin-bottom: ${noPadding && theme.orbit.spaceLarge};
    margin-top: ${!hasClose && noPadding && theme.orbit.spaceLarge};
  `}
`;

StyledDrawerContent.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerHeader = styled.div<{
  fixedHeader?: boolean;
  suppressed?: boolean;
  bordered?: boolean;
  noPadding?: boolean;
  onlyIcon?: boolean;
}>`
  ${({ theme, fixedHeader, suppressed, bordered, noPadding, onlyIcon }) => css`
    display: flex;
    ${fixedHeader &&
    css`
      position: sticky;
      top: 0;
      z-index: ${theme.orbit.zIndexSticky};
    `}
    justify-content: ${onlyIcon ? "flex-end" : "space-between"};
    align-items: center;
    background: ${suppressed && !bordered
      ? theme.orbit.paletteCloudLight
      : theme.orbit.paletteWhite};
    height: 64px;
    box-sizing: border-box;
    border-bottom: ${bordered && `1px solid ${theme.orbit.paletteCloudNormal}`};
    ${!noPadding &&
    css`
      padding: 0 ${theme.orbit.spaceMedium};
      ${mq.largeMobile(css`
        padding: ${rtlSpacing(`0 ${theme.orbit.spaceLarge} 0 ${theme.orbit.spaceXLarge}`)};
      `)};
    `};
  `}
`;

StyledDrawerHeader.defaultProps = {
  theme: defaultTheme,
};

const Drawer = ({
  children,
  onClose,
  lockScrolling = true,
  fixedHeader,
  shown = true,
  width = "320px",
  position = POSITIONS.RIGHT,
  dataTest,
  id,
  noPadding,
  suppressed,
  title,
  actions,
}: Props) => {
  const theme = useTheme();
  const overlayRef = React.useRef(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const scrollableRef = React.useRef<HTMLElement | null>(null);
  const timeoutLength = React.useMemo(() => parseFloat(theme.orbit.durationNormal) * 1000, [
    theme.orbit.durationNormal,
  ]);

  const [overlayShown, setOverlayShown, setOverlayShownWithTimeout] = useStateWithTimeout<boolean>(
    shown,
    timeoutLength,
  );

  const handleOnClose = React.useCallback(
    ev => {
      if (onClose && ev.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  useFocusTrap(scrollableRef);
  useLockScrolling(scrollableRef, lockScrolling && overlayShown);

  React.useEffect(() => {
    closeButtonRef.current?.focus();

    if (overlayShown !== shown) {
      if (shown) {
        setOverlayShown(true);
      } else if (!shown) {
        setOverlayShownWithTimeout(false);
      }
    }

    const handleKeyDown = ev => {
      if (ev.keyCode === KEY_CODE_MAP.ESC && onClose) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [overlayShown, setOverlayShown, setOverlayShownWithTimeout, shown, onClose]);

  return (
    <StyledDrawer
      role="button"
      overlayShown={overlayShown}
      shown={shown}
      onClick={handleOnClose}
      data-test={dataTest}
      id={id}
      aria-hidden={!shown}
      ref={overlayRef}
    >
      <StyledDrawerSide
        ref={scrollableRef}
        shown={shown}
        width={width}
        position={position}
        role="navigation"
        suppressed={suppressed}
      >
        {(title || actions || onClose) && (
          <StyledDrawerHeader
            onlyIcon={!title && !actions}
            bordered={!!(title || actions)}
            suppressed={!!suppressed}
            fixedHeader={!!fixedHeader}
          >
            {title && <Heading type="title2">{title}</Heading>}
            {actions && (
              <Stack spacing="none" justify="end" flex shrink>
                {actions}
              </Stack>
            )}
            {onClose && <DrawerClose onClick={onClose} ref={closeButtonRef} />}
          </StyledDrawerHeader>
        )}
        <StyledDrawerContent
          noPadding={noPadding}
          hasClose={!!onClose}
          hasTopPadding={!!(title || actions)}
        >
          {children}
        </StyledDrawerContent>
      </StyledDrawerSide>
    </StyledDrawer>
  );
};

export default Drawer;
