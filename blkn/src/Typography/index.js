// @flow

import * as React from "react";
import { fontColors } from "../constants";

const UNIT = "px";

const sizes = {
  large: `16${UNIT}`,
  small: `12${UNIT}`,
  normal: `14${UNIT}`,
};

type Props = {
  size?: "large" | "small" | "normal",
  type: "primary" | "secondary" | "attention" | "error" | "input",
  children: React.Node,
};

const Typography = (props: Props) => (
  <span>
    {props.children}
    <style jsx>{`
      span {
        font-family: Roboto, -apple-system, sans-serif;
        font-size: ${(props.size && sizes[props.size]) || "inherit"};
        color: ${fontColors[props.type]};
      }
    `}</style>
  </span>
);

Typography.defaultProps = {
  type: "primary", // eslint-disable-line react/default-props-match-prop-types
};

export default Typography;
