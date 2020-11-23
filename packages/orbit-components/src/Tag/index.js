// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { rtlSpacing, left } from "../utils/rtl";
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

const getBackgroundColor = state => ({ selected, removable, theme }) => {
  const states = {
    [STATES.DEFAULT]:
      // eslint-disable-next-line no-nested-ternary
      removable && !selected
        ? theme.orbit.paletteBlueNormal
        : selected
        ? theme.orbit.paletteBlueLight
        : theme.orbit.paletteCloudDark,
    [STATES.HOVER]:
      // eslint-disable-next-line no-nested-ternary
      removable && !selected
        ? theme.orbit.paletteBlueNormalHover
        : selected
        ? theme.orbit.paletteBlueLightHover
        : theme.orbit.paletteCloudNormalHover,
    [STATES.ACTIVE]:
      // eslint-disable-next-line no-nested-ternary
      removable && !selected
        ? theme.orbit.paletteBlueNormalActive
        : selected
        ? theme.orbit.paletteBlueLightActive
        : theme.orbit.paletteCloudNormalHover,
  };
  return states[state];
};

const CloseContainer = styled.div`
  display: flex;
  margin-${left}: 8px;
  opacity: 0.25;
  color: ${({ theme, selected, removable }) =>
    // eslint-disable-next-line no-nested-ternary
    removable && !selected
      ? theme.orbit.paletteWhite
      : selected
      ? theme.orbit.paletteBlueDarker
      : theme.orbit.paletteInkLight};
  cursor: ${({ actionable }) => actionable && `pointer`};
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:hover {
    color: ${({ theme, selected }) =>
      selected ? theme.orbit.paletteBlueDarker : theme.orbit.paletteWhite};
  }

  &:active {
    color: ${({ theme, selected }) =>
      selected ? theme.orbit.paletteBlueDarker : theme.orbit.paletteWhite};
  }
`;

CloseContainer.defaultProps = {
  theme: defaultTheme,
};

export const StyledTag = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ theme, selected, removable }) =>
    // eslint-disable-next-line no-nested-ternary
    removable && !selected
      ? theme.orbit.paletteWhite
      : selected
      ? theme.orbit.paletteBlueDarker
      : theme.orbit.colorTextTag};
  background: ${getBackgroundColor(STATES.DEFAULT)};
  display: inline-flex;

  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: ${getFontSize};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  padding: ${({ theme }) => rtlSpacing(theme.orbit.paddingTag)};
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    background ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:focus {
    outline: 0;
  }

  ${({ actionable }) =>
    actionable &&
    css`
      cursor: pointer;

      &:hover {
        background: ${getBackgroundColor(STATES.HOVER)};
        ${CloseContainer} {
          opacity: 0.5;
        }
        box-shadow: none;
      }

      &:active {
        ${CloseContainer} {
          opacity: 1;
        }
        background: ${getBackgroundColor(STATES.ACTIVE)};
        box-shadow: none;
      }

      &:focus {
        ${CloseContainer} {
          opacity: 1;
        }
        background: ${getBackgroundColor(STATES.HOVER)};
        box-shadow: none;
        outline: 0;
      }
    `};
`;

StyledTag.defaultProps = {
  theme: defaultTheme,
};

const StyledClose = styled.div`
  display: flex;
  border-radius: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${({ theme, selected, removable }) =>
        selected && !removable ? theme.orbit.paletteBlueDarker : theme.orbit.paletteWhite};
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
  const { selected, children, size = SIZES.NORMAL, onClick, onRemove, dataTest } = props;

  return (
    <StyledTag
      actionable={onClick || onRemove}
      data-test={dataTest}
      size={size}
      onClick={onClick}
      removable={!!onRemove}
      selected={selected}
      tabIndex={(onClick || onRemove) && "0"}
      role="button"
      onKeyDown={ev => buttonClickEmulation(ev, onClick)}
    >
      {children}
      {!!onRemove && (
        <CloseContainer
          selected={selected}
          removable={!!onRemove}
          onClick={ev => {
            ev.stopPropagation();
            if (onRemove) onRemove();
          }}
        >
          <StyledClose
            tabIndex="0"
            aria-label="close"
            selected={selected}
            aria-label="close"
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
