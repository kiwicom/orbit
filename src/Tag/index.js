// @flow
import * as React from "react";
import styled from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import defaultTheme from "../defaultTheme";
import { rtlSpacing, left, right } from "../utils/rtl";
import CloseCircle from "../icons/CloseCircle";
import { SIZES, STATES } from "./consts";
import KEY_CODE_MAP from "../common/keyMaps";

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
    [STATES.DEFAULT]: selected ? theme.orbit.backgroundTagSelected : theme.orbit.backgroundTag,
    [STATES.HOVER]: selected
      ? theme.orbit.backgroundTagSelectedHover
      : theme.orbit.backgroundTagHover,
    [STATES.ACTIVE]: selected
      ? theme.orbit.backgroundTagSelectedActive
      : theme.orbit.backgroundTagActive,
  };
  return states[state];
};

const getSpacing = ({ icon, removable, theme }) => {
  const padding =
    (removable && icon && theme.orbit.paddingTagRemovableWithIcon) ||
    (removable && !icon && theme.orbit.paddingTagRemovable) ||
    (!removable && icon && theme.orbit.paddingTagWithIcon) ||
    (!removable && !icon && theme.orbit.paddingTag);
  return rtlSpacing(padding);
};

export const StyledTag = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ theme, selected }) =>
    selected ? theme.orbit.colorTextTagSelected : theme.orbit.colorTextTag};
  background: ${getBackgroundColor(STATES.DEFAULT)};
  display: inline-flex;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: ${getFontSize};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};

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
    box-shadow: ${({ theme, selected }) =>
      ` 0 0 0 3px ${
        selected
          ? convertHexToRgba(theme.orbit.paletteInkLighter, 100)
          : theme.orbit.paletteCloudNormalHover
      }`};
    outline: 0;
  }
`;

StyledTag.defaultProps = {
  theme: defaultTheme,
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
  theme: defaultTheme,
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
  theme: defaultTheme,
};

const StyledClose = styled.div`
  display: flex;
  border-radius: 100%;

  &:focus {
    outline: none;
    box-shadow: 0px 0 0px 2px ${({ theme }) => theme.orbit.paletteInkLighter};
  }
`;
StyledClose.defaultProps = {
  theme: defaultTheme,
};

const buttonClickEmulation = (ev, callback) => {
  if (ev && ev.keyCode === KEY_CODE_MAP.SPACE) {
    ev.preventDefault();
    if (callback) callback();
  } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
    if (callback) callback();
  }
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
      tabIndex="0"
      role="button"
      onKeyDown={ev => buttonClickEmulation(ev, onClick)}
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
          <StyledClose
            tabIndex="0"
            role="button"
            onKeyDown={ev => {
              ev.stopPropagation();
              buttonClickEmulation(ev, onRemove);
            }}
          >
            <CloseCircle size="small" />
          </StyledClose>
        </CloseContainer>
      )}
    </StyledTag>
  );
};

export default Tag;
