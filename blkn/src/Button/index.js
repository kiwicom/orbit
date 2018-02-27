// @flow
import * as React from "react";
import Icon from "./Icon";

type Props = {
  title: string,
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
  disabled?: boolean,
  secondary?: boolean,
  size?: "normal" | "large" | "small",
  icon?: Function,
};

const paddings = {
  normal: "12px 16px",
  large: "14px 28px",
  small: "8px 12px",
};

const fontSizes = {
  normal: "14px",
  large: "16px",
  small: "14px",
};

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.icon && <Icon icon={props.icon} size={props.size} secondary={props.secondary} />}
      {props.title}
      <style jsx>{`
      button {
        opacity: ${props.disabled ? "0.3" : "1"}
        cursor: ${props.disabled ? "default" : "pointer"}
        background-color: ${props.secondary ? "#e8edf1" : "#00a991"}
        color: ${props.secondary ? "#46515e" : "white"}
        border: none;
        border-radius: 3px;
        font-weight: 500;
        padding: ${paddings[props.size]};
        padding-left: ${props.icon && "40px"}
        font-size: ${fontSizes[props.size]}
        position: relative;
      }
    `}</style>
    </button>
  );
};

export default Button;
