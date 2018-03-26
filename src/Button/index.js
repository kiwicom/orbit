// @flow
import * as React from "react";

import IconWrapper from "./IconWrapper";
import Loading from "../icons/Loading";
import { darken } from 'polished';
import { defaultTokens as tokens } from "../constants";

type Props = {
  title?: string,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void,
  isDisabled?: boolean,
  isBordered?: boolean,
  isLoading?: boolean,
  type: "primary" | "secondary" | "link" | "facebook" | "google" | "destcructive",
  size: "normal" | "large" | "small",
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

const borderRadiusButton = {
  large: tokens.borderRadiusLarge,
  normal: tokens.borderRadiusNormal,
  small: tokens.borderRadiusSmall,
};

const Button = (props: Props) => (
  <button onClick={props.onClick} disabled={props.isDisabled}>
    {props.Icon && <IconWrapper Icon={props.isLoading ? Loading : props.Icon} size={props.size} type={props.type} bordered={props.isBordered} />}
    {props.children ? props.children : props.title}
    <style jsx>{`
      button {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${heightButton[props.size]};
        opacity: ${props.isDisabled ? "0.3" : "1"};
        cursor: ${props.isDisabled ? "default" : "pointer"};
        background: ${props.isBordered ? tokens.backgroundButtonBordered : backgroundButton[props.type]};
        color: ${props.isBordered ? colorButtonBordered[props.type]: colorButton[props.type]};
        border: ${props.isBordered ? `2px solid ${borderButton[props.type]}` : "none"};
        border-radius: ${borderRadiusButton[props.size]};
        font-weight: ${tokens.fontWeightMedium};
        padding: 0 ${paddingButton[props.size]};
        font-size: ${fontSizeButton[props.size]};
        position: relative;
        transition: all .15s ease-in-out;
        outline: 0;
      }
      button:hover {
        background: ${props.isBordered ? tokens.backgroundButtonBordered : darken(tokens.modifierDarkenHover, backgroundButton[props.type])};
        color: ${props.isBordered ? darken(tokens.modifierDarkenHover, colorButtonBordered[props.type]) : colorButton[props.type]};
        border: ${props.isBordered ? `2px solid ${darken(tokens.modifierDarkenHover, borderButton[props.type])}` : "none"};
      }
      button:active {
        transform: scale(${tokens.modifierScaleButtonActive});
        background: ${props.isBordered ? tokens.backgroundButtonBordered : darken(tokens.modifierDarkenActive, backgroundButton[props.type])};
        color: ${props.isBordered ? darken(tokens.modifierDarkenActive, colorButtonBordered[props.type]) : colorButton[props.type]};
        border: ${props.isBordered ? `2px solid ${darken(tokens.modifierDarkenActive, borderButton[props.type])}` : "none"};
      }
    `}</style>
  </button>
);

export default Button;
