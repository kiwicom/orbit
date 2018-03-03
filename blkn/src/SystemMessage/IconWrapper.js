// @flow
import * as React from "react";
import { colors } from "../constants";

type Props = {
  type: "warning" | "error" | "success" | "info",
  Icon: React.ComponentType<*>,
};

const fillColors = {
  warning: colors.orange.normal,
  error: colors.red.normal,
  success: colors.green.normal,
  info: colors.blue.normal,
};

const IconWrapper = (props: Props) => {
  const { Icon, type } = props;
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
