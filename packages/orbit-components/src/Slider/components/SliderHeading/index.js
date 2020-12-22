// @flow
import React from "react";

import SliderTexts from "../SliderTexts";
import useMediaQuery from "../../../hooks/useMediaQuery";

import type { Props } from "./index";

const SliderHeading = ({ hasHistogram, ...props }: Props) => {
  const { isTablet } = useMediaQuery();

  if (hasHistogram && !isTablet) return null;

  return <SliderTexts {...props} />;
};

export default SliderHeading;
