import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import Circle from "../icons/Circle";
import handleKeyDown from "../utils/handleKeyDown";
import { defaultFocus } from "../utils/common";
import type { Props } from "./types";

const StyledSwitch = styled.label`
  display: inline-block;
`;

const StyledSwitchBase = styled.div<{ checked?: boolean; disabled?: boolean }>`
  ${({ theme, checked, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: ${!disabled && "pointer"};
    width: 40px;
    height: 20px;
    background-color: ${theme.orbit.paletteCloudNormal};
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

const StyledSwitchButton = styled.div<{
  checked?: boolean;
  hasCustomIcon?: boolean;
  disabled?: boolean;
}>`
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
      height: 12px;
      width: 12px;
      color: ${hasCustomIcon ? theme.orbit.paletteInkNormal : theme.orbit.paletteCloudNormal};
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
    ${defaultFocus}
  }
`;

StyledSwitchInput.defaultProps = {
  theme: defaultTheme,
};

StyledSwitchBase.defaultProps = {
  theme: defaultTheme,
};

StyledSwitchButton.defaultProps = {
  theme: defaultTheme,
};

const Switch = React.forwardRef<HTMLInputElement, Props>(
  ({ onChange, checked, dataTest, id, icon, onBlur, onFocus, disabled, ariaLabelledby }, ref) => {
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
            onKeyDown={!disabled ? handleKeyDown<HTMLInputElement>(onChange) : undefined}
            onBlur={!disabled ? onBlur : undefined}
            onChange={!disabled ? onChange : undefined}
            onFocus={!disabled ? onFocus : undefined}
            type="checkbox"
            data-test={dataTest}
            id={id}
          />
          <StyledSwitchButton checked={checked} disabled={disabled} hasCustomIcon={!!icon}>
            {icon || <Circle />}
          </StyledSwitchButton>
        </StyledSwitchBase>
      </StyledSwitch>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
export { Props };
