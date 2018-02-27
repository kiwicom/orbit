// @flow

import * as React from "react";

const UNIT = "px";

const sizes = {
  large: `16${UNIT}`,
  small: `12${UNIT}`,
  normal: `14${UNIT}`,
};

const colors = {
  primary: "#46515e",
  secondary: "#7f91a8",
  attention: "#171B1E",
  error: "#D02228",
};

type Props = {
  size?: "large" | "small" | "normal",
  type: "primary" | "secondary" | "attention" | "error",
  children: React.Node,
};

const Typography = (props: Props) => (
  <span>
    {props.children}
    <style jsx>{`
      span {
        font-family: Roboto, -apple-system, sans-serif;
        font-size: ${(props.size && sizes[props.size]) || "inherit"};
        color: ${colors[props.type]};
      }
    `}</style>
  </span>
);

Typography.defaultProps = {
  type: "primary", // eslint-disable-line react/default-props-match-prop-types
};

export default Typography;
