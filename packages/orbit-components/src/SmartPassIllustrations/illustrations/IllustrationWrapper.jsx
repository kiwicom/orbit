// @flow
import * as React from "react";

import theme from "../../defaultTheme";
import { SIZE_OPTIONS } from "../../primitives/IllustrationPrimitive/consts";
import type { Props } from "..";

const tokens = {
  [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.illustrationExtraSmallHeight,
  [SIZE_OPTIONS.SMALL]: "120px",
  [SIZE_OPTIONS.MEDIUM]: theme.orbit.illustrationMediumHeight,
  [SIZE_OPTIONS.LARGE]: "280px",
  [SIZE_OPTIONS.DISPLAY]: "460px",
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
}: WrapperProps): React.Element<"svg"> => {
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
