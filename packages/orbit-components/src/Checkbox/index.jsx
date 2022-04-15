// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import { transparentColor } from "@kiwicom/orbit-design-tokens";

import defaultTheme from "../defaultTheme";
import TOKENS from "./consts";
import Check from "../icons/Check";
import { StyledText } from "../Text";
import { rtlSpacing } from "../utils/rtl";
import getFieldDataState from "../common/getFieldDataState";
import cloneWithTooltip from "../utils/cloneWithTooltip";
import media from "../utils/mediaQuery";

import type { Props } from ".";

const getToken = name => ({ theme, hasError, disabled, checked }) => {
  const resolveBorderColor = () => {
    if (disabled) {
      return theme.orbit.paletteCloudDarker;
    }
    if (checked) {
      return theme.orbit.paletteBlueNormal;
    }
    if (hasError && !disabled && !checked) {
      return theme.orbit.formElementBorderColorError;
    }

    return theme.orbit.formElementBorderColor;
  };

  const getBackground = () => {
    if (disabled && checked) {
      return theme.orbit.paletteCloudDarker;
    }
    if (disabled && !checked) {
      return theme.orbit.paletteCloudNormal;
    }
    return checked ? theme.orbit.paletteBlueNormal : theme.orbit.formElementBackground;
  };

  const tokens = {
    [TOKENS.background]: getBackground(),
    [TOKENS.borderColor]: resolveBorderColor(),
  };

  return tokens[name];
};

const IconContainer = styled.div`
  ${({ theme, checked }) => css`
    position: relative;
    box-sizing: border-box;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${getToken(TOKENS.background)};
    height: ${theme.orbit.iconSmallSize};
    width: ${theme.orbit.iconSmallSize};
    border-radius: ${theme.orbit.borderRadiusLarge};
    transform: scale(1);
    transition: all ${theme.orbit.durationFast} ease-in-out;

    & > svg {
      visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
    }

    &:hover {
      background-color: ${checked
        ? theme.orbit.paletteBlueDark
        : theme.orbit.formElementBackground};
    }

    ${media.desktop(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IconContainer.defaultProps = {
  theme: defaultTheme,
};

const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceTwoX}`)};
    flex: 1; // IE wrapping fix
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
TextContainer.defaultProps = {
  theme: defaultTheme,
};

const Info = styled.span`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.orbit.textSecondaryForeground};
    line-height: ${theme.orbit.lineHeightSmall};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Info.defaultProps = {
  theme: defaultTheme,
};

const LabelText = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-weight: ${theme.orbit.fontWeightNormal};
    font-size: 14px;
    color: ${theme.orbit.formElementLabelForeground};
    line-height: ${theme.orbit.iconSmallSize};

    ${StyledText} {
      font-weight: ${theme.orbit.fontWeightNormal};
      font-size: 14px;
      color: ${theme.orbit.formElementLabelForeground};
      line-height: ${theme.orbit.iconSmallSize};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
LabelText.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input`
  ${({ theme, error }) => css`
    opacity: 0;
    z-index: -1;
    position: absolute;

    &:checked ~ ${TextContainer} > ${LabelText} {
      font-weight: ${theme.orbit.fontWeightMedium};
      & > ${StyledText} {
        font-weight: ${theme.orbit.fontWeightMedium};
      }
    }

    &:checked + ${IconContainer} > svg {
      visibility: visible;
    }

    &:focus + ${IconContainer} {
      border: ${`1px solid ${
        error ? theme.orbit.paletteRedNormal : theme.orbit.formElementBorderColorFocus
      }`};
      box-shadow: 0 0 0 3px
        ${transparentColor(
          error ? theme.orbit.paletteRedNormal : theme.orbit.formElementBorderColorFocus,
          15,
        )};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Input.defaultProps = {
  theme: defaultTheme,
};

export const Label: any = styled(({ className, children, dataTest }) => (
  <label className={className} data-test={dataTest}>
    {children}
  </label>
))`
  ${({ theme, disabled, checked }) => css`
    font-family: ${theme.orbit.fontFamily};
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: self-start;
    opacity: ${disabled ? theme.orbit.formElementDisabledOpacity : "1"};
    cursor: ${disabled ? "not-allowed" : "pointer"};
    position: relative;

    ${IconContainer} {
      border: 1px solid ${getToken(TOKENS.borderColor)};
    }

    &:hover ${IconContainer} {
      border-color: ${!disabled && checked
        ? theme.orbit.paletteBlueDark
        : theme.orbit.paletteBlueLightTertiary};
      box-shadow: none;
    }

    &:active ${IconContainer} {
      border-color: ${disabled ? getToken(TOKENS.borderColor) : theme.orbit.paletteBlueNormal};
      // TODO: we can get rid of it completely, there won't be token replacement
      transform: ${!disabled && `scale(0.95)`};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Label.defaultProps = {
  theme: defaultTheme,
};

const Checkbox: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<Props, HTMLElement>(
  (props, ref) => {
    const {
      label,
      value,
      hasError = false,
      disabled = false,
      checked = false,
      name,
      onChange,
      dataTest,
      info,
      readOnly,
      tabIndex,
      tooltip,
    } = props;

    const preventOnClick = React.useCallback(ev => {
      ev.preventDefault();
    }, []);
    return (
      <Label disabled={disabled} hasError={hasError} checked={checked}>
        <Input
          data-test={dataTest}
          data-state={getFieldDataState(!!hasError)}
          value={value}
          type="checkbox"
          disabled={disabled}
          name={name}
          tabIndex={tabIndex}
          checked={checked}
          onChange={onChange}
          ref={ref}
          readOnly={readOnly}
          error={hasError}
        />
        {cloneWithTooltip(
          tooltip,
          <IconContainer
            disabled={disabled}
            checked={checked}
            onClick={readOnly ? preventOnClick : null}
          >
            <Check customColor="white" />
          </IconContainer>,
        )}
        {(label || info) && (
          <TextContainer>
            {label && <LabelText>{label}</LabelText>}
            {info && <Info>{info}</Info>}
          </TextContainer>
        )}
      </Label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
