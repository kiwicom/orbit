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

const Title = (props: Props) => (
  <React.Fragment>
    <h4>{props.children}</h4>
    <style jsx>{`
      h4 {
        color: ${fontColors[props.type]};
        font-family: Roboto, -apple-system, sans-serif;
        font-weight: 500;
        margin: 0;
        margin-bottom: 8px;
      }
    `}</style>
  </React.Fragment>
);

export default Title;
