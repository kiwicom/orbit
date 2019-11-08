// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import media, { getBreakpointWidth } from "../../utils/mediaQuery";
import defaultTheme from "../../defaultTheme";
import { StyledButton } from "../../Button";
import { rtlSpacing } from "../../utils/rtl";
import { StyledButtonLink } from "../../ButtonLink";
import { withModalContext } from "../ModalContext";
import { QUERIES } from "../../utils/mediaQuery/consts";

import type { Props } from "./index";

const StyledChild = styled.div`
  flex: ${({ flex }) => flex};
  box-sizing: border-box;
  padding: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceMedium} 0 0`)};

  ${media.largeMobile(css`
    flex: none;
  `)};
`;

StyledChild.defaultProps = {
  theme: defaultTheme,
};

export const StyledModalFooter = styled.div`
  display: flex;
  z-index: 800; // TODO: use z-index framework
  width: 100%;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  // TODO: create token paddingModalFooter
  padding: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`)};
  box-sizing: border-box;
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  @media (max-width: ${({ theme }) =>
      +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true) - 1}px) {
    ${StyledButton}, ${StyledButtonLink} {
      font-size: ${({ theme }) => theme.orbit.fontSizeButtonNormal};
      height: ${({ theme }) => theme.orbit.heightButtonNormal};
    }
  }

  ${media.largeMobile(css`
    justify-content: ${({ children }) => (children.length > 1 ? "space-between" : "flex-end")};
    // TODO: create token paddingModalFooterDesktop
    border-bottom-left-radius: ${({ isMobileFullPage }) => !isMobileFullPage && "9px"};
    border-bottom-right-radius: ${({ isMobileFullPage }) => !isMobileFullPage && "9px"};
  `)};

  ${StyledChild}:last-of-type {
    padding: 0;
  }
`;

StyledModalFooter.defaultProps = {
  theme: defaultTheme,
};

class ModalFooter extends React.PureComponent<Props> {
  componentDidMount() {
    this.callContextFunctions();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.callContextFunctions();

      const { manageFocus } = this.props;

      if (manageFocus) {
        manageFocus();
      }
    }
  }

  callContextFunctions = () => {
    const { setDimensions, decideFixedFooter } = this.props;
    if (setDimensions) {
      setDimensions();
    }
    if (decideFixedFooter) {
      decideFixedFooter();
    }
  };

  renderWrappedChildren = () => {
    const { children, flex = "0 1 auto" } = this.props;

    const getChildFlex = key =>
      Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
    return React.Children.map(children, (child, key) => {
      if (child) {
        return (
          <StyledChild flex={getChildFlex(key)}>
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

  render() {
    const { children, dataTest, isMobileFullPage } = this.props;
    return (
      <StyledModalFooter data-test={dataTest} isMobileFullPage={isMobileFullPage}>
        {Array.isArray(children) ? this.renderWrappedChildren() : children}
      </StyledModalFooter>
    );
  }
}

const DecoratedComponent = withModalContext(ModalFooter);

// $FlowFixMe flow doesn't recognize displayName for functions
DecoratedComponent.displayName = "ModalFooter";
export default DecoratedComponent;
