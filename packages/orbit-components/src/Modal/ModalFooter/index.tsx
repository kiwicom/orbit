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
import { Props } from "./index.d";

const StyledChild = styled.div<{ flex?: Props["flex"] }>`
  ${({ theme, flex }) => css`
    flex: ${flex};
    box-sizing: border-box;
    padding: ${rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};

    ${media.largeMobile(css`
      flex: none;
    `)};
  `}
`;

StyledChild.defaultProps = {
  theme: defaultTheme,
};

export const StyledModalFooter = styled.div<{
  isMobileFullPage?: boolean;
  childrenLength: number;
}>`
  ${({ theme, childrenLength, isMobileFullPage }) => css`
    display: flex;
    z-index: 800; // TODO: use z-index framework
    width: 100%;
    background-color: ${theme.orbit.paletteWhite};
    padding: ${rtlSpacing(`0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`)};
    box-sizing: border-box;
    transition: ${transition(["box-shadow"], "fast", "ease-in-out")};
    @media (max-width: ${+getBreakpointWidth(QUERIES.largeMobile, theme, true) - 1}px) {
      ${StyledButtonPrimitive} {
        font-size: ${theme.orbit.fontSizeButtonNormal};
        height: ${theme.orbit.heightButtonNormal};
      }
    }

    ${media.largeMobile(css`
      justify-content: ${childrenLength > 1 ? "space-between" : "flex-end"};
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

StyledModalFooter.defaultProps = {
  theme: defaultTheme,
};

const getChildFlex = (flex: Props["flex"], key: number) =>
  Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;

const wrappedChildren = (children: React.ReactNode, flex: Props["flex"]) => {
  if (!Array.isArray(children)) return children;
  return React.Children.map(children, (child, key) => {
    if (child) {
      return (
        <StyledChild flex={getChildFlex(flex, key)}>
          {/* @ts-expect-error FIXME */}
          {React.cloneElement(child, {
            /* @ts-expect-error FIXME */
            ref: child.ref
              ? node => {
                  // Call the original ref, if any
                  /* @ts-expect-error FIXME */
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

const ModalFooter = ({ dataTest, children, flex = "0 1 auto" }: Props) => {
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
    <StyledModalFooter
      ref={containerRef}
      data-test={dataTest}
      isMobileFullPage={isMobileFullPage}
      childrenLength={React.Children.count(children)}
    >
      {flex && wrappedChildren(children, flex)}
    </StyledModalFooter>
  );
};

export default ModalFooter;
