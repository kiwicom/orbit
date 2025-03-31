import * as React from "react";
import cx from "clsx";

import { useRandomIdSeed } from "../hooks/useRandomId";
import useTheme from "../hooks/useTheme";
import { spaceAfterClasses } from "../common/tailwind";
import type { Props } from "./types";

const resolveValue = (value: string | number | undefined): string => {
  if (typeof value === "string") return value;
  if (typeof value === "number") return `${value}px`;

  return "100%";
};

const Rows = ({ count, height, offset, rowBorderRadius }) => {
  return (
    <>
      {Array.from(Array(count).keys()).map(el => (
        <rect
          key={el}
          y={`${el * offset}px`}
          x="0"
          rx={rowBorderRadius}
          ry={rowBorderRadius}
          width="100%"
          height={height}
        />
      ))}
    </>
  );
};

const Svg = ({
  animate = true,
  children,
  rowBorderRadius = 3,
  rowHeight = 21,
  rowOffset = 20,
  rows,
  color = "paletteCloudNormal",
  title,
  viewBox,
  height = "100%",
  maxHeight,
  width = "100%",
  id,
  dataTest,
  spaceAfter,
  ...props
}: Props) => {
  const [calculatedRowsHeight, setCalculatedRowsHeight] = React.useState(0);
  const { orbit } = useTheme();
  const randomId = useRandomIdSeed();
  const idClip = `${randomId("clip")}-clip`;

  React.useEffect(() => {
    if (!children && rows && rowOffset) setCalculatedRowsHeight(rows * rowOffset);
  }, [rowOffset, rows, setCalculatedRowsHeight, maxHeight]);

  return (
    <>
      <svg
        data-test={dataTest}
        id={id}
        className={cx(
          animate && "motion-safe:animate-pulse-slow",
          "rtl:-scale-x-100",
          spaceAfter && spaceAfterClasses[spaceAfter],
        )}
        viewBox={viewBox}
        style={{
          height: calculatedRowsHeight > 0 ? `${setCalculatedRowsHeight}px` : resolveValue(height),
          maxHeight: resolveValue(maxHeight),
          width: resolveValue(width),
        }}
        aria-hidden
        {...props}
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath={`url(#${idClip})`}
          style={{ fill: orbit[color] }}
        />
        <defs>
          <clipPath id={idClip}>
            {children ||
              (rows ? (
                <Rows
                  count={rows}
                  height={rowHeight}
                  offset={rowOffset}
                  rowBorderRadius={rowBorderRadius}
                />
              ) : (
                <rect
                  x="0"
                  y="0"
                  rx={rowBorderRadius}
                  ry={rowBorderRadius}
                  height="100%"
                  width="100%"
                />
              ))}
          </clipPath>
        </defs>
      </svg>
      {title && <span className="sr-only">{title}</span>}
    </>
  );
};

export default Svg;
