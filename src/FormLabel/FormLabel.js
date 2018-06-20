// @flow
import React from "react";
import styled from "styled-components";

const FormLabel = styled(({ className, children }) => (
  <span className={className}>{children}</span>
))`
  display: block;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeLabelForm};
  color: ${({ theme, filled, disabled }) =>
    !filled || disabled ? theme.colorLabelForm : theme.colorLabelFormFilled};
  line-height: ${({ theme }) => theme.lineHeightText};
  margin-bottom: ${({ theme }) => theme.spaceXXSmall};
`;

export default FormLabel;
