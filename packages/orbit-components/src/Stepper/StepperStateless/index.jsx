// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../../utils/mediaQuery";
import Minus from "../../icons/Minus";
import Plus from "../../icons/Plus";
import defaultTheme from "../../defaultTheme";
import Button from "../../primitives/ButtonPrimitive";
import useTheme from "../../hooks/useTheme";

import type { StateLessProps } from ".";

const getMaxWidth = ({ maxWidth }) => {
  if (typeof maxWidth === "string") return maxWidth;
  return `${parseInt(maxWidth, 10)}px`;
};

const StyledStepper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${getMaxWidth};
  flex: 1 1 auto;
`;

const iconMixin = css`
  ${({ theme, isActive, isDisabled }) => css`
    padding: 2px;
    height: 20px;
    width: 20px;
    background: ${isActive ? theme.orbit.paletteBlueNormal : theme.orbit.paletteCloudDark};
    border-radius: ${theme.orbit.borderRadiusCircle};
    ${mq.desktop(css`
      height: 16px;
      width: 16px;
    `)};

    ${!isDisabled &&
    css`
      &:hover {
        background: ${isActive
          ? theme.orbit.paletteBlueNormalHover
          : theme.orbit.paletteCloudNormalHover};
      }

      &:focus,
      &:active {
        box-shadow: inset 0 0 0 2px
          ${isActive ? theme.orbit.paletteBlueLightActive : theme.orbit.paletteCloudNormalActive};
      }
    `};
  `}
`;

const StyledMinusIcon = styled(Minus)`
  ${iconMixin};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledMinusIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledPlusIcon = styled(Plus)`
  ${iconMixin};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPlusIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledStepperInput = styled.input`
  ${({ theme, disabled }) => css`
    width: 100%;
    height: 44px;
    padding: 0;
    border: 0;
    font-size: ${theme.orbit.fontSizeTextLarge};
    font-weight: ${theme.orbit.fontWeightMedium};
    color: ${theme.orbit.paletteInkNormal};
    text-align: center;
    min-width: 0;
    opacity: ${disabled ? "0.5" : "1"};
    background-color: ${disabled && "transparent"};

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledStepperInput.defaultProps = {
  theme: defaultTheme,
};

const StepperStateless = ({
  maxWidth = "120px",
  disabled,
  dataTest,
  id,
  value,
  active,
  name,
  minValue,
  maxValue,
  onKeyDown,
  onBlur,
  onFocus,
  onIncrement,
  onDecrement,
  titleIncrement,
  titleDecrement,
  disabledIncrement,
  disabledDecrement,
}: StateLessProps): React.Node => {
  const theme = useTheme();

  const commonButtonStyles = {
    background: "transparent",
    width: "44px",
  };

  const iconStyles = {
    foreground: active ? theme.orbit.paletteWhite : theme.orbit.paletteInkNormal,
  };

  const isMinusDisabled =
    disabled || disabledDecrement || (typeof value === "number" && value <= +minValue);
  const isPlusDisabled =
    disabled || disabledIncrement || (typeof value === "number" && value >= +maxValue);

  return (
    <StyledStepper data-test={dataTest} id={id} maxWidth={maxWidth}>
      <Button
        disabled={isMinusDisabled}
        iconLeft={<StyledMinusIcon size="small" isActive={active} isDisabled={isMinusDisabled} />}
        onClick={ev => {
          if (onDecrement && !disabled) {
            onDecrement(ev);
          }
        }}
        title={titleDecrement}
        icons={iconStyles}
        {...commonButtonStyles}
      />
      <StyledStepperInput
        name={name}
        disabled={disabled}
        type="text"
        value={value || 0}
        min={minValue}
        max={maxValue}
        onKeyDown={ev => {
          if (onKeyDown) {
            onKeyDown(ev);
          }
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly
      />
      <Button
        disabled={isPlusDisabled}
        iconLeft={<StyledPlusIcon size="small" isActive={active} isDisabled={isPlusDisabled} />}
        onClick={ev => {
          if (onIncrement && !disabled) {
            onIncrement(ev);
          }
        }}
        title={titleIncrement}
        icons={iconStyles}
        {...commonButtonStyles}
      />
    </StyledStepper>
  );
};

export default StepperStateless;
