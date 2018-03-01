// @flow
import * as React from "react";
import IconWrapper from "./IconWrapper";
import { colors, fontSizes } from "../constants";

type Props = {
  title: string,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void,
  isDisabled?: boolean,
  type: "primary" | "secondary",
  size: "normal" | "large" | "small",
  icon?: React.StatelessFunctionalComponent<*>,
};

const fontColors = {
  primary: colors.white,
  secondary: colors.shuttle,
};

const bgColors = {
  primary: colors.teal,
  secondary: colors.silver,
};

const paddings = {
  normal: "12px 16px",
  large: "14px 28px",
  small: "8px 12px",
};

const Button = (props: Props) => (
  <button onClick={props.onClick} disabled={props.isDisabled}>
    {props.icon && <IconWrapper icon={props.icon} size={props.size} type={props.type} />}
    {props.title}
    <style jsx>{`
      button {
        opacity: ${props.isDisabled ? "0.3" : "1"}
        cursor: ${props.isDisabled ? "default" : "pointer"}
        background-color: ${bgColors[props.type]}
        color: ${fontColors[props.type]}
        border: none;
        border-radius: 3px;
        font-weight: 500;
        padding: ${paddings[props.size]};
        padding-left: ${props.icon ? "40px" : ""}
        font-size: ${fontSizes[props.size]}
        position: relative;
      }
    `}</style>
  </button>
);

export default Button;
