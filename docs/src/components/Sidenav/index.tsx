import * as React from "react";
import styled, { css } from "styled-components";
import Menu from "@kiwicom/orbit-components/lib/icons/MenuHamburger";
import Close from "@kiwicom/orbit-components/lib/icons/Close";
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery";
import useClickOutside from "@kiwicom/orbit-components/lib/hooks/useClickOutside";

interface WrapperProps {
  width: number;
  shown: boolean;
}

const StyledAsideWrapper = styled.aside<WrapperProps>`
  ${({ width, theme, shown }) => css`
    background: #fff;
    padding: 10px 20px;
    z-index: 100;
    margin: 0;
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    bottom: 0;
    height: 100vh;
    font-family: ${theme.orbit.fontFamily};
    overflow-y: auto;
    box-shadow: ${theme.orbit.boxShadowRaised};
    width: 100%;
    right: 0;
    transition: transform ${theme.orbit.durationFast} ease-in;
    transform: translate3d(${shown ? "0, 0, 0" : `100%, 0, 0`});
    ${mq.largeMobile(css`
      max-width: ${width}px;
    `)};
  `}
`;

const StyledOpenButton = styled(({ className, children, ariaLabel, onClick }) => (
  <button className={className} aria-label={ariaLabel} onClick={onClick} type="button">
    {children}
  </button>
))`
  border-radius: 3px;
  &:focus {
    outline: 0;
    box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 3px;
  }
`;

const StyledCloseButton = styled(({ className, tabIndex, children, ariaLabel, onClick }) => (
  <button
    className={className}
    tabIndex={tabIndex}
    aria-label={ariaLabel}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
))`
  ${({ theme }) => css`
    position: absolute;
    margin: 0 10px;
    border-radius: ${theme.orbit.borderRadiusNormal};
    right: 0;
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

interface Props {
  width?: number;
  buttonIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Sidenav = ({ width = 350, children, buttonIcon }: Props) => {
  const [isShown, setShown] = React.useState(false);
  const handleShown = () => setShown(prev => !prev);
  const ref = React.useRef(null);
  useClickOutside(ref, () => setShown(false));

  return (
    <>
      <StyledOpenButton onClick={handleShown} ariaLabel="open">
        {buttonIcon || <Menu ariaHidden />}
      </StyledOpenButton>
      <StyledAsideWrapper ref={ref} width={width} role="navigation" shown={isShown}>
        {children}
        <StyledCloseButton tabIndex={isShown ? "0" : "-1"} ariaLabel="close" onClick={handleShown}>
          <Close ariaHidden />
        </StyledCloseButton>
      </StyledAsideWrapper>
    </>
  );
};

export default Sidenav;
