import * as React from "react";
import cx from "clsx";

import type { Value } from "../../types";
import { left as leftRight } from "../../../utils/rtl";
import useTheme from "../../../hooks/useTheme";

export const calculateBarPosition = (
  value: Value,
  max: number,
  min: number,
  hasHistogram: boolean,
) => {
  if (Array.isArray(value)) {
    return {
      left: +(((value[0] - min) / (max - min + 1)) * 100).toFixed(1),
      width: +(((value[value.length - 1] - value[0] + 1) / (max - min + 1)) * 100).toFixed(1),
    };
  }
  const addition = hasHistogram ? 1 : 0;
  return {
    left: 0,
    width: +(((value - min + addition) / (max - min + addition)) * 100).toFixed(1),
  };
};

const BarPart = ({ className, style }: { className: string; style?: React.CSSProperties }) => {
  return (
    <div
      className={cx("h-xxs rounded-100 absolute top-1/2 -translate-y-1/2", className)}
      style={style}
    />
  );
};

interface Props {
  value: Value;
  max: number;
  min: number;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  hasHistogram: boolean;
}

const Bar = React.forwardRef<HTMLDivElement, Props>(
  ({ onMouseDown, value, max, min, hasHistogram }, ref) => {
    const theme = useTheme();
    const { left, width } = calculateBarPosition(value, max, min, hasHistogram);
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className="h-lg tap-color-none relative w-full cursor-pointer select-none"
        ref={ref}
        onMouseDown={onMouseDown}
      >
        <BarPart className="bg-cloud-normal left-0 w-full" />
        <BarPart
          className="bg-blue-normal"
          style={{ [leftRight({ theme })]: `${left}%`, width: `${width}%` }}
        />
      </div>
    );
  },
);

Bar.displayName = "Bar";

export default Bar;
