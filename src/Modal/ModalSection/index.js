// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTokens from "../../defaultTokens";
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
    border-top-left-radius: 9px; // TODO: create token
    border-top-right-radius: 9px; // TODO: create token
    margin-top: ${({ suppressed, theme }) => suppressed && theme.orbit.spaceLarge};
  }

  &:last-of-type {
    border-bottom: ${({ suppressed, theme }) =>
      suppressed ? `1px solid ${theme.orbit.paletteCloudNormal}` : "0"};
    border-bottom-left-radius: 9px; // TODO: create token
    border-bottom-right-radius: 9px; // TODO: create token
    & ~ ${StyledModalFooter} {
      margin-top: ${({ theme, suppressed }) => suppressed && theme.orbit.spaceMedium};
    }
    &:not(:last-child) {
      border-radius: 0;
    }
  }

  ${media.largeMobile(css`
    padding: ${({ theme }) => theme.orbit.spaceXXLarge};

    &:first-of-type {
      margin-top: ${({ suppressed, theme }) => suppressed && theme.orbit.spaceXXLarge};
    }
    &:last-of-type {
      & ~ ${StyledModalFooter} {
        padding-top: ${({ suppressed }) => !suppressed && "0"};
        margin-top: 0;
      }
    }
  `)};
`;

StyledModalSection.defaultProps = {
  theme: defaultTokens,
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
      const { setHasModalSection } = this.props;
      if (setHasModalSection) {
        setHasModalSection();
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
    const { suppressed, children, dataTest } = this.props;
    return (
      <StyledModalSection suppressed={suppressed} data-test={dataTest}>
        {children}
      </StyledModalSection>
    );
  }
}

const DecoratedComponent = withModalContext(ModalSection);
DecoratedComponent.displayName = "ModalSection";
export default DecoratedComponent;
