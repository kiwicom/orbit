// @flow
import * as React from "react";
import styled from "styled-components";
import { warning } from "@kiwicom/js";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import defaultTheme from "../defaultTheme";
import { baseURL, CODES } from "./consts";

import type { Props } from "./index";

const StyledCountryFlag = styled.div`
  position: relative;
  height: 13px; // TODO: change token heightCountryFlag
  width: ${({ theme }) => theme.orbit.widthCountryFlag};
  background-color: ${({ theme }) => theme.orbit.backgroundCountryFlag};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
  overflow: hidden;
`;

StyledCountryFlag.defaultProps = {
  theme: defaultTheme,
};

const StyledImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const StyledShadow = styled.div`
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // TODO: create token borderColorCountryFlag
  // TODO: create token borderWidthCountryFlag
  box-shadow: inset 0 0 0 1px ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 10)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
`;

StyledShadow.defaultProps = {
  theme: defaultTheme,
};

export function getCountryProps(code: ?string, name: ?string): { code: string, name: ?string } {
  const codeNormalized = code ? code.toUpperCase().replace("-", "_") : "ANYWHERE";
  const countryCodeExists = codeNormalized in CODES;

  warning(countryCodeExists, "Country code not supported: %s", code);
  const countryCode = countryCodeExists ? CODES[codeNormalized] : CODES.ANYWHERE;
  const countryName = countryCode === CODES.ANYWHERE && !name ? "Anywhere" : name;
  return { code: countryCode, name: countryName };
}

const CountryFlag = (props: Props) => {
  const { dataTest } = props;
  const { code, name } = getCountryProps(props.code, props.name);
  return (
    <StyledCountryFlag>
      <StyledImage
        key={code}
        src={`${baseURL}/flags/24x0/flag-${code.toLowerCase()}.jpg`}
        srcSet={`${baseURL}/flags/48x0/flag-${code.toLowerCase()}.jpg 2x`}
        alt={name}
        title={name}
        data-test={dataTest}
      />
      <StyledShadow />
    </StyledCountryFlag>
  );
};

export default CountryFlag;
