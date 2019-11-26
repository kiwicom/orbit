// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Text from "../../Text";
import Heading, { StyledHeading } from "../../Heading";
import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledModalSection } from "../ModalSection";
import { left, right, rtlSpacing } from "../../utils/rtl";
import { withModalContext } from "../ModalContext";

import type { Props } from "./index";

const ModalTitle = styled.div`
  // TODO: create token marginModalTitle and marginModalTitleWithIllustration
  margin-top: ${({ theme, illustration }) => illustration && theme.orbit.spaceXSmall};
  
  ${StyledHeading} {
    padding-${right}: ${({ theme }) => theme.orbit.spaceXLarge};
  }
  ${media.desktop(css`
    ${StyledHeading} {
      padding: 0;
    }
  `)};
`;

ModalTitle.defaultProps = {
  theme: defaultTheme,
};

const ModalDescription = styled.div`
  margin-top: ${({ theme }) => theme.orbit.spaceXSmall};
`;

ModalDescription.defaultProps = {
  theme: defaultTheme,
};

export const StyledModalHeader = styled.div`
  width: 100%;
  display: block;
  padding: ${({ theme, illustration, suppressed }) =>
    rtlSpacing(
      (illustration &&
        suppressed &&
        `${theme.orbit.spaceXLarge} ${theme.orbit.spaceMedium} ${theme.orbit.spaceLarge} ${
          theme.orbit.spaceMedium
        }`) ||
        (illustration &&
          !suppressed &&
          `${theme.orbit.spaceXLarge} ${theme.orbit.spaceMedium} 0 ${theme.orbit.spaceMedium}`) ||
        (!illustration &&
          suppressed &&
          `${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium} ${theme.orbit.spaceLarge} ${
            theme.orbit.spaceMedium
          }`) ||
        `${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium} 0 ${theme.orbit.spaceMedium}`,
    )};
  border-top-left-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && "9px"}; // TODO: create token
  border-top-right-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && "9px"}; // TODO: create token
  box-sizing: border-box;
  background-color: ${({ suppressed, theme }) =>
    suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhite};

  & ~ ${StyledModalSection}:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.orbit.paletteCloudNormal}`};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: ${({ suppressed }) => suppressed && "0!important"};
  }

  ${media.largeMobile(css`
    padding: ${({ theme, illustration, suppressed }) =>
      rtlSpacing(
        illustration
          ? `${theme.orbit.spaceXLarge} ${theme.orbit.spaceXXLarge} ${
              suppressed ? theme.orbit.spaceXXLarge : "0"
            } ${theme.orbit.spaceXXLarge}`
          : `${theme.orbit.spaceXXLarge} ${theme.orbit.spaceXXLarge} ${
              suppressed ? theme.orbit.spaceXXLarge : "0"
            } ${theme.orbit.spaceXXLarge}`,
      )};

    & ~ ${StyledModalSection}:first-of-type {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `)};
`;

StyledModalHeader.defaultProps = {
  theme: defaultTheme,
};

export const MobileHeader = styled.div`
  display: inline-block;
  position: fixed;
  visibility: hidden;
  height: 52px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  // TODO use token for 52px
  top: ${({ isMobileFullPage }) => (isMobileFullPage ? "0" : "16px")};
  ${right}: 48px;
  ${left}: 0;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: ${({ theme }) => theme.orbit.fontWeightHeadingDisplay};
  // TODO create token
  font-size: 18px;
  color: ${({ theme }) => theme.orbit.colorHeading};
  // TODO use token for 52px
  line-height: 52px;
  box-sizing: border-box;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceLarge}`)};
  opacity: 0;
  transition: top ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    visibility ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  z-index: 800;

  ${media.largeMobile(css`
    left: auto;
    right: auto;
    padding: 0;
  `)};
`;

MobileHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledModalHeaderContent = styled.div`
  margin-top: ${({ description }) => (description ? "32px" : "16px")};
`;

class ModalHeader extends React.PureComponent<Props> {
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

  render() {
    const {
      title,
      illustration,
      description,
      children,
      suppressed,
      dataTest,
      isMobileFullPage,
    } = this.props;
    const hasHeader = title || description;
    return (
      <StyledModalHeader
        illustration={!!illustration}
        suppressed={suppressed}
        data-test={dataTest}
        isMobileFullPage={isMobileFullPage}
      >
        {illustration}
        {hasHeader && (
          <ModalTitle illustration={!!illustration}>
            {title && <Heading type="title1">{title}</Heading>}
            {description && (
              <ModalDescription>
                <Text size="large" element="div">
                  {description}
                </Text>
              </ModalDescription>
            )}
          </ModalTitle>
        )}
        {children && (
          <StyledModalHeaderContent description={!!description}>
            {children}
          </StyledModalHeaderContent>
        )}
        {title && <MobileHeader isMobileFullPage={isMobileFullPage}>{title}</MobileHeader>}
      </StyledModalHeader>
    );
  }
}
const DecoratedComponent = withModalContext<Props>(ModalHeader);

// $FlowFixMe flow doesn't recognize displayName for functions
DecoratedComponent.displayName = "ModalHeader";
export default DecoratedComponent;
