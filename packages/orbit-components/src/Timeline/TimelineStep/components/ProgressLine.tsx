import * as React from "react";
import cx from "clsx";

import type { Type } from "../types";
import useTheme from "../../../hooks/useTheme";
import type { Theme } from "../../../defaultTheme";

export const getStatusColor = (theme: Theme, type?: Type): string => {
  const colors = {
    success: theme.orbit.textSuccessForeground,
    warning: theme.orbit.textWarningForeground,
    critical: theme.orbit.textCriticalForeground,
    info: theme.orbit.textInfoForeground,
  };

  return type ? colors[type] : theme.orbit.paletteCloudNormalHover;
};

interface Props {
  desktop?: boolean;
  last?: boolean;
  nextStatus?: Type;
  prevStatus?: Type;
  status?: Type;
}

const ProgressLine = ({ desktop, status, nextStatus, last, prevStatus }: Props) => {
  const theme = useTheme();

  const getBorderStyle = (): React.CSSProperties => {
    if (desktop) {
      if (status && !nextStatus && !last) {
        return {
          borderImageSlice: 1,
          borderImageSource: `linear-gradient(to right, ${getStatusColor(
            theme,
            prevStatus,
          )}, ${getStatusColor(theme, status)})`,
        };
      }
    }

    if (status && !nextStatus && !last) {
      return {
        borderImageSlice: 1,
        borderImageSource: `linear-gradient(to bottom, ${getStatusColor(
          theme,
          prevStatus,
        )}, ${getStatusColor(theme, status)})`,
      };
    }

    return {
      borderColor: getStatusColor(theme, status),
    };
  };

  return (
    <span
      className={cx(
        "border",
        status ? "border-solid" : "border-dashed",
        desktop
          ? "w-1/2"
          : "absolute top-[15px] h-[calc(100%+theme(spacing.50))] ltr:left-[11px] rtl:right-[11px]",
      )}
      style={getBorderStyle()}
    />
  );
};

export default ProgressLine;
