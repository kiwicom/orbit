"use client";

import React from "react";
import cx from "clsx";

import { baseURL, CODES, SIZE_WIDTHS, SIZES } from "./consts";
import type { Props } from "./types";

function getCountryProps(code?: string) {
  const codeNormalized = code ? code.toUpperCase().replace("-", "_") : "UNDEFINED";
  const countryCodeExists = codeNormalized in CODES;

  if (!countryCodeExists) console.warn(`Country code not supported: ${code}`);

  const countryCode = countryCodeExists ? CODES[codeNormalized] : CODES.UNDEFINED;
  return { code: countryCode };
}

const CountryFlag = ({ dataTest, size = SIZES.MEDIUM, id, role, name = "", ...props }: Props) => {
  const { code } = getCountryProps(props.code);

  const width = SIZE_WIDTHS[size];
  const src = `${baseURL}/flags/${width}x0/flag-${code.toLowerCase()}.jpg`;
  const srcSet = `${baseURL}/flags/${width * 2}x0/flag-${code.toLowerCase()}.jpg 2x`;

  return (
    <div
      className={cx(
        "orbit-country-flag",
        "rounded-50 bg-country-flag-background relative shrink-0 overflow-hidden",
        {
          "h-country-flag-small w-country-flag-small": size === SIZES.SMALL,
          "h-country-flag-medium w-country-flag-medium": size === SIZES.MEDIUM,
        },
      )}
    >
      <img
        className="block size-full shrink-0"
        key={code}
        alt={name}
        id={id}
        data-test={dataTest}
        src={src}
        srcSet={srcSet}
        role={role}
      />
      <div className="rounded-50 shadow-country-flag absolute inset-0 block size-full" />
    </div>
  );
};

export default CountryFlag;
