// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import defaultTheme from "../defaultTheme";
import DrawerClose from "./components/DrawerClose";
import TYPES from "./consts";

import type { Props } from ".";

const animateTransition = ({ width, shown }) =>
  css`
    transform: translate3d(${shown ? "0" : `${width} , 0, 0`});
  `;

const StyledDrawer = styled.div`
  display: flex;
  visibility: visible;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 825;
  transition: background-color 0.3s ease-in-out;
`;

const StyledDrawerSide = styled.aside`
  display: block;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 700;
  width: ${({ width }) => width};
  height: 100%;
  font-weight: 500;
  font-size: 14px;
  overflow-y: auto;
  box-shadow: rgba(46, 53, 59, 0.22) 0 6px 16px, rgba(0, 0, 0, 0.09) 0 1px 3px;
  max-width: 320px;
  background: rgb(255, 255, 255);
  transition: transform 0.3s ease-in-out 0s;
  ${animateTransition};
`;

StyledDrawerSide.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerContent = styled.div`
  padding: 16px;
  ${mq.tablet(css`
    padding: 32px;
  `)};
`;

StyledDrawerContent.defaultProps = {
  theme: defaultTheme,
};

const Drawer = ({ children, type = TYPES.BOX, onClose, shown, width = "320px" }: Props) => {
  const sideRef = React.useRef(null);
  const handleOnClose = React.useCallback(
    ev => {
      if (sideRef.current && sideRef.current.contains(ev.target)) {
        return;
      }
      if (onClose) {
        onClose();
      }
    },
    [onClose],
  );
  return (
    <StyledDrawer role="button" shown={shown} onClose={handleOnClose}>
      <StyledDrawerSide shown={shown} width={width} ref={sideRef}>
        <DrawerClose type={type} onClick={onClose} />
        <StyledDrawerContent>{children}</StyledDrawerContent>
      </StyledDrawerSide>
    </StyledDrawer>
  );
};

export default Drawer;
