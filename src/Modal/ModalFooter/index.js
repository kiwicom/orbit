// @flow
import * as React from "react";
import styled from "styled-components";

import media from "../../utils/media";
import defaultTokens from "../../defaultTokens";
import { StyledButton } from "../../Button";
import { rtlSpacing } from "../../utils/rtl";
import { StyledButtonLink } from "../../ButtonLink";

import type { Props } from "./index";

const StyledChild = styled.div`
  flex: ${({ flex }) => flex};
  box-sizing: border-box;
  padding: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceMedium} 0 0`)};

  ${media.desktop`
    flex: none;
  `};
`;

StyledChild.defaultProps = {
  theme: defaultTokens,
};

export const StyledModalFooter = styled.div`
  display: flex;
  z-index: 10;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  // TODO: create token paddingModalFooter
  padding: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`)};
  box-sizing: border-box;
  // TODO: create token boxShadowActionableInverted
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  @media (max-width: 599px) {
    ${StyledButton}, ${StyledButtonLink} {
      font-size: ${({ theme }) => theme.orbit.fontSizeButtonNormal};
      height: ${({ theme }) => theme.orbit.heightButtonNormal};
    }
  }

  ${media.desktop`
    justify-content: ${({ children }) => (children.length > 1 ? "space-between" : "flex-end")};
    // TODO: create token paddingModalFooterDesktop
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
  `};

  ${StyledChild}:last-of-type {
    padding: 0;
  }
`;

StyledModalFooter.defaultProps = {
  theme: defaultTokens,
};

const ModalFooter = (props: Props) => {
  const { flex = "0 1 auto", children, dataTest } = props;
  return (
    <StyledModalFooter data-test={dataTest}>
      {React.Children.map(children, (item, key) => {
        if (item) {
          const childFlex = Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
          return <StyledChild flex={childFlex}>{<item.type {...item.props} />}</StyledChild>;
        }
        return null;
      })}
    </StyledModalFooter>
  );
};

export default ModalFooter;
