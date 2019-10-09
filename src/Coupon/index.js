// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";

import type { Props } from ".";

const StyledCoupon = styled.span`
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  border: 1px dashed ${({ theme }) => theme.orbit.paletteInkLighter};
  padding: 0 ${({ theme }) => theme.orbit.spaceXXSmall};
  line-height: 24px;
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
`;

StyledCoupon.defaultProps = {
  theme: defaultTheme,
};

const Coupon = ({ children, dataTest }: Props) => (
  <StyledCoupon data-test={dataTest}>{children}</StyledCoupon>
);

export default Coupon;
