import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { baseURL } from "./consts";
import { Props } from "./index.d";

const baseSize = 52;

const getURL = (name: string) => (size = 1) => {
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

export const StyledFeatureIcon = styled(({ className, name, alt, dataTest, id }) => (
  <img className={className} alt={alt} data-test={dataTest} id={id} {...generateURL(name)} />
))`
  height: ${baseSize}px;
  width: auto;
  background-color: transparent;
`;

StyledFeatureIcon.defaultProps = {
  theme: defaultTheme,
};

const FeatureIcon = ({ alt = "", name, dataTest, id }: Props) => (
  <StyledFeatureIcon alt={alt} name={name} dataTest={dataTest} id={id} />
);

export default FeatureIcon;
