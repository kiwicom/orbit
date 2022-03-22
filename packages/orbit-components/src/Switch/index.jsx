// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import Circle from "../icons/Circle";
import handleKeyDown from "../utils/handleKeyDown";

import type { Props } from ".";

const StyledSwitch = styled.label`
  display: inline-block;
`;

const StyledCircle = styled(Circle)`
  height: 8px !important;
  width: 8px !important;
`;

const StyledSwitchBase = styled.div`
  ${({ theme, checked, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: ${!disabled && "pointer"};
    width: 40px;
    height: 20px;
    background-color: ${theme.orbit.paletteCloudDarker};
    border-radius: 100px;
    position: relative;
    transition: background-color ${theme.orbit.durationFast};
    opacity: ${disabled && "0.5"};

    ${checked &&
    css`
      background-color: ${theme.orbit.paletteBlueNormal};
    `};
  `};
`;

const StyledSwitchButton = styled.div`
  ${({ theme, checked, hasCustomIcon, disabled }) => css`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -3px;
    width: 24px;
    height: 24px;
    border-radius: ${theme.orbit.borderRadiusCircle};
    background: ${theme.orbit.paletteWhite};
    transition: ${theme.orbit.durationFast};
    box-shadow: inset 0 0 1px 0 rgba(7, 64, 92, 0.1), ${theme.orbit.boxShadowAction};

    &:active {
      box-shadow: ${!disabled && theme.orbit.boxShadowActionActive};
    }

    svg {
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.heightIconSmall};
      color: ${hasCustomIcon ? theme.orbit.paletteInkLight : theme.orbit.paletteCloudDarker};
    }

    ${checked &&
    css`
      left: calc(100% + 2px);
      transform: translateX(-100%);
      svg {
        color: ${theme.orbit.paletteBlueNormal};
      }
    `};
  `};
`;

const StyledSwitchInput = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;

  &:focus + ${StyledSwitchButton} {
    box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 2px;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSwitchInput.defaultProps = {
  theme: defaultTheme,
};

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSwitchBase.defaultProps = {
  theme: defaultTheme,
};

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSwitchButton.defaultProps = {
  theme: defaultTheme,
};

const Switch: React.AbstractComponent<Props, HTMLInputElement> = React.forwardRef<
  Props,
  HTMLInputElement,
>(({ onChange, checked, dataTest, icon, onBlur, onFocus, disabled, ariaLabelledby }, ref) => {
  return (
    <StyledSwitch>
      <StyledSwitchBase checked={checked} disabled={disabled}>
        <StyledSwitchInput
          ref={ref}
          checked={checked}
          disabled={disabled}
          aria-checked={checked}
          role="switch"
          aria-labelledby={ariaLabelledby}
          // $FlowFixMe: fix the type of handleKeyDown
          onKeyDown={!disabled ? handleKeyDown(onChange) : undefined}
          onBlur={!disabled ? onBlur : undefined}
          onChange={!disabled ? onChange : undefined}
          onFocus={!disabled ? onFocus : undefined}
          type="checkbox"
          data-test={dataTest}
        />
        <StyledSwitchButton checked={checked} disabled={disabled} hasCustomIcon={!!icon}>
          {icon || <StyledCircle />}
        </StyledSwitchButton>
      </StyledSwitchBase>
    </StyledSwitch>
  );
});

Switch.displayName = "Switch";

export default Switch;
