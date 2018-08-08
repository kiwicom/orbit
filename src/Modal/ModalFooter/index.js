// @flow
import * as React from "react";
import styled from "styled-components";

import media from "../../utils/media";
import defaultTokens from "../../defaultTokens";
import { StyledButton } from "../../Button";

import type { Props } from "./index";

const StyledChild = styled.div`
  flex: ${({ flex }) => flex};
  box-sizing: border-box;
  padding-right: ${({ theme }) => theme.orbit.spaceMedium};

  ${media.desktop`
    flex: none;
  `};
`;

StyledChild.defaultProps = {
  theme: defaultTokens,
};

export const StyledModalFooter = styled.div`
  display: flex;
  position: ${({ fixed }) => fixed && "fixed"};
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  // TODO: create token paddingModalFooter
  padding: ${({ theme, fixed }) =>
    fixed ? theme.orbit.spaceMedium : `0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`};
  box-sizing: border-box;
  box-shadow: ${({ fixed }) => fixed && `0 -2px 4px 0 rgba(23, 27, 30, 0.1)`};
  // TODO: create token boxShadowActionableInverted

  @media (max-width: 599px) {
    ${StyledButton} {
      font-size: ${({ theme }) => theme.orbit.fontSizeButtonNormal};
      height: ${({ theme }) => theme.orbit.heightButtonNormal};
    }
  }

  ${media.desktop`
    position: relative;
    box-shadow: none;
    justify-content: ${({ children }) => (children.length > 1 ? "space-between" : "flex-end")};
    // TODO: create token paddingModalFooterDesktop
    padding: ${({ theme }) => `0 ${theme.orbit.spaceXXLarge} ${theme.orbit.spaceXXLarge}`};
    border-bottom-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    border-bottom-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  `};

  ${StyledChild}:last-of-type {
    padding-right: 0;
  }
`;

StyledModalFooter.defaultProps = {
  theme: defaultTokens,
};

const ModalFooter = (props: Props) => {
  const { flex = "0 1 auto", children, fixed } = props;
  return (
    <StyledModalFooter fixed={fixed}>
      {React.Children.map(children, (item, key) => {
        const childFlex = Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
        return <StyledChild flex={childFlex}>{<item.type {...item.props} />}</StyledChild>;
      })}
    </StyledModalFooter>
  );
};

export default ModalFooter;
