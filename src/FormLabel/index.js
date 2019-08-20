// @flow
import React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";

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

const StyledInputErrorIcWrapper = styled.span`
  margin-right: ${({ theme }) => theme.orbit.spaceXXSmall};
  display: inline-flex;
`;

StyledInputErrorIcWrapper.defaultProps = {
  theme: defaultTheme,
};

const FormLabel = styled(
  ({
    className,
    children,
    required,
    filled,
    dataTest,
    id,
    error,
    help,
    onMouseEnter,
    onMouseLeave,
    domRef,
  }) => (
    <span ref={domRef} className={className} data-test={dataTest} id={id}>
      {error && (
        <StyledInputErrorIcWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <AlertCircle color="critical" size="small" />
        </StyledInputErrorIcWrapper>
      )}
      {!error && help && (
        <StyledInputErrorIcWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <InformationCircle color="secondary" size="small" />
        </StyledInputErrorIcWrapper>
      )}
      {required && (
        <StyledAsterisk aria-hidden="true" filled={filled}>
          *{" "}
        </StyledAsterisk>
      )}
      <span>{children}</span>
    </span>
  ),
)`
  display: flex;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel};
  color: ${({ theme, filled, disabled }) =>
    !filled || disabled ? theme.orbit.colorFormLabel : theme.orbit.colorFormLabelFilled};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

FormLabel.defaultProps = {
  theme: defaultTheme,
};

export default FormLabel;
