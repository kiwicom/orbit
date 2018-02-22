// @flow

import * as React from "react";

const sizes = {
  large: 16,
  small: 12,
  normal: 14,
};

const colors = {
  primary: "#46515D",
  secondary: "#8091A7",
  attention: "#171B1E",
  error: "#D02228",
};

type Props = {
  size: "large" | "small" | "normal",
  type: "primary" | "secondary" | "attention" | "error",
  children: React.Node,
};

const Typography = (props: Props) => (
  <span>
    {props.children}
    <style jsx>{`
      span {
        font-family: Roboto, -apple-system, sans-serif;
        font-size: ${sizes[props.size]}px;
        color: ${colors[props.type]};
      }
    `}</style>
  </span>
);

Typography.defaultProps = {
  size: "normal", // eslint-disable-line react/default-props-match-prop-types
  type: "primary", // eslint-disable-line react/default-props-match-prop-types
};

export default Typography;
