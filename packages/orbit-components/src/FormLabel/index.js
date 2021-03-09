// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";

const StyledAsterisk = styled.span`
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  color: ${({ theme, filled }) =>
    !filled ? theme.orbit.colorTextError : theme.orbit.colorFormLabelFilled};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel};
  vertical-align: top;
`;

StyledAsterisk.defaultProps = {
  theme: defaultTheme,
};

const FormLabel = styled(({ className, children, required, filled, dataTest, id }) => (
  <span className={className} data-test={dataTest} id={id}>
    {required && (
      <StyledAsterisk aria-hidden="true" filled={filled}>
        *{" "}
      </StyledAsterisk>
    )}
    <span>{children}</span>
  </span>
))`
  display: block;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel};
  color: ${({ theme, filled, disabled }) =>
    !filled || disabled ? theme.orbit.colorFormLabel : theme.orbit.colorFormLabelFilled};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextSmall};
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

FormLabel.defaultProps = {
  theme: defaultTheme,
};

export default FormLabel;
