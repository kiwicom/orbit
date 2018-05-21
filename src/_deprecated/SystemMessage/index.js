// @flow
import * as React from "react";

import { colors } from "../../constants";
import Message from "./Message";
import Title from "./Title";
import IconWrapper from "./IconWrapper";
import deprecationWarning from "../../../config/deprecationWarning";

type Props = {
  type: "warning" | "error" | "success" | "info",
  title?: string,
  Icon?: React.ComponentType<*>,
  children?: React.Node,
};

const bgColors = {
  warning: colors.orange.light,
  error: colors.red.light,
  success: colors.green.light,
  info: colors.blue.light,
};

deprecationWarning("SystemMessage is deprecated and will be removed in next major release");

const SystemMessage = (props: Props) => (
  <div>
    {props.Icon && <IconWrapper type={props.type} Icon={props.Icon} />}
    {props.title && <Title type={props.type}>{props.title}</Title>}
    <Message type={props.type}>{props.children}</Message>
    <style jsx>{`
      div {
        background-color: ${bgColors[props.type]};
        border: solid 1px #e9eef2;
        line-height: 20px;
        padding: 16px;
        padding-left: ${props.Icon ? "48px" : ""};
        font-size: 14px;
        border-radius: 3px;
        max-width: 100%;
        position: relative;
      }
    `}</style>
  </div>
);

export default SystemMessage;
