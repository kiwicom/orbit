// @flow
import * as React from "react";
import styled from "styled-components";

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

import type { Props } from "./index";

type IconProps = {
  icon: React.Node,
  type: string,
};

const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.colorIconAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.colorAlertIconInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorAlertIconSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorAlertIconWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorAlertIconCritical,
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
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteCriticalDarkHover,
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
  padding: ${({ theme, icon, closable }) =>
    rtlSpacing(
      closable
        ? (icon &&
            `${theme.orbit.paddingAlert} ${theme.orbit.spaceXXLarge} ${theme.orbit.paddingAlert} ${
              theme.orbit.paddingAlert
            }`) ||
            `${theme.orbit.paddingAlert} ${theme.orbit.spaceXXLarge} ${theme.orbit.paddingAlert} ${
              theme.orbit.paddingAlert
            }`
        : (icon &&
            `${theme.orbit.paddingAlert} ${theme.orbit.paddingAlert} ${theme.orbit.paddingAlert} ${
              theme.orbit.paddingAlert
            }`) ||
            `${theme.orbit.paddingAlert}`,
    )};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  background: ${getTypeToken(TOKENS.backgroundAlert)};
  color: ${getTypeToken(TOKENS.colorTextAlert)};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  box-sizing: border-box;
  margin-bottom: ${getSpacingToken};
`;

StyledAlert.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled(StyledDiv)`
  flex-shrink: 0;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceSmall} 0 0`)};
  color: ${getTypeToken(TOKENS.colorIconAlert)};
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const ContentWrapper = styled(StyledDiv)`
  flex: 1; // IE wrapping fix
  display: flex;
  flex-direction: ${({ title }) => title && "column"};
  align-items: ${({ title }) => !title && "center"};
`;

const Title = styled(StyledDiv)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme, hasChildren }) => hasChildren && theme.orbit.spaceXSmall};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  line-height: ${({ theme }) => theme.orbit.lineHeightHeading};
  min-height: ${({ theme }) => theme.orbit.heightIconMedium};
`;

Title.defaultProps = {
  theme: defaultTheme,
};

const Content = styled(StyledDiv)`
  display: block;
  margin-bottom: ${({ theme, title }) => title && theme.orbit.spaceXXSmall};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};

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
  & ${Item}, ${StyledText} {
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
        <IconContainer type={type}>
          <Icon type={type} icon={icon} />
        </IconContainer>
      )}
      <ContentWrapper title={title}>
        {title && <Title hasChildren={children}>{title}</Title>}
        {children && (
          <Content title={title} type={type}>
            {children}
          </Content>
        )}
      </ContentWrapper>
      {closable && (
        <CloseContainer hasChildren={children}>
          <ButtonLink
            dataTest={CLOSE_BUTTON_DATA_TEST}
            onClick={onClose}
            size="small"
            icon={<Close size="small" color={type} />}
            transparent
          />
        </CloseContainer>
      )}
    </StyledAlert>
  );
};

export default Alert;
