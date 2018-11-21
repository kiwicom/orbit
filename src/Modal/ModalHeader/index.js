// @flow
import * as React from "react";
import styled from "styled-components";

import Text from "../../Text";
import Heading from "../../Heading";
import defaultTokens from "../../defaultTokens";
import media from "../../utils/media";
import { StyledModalSection } from "../ModalSection";
import { left, rtlSpacing } from "../../utils/rtl";

import type { Props } from "./index";

const ModalTitle = styled.div`
  // TODO: create token marginModalTitle and marginModalTitleWithIllustration
  margin-top: ${({ theme, illustration }) => illustration && theme.orbit.spaceXSmall};
`;

ModalTitle.defaultProps = {
  theme: defaultTokens,
};

const ModalDescription = styled.div`
  margin-top: ${({ theme }) => theme.orbit.spaceXSmall};
`;

ModalDescription.defaultProps = {
  theme: defaultTokens,
};

const StyledModalHeader = styled.div`
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
  border-top-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border-top-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-sizing: border-box;
  background-color: ${({ suppressed, theme }) =>
    suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhite};

  & ~ ${StyledModalSection}:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.orbit.paletteCloudNormal}`};
    margin-top: ${({ suppressed }) => suppressed && "0!important"};
  }

  ${media.desktop`
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
  `};
`;

StyledModalHeader.defaultProps = {
  theme: defaultTokens,
};

export const MobileHeader = styled.div`
  display: inline-block;
  position: fixed;
  // TODO use token for 52px
  top: 16px;
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
  transition: top ${({ theme }) => theme.orbit.durationNormal} ease-in-out,
    opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  z-index: 1;

  ${media.desktop`
      padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceXXLarge}`)};
  `};
`;

MobileHeader.defaultProps = {
  theme: defaultTokens,
};

const StyledModalHeaderContent = styled.div`
  margin-top: ${({ description }) => (description ? "32px" : "16px")};
`;

const ModalHeader = (props: Props) => {
  const { title, illustration, description, children, suppressed, dataTest } = props;
  const hasHeader = title || description;
  return (
    <StyledModalHeader illustration={!!illustration} suppressed={suppressed} data-test={dataTest}>
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
        <StyledModalHeaderContent description={!!description}>{children}</StyledModalHeaderContent>
      )}
      {title && <MobileHeader>{title}</MobileHeader>}
    </StyledModalHeader>
  );
};

export default ModalHeader;
