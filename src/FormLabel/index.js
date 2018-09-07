// @flow
import React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";

const StyledAsterisk = styled.span`
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  color: ${({ theme, filled }) =>
    !filled ? theme.orbit.colorTextError : theme.orbit.colorFormLabelFilled};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel}
  vertical-align: top;
`;

StyledAsterisk.defaultProps = {
  theme: defaultTokens,
};

const FormLabel = styled(({ className, children, required, filled }) => (
  <span className={className}>
    {required && <StyledAsterisk filled={filled}>* </StyledAsterisk>}
    {children}
  </span>
))`
  display: block;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel};
  color: ${({ theme, filled, disabled }) =>
    !filled || disabled ? theme.orbit.colorFormLabel : theme.orbit.colorFormLabelFilled};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

FormLabel.defaultProps = {
  theme: defaultTokens,
};

export default FormLabel;
