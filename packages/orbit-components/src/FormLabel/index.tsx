import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import { rtlSpacing } from "../utils/rtl";
import { Props } from "./types";

const StyledAsterisk = styled.span<{ filled?: boolean }>`
  ${({ theme, filled }) => css`
    font-weight: ${theme.orbit.fontWeightBold};
    color: ${!filled ? theme.orbit.colorTextError : theme.orbit.colorFormLabelFilled};
    font-size: ${theme.orbit.fontSizeFormLabel};
    vertical-align: top;
  `}
`;

StyledAsterisk.defaultProps = {
  theme: defaultTheme,
};

const StyledInputErrorIcWrapper = styled.span`
  ${({ theme }) => css`
    margin: ${rtlSpacing(`0 ${theme.orbit.spaceXXSmall} 0 0`)};
    display: inline-flex;
    align-items: center;
  `};
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
    iconRef,
    inlineLabel,
    labelRef,
  }: Props) => (
    <span
      className={className}
      data-test={dataTest}
      id={id}
      ref={labelRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!inlineLabel && (error || help) && (
        <StyledInputErrorIcWrapper ref={iconRef}>
          {error && <AlertCircle ariaLabel="error" color="critical" size="small" />}
          {!error && help && <InformationCircle ariaLabel="help" color="info" size="small" />}
        </StyledInputErrorIcWrapper>
      )}

      {required && !error && (
        <StyledAsterisk aria-hidden="true" filled={filled}>
          *
        </StyledAsterisk>
      )}
      <span>{children}</span>
    </span>
  ),
)`
  ${({ theme, filled, disabled }) => css`
    display: inline-flex;
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeFormLabel};
    font-weight: ${theme.orbit.fontWeightMedium};
    color: ${!filled || disabled ? theme.orbit.colorFormLabel : theme.orbit.colorFormLabelFilled};
    line-height: ${theme.orbit.lineHeightTextSmall};
    margin-bottom: ${theme.orbit.spaceXXSmall};
  `}
`;

FormLabel.defaultProps = {
  theme: defaultTheme,
};

export default FormLabel;
export { Props };
