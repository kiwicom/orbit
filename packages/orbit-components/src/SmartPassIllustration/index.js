// @flow
import React from "react";

import * as Illustrations from "./components";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive/consts";
import theme from "../defaultTheme";

import type { Props } from ".";

const getHeightToken = size => {
  const tokens = {
    [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.heightIllustrationSmall,
    [SIZE_OPTIONS.SMALL]: "120px",
    [SIZE_OPTIONS.MEDIUM]: theme.orbit.heightIllustrationMedium,
    [SIZE_OPTIONS.LARGE]: "280px",
    [SIZE_OPTIONS.DISPLAY]: "460px",
  };
  return tokens[size];
};

const SmartPassIllustration = ({
  name,
  primary = "white",
  secondary = "black",
  size = "medium",
  ...props
}: Props) => {
  const height = getHeightToken(size);

  const Illustration = Illustrations[`SmartPass${name.toUpperCase()}`];

  if (Illustration) {
    return (
      <Illustration
        name={name}
        primary={primary}
        height={height}
        secondary={secondary}
        {...props}
      />
    );
  }
  return null;
};

export default SmartPassIllustration;
