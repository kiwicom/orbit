"use client";

import React from "react";
import cx from "clsx";

import { SIZE_OPTIONS, baseURL } from "./consts";
import type { Props, Size } from "./types";

const heightClasses = {
  [SIZE_OPTIONS.SMALL]: "h-sm",
  [SIZE_OPTIONS.MEDIUM]: "h-lg",
  [SIZE_OPTIONS.LARGE]: "h-[48px]",
} as const;

const getColorUrlParam = (greyScale: boolean) => (greyScale ? "logos-grayscale" : "logos");

const getSizeUrlParams = (size: Size) => {
  const sizes = {
    [SIZE_OPTIONS.SMALL]: [12, 24],
    [SIZE_OPTIONS.MEDIUM]: [24, 48],
    [SIZE_OPTIONS.LARGE]: [48, 96],
  } as const;

  return {
    lowRes: `0x${sizes[size][0]}`,
    highRes: `0x${sizes[size][1]}`,
  } as const;
};

const ServiceLogo = ({
  name,
  size = SIZE_OPTIONS.MEDIUM,
  grayScale = false,
  dataTest,
  id,
}: Props) => {
  const color = getColorUrlParam(grayScale);
  const { lowRes, highRes } = getSizeUrlParams(size);

  return (
    <img
      className={cx("orbit-service-logo w-auto bg-transparent", heightClasses[size])}
      src={`${baseURL}/${color}/${lowRes}/${name}.png`}
      srcSet={`${baseURL}/${color}/${highRes}/${name}.png 2x`}
      alt={name}
      id={id}
      data-test={dataTest}
    />
  );
};

export default ServiceLogo;
