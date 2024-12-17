import * as React from "react";

import theme from "../../defaultTheme";
import { SIZE_OPTIONS } from "../../primitives/IllustrationPrimitive";
import type { Props } from "../types";

const tokens = {
  [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.illustrationExtraSmallHeight,
  [SIZE_OPTIONS.SMALL]: theme.orbit.illustrationSmallHeight,
  [SIZE_OPTIONS.MEDIUM]: theme.orbit.illustrationMediumHeight,
  [SIZE_OPTIONS.LARGE]: theme.orbit.illustrationLargeHeight,
  [SIZE_OPTIONS.DISPLAY]: theme.orbit.illustrationDisplayHeight,
};

interface WrapperProps extends Props {
  viewBox: string;
  children: React.ReactNode;
}

const IllustrationWrapper = ({
  size = "medium",
  viewBox,
  title,
  description,
  ariaLabelledby,
  dataTest,
  children,
}: WrapperProps) => {
  const height = tokens[size];

  return (
    <svg
      height={height}
      data-test={dataTest}
      viewBox={viewBox}
      fill="none"
      role="img"
      aria-labelledby={ariaLabelledby}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={ariaLabelledby}>{title}</title>
      <desc>{description}</desc>
      {children}
    </svg>
  );
};

export default IllustrationWrapper;
