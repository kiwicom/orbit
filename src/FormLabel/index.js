// @flow
import React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";

const FormLabel = styled(({ className, children }) => (
  <span className={className}>{children}</span>
))`
  display: block;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeLabelForm};
  color: ${({ theme, filled, disabled }) =>
    !filled || disabled ? theme.orbit.colorLabelForm : theme.orbit.colorLabelFormFilled};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

FormLabel.defaultProps = {
  theme: defaultTokens,
};

export default FormLabel;
