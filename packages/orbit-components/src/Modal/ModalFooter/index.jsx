// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import transition from "../../utils/transition";
import media, { getBreakpointWidth } from "../../utils/mediaQuery";
import defaultTheme from "../../defaultTheme";
import { rtlSpacing } from "../../utils/rtl";
import { ModalContext } from "../ModalContext";
import { QUERIES } from "../../utils/mediaQuery/consts";
import useModalContextFunctions from "../helpers/useModalContextFunctions";
import { StyledButtonPrimitive } from "../../primitives/ButtonPrimitive";

import type { Props } from ".";

const StyledChild = styled.div`
  ${({ theme, flex }) => css`
    flex: ${flex};
    box-sizing: border-box;
    padding: ${rtlSpacing(`0 ${theme.orbit.spaceTwoX} 0 0`)};

    ${media.largeMobile(css`
      flex: none;
    `)};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledChild.defaultProps = {
  theme: defaultTheme,
};

export const StyledModalFooter: any = styled.div`
  ${({ theme, children, isMobileFullPage }) => css`
    display: flex;
    z-index: 800; // TODO: use z-index framework
    width: 100%;
    background-color: ${theme.orbit.paletteWhiteNormal};
    padding: ${rtlSpacing(`0 ${theme.orbit.spaceFourX} ${theme.orbit.spaceFourX}`)};
    box-sizing: border-box;
    transition: ${transition(["box-shadow"], "fast", "ease-in-out")};
    @media (max-width: ${+getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true) - 1}px) {
      ${StyledButtonPrimitive} {
        font-size: ${theme.orbit.buttonNormalFontSize};
        height: ${theme.orbit.formBoxNormalHeight};
      }
    }

    ${media.largeMobile(css`
      justify-content: ${children.length > 1 ? "space-between" : "flex-end"};
      ${!isMobileFullPage &&
      css`
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
      `};
    `)};

    ${StyledChild}:last-of-type {
      padding: 0;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledModalFooter.defaultProps = {
  theme: defaultTheme,
};

const getChildFlex = (flex, key) =>
  Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;

/*
  Until flow-bin@0.104.0 it's impossible to assign default values to union types,
  therefore, it's bypassed via declaring it in on this component
 */
const wrappedChildren = (children, flex = "0 1 auto") => {
  if (!Array.isArray(children)) return children;
  return React.Children.map(children, (child, key) => {
    if (child) {
      return (
        <StyledChild flex={getChildFlex(flex, key)}>
          {React.cloneElement(child, {
            ref: child.ref
              ? node => {
                  // Call the original ref, if any
                  const { ref } = child;
                  if (typeof ref === "function") {
                    ref(node);
                  } else if (ref !== null) {
                    ref.current = node;
                  }
                }
              : null,
          })}
        </StyledChild>
      );
    }
    return null;
  });
};

const ModalFooter = ({ dataTest, children, flex }: Props): React.Node => {
  const { isMobileFullPage, setFooterHeight } = React.useContext(ModalContext);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useModalContextFunctions();

  React.useEffect(() => {
    function transitionEndHandler() {
      if (setFooterHeight && containerRef.current) {
        setFooterHeight(containerRef.current.clientHeight);
      }
    }
    const containerEl = containerRef.current;
    containerEl?.addEventListener("transitionend", transitionEndHandler);
    return () => {
      containerEl?.removeEventListener("transitionend", transitionEndHandler);
    };
  }, [setFooterHeight]);

  return (
    <StyledModalFooter ref={containerRef} data-test={dataTest} isMobileFullPage={isMobileFullPage}>
      {wrappedChildren(children, flex)}
    </StyledModalFooter>
  );
};

export default ModalFooter;
