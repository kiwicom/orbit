// @flow
import * as React from "react";
import * as tokens from "@kiwicom/orbit-design-tokens";

import * as Icons from "../icons";
import { Button } from "../index";

const Icon = ({ type, Icon: CustomIcon, customColor }) => {
  switch (type) {
    case "info":
      return (
        (CustomIcon && <CustomIcon customColor={customColor} />) || (
          <Icons.InformationCircle customColor={customColor} />
        )
      );
    case "success":
      return (
        (CustomIcon && <CustomIcon customColor={customColor} />) || (
          <Icons.Check customColor={customColor} />
        )
      );
    case "warning":
      return (
        (CustomIcon && <CustomIcon customColor={customColor} />) || (
          <Icons.Alert customColor={customColor} />
        )
      );
    case "critical":
      return (
        (CustomIcon && <CustomIcon customColor={customColor} />) || (
          <Icons.AlertCircle customColor={customColor} />
        )
      );
    default:
      return null;
  }
};

const backgroundAlert = {
  info: tokens.backgroundAlertInfo,
  success: tokens.backgroundAlertSuccess,
  warning: tokens.backgroundAlertWarning,
  critical: tokens.backgroundAlertCritical,
};

const colorTextAlert = {
  info: tokens.colorTextAlertInfo,
  success: tokens.colorTextAlertSuccess,
  warning: tokens.colorTextAlertWarning,
  critical: tokens.colorTextAlertCritical,
};

const colorIconAlert = {
  info: tokens.colorAlertIconInfo,
  success: tokens.colorAlertIconSuccess,
  warning: tokens.colorAlertIconWarning,
  critical: tokens.colorAlertIconCritical,
};

type Props = {
  type: $Keys<typeof backgroundAlert | typeof colorTextAlert>,
  title?: string,
  Icon?: React.ComponentType<*>,
  closable: boolean,
  noIcon: boolean,
  onClose: () => void,
  children: React.Node,
};

const Alert = (props: Props) => {
  const { type, title, closable, noIcon, onClose, children } = props;
  return (
    <div className="alert">
      <div className="alertIcon">
        {!noIcon &&
          (Icon && <Icon type={type} Icon={props.Icon} customColor={colorIconAlert[type]} />)}
      </div>
      <div>
        {title && <div className="alertTitle">{title}</div>}
        <p className="alertContent">{children}</p>
      </div>
      {closable && (
        <div className="alertClose">
          <Button
            onClick={onClose}
            type={type}
            variation="link"
            size="small"
            Icon={Icons.CloseCircle}
            onlyIcon
          />
        </div>
      )}
      <style jsx>
        {`
          .alert {
            position: relative;
            display: flex;
            width: 100%;
            padding: ${!noIcon
              ? `${tokens.paddingAlert} ${tokens.paddingAlertWithIcon}`
              : `${tokens.paddingAlert}`};
            padding-right: ${closable ? tokens.spaceXXLarge : "auto"};
            border-radius: ${tokens.borderRadiusNormal};
            background: ${backgroundAlert[type]};
            color: ${colorTextAlert[type]};
            font-family: ${tokens.fontFamily};
            font-size: ${tokens.fontSizeTextNormal};
            box-sizing: border-box;
          }
          .alertInner {
            display: flex;
          }
          .alertIcon {
            flex-shrink: 0;
            margin-right: ${tokens.spaceSmall};
          }
          .alertTitle {
            display: flex;
            align-items: center;
            margin-bottom: ${tokens.spaceXSmall};
            font-weight: ${tokens.fontWeightBold};
            line-height: ${tokens.lineHeightHeading};
            min-height: ${tokens.heightIconMedium};
          }
          .alertContent {
            display: flex;
            align-items: center;
            min-height: ${!title ? tokens.heightIconMedium : `0`};
            margin: ${title ? `0 0 ${tokens.spaceXXSmall} 0` : `0`};
          }
          .alertClose {
            position: absolute;
            top: ${tokens.spaceXXSmall};
            right: ${tokens.spaceXXSmall};
          }
        `}
      </style>
    </div>
  );
};

Alert.defaultProps = {
  type: "info",
  title: "",
  closable: false,
  noIcon: false,
  onClose: () => {},
};

export default Alert;
