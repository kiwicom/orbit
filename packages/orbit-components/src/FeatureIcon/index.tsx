"use client";

import * as React from "react";

import { baseURL } from "./consts";
import type { Props } from "./types";

const baseSize = 52;
const heightClass = `h-[${baseSize}px]`;

const getURL =
  (name: string) =>
  (size = 1) => {
    const url = `${baseURL}/feature-icons/${baseSize * size}x${baseSize * size}/${name}.png`;
    if (size > 1) {
      return `${url} ${size}x`;
    }
    return url;
  };

const generateURL = (name: string) => {
  const urlWithName = getURL(name);
  return { src: urlWithName(), srcSet: [urlWithName(2), urlWithName(3)].join(",") };
};

const FeatureIcon = ({ alt = "", name, dataTest, id }: Props) => (
  <img
    className={`${heightClass} w-auto bg-transparent`}
    alt={alt}
    data-test={dataTest}
    id={id}
    {...generateURL(name)}
  />
);

export default FeatureIcon;
