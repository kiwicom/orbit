// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import { withTheme } from "theming";

import {
  InformationCircle,
  Check,
  Alert as AlertTriangle,
  AlertCircle,
  CloseCircle,
} from "../icons";
import { Button } from "../index";

export const typeOptions = {
  info: "info",
  success: "success",
  warning: "warning",
  critical: "critical",
};

const Icon = ({ icon, type }) => {
  if (typeof icon === "boolean") {
    if (type === typeOptions.info) {
      return <InformationCircle />;
    }
    if (type === typeOptions.success) {
      return <Check />;
    }
    if (type === typeOptions.warning) {
      return <AlertTriangle />;
    }
    if (type === typeOptions.critical) {
      return <AlertCircle />;
    }
  }
  return icon;
};

type Props = {
  type: $Keys<typeof typeOptions>,
  title?: string,
  icon?: React.Element<any> | boolean,
  closable: boolean,
  onClose: () => void,
  children: React.Node,
  theme: typeof defaultTokens,
};

const StyledAlert = styled(({ theme, tokens, type, icon, ...props }) => <div {...props} />)`
  position: relative;
  display: flex;
  width: 100%;
  padding: ${({ theme, icon }) =>
    icon ? `${theme.paddingAlert} ${theme.paddingAlertWithIcon}` : theme.paddingAlert};
  padding-right: ${({ theme, closable }) => closable && theme.spaceXXLarge};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  background: ${({ tokens, type }) => tokens.backgroundAlert[type]};
  color: ${({ tokens, type }) => tokens.colorTextAlert[type]};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeTextNormal};
  box-sizing: border-box;
`;

const IconContainer = styled(({ theme, tokens, type, ...props }) => <div {...props} />)`
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spaceSmall};
  color: ${({ tokens, type }) => tokens.colorIconAlert[type]};
`;

const Title = styled(({ theme, ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spaceXSmall};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  line-height: ${({ theme }) => theme.lineHeightHeading};
  min-height: ${({ theme }) => theme.heightIconMedium};
`;

const Content = styled(({ theme, title, ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  min-height: ${({ theme, title }) => !title && theme.heightIconMedium};
  margin-bottom: ${({ theme, title }) => title && theme.spaceXXSmall};
`;

const CloseContainer = styled(({ theme, ...props }) => <div {...props} />)`
  position: absolute;
  top: ${({ theme }) => theme.spaceXXSmall};
  right: ${({ theme }) => theme.spaceXXSmall};
`;

const Alert = (props: Props) => {
  const { type, title, theme, closable, icon, onClose, children } = props;
  const tokens = {
    colorIconAlert: {
      info: theme.colorAlertIconInfo,
      success: theme.colorAlertIconSuccess,
      warning: theme.colorAlertIconWarning,
      critical: theme.colorAlertIconCritical,
    },
    backgroundAlert: {
      info: theme.backgroundAlertInfo,
      success: theme.backgroundAlertSuccess,
      warning: theme.backgroundAlertWarning,
      critical: theme.backgroundAlertCritical,
    },
    colorTextAlert: {
      info: theme.colorTextAlertInfo,
      success: theme.colorTextAlertSuccess,
      warning: theme.colorTextAlertWarning,
      critical: theme.colorTextAlertCritical,
    },
  };
  return (
    <StyledAlert tokens={tokens} {...props}>
      {icon && (
        <IconContainer theme={theme} tokens={tokens} type={type}>
          <Icon type={type} icon={icon} />
        </IconContainer>
      )}
      <div>
        {title && <Title theme={theme}>{title}</Title>}
        <Content theme={theme} title={title}>
          {children}
        </Content>
      </div>
      {closable && (
        <CloseContainer theme={theme}>
          <Button
            onClick={onClose}
            type={type}
            variation="link"
            size="small"
            Icon={CloseCircle}
            onlyIcon
          />
        </CloseContainer>
      )}
    </StyledAlert>
  );
};

const AlertWithTheme = withTheme(Alert);
AlertWithTheme.displayName = "Alert";
AlertWithTheme.defaultProps = {
  type: "info",
  closable: false,
  onClose: () => {},
};

export default AlertWithTheme;
