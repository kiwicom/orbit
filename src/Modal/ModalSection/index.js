// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledModalFooter } from "../ModalFooter";
import { withModalContext } from "../ModalContext";

import type { Props } from "./index";

export const StyledModalSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => `${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium}`};
  background-color: ${({ theme, suppressed }) =>
    suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhite};
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  box-sizing: border-box;

  &:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.orbit.paletteCloudNormal}`};
    border-top-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    border-top-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    margin-top: ${({ suppressed, theme, closable }) =>
      suppressed && closable && theme.orbit.spaceLarge};
  }

  &:last-of-type {
    border-bottom: ${({ suppressed, theme }) =>
      suppressed ? `1px solid ${theme.orbit.paletteCloudNormal}` : "0"};
    border-bottom-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    border-bottom-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    & ~ ${StyledModalFooter} {
      margin-top: ${({ theme, suppressed }) => suppressed && theme.orbit.spaceMedium};
    }
    &:not(:last-child) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  ${media.largeMobile(css`
    padding: ${({ theme }) => theme.orbit.spaceXXLarge};

    &:first-of-type {
      margin-top: ${({ suppressed, theme, closable }) =>
        suppressed && closable && theme.orbit.spaceXXLarge};
      border-top-left-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
      border-top-right-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
    }

    &:last-of-type {
      border-bottom-left-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
      border-bottom-right-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
      & ~ ${StyledModalFooter} {
        padding-top: ${({ suppressed }) => !suppressed && "0"};
        margin-top: 0;
      }
    }
  `)};
`;

StyledModalSection.defaultProps = {
  theme: defaultTheme,
};

class ModalSection extends React.PureComponent<Props> {
  componentDidMount() {
    const { setHasModalSection } = this.props;
    this.callContextFunctions();
    if (setHasModalSection) {
      setHasModalSection();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.callContextFunctions();
      const { setHasModalSection, manageFocus } = this.props;

      if (setHasModalSection) {
        setHasModalSection();
      }

      if (manageFocus) {
        manageFocus();
      }
    }
  }

  componentWillUnmount() {
    const { removeHasModalSection } = this.props;
    this.callContextFunctions();
    if (removeHasModalSection) {
      removeHasModalSection();
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
    const { suppressed, children, dataTest, isMobileFullPage, closable } = this.props;
    return (
      <StyledModalSection
        suppressed={suppressed}
        data-test={dataTest}
        closable={closable}
        isMobileFullPage={isMobileFullPage}
      >
        {children}
      </StyledModalSection>
    );
  }
}

const DecoratedComponent = withModalContext<Props>(ModalSection);

// $FlowFixMe flow doesn't recognize displayName for functions
DecoratedComponent.displayName = "ModalSection";
export default DecoratedComponent;
