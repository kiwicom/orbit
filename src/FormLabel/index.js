// @flow
import React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";

const FormLabel = styled(({ className, children }) => (
  <span className={className}>{children}</span>
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
