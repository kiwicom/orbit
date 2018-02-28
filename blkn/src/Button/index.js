// @flow
import * as React from "react";
import Icon from "./Icon";
import * as constants from "../constants";

type Props = {
  title: string,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void,
  isDisabled?: boolean,
  type: "primary" | "secondary",
  size: "normal" | "large" | "small",
  icon?: Function,
};

const Button = (props: Props) => {
  console.log(props.icon);
  return (
    <button onClick={props.onClick} disabled={props.isDisabled}>
      {props.icon && <Icon icon={props.icon} size={props.size} type={props.type} />}
      {props.title}
      <style jsx>{`
      button {
        opacity: ${props.isDisabled ? "0.3" : "1"}
        cursor: ${props.isDisabled ? "default" : "pointer"}
        background-color: ${constants.btnBgColors[props.type]}
        color: ${constants.btnFontColors[props.type]}
        border: none;
        border-radius: 3px;
        font-weight: 500;
        padding: ${constants.btnPaddings[props.size]};
        padding-left: ${props.icon ? "40px" : ""}
        font-size: ${constants.fontSizes[props.size]}
        position: relative;
      }
    `}</style>
    </button>
  );
};

export default Button;
