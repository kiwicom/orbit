// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import ChevronRight from "../icons/ChevronRight";
import ButtonLink from "../ButtonLink";
import defaultTheme from "../defaultTheme";

const TYPES = {
  BOX: "box",
  NAVIGATION: "navigation",
};

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
  diplay: block;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 700;
  width: 320px;
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

const StyledDrawerNavigationClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background: rgb(245, 247, 249);
  height: 64px;
  width: 320px;
`;

const CloseComponent = ({ type, onClose }) => {
  if (type === TYPES.NAVIGATION) {
    return (
      <StyledDrawerNavigationClose>
        <ButtonLink iconRight={<ChevronRight reverseOnRtl />}>Hide</ButtonLink>
      </StyledDrawerNavigationClose>
    );
  }
  return null;
};

const Drawer = ({ children, type, onClose, shown, width = "320px" }) => {
  return (
    <StyledDrawer role="button" shown={shown}>
      <StyledDrawerSide shown={shown} width={width}>
        <CloseComponent type={type} onClose={onClose} />
        <StyledDrawerContent>{children}</StyledDrawerContent>
      </StyledDrawerSide>
    </StyledDrawer>
  );
};

export default Drawer;
