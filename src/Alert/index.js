// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import InformationCircle from "../icons/InformationCircle";
import Check from "../icons/Check";
import AlertTriangle from "../icons/Alert";
import AlertCircle from "../icons/AlertCircle";
import Close from "../icons/Close";
import ButtonLink from "../ButtonLink";
import { StyledTextLink } from "../TextLink";
import { TYPE_OPTIONS, TOKENS, CLOSE_BUTTON_DATA_TEST } from "./consts";
import { rtlSpacing, right } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import { Item } from "../List/ListItem";
import { StyledText } from "../Text";
import useTranslate from "../hooks/useTranslate";
import { StyledHeading } from "../Heading";
import media from "../utils/mediaQuery";

import type { Props } from "./index";

type IconProps = {
  icon: React.Node,
  type: string,
};

const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.colorIconAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarker,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarker,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarker,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarker,
    },
    [TOKENS.backgroundAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundAlertCritical,
    },
    [TOKENS.colorTextAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextAlertCritical,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertHover]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarkHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarkHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarkHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarkActive,
    },
    [TOKENS.colorBorderAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLightHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLightHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLightHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLightHover,
    },
  };
  return tokens[name][type];
};

const Icon = ({ icon, type }: IconProps) => {
  // Icon should be boolean and TRUE
  if (typeof icon === "boolean" && icon) {
    if (type === TYPE_OPTIONS.INFO) {
      return <InformationCircle />;
    }
    if (type === TYPE_OPTIONS.SUCCESS) {
      return <Check />;
    }
    if (type === TYPE_OPTIONS.WARNING) {
      return <AlertTriangle />;
    }
    if (type === TYPE_OPTIONS.CRITICAL) {
      return <AlertCircle />;
    }
  }
  return icon;
};

const StyledDiv = ({
  className,
  children,
  dataTest,
}: {
  className: string,
  children: React.Node,
  dataTest: string,
}) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
);

const StyledAlert = styled(StyledDiv)`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: 1px solid ${getTypeToken(TOKENS.colorBorderAlert)};
  background: ${getTypeToken(TOKENS.backgroundAlert)};
  color: ${getTypeToken(TOKENS.colorTextAlert)};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  box-sizing: border-box;
  margin-bottom: ${getSpacingToken};

  padding: ${({ theme, closable }) =>
    closable
      ? rtlSpacing(
          `${theme.orbit.spaceXSmall} ${theme.orbit.spaceXLarge} ${theme.orbit.spaceXSmall} ${
            theme.orbit.spaceXSmall
          }`,
        )
      : theme.orbit.spaceXSmall};

  ${media.tablet(css`
    padding: ${({ theme, closable }) =>
      closable
        ? rtlSpacing(
            `${theme.orbit.paddingAlert} ${theme.orbit.spaceXXLarge} ${theme.orbit.paddingAlert} ${
              theme.orbit.paddingAlert
            }`,
          )
        : theme.orbit.paddingAlert};
  `)}
`;

StyledAlert.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled(StyledDiv)`
  flex-shrink: 0;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
  color: ${getTypeToken(TOKENS.colorIconAlert)};
  display: ${({ inlineActions }) => inlineActions && "flex"};
  align-items: ${({ inlineActions }) => inlineActions && "center"};

  ${media.tablet(css`
    margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceSmall} 0 0`)};
  `)}
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const ContentWrapper = styled(StyledDiv)`
  flex: 1; // IE wrapping fix
  display: flex;
  flex-direction: ${({ title, inlineActions }) => title && (inlineActions ? "row" : "column")};
  align-items: ${({ title }) => !title && "center"};
  justify-content: ${({ inlineActions }) => inlineActions && "space-between"};
`;

const Title = styled(StyledDiv)`
  color: ${getTypeToken(TOKENS.colorIconAlert)};
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme, hasChildren, inlineActions }) =>
    hasChildren && (inlineActions ? "0" : theme.orbit.spaceXXSmall)};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  line-height: ${({ theme }) => theme.orbit.lineHeightHeading};
  min-height: ${({ theme }) => theme.orbit.heightIconMedium};

  ${media.tablet(css`
    margin-bottom: ${({ theme, hasChildren, inlineActions }) =>
      hasChildren && (inlineActions ? "0" : theme.orbit.spaceXSmall)};
  `)}
`;

Title.defaultProps = {
  theme: defaultTheme,
};

const Content = styled(StyledDiv)`
  display: block;
  width: ${({ inlineActions }) => !inlineActions && "100%"};

  & a,
  & ${StyledTextLink} {
    color: ${getTypeToken(TOKENS.colorTextAlert)};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
    &:hover,
    &:focus,
    &:active {
      color: ${getTypeToken(TOKENS.colorTextLinkAlertHover)};
    }
  }
  & ${Item}, ${StyledText}, ${StyledHeading} {
    color: ${getTypeToken(TOKENS.colorTextAlert)};
  }
`;

Content.defaultProps = {
  theme: defaultTheme,
};

const CloseContainer = styled(StyledDiv)`
  position: absolute;
  top: ${({ hasChildren }) => (hasChildren ? 0 : "50%")};
  margin-top: ${({ hasChildren, theme }) => !hasChildren && `-${theme.orbit.widthIconSmall}`};
  ${right}: 0;
  margin-${right}: ${({ hasChildren, theme }) => !hasChildren && theme.orbit.spaceXSmall};
`;

CloseContainer.defaultProps = {
  theme: defaultTheme,
};

const AlertCloseButton = ({ hasChildren, dataTest, onClick, icon }) => {
  const translate = useTranslate();
  return (
    <CloseContainer hasChildren={hasChildren}>
      <ButtonLink
        dataTest={dataTest}
        onClick={onClick}
        size="small"
        icon={icon}
        type="secondary"
        transparent
        title={translate("button_close")}
      />
    </CloseContainer>
  );
};

const Alert = (props: Props) => {
  const {
    type = TYPE_OPTIONS.INFO,
    title,
    closable,
    icon,
    onClose = () => {},
    children,
    dataTest,
    spaceAfter,
    inlineActions = false,
  } = props;
  return (
    <StyledAlert
      type={type}
      icon={icon}
      closable={closable}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    >
      {icon && (
        <IconContainer type={type} inlineActions={inlineActions}>
          <Icon type={type} icon={icon} />
        </IconContainer>
      )}
      <ContentWrapper title={title} inlineActions={inlineActions}>
        {title && (
          <Title type={type} hasChildren={children} inlineActions={inlineActions}>
            {title}
          </Title>
        )}
        {children && !inlineActions && (
          <Content title={title} type={type}>
            {children}
          </Content>
        )}
        {inlineActions && (
          <Content title={title} type={type} inlineActions={inlineActions}>
            {inlineActions}
          </Content>
        )}
      </ContentWrapper>
      {closable && (
        <AlertCloseButton
          hasChildren={children}
          dataTest={CLOSE_BUTTON_DATA_TEST}
          onClick={onClose}
          icon={<Close size="small" color={type} />}
        />
      )}
    </StyledAlert>
  );
};

export default Alert;
