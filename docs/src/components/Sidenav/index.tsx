import * as React from "react";
import styled, { css } from "styled-components";
import { Portal, mediaQueries } from "@kiwicom/orbit-components";
import Menu from "@kiwicom/orbit-components/lib/icons/MenuHamburger";
import Close from "@kiwicom/orbit-components/lib/icons/Close";
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery";
import useClickOutside from "@kiwicom/orbit-components/lib/hooks/useClickOutside";

import { CONTENT_PADDING } from "../../consts";

interface WrapperProps {
  width: number;
  shown: boolean;
}

export const HEADER_HEIGHT = "52px"; // safely above the search input height
export const paddingMixin = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  ${mediaQueries.tablet(css`
    padding-top: 1rem;
    padding-bottom: 1rem;
  `)}
  ${mediaQueries.desktop(css`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  `)}
`;

const StyledAsideWrapper = styled.aside<WrapperProps>`
  ${({ width, theme, shown }) => css`
    background: ${theme.orbit.paletteWhite};
    padding: 0 20px;
    z-index: 100;
    margin: 0;
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    overflow-y: auto;
    font-family: ${theme.orbit.fontFamily};
    box-shadow: ${theme.orbit.boxShadowRaised};
    visibility: ${shown ? `visible` : `hidden`};
    transition: transform ${theme.orbit.durationFast} ease-in;
    width: 100%;
    right: 0;
    transform: translate3d(${shown ? "0, 0, 0" : `100%, 0, 0`});
    ${mq.largeMobile(css`
      max-width: ${width}px;
    `)};
  `}
`;

export const StyledOpenButton = styled.button.attrs(({ className }) => ({
  className,
  "aria-label": "open",
  type: "button",
}))`
  border-radius: 3px;
  display: flex;
  &:focus {
    outline: 0;
    box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 3px;
  }

  ${mediaQueries.tablet(css`
    padding: ${CONTENT_PADDING};
    margin: -${CONTENT_PADDING} 0;
  `)}
`;

export const StyledAsideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudLight};
  height: ${HEADER_HEIGHT};
  ${paddingMixin};
  box-sizing: content-box;
`;

const StyledCloseButton = styled.button.attrs(({ className, tabIndex }) => ({
  className,
  tabindex: tabIndex,
  "aria-label": "close",
}))`
  ${({ theme }) => css`
    border-radius: ${theme.orbit.borderRadiusNormal};
    padding: 10px;
    &:focus {
      outline: 0;
      background: ${theme.orbit.backgroundButtonSecondary};
      box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 3px;
    }
    &:hover {
      background: ${theme.orbit.backgroundButtonSecondaryHover};
      box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 3px;
    }
    transition: all ${theme.orbit.durationFast} ease-in;
  `}
`;

const StyledContent = styled.div`
  margin: 20px 0;
`;

interface Props {
  width?: number;
  actions?: React.ReactNode;
  toggleIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Sidenav = ({ width = 350, children, toggleIcon, actions }: Props) => {
  const [isShown, setShown] = React.useState(false);
  const handleShown = () => setShown(prev => !prev);
  const ref = React.useRef(null);
  useClickOutside(ref, () => setShown(false));

  return (
    <>
      <StyledOpenButton onClick={handleShown}>{toggleIcon || <Menu ariaHidden />}</StyledOpenButton>

      <Portal>
        <StyledAsideWrapper
          ref={ref}
          width={width}
          role="navigation"
          aria-label="side navigation"
          aria-hidden={!isShown}
          shown={isShown}
        >
          <StyledAsideHeader>
            {actions}
            <StyledCloseButton tabIndex={isShown ? 0 : -1} onClick={handleShown}>
              <Close ariaHidden />
            </StyledCloseButton>
          </StyledAsideHeader>
          <StyledContent>{children}</StyledContent>
        </StyledAsideWrapper>
      </Portal>
    </>
  );
};

export default Sidenav;
