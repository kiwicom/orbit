// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";

import type { Props } from ".";

const StyledCoupon = styled.mark`
  display: inline;
  background: none;
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  letter-spacing: 0.75px;
  text-transform: uppercase;
  border: 1px dashed ${({ theme }) => theme.orbit.paletteCloudDark};
  padding: 2px ${({ theme }) => theme.orbit.spaceXXSmall};
  line-height: inherit;
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  color: ${({ theme }) => theme.orbit.paletteInkDark};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCoupon.defaultProps = {
  theme: defaultTheme,
};

const Coupon = ({ children, dataTest, id }: Props): React.Node => (
  <StyledCoupon data-test={dataTest} id={id}>
    {children}
  </StyledCoupon>
);

export default Coupon;
