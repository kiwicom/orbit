// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import InformationCircle from "../icons/InformationCircle";
import Check from "../icons/Check";
import AlertTriangle from "../icons/Alert";
import AlertCircle from "../icons/AlertCircle";
import Close from "../icons/Close";
import ButtonLink from "../ButtonLink";
import { StyledTextLink } from "../TextLink";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

type IconProps = {
  icon: React.Node,
  type: string,
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

const StyledDiv = ({ className, children }: { className: string, children: React.Node }) => (
  <div className={className}>{children}</div>
);

const StyledAlert = styled(StyledDiv)`
  position: relative;
  display: flex;
  width: 100%;
  padding: ${({ theme, icon }) =>
    icon
      ? `${theme.orbit.paddingAlert} ${theme.orbit.paddingAlertWithIcon}`
      : theme.orbit.paddingAlert};
  padding-right: ${({ theme, closable }) => closable && theme.orbit.spaceXXLarge};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  background: ${({ tokens, type }) => tokens.backgroundAlert[type]};
  color: ${({ tokens, type }) => tokens.colorTextAlert[type]};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  box-sizing: border-box;
`;

StyledAlert.defaultProps = {
  theme: defaultTokens,
};

const IconContainer = styled(StyledDiv)`
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.orbit.spaceSmall};
  color: ${({ tokens, type }) => tokens.colorIconAlert[type]};
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
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
  theme: defaultTokens,
};

const Content = styled(StyledDiv)`
  display: block;
  margin-bottom: ${({ theme, title }) => title && theme.orbit.spaceXXSmall};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};

  & a,
  & ${StyledTextLink} {
    color: ${({ tokens, type }) => tokens.colorTextAlert[type]};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.orbit.colorTextAlertLink};
    }
  }
`;

Content.defaultProps = {
  theme: defaultTokens,
};

const CloseContainer = styled(StyledDiv)`
  position: absolute;
  top: ${({ hasChildren }) => (hasChildren ? 0 : "50%")};
  margin-top: ${({ hasChildren, theme }) => !hasChildren && `-${theme.orbit.widthIconSmall}`};
  right: 0;
  margin-right: ${({ hasChildren, theme }) => !hasChildren && theme.orbit.spaceXSmall};
`;

CloseContainer.defaultProps = {
  theme: defaultTokens,
};

const Alert = (props: Props) => {
  const {
    type = TYPE_OPTIONS.INFO,
    title,
    theme = defaultTokens,
    closable,
    icon,
    onClose = () => {},
    children,
  } = props;
  const tokens = {
    colorIconAlert: {
      [TYPE_OPTIONS.INFO]: theme.orbit.colorAlertIconInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorAlertIconSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorAlertIconWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorAlertIconCritical,
    },
    backgroundAlert: {
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundAlertCritical,
    },
    colorTextAlert: {
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextAlertCritical,
    },
  };
  return (
    <StyledAlert tokens={tokens} type={type} closable={closable}>
      {icon && (
        <IconContainer tokens={tokens} type={type}>
          <Icon type={type} icon={icon} />
        </IconContainer>
      )}
      <ContentWrapper title={title}>
        {title && <Title hasChildren={children}>{title}</Title>}
        {children && (
          <Content title={title} tokens={tokens} type={type}>
            {children}
          </Content>
        )}
      </ContentWrapper>
      {closable && (
        <CloseContainer hasChildren={children}>
          <ButtonLink
            onClick={onClose}
            size="small"
            icon={<Close size="small" customColor={tokens.colorIconAlert[type]} />}
            transparent
          />
        </CloseContainer>
      )}
    </StyledAlert>
  );
};

export default Alert;
