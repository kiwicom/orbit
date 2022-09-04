import * as React from "react";
import styled, { css } from "styled-components";

import transition from "../../utils/transition";
import Text from "../../Text";
import { getHeadingToken } from "../../Heading";
import { TOKENS, TYPE_OPTIONS } from "../../Heading/consts";
import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledModalSection } from "../ModalSection";
import { left, right, rtlSpacing } from "../../utils/rtl";
import { ModalContext } from "../ModalContext";
import useModalContextFunctions from "../helpers/useModalContextFunctions";
import { Props } from "./index.d";
import { Type } from "../../Heading/index.d";

const getModalHeading = (type: Type, token: string) => ({
  theme,
}: {
  theme: typeof defaultTheme;
}) => {
  return getHeadingToken(token, type)({ theme });
};

export const ModalHeading = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${getModalHeading(TYPE_OPTIONS.TITLE2, TOKENS.sizeHeading)};
    font-weight: ${getModalHeading(TYPE_OPTIONS.TITLE2, TOKENS.weightHeading)};
    line-height: ${getModalHeading(TYPE_OPTIONS.TITLE2, TOKENS.lineHeight)};
    color: ${theme.orbit.colorHeading};
    ${media.largeMobile(css`
      font-size: ${getModalHeading(TYPE_OPTIONS.TITLE1, TOKENS.sizeHeading)};
      font-weight: ${getModalHeading(TYPE_OPTIONS.TITLE1, TOKENS.weightHeading)};
      line-height: ${getModalHeading(TYPE_OPTIONS.TITLE1, TOKENS.lineHeight)};
    `)};
  `}
`;

ModalHeading.defaultProps = {
  theme: defaultTheme,
};

const ModalTitle = styled.div<{ illustration?: boolean }>`
  // TODO: create token marginModalTitle and marginModalTitleWithIllustration
  ${({ theme, illustration }) => css`
    margin-top: ${illustration && theme.orbit.spaceMedium};

    ${ModalHeading} {
      padding-${right}: ${theme.orbit.spaceXLarge};
    }

    ${media.desktop(css`
      ${ModalHeading} {
        padding: 0;
      }
    `)};
  `}
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

const getModalHeaderPadding = (desktop = false) => ({ theme, suppressed }) => {
  if (desktop) {
    if (suppressed) {
      return theme.orbit.spaceXLarge;
    }
    return `${theme.orbit.spaceXLarge} ${theme.orbit.spaceXLarge} 0 ${theme.orbit.spaceXLarge}`;
  }
  if (suppressed) {
    return `${theme.orbit.spaceXLarge} ${theme.orbit.spaceMedium}`;
  }
  return `${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium} 0 ${theme.orbit.spaceMedium}`;
};

export const StyledModalHeader = styled.div<{
  suppressed?: Props["suppressed"];
  isMobileFullPage?: boolean;
  illustration?: boolean;
}>`
  ${({ theme, suppressed, isMobileFullPage }) => css`
    width: 100%;
    display: block;
    padding: ${rtlSpacing(getModalHeaderPadding()({ theme, suppressed }))};
    border-top-left-radius: ${!isMobileFullPage && "12px"};
    border-top-right-radius: ${!isMobileFullPage && "12px"};
    box-sizing: border-box;
    background-color: ${suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhite};

    & ~ ${StyledModalSection}:first-of-type {
      border-top: ${suppressed && `1px solid ${theme.orbit.paletteCloudNormal}`};
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: ${suppressed && "0!important"};
    }

    ${media.largeMobile(css`
      padding: ${rtlSpacing(getModalHeaderPadding(true)({ theme, suppressed }))};

      & ~ ${StyledModalSection}:first-of-type {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `)};
  `}
`;

StyledModalHeader.defaultProps = {
  theme: defaultTheme,
};

export const MobileHeader = styled.div<{ isMobileFullPage?: boolean }>`
  ${({ theme, isMobileFullPage }) => css`
    display: inline-block;
    position: fixed;
    visibility: hidden;
    height: 52px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    // TODO use token for 52px
    top: ${isMobileFullPage ? "0" : "16px"};
    ${right}: 48px;
    ${left}: 0;
    font-family: ${theme.orbit.fontFamily};
    font-weight: ${theme.orbit.fontWeightHeadingDisplay};
    // TODO create token
    font-size: 18px;
    color: ${theme.orbit.colorHeading};
    // TODO use token for 52px
    line-height: 52px;
    box-sizing: border-box;
    padding: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceLarge}`)};
    opacity: 0;
    transition: ${transition(["top", "opacity", "visibility"], "fast", "ease-in-out")};
    z-index: 800;

    ${media.largeMobile(css`
      left: auto;
      right: auto;
      padding: 0;
    `)};
  `}
`;

MobileHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledModalHeaderContent = styled.div<{ description?: boolean }>`
  margin-top: ${({ description }) => (description ? "32px" : "16px")};
`;

const ModalHeader = ({
  illustration,
  suppressed,
  children,
  description,
  title,
  dataTest,
}: Props) => {
  const { setHasModalTitle, hasMobileHeader, isMobileFullPage, titleID } = React.useContext(
    ModalContext,
  );

  useModalContextFunctions();

  React.useEffect(() => {
    if (title) setHasModalTitle?.(true);
    return () => {
      setHasModalTitle?.(false);
    };
  }, [title, setHasModalTitle]);

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
          {title && <ModalHeading id={titleID}>{title}</ModalHeading>}
          {description && (
            <ModalDescription>
              <Text size="large" as="div">
                {description}
              </Text>
            </ModalDescription>
          )}
        </ModalTitle>
      )}
      {children && (
        <StyledModalHeaderContent description={!!description}>{children}</StyledModalHeaderContent>
      )}
      {title && hasMobileHeader && (
        <MobileHeader role="presentation" isMobileFullPage={isMobileFullPage}>
          {title}
        </MobileHeader>
      )}
    </StyledModalHeader>
  );
};

export default ModalHeader;
