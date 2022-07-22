import React from "react";
import styled from "styled-components";
import { warning } from "@adeira/js";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import defaultTheme, { Theme } from "../defaultTheme";
import { baseURL, CODES, SIZES, TOKENS } from "./consts";
import { Props, Size } from "./types";

const getSizeToken = (name: string) => ({ theme, size }: { theme: Theme; size: Size }) => {
  const tokens = {
    [TOKENS.WIDTH]: {
      [SIZES.SMALL]: "16px",
      [SIZES.MEDIUM]: theme.orbit.widthCountryFlag,
    },
    [TOKENS.HEIGHT]: {
      [SIZES.SMALL]: "9px",
      [SIZES.MEDIUM]: "13px",
    },
  };
  return tokens[name][size];
};

const StyledCountryFlag = styled.div<{ size: Size }>`
  position: relative;
  height: ${getSizeToken(TOKENS.HEIGHT)};
  width: ${getSizeToken(TOKENS.WIDTH)};
  background-color: ${({ theme }) => theme.orbit.backgroundCountryFlag};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
  overflow: hidden;
  flex-shrink: 0;
`;

StyledCountryFlag.defaultProps = {
  theme: defaultTheme,
};

export const StyledImage: any = styled.img.attrs<{ size: Size; code: string }>(
  ({ theme, size, code }: { theme: Theme; size: Size; code: string }) => {
    const width = parseInt(getSizeToken(TOKENS.WIDTH)({ theme, size }), 10);
    return {
      src: `${baseURL}/flags/${width}x0/flag-${code.toLowerCase()}.jpg`,
      srcSet: `${baseURL}/flags/${width * 2}x0/flag-${code.toLowerCase()}.jpg 2x`,
    };
  },
)`
  display: block;
  height: 100%;
  width: 100%;
  flex-shrink: 0;
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
  box-shadow: inset 0 0 0 1px ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkDark, 10)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
`;

StyledShadow.defaultProps = {
  theme: defaultTheme,
};

function getCountryProps(code?: string, name?: string) {
  const codeNormalized = code ? code.toUpperCase().replace("-", "_") : "UNDEFINED";
  const countryCodeExists = codeNormalized in CODES;

  warning(countryCodeExists, "Country code not supported: %s", code);
  const countryCode = countryCodeExists ? CODES[codeNormalized] : CODES.UNDEFINED;
  const countryName = countryCode === CODES.UNDEFINED && !name ? "Undefined" : name;
  return { code: countryCode, name: countryName };
}

const CountryFlag = ({ dataTest, size = SIZES.MEDIUM, id, ...props }: Props) => {
  const { code, name } = getCountryProps(props.code, props.name);
  return (
    <StyledCountryFlag size={size}>
      <StyledImage
        key={code}
        alt={name}
        title={name}
        code={code}
        id={id}
        data-test={dataTest}
        size={size}
      />
      <StyledShadow />
    </StyledCountryFlag>
  );
};

export default CountryFlag;
