// @flow
import * as React from "react";

type Props = {
  type: "warning" | "error" | "success" | "info",
  children: React.Node,
};

const fontColors = {
  warning: "#a93610",
  error: "#650808",
  success: "#065d12",
  info: "#07405c",
};

const Message = (props: Props) => (
  <React.Fragment>
    <span>{props.children}</span>
    <style jsx>{`
      span {
        color: ${fontColors[props.type]};
        font-family: Roboto, -apple-system, sans-serif;
        font-weight: 100;
      }
    `}</style>
  </React.Fragment>
);

export default Message;
