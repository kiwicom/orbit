// @flow
import * as React from "react";
import { colors } from "../constants";

type Props = {
  type: "warning" | "error" | "success" | "info",
  icon: React.StatelessFunctionalComponent<*>,
};

const fillColors = {
  warning: "#f9971e",
  error: colors.red,
  success: colors.green,
  info: colors.azure,
};

const IconWrapper = (props: Props) => {
  const { icon: Icon, type } = props;
  return (
    <span>
      <Icon fill={fillColors[type]} height="20px" />
      <style xml>{`
        svg {
          position: absolute;
          top: 16px;
          left: 14px;
        }
      `}</style>
    </span>
  );
};

export default IconWrapper;
