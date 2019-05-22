// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";

const StyledHandle = styled(({ left, theme, onTop, ...props }) => <div {...props} />).attrs(
  ({ left, onTop }) => {
    return {
      style: {
        left: `${left.toFixed(2)}px`,
        zIndex: onTop ? 4 : 3,
      },
    };
  },
)`
  display: flex;
  position: absolute;
  flex: 0 0 24px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  box-shadow: 0 1px 4px 0 rgba(127, 145, 168, 0.24);
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  -webkit-tap-highlight-color: transparent;
  :after {
    content: " ";
    display: block;
    width: 8px;
    height: 8px;
    background-color: #00a991;
    border-radius: 8px;
  }
  :focus {
    outline: none;
    box-shadow: 0 1px 4px 0 rgba(127, 145, 168, 0.24), inset 0 0 0 2px #0176d2;
  }
  :active {
    box-shadow: 0 1px 4px 0 rgba(127, 145, 168, 0.24), 0 0 0 4px rgba(0, 169, 145, 0.1);
  }
  :focus:active {
    outline: none;
    box-shadow: 0 1px 4px 0 rgba(127, 145, 168, 0.24), inset 0 0 0 2px #0176d2,
      0 0 0 4px rgba(0, 169, 145, 0.1);
  }
`;

StyledHandle.defaultProps = {
  theme: defaultTheme,
};

const Handle = ({
  tabIndex,
  onMouseDown,
  onFocus,
  onTouchStart,
  valueMax,
  valueMin,
  valueNow,
  label,
  valueText,
  onTop,
  parentWidth,
}) => {
  const left = ((valueNow - valueMin) / (valueMax - valueMin)) * parentWidth;
  return (
    <StyledHandle
      tabIndex={tabIndex}
      onTop={onTop}
      role="slider"
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onTouchStart={onTouchStart}
      aria-valuemax={valueMax}
      aria-valuemin={valueMin}
      aria-valuenow={valueNow}
      aria-label={label}
      aria-valuetext={valueText}
      left={left}
    />
  );
};

export default Handle;
