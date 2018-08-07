// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { baseURL, CODES } from "./consts";

import type { Props } from "./index";

const StyledCountryFlag = styled.img`
  height: auto; // change token heightCountryFlag
  width: 24px; // change token widthCountryFlag
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
  background-color: transparent; // TODO: Use token backgroundCountryFlag
`;

StyledCountryFlag.defaultProps = {
  theme: defaultTokens,
};

const CountryFlag = (props: Props) => {
  const { code = CODES.ANYWHERE, name = "Anywhere" } = props;
  return (
    <StyledCountryFlag
      key={code}
      src={`${baseURL}/flags/24x0/flag-${code}.jpg`}
      srcSet={`${baseURL}/flags/48x0/flag-${code}.jpg 2x`}
      alt={name}
      title={name}
    />
  );
};

export default CountryFlag;
