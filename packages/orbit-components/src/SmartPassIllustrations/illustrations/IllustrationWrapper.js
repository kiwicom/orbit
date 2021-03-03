// @flow
import * as React from "react";

import theme from "../../defaultTheme";
import { SIZE_OPTIONS } from "../../primitives/IllustrationPrimitive/consts";
import type { Props } from "..";

const tokens = {
  [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.illustrationHeightExtraSmall,
  [SIZE_OPTIONS.SMALL]: theme.orbit.illustrationHeightSmall,
  [SIZE_OPTIONS.MEDIUM]: theme.orbit.illustrationHeightMedium,
  [SIZE_OPTIONS.LARGE]: theme.orbit.illustrationHeightLarge,
  [SIZE_OPTIONS.DISPLAY]: theme.orbit.illustrationHeightDisplay,
};

type WrapperProps = {|
  ...Props,
  viewBox: string,
  children: React.Node,
|};

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
