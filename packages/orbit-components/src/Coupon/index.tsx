import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { Props } from "./types";

const StyledCoupon = styled.mark`
  ${({ theme }) => css`
    display: inline;
    background: none;
    font-size: ${theme.orbit.fontSizeTextSmall};
    letter-spacing: 0.75px;
    text-transform: uppercase;
    border: 1px dashed ${theme.orbit.paletteCloudDarker};
    padding: 2px ${theme.orbit.spaceXXSmall};
    line-height: inherit;
    font-weight: ${theme.orbit.fontWeightMedium};
    border-radius: ${theme.orbit.borderRadiusNormal};
    color: ${theme.orbit.paletteInkDark};
  `}
`;

StyledCoupon.defaultProps = {
  theme: defaultTheme,
};

const Coupon = ({ children, dataTest, id }: Props) => (
  <StyledCoupon data-test={dataTest} id={id}>
    {children}
  </StyledCoupon>
);

export default Coupon;
export { Props };
