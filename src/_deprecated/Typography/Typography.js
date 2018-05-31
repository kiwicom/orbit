// @flow
import * as React from "react";

import { fontColors } from "../../constants";

const sizes = {
  small: "12px",
  normal: "14px",
  large: "16px",
  header: "22px",
};

const additionalVariants = {
  bold: "font-weight: bold;",
  medium: "font-weight: 500;",
  normal: "",
};

type Props = {
  size?: $Keys<typeof sizes>,
  type?: "primary" | "secondary" | "attention" | "error" | "input" | "active" | "help",
  variant?: "bold" | "normal" | "medium",
  children: React.Node,
};

const Typography = (props: Props) => (
  <span>
    {props.children}
    <style jsx>{`
      span {
        font-family: Roboto, -apple-system, sans-serif;
        font-size: ${sizes[props.size || "normal"]};
        color: ${fontColors[props.type || "primary"]};
        ${additionalVariants[props.variant || "normal"]};
      }
    `}</style>
  </span>
);

export default Typography;
