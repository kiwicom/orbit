// @flow
import * as React from "react";
import * as tokens from "orbit-design-token";
import { darken } from "polished";

import IconWrapper from "./IconWrapper";
import Loading from "../icons/Loading";

type Props = {
  title?: string,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void,
  isDisabled?: boolean,
  isBordered?: boolean,
  isLoading?: boolean,
  isBlock?: boolean,
  type: "primary" | "secondary" | "link" | "facebook" | "google" | "destructive",
  size: "normal" | "large" | "small",
  width?: number,
  Icon?: React.ComponentType<*>,
  children?: React.Node,
};

const backgroundButton = {
  primary: tokens.backgroundButtonPrimary,
  secondary: tokens.backgroundButtonSecondary,
  link: tokens.backgroundButtonLink,
  facebook: tokens.backgroundButtonFacebook,
  google: tokens.backgroundButtonGoogle,
  destructive: tokens.backgroundButtonDestructive,
};

const borderButton = {
  primary: tokens.borderColorButtonPrimaryBordered,
  secondary: tokens.borderColorButtonSecondaryBordered,
  link: tokens.borderColorButtonLinkBordered,
  facebook: tokens.borderColorButtonFacebookBordered,
  google: tokens.borderColorButtonGoogleBordered,
  destructive: tokens.borderColorButtonDestructiveBordered,
};

const colorButton = {
  primary: tokens.colorTextButtonPrimary,
  secondary: tokens.colorTextButtonSecondary,
  link: tokens.colorTextButtonLink,
  facebook: tokens.colorTextButtonFacebook,
  google: tokens.colorTextButtonGoogle,
  destructive: tokens.colorTextButtonDestructive,
};

const colorButtonBordered = {
  primary: tokens.colorTextButtonPrimaryBordered,
  secondary: tokens.colorTextButtonSecondaryBordered,
  link: tokens.colorTextButtonLinkBordered,
  facebook: tokens.colorTextButtonFacebookBordered,
  google: tokens.colorTextButtonGoogleBordered,
  destructive: tokens.colorTextButtonDestructiveBordered,
};

const heightButton = {
  large: tokens.heightButtonLarge,
  normal: tokens.heightButtonNormal,
  small: tokens.heightButtonSmall,
};

const fontSizeButton = {
  large: tokens.fontSizeButtonLarge,
  normal: tokens.fontSizeButtonNormal,
  small: tokens.fontSizeButtonSmall,
};

const paddingButton = {
  large: tokens.paddingButtonLarge,
  normal: tokens.paddingButtonNormal,
  small: tokens.paddingButtonSmall,
};

const paddingButtonWithIcon = {
  large: tokens.paddingButtonLargeWithIcon,
  normal: tokens.paddingButtonNormalWithIcon,
  small: tokens.paddingButtonSmallWithIcon,
};

const Button = (props: Props) => {
  let widthCondition;
  let backgroundHoverCondition;
  let backgroundActiveCondition;

  if (props.isBlock) {
    widthCondition = "100%";
  } else if (props.width) {
    widthCondition = `${props.width}px`;
  } else {
    widthCondition = "auto";
  }

  if (props.isBordered) {
    backgroundHoverCondition = tokens.backgroundButtonBordered;
  } else if (props.type === "link") {
    backgroundHoverCondition = tokens.backgroundButtonLinkHover;
  } else {
    backgroundHoverCondition = darken(tokens.modifierDarkenHover, backgroundButton[props.type]);
  }

  if (props.isBordered) {
    backgroundActiveCondition = tokens.backgroundButtonBordered;
  } else if (props.type === "link") {
    backgroundActiveCondition = tokens.backgroundButtonLinkHover;
  } else {
    backgroundActiveCondition = darken(tokens.modifierDarkenActive, backgroundButton[props.type]);
  }
  return (
    <button onClick={props.onClick} disabled={props.isDisabled}>
      {props.Icon && (
        <IconWrapper
          Icon={props.isLoading ? Loading : props.Icon}
          size={props.size}
          type={props.type}
          bordered={props.isBordered}
        />
      )}
      {props.children ? props.children : props.title}
      <style jsx>{`
        button {
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${widthCondition};
          min-width: ${tokens.widthButtonMinimal};
          height: ${heightButton[props.size]};
          background: ${props.isBordered
            ? tokens.backgroundButtonBordered
            : backgroundButton[props.type]};
          color: ${props.isBordered ? colorButtonBordered[props.type] : colorButton[props.type]};
          border: ${props.isBordered ? `1px solid ${borderButton[props.type]}` : "none"};
          border-radius: ${tokens.borderRadiusNormal};
          padding-left: ${props.Icon
            ? paddingButtonWithIcon[props.size]
            : paddingButton[props.size]};
          padding-right: ${paddingButton[props.size]};
          font-weight: ${tokens.fontWeightBold};
          font-size: ${fontSizeButton[props.size]};
          cursor: ${props.isDisabled ? "default" : "pointer"};
          opacity: ${props.isDisabled ? tokens.opacityButtonDisabled : "1"};
          transition: all 0.15s ease-in-out;
          outline: 0;
        }
        button:hover {
          background: ${backgroundHoverCondition};
          color: ${props.isBordered
            ? darken(tokens.modifierDarkenHover, colorButtonBordered[props.type])
            : colorButton[props.type]};
          border: ${props.isBordered
            ? `1px solid ${darken(tokens.modifierDarkenHover, borderButton[props.type])}`
            : "none"};
        }
        button:active {
          transform: scale(${tokens.modifierScaleButtonActive});
          background: ${backgroundActiveCondition};
          color: ${props.isBordered
            ? darken(tokens.modifierDarkenActive, colorButtonBordered[props.type])
            : colorButton[props.type]};
          border: ${props.isBordered
            ? `1px solid ${darken(tokens.modifierDarkenActive, borderButton[props.type])}`
            : "none"};
        }
      `}</style>
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false,
  isBordered: false,
  isLoading: false,
  isBlock: false,
  width: 180,
};

export default Button;
