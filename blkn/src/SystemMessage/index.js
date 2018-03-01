// @flow
import * as React from "react";
import { colors } from "../constants";
import Message from "./Message";
import Title from "./Title";
import IconWrapper from "./IconWrapper";

type Props = {
  type: "warning" | "error" | "success" | "info",
  title?: string,
  icon?: React.StatelessFunctionalComponent<*>,
  children?: React.Node,
};

const bgColors = {
  warning: colors.sand,
  error: colors.linen,
  success: colors.harp,
  info: colors.sky,
};

const SystemMessage = (props: Props) => (
  <div>
    {props.icon && <IconWrapper type={props.type} icon={props.icon} />}
    {props.title && <Title type={props.type}>{props.title}</Title>}
    <Message type={props.type}>{props.children}</Message>
    <style jsx>{`
                    div {
                        background-color: ${bgColors[props.type]};
                        border: solid 1px #e9eef2;
                        line-height: 20px;
                        padding: 16px;
                        padding-left: ${props.icon ? "48px" : ""}
                        font-size: 14px
                        border-radius: 3px;
                        width: 100%;
                        position: relative;
                    }
                `}</style>
  </div>
);

export default SystemMessage;
