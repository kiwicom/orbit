// @flow

import * as React from "react";
import { fontColors } from "../constants";

const UNIT = "px";

const sizes = {
  large: `16${UNIT}`,
  small: `12${UNIT}`,
  normal: `14${UNIT}`,
};

const additionalVariants = {
  bold: "font-weight: bold;",
  normal: "",
};

type Props = {
  size?: "large" | "small" | "normal",
  type?: "primary" | "secondary" | "attention" | "error" | "input",
  variant?: "bold" | "normal",
  children: React.Node,
  color?: string,
};

const Typography = (props: Props) => (
  <span className="typography">
    {props.children}
    <style jsx>{`
      .typography {
        font-family: Roboto, -apple-system, sans-serif;
        font-size: ${(props.size && sizes[props.size]) || "inherit"};
        color: ${fontColors[props.type || "primary"]};
        ${additionalVariants[props.variant || "normal"]};
      }
    `}</style>
  </span>
);

export default Typography;
