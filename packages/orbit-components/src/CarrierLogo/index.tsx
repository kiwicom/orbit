"use client";

import * as React from "react";
import cx from "clsx";

import { SIZE_OPTIONS, BASE_URL } from "./consts";
import type { Props, CarrierType, Size, Carrier } from "./types";
import { useRandomIdSeed } from "../hooks/useRandomId";

const WIDTH = {
  [SIZE_OPTIONS.SMALL]: "w-icon-small",
  [SIZE_OPTIONS.MEDIUM]: "w-icon-medium",
  [SIZE_OPTIONS.LARGE]: "w-icon-large",
  reduced: {
    [SIZE_OPTIONS.SMALL]: "w-[calc(theme(width.icon-small)-1px)]",
    [SIZE_OPTIONS.MEDIUM]: "w-[calc(theme(width.icon-medium)-1px)]",
    [SIZE_OPTIONS.LARGE]: "w-[calc(theme(width.icon-large)-1px)]",
  },
};

const HEIGHT = {
  [SIZE_OPTIONS.SMALL]: "h-icon-small",
  [SIZE_OPTIONS.MEDIUM]: "h-icon-medium",
  [SIZE_OPTIONS.LARGE]: "h-icon-large",
  reduced: {
    [SIZE_OPTIONS.SMALL]: "h-[calc(theme(height.icon-small)-1px)]",
    [SIZE_OPTIONS.MEDIUM]: "h-[calc(theme(height.icon-medium)-1px)]",
    [SIZE_OPTIONS.LARGE]: "h-[calc(theme(height.icon-large)-1px)]",
  },
};

const getURLSizes = ({ size }) => {
  const urlSizes = {
    base: {
      [SIZE_OPTIONS.SMALL]: 16,
      [SIZE_OPTIONS.MEDIUM]: 32,
      [SIZE_OPTIONS.LARGE]: 32,
    },
    retina: {
      [SIZE_OPTIONS.SMALL]: 32,
      [SIZE_OPTIONS.MEDIUM]: 64,
      [SIZE_OPTIONS.LARGE]: 64,
    },
  };
  return {
    base: urlSizes.base[size],
    retina: urlSizes.retina[size],
  };
};

interface GetImageSrc {
  carrierType?: CarrierType;
  carriersLength: number;
  size: Size;
  code: string;
  inlineStacked: boolean;
}

const getImgSrc = ({
  carrierType = "airline",
  carriersLength,
  size,
  code,
  inlineStacked,
}: GetImageSrc) => {
  const urlSizes =
    carriersLength > 1 && !inlineStacked
      ? getURLSizes({ size: SIZE_OPTIONS.SMALL })
      : getURLSizes({ size });

  return {
    src: `${BASE_URL}/airlines/${urlSizes.base}x${urlSizes.base}/${code}.png?default=${carrierType}.png`,
    srcSet: `${BASE_URL}/airlines/${urlSizes.retina}x${urlSizes.retina}/${code}.png?default=${carrierType}.png 2x`,
  };
};

type WrapperProps = {
  carriers: Carrier[];
  size: Size;
  inlineStacked?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const CarrierLogoWrapper: React.FC<WrapperProps> = ({
  children,
  carriers,
  size,
  inlineStacked,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        "orbit-carrier-logo",
        "flex content-between justify-between bg-transparent",
        inlineStacked
          ? "w-min"
          : [
              carriers.length > 2 && "flex-wrap",
              carriers.length > 1 ? "w-800 flex-col" : ["flex-row", WIDTH[size]],
            ],
        !inlineStacked && carriers.length > 1 ? "h-800" : HEIGHT[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CarrierLogo = ({
  size = SIZE_OPTIONS.LARGE,
  carriers,
  dataTest,
  id,
  rounded,
  inlineStacked = false,
}: Props) => {
  const randomId = useRandomIdSeed();

  return (
    <CarrierLogoWrapper
      carriers={carriers}
      size={size}
      data-test={dataTest}
      id={id}
      inlineStacked={inlineStacked}
    >
      {carriers.slice(0, 4).map((carrierImage, idx) => (
        <img
          className={cx(
            "max-w-none bg-transparent",
            rounded ? "rounded-full" : "rounded-100",
            inlineStacked ? "not-first:-ms-200 border border-solid border-white" : "last:self-end",
            carriers.length > 1 && !inlineStacked
              ? [
                  carriers.length > 2
                    ? [HEIGHT.reduced[SIZE_OPTIONS.SMALL], WIDTH.reduced[SIZE_OPTIONS.SMALL]]
                    : [HEIGHT[SIZE_OPTIONS.SMALL], WIDTH[SIZE_OPTIONS.SMALL]],
                ]
              : [
                  carriers.length > 2
                    ? [HEIGHT.reduced[size], WIDTH.reduced[size]]
                    : [HEIGHT[size], WIDTH[size]],
                ],
          )}
          key={randomId(idx.toString())}
          alt={carrierImage.name}
          title={carrierImage.name}
          {...getImgSrc({
            carrierType: carrierImage.type,
            carriersLength: carriers.length,
            size,
            code: carrierImage.code,
            inlineStacked,
          })}
        />
      ))}
    </CarrierLogoWrapper>
  );
};

export default CarrierLogo;
