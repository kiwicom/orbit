// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import useClickOutside from "../../hooks/useClickOutside";
import defaultTheme from "../../defaultTheme";

import type { Props } from ".";

export const StyledLabel: any = styled.label`
  display: flex;
  position: relative;
  width: 100%;
`;

export const StyledText: any = styled.div`
  ${({ theme, selected }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;
    max-width: 100%;
    background: ${theme.orbit.paletteWhite};
    color: ${theme.orbit.paletteInkNormal};
    border: 0;
    padding: 11px 12px;
    color: ${theme.orbit.paletteInkLight};
    font-family: ${theme.orbit.fontFamily};
    font-weight: ${theme.orbit.fontWeightMedium};
    font-size: ${theme.orbit.fontSizeTextNormal};
    cursor: pointer;
    transition: color ${theme.orbit.durationFast} ease-in-out;
    width: 100%;
    box-shadow: ${selected
      ? `0 0 0 2px ${theme.orbit.paletteBlueNormal}`
      : `0 0 0 1px ${theme.orbit.paletteCloudDark}`};

    &:hover {
      color: ${theme.orbit.paletteInkNormal};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledText.defaultProps = {
  theme: defaultTheme,
};

const StyledInput = styled.input`
  ${({ theme }) => css`
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    border: 0;
    overflow: hidden;
    white-space: nowrap;
    padding: 0;
    position: absolute;
    width: 1px;

    &:checked + div,
    &:focus + div {
      z-index: 10;
      border-radius: 5px !important;
      color: ${theme.orbit.paletteInkNormal};
      outline: 1px solid Highlight;
      outline: 1px solid -webkit-focus-ring-color;
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInput.defaultProps = {
  theme: defaultTheme,
};

const SwitchSegment = ({
  value,
  label,
  disabled,
  onChange,
  setTooltipShown,
  onFocus,
  defaultChecked,
  name,
}: Props): React.Node => {
  const ref = React.useRef(null);
  useClickOutside(ref, () => setTooltipShown(false));

  return (
    <StyledLabel>
      <StyledInput
        name={name || "switch-segment"}
        defaultChecked={defaultChecked}
        type="radio"
        ref={ref}
        onChange={onChange}
        onFocus={onFocus}
        disabled={disabled}
        value={value}
      />
      <StyledText>{label}</StyledText>
    </StyledLabel>
  );
};

export default SwitchSegment;
