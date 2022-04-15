// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import { rtlSpacing } from "../utils/rtl";

import type { Props } from ".";

const StyledAsterisk = styled.span`
  ${({ theme, filled }) => css`
    font-weight: ${theme.orbit.fontWeightBold};
    color: ${!filled ? theme.orbit.textCriticalForeground : theme.orbit.formElementLabelFilled};
    font-size: 14px;
    vertical-align: top;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledAsterisk.defaultProps = {
  theme: defaultTheme,
};

const StyledInputErrorIcWrapper = styled.span`
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceOneX} 0 0`)};
  display: inline-flex;
  align-items: center;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInputErrorIcWrapper.defaultProps = {
  theme: defaultTheme,
};

const FormLabel: any = styled(
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
    <span className={className} data-test={dataTest} id={id} ref={labelRef}>
      {!inlineLabel && (error || help) && (
        <StyledInputErrorIcWrapper
          ref={iconRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
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
    display: flex;
    font-family: ${theme.orbit.fontFamily};
    font-size: 14px;
    font-weight: ${theme.orbit.fontWeightMedium};
    color: ${!filled || disabled
      ? theme.orbit.formElementLabelForeground
      : theme.orbit.formElementLabelFilled};
    line-height: ${theme.orbit.lineHeightSmall};
    margin-bottom: ${theme.orbit.spaceOneX};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
FormLabel.defaultProps = {
  theme: defaultTheme,
};

export default FormLabel;
