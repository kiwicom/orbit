// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { rtlSpacing, left, right } from "../utils/rtl";
import CloseCircle from "../icons/CloseCircle";
import { SIZES, STATES } from "./consts";

import type { Props } from "./index";

const getFontSize = ({ theme, size }) => {
  const tokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeTextNormal,
  };

  return tokens[size];
};

const getBackgroundColor = state => ({ selected, theme }) => {
  const states = {
    [STATES.DEFAULT]: selected ? theme.orbit.paletteInkNormal : theme.orbit.paletteCloudLight,
    [STATES.HOVER]: selected
      ? theme.orbit.paletteInkNormalHover
      : theme.orbit.paletteCloudLightHover,
    [STATES.ACTIVE]: selected
      ? theme.orbit.paletteInkNormalActive
      : theme.orbit.paletteCloudLightActive,
  };
  return states[state];
};

const getSpacing = ({ icon, removable }) => {
  const padding =
    (removable && icon && `6px`) ||
    (removable && !icon && `6px 6px 6px 8px`) ||
    (!removable && icon && `6px 8px 6px 6px`) ||
    (!removable && !icon && `6px 8px`);
  return rtlSpacing(padding);
};

const StyledTag = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ theme, selected }) =>
    selected
      ? theme.orbit.paletteCloudNormal
      : theme.orbit.paletteInkNormal}; // TODO: createToken textColorTag, textColorTagSelected
  background: ${getBackgroundColor(STATES.DEFAULT)};
  display: inline-flex;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: ${getFontSize};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: ${({ theme, selected }) =>
    !selected &&
    `inset 0 0 0 1px ${theme.orbit.paletteCloudNormal}`}; // TODO: createToken borderColorTag
  padding: ${getSpacing};
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    background ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:hover {
    background: ${getBackgroundColor(STATES.HOVER)};
    box-shadow: none;
  }

  &:active {
    background: ${getBackgroundColor(STATES.ACTIVE)};
    box-shadow: none;
  }

  &:focus {
    box-shadow: ${({ theme }) =>
      `inset 0 0 0 2px ${
        theme.orbit.paletteBlueNormal
      }`}; // TODO: createToken borderColorTagFocused
    outline: 0;
  }
`;

StyledTag.defaultProps = {
  theme: defaultTokens,
};

const IconContainer = styled.div`
  display: flex;
  margin-${right}: 8px;

  svg {
    height: ${({ theme }) => theme.orbit.widthIconSmall};
    width: ${({ theme }) => theme.orbit.heightIconSmall};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

const CloseContainer = styled.div`
  display: flex;
  margin-${left}: 8px;
  color: ${({ theme }) => theme.orbit.paletteInkLighter};
  cursor: pointer;
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  
  &:hover {
    color: ${({ theme }) => theme.orbit.paletteInkLighterHover};
  }
  &:active {
    color: ${({ theme }) => theme.orbit.paletteInkLighterActive};
  }
`;

CloseContainer.defaultProps = {
  theme: defaultTokens,
};

const Tag = (props: Props) => {
  const { icon, selected, children, size = SIZES.NORMAL, onClick, onRemove, dataTest } = props;

  return (
    <StyledTag
      data-test={dataTest}
      size={size}
      onClick={onClick}
      removable={!!onRemove}
      selected={selected}
      icon={!!icon}
    >
      {icon && <IconContainer>{icon}</IconContainer>}
      {children}
      {(!!onRemove || selected) && (
        <CloseContainer
          onClick={ev => {
            ev.stopPropagation();
            if (onRemove) {
              onRemove();
            }
          }}
        >
          <CloseCircle size="small" />
        </CloseContainer>
      )}
    </StyledTag>
  );
};

export default Tag;
