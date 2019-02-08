// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import media from "../../utils/mediaQuery";
import defaultTokens from "../../defaultTokens";
import { StyledButton } from "../../Button";
import { rtlSpacing } from "../../utils/rtl";
import { StyledButtonLink } from "../../ButtonLink";
import { withModalContext } from "../ModalContext";
import { DEVICES } from "../../utils/mediaQuery/consts";

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
  theme: defaultTokens,
};

export const StyledModalFooter = styled.div`
  display: flex;
  z-index: 800; // TODO: use z-index framework
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  // TODO: create token paddingModalFooter
  padding: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`)};
  box-sizing: border-box;
  // TODO: create token boxShadowActionableInverted
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  @media (max-width: ${DEVICES.largeMobile - 1}px) {
    ${StyledButton}, ${StyledButtonLink} {
      font-size: ${({ theme }) => theme.orbit.fontSizeButtonNormal};
      height: ${({ theme }) => theme.orbit.heightButtonNormal};
    }
  }

  ${media.largeMobile(css`
    justify-content: ${({ children }) => (children.length > 1 ? "space-between" : "flex-end")};
    // TODO: create token paddingModalFooterDesktop
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
  `)};

  ${StyledChild}:last-of-type {
    padding: 0;
  }
`;

StyledModalFooter.defaultProps = {
  theme: defaultTokens,
};

class ModalFooter extends React.PureComponent<Props> {
  componentDidMount() {
    this.callContextFunctions();
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.callContextFunctions();
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
  render() {
    const { flex = "0 1 auto", children, dataTest } = this.props;
    return (
      <StyledModalFooter data-test={dataTest}>
        {typeof children === "object"
          ? React.Children.map(children, (item, key) => {
              if (item) {
                const childFlex =
                  Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
                return <StyledChild flex={childFlex}>{<item.type {...item.props} />}</StyledChild>;
              }
              return null;
            })
          : children}
      </StyledModalFooter>
    );
  }
}

const DecoratedComponent = withModalContext(ModalFooter);
DecoratedComponent.displayName = "ModalFooter";
export default DecoratedComponent;
