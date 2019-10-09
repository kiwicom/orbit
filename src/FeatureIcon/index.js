// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { baseURL } from "./consts";

import type { Props } from "./index";

const baseSize = 52;

const getURL = name => (size = 1) => {
  const url = `${baseURL}/feature-icons/${baseSize * size}x${baseSize * size}/${name}.png`;
  if (size > 1) {
    return `${url} ${size}x`;
  }
  return url;
};

const generateURL = name => {
  const urlWithName = getURL(name);
  return { src: urlWithName(), srcSet: [urlWithName(2), urlWithName(3)].join(",") };
};

export const StyledFeatureIcon = styled(({ className, name, dataTest }) => (
  <img className={className} alt={name} data-test={dataTest} {...generateURL(name)} />
))`
  height: ${baseSize}px;
  width: auto;
  background-color: transparent;
`;

StyledFeatureIcon.defaultProps = {
  theme: defaultTheme,
};

const FeatureIcon = ({ name, dataTest }: Props) => (
  <StyledFeatureIcon name={name} dataTest={dataTest} />
);

export default FeatureIcon;
