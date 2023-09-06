"use client";

import React from "react";
import cx from "clsx";

import type { Props } from "./types";
import useTheme from "../../hooks/useTheme";
import { spaceAfterClasses, getMargin } from "../../common/tailwind";

export enum SIZE_OPTIONS {
  EXTRASMALL = "extraSmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  DISPLAY = "display",
}

const getHeightToken = ({ theme, size }) => {
  const tokens: Record<SIZE_OPTIONS, string> = {
    [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.illustrationExtraSmallHeight,
    [SIZE_OPTIONS.SMALL]: theme.orbit.illustrationSmallHeight,
    [SIZE_OPTIONS.MEDIUM]: theme.orbit.illustrationMediumHeight,
    [SIZE_OPTIONS.LARGE]: theme.orbit.illustrationLargeHeight,
    [SIZE_OPTIONS.DISPLAY]: theme.orbit.illustrationDisplayHeight,
  };
  return parseInt(tokens[size], 10);
};

const maxHeightClasses: Record<SIZE_OPTIONS, string> = {
  [SIZE_OPTIONS.EXTRASMALL]: "max-h-illustration-extra-small",
  [SIZE_OPTIONS.SMALL]: "max-h-illustration-small",
  [SIZE_OPTIONS.MEDIUM]: "max-h-illustration-medium",
  [SIZE_OPTIONS.LARGE]: "max-h-illustration-large",
  [SIZE_OPTIONS.DISPLAY]: "max-h-illustration-display",
};

const baseURL = "//images.kiwi.com";

const IllustrationPrimitive = ({
  name,
  alt,
  margin,
  size = SIZE_OPTIONS.MEDIUM,
  dataTest,
  id,
  // TODO: remove spaceAfter in the next major version
  spaceAfter,
}: Props) => {
  const theme = useTheme();
  const illustrationPath = `${name}-Q85.png`;
  const height = getHeightToken({ theme, size });
  const { vars: cssVars, classes: marginClasses } = getMargin(margin);

  return (
    <img
      className={cx(
        "mx-0 my-auto inline-block max-w-full shrink-0 bg-transparent",
        maxHeightClasses[size],
        spaceAfter && spaceAfterClasses[spaceAfter],
        ...marginClasses,
      )}
      src={`${baseURL}/illustrations/0x${height}/${illustrationPath}`}
      srcSet={`${baseURL}/illustrations/0x${
        height * 2
      }/${illustrationPath} 2x, ${baseURL}/illustrations/0x${height * 3}/${illustrationPath} 3x`}
      alt={typeof alt === "string" ? alt : name}
      data-test={dataTest}
      id={id}
      style={cssVars}
    />
  );
};

export default IllustrationPrimitive;
