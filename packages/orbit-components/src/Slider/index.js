// @flow
import * as React from "react";
import styled, { css } from "styled-components";
// import { warning } from "@adeira/js";

import usePrevious from "../hooks/usePrevious";
import useBoundingRect from "../hooks/useBoundingRect";
import useTheme from "../hooks/useTheme";
import transition from "../utils/transition";
import Bar from "./components/Bar";
// import KEY_CODE_MAP from "../common/keyMaps";
import DEFAULT_VALUES from "./consts";
import Histogram from "./components/Histogram";
import defaultTheme from "../defaultTheme";
import mq from "../utils/mediaQuery";
import SliderTexts from "./components/SliderTexts";
import SliderHeading from "./components/SliderHeading";
import Handles from "./components/Handles";
import { sortArray } from "./utils/helpers";
import calculateValueFromPosition from "./utils/calculateValueFromPosition";

import type { Props } from "./index";

const StyledSlider = styled.div`
  position: relative;
`;

StyledSlider.defaultProps = {
  theme: defaultTheme,
};

const StyledSliderContent = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: ${({ theme }) => theme.orbit.spaceXSmall};

  ${mq.tablet(css`
    width: calc(100% + 48px);
    position: absolute;
    bottom: -16px;
    left: -24px;
    right: -24px;
    opacity: 0;
    visibility: hidden;
    padding: 12px 24px 48px 24px;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    transition: ${transition(["all"], "fast", "ease-in-out")};

    background: transparent;
    ${({ focused, theme }) =>
      focused &&
      css`
        visibility: visible;
        opacity: 1;
        background: ${theme.orbit.paletteWhite};
        box-shadow: ${theme.orbit.boxShadowRaised};
      `};
  `)};
`;

StyledSliderContent.defaultProps = {
  theme: defaultTheme,
};

const StyledSliderInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
`;

export default function Slider({
  dataTest,
  defaultValue = DEFAULT_VALUES.VALUE,
  histogramData,
  histogramLoading,
  histogramLoadingText,
  histogramDescription,
  ariaLabel,
  ariaValueText,
  valueDescription,
  label,
  onChange,
  onChangeBefore,
  onChangeAfter,
  step = DEFAULT_VALUES.STEP,
  minValue = DEFAULT_VALUES.MIN,
  maxValue = DEFAULT_VALUES.MAX,
}: Props) {
  const [position, setPosition] = React.useState(defaultValue || DEFAULT_VALUES.MIN);
  const sortedValue = sortArray(position);
  const hasHistogram = histogramLoading || !!histogramData;
  const [{ width: barWidth, left: barLeft, right: barRight }, bar] = useBoundingRect({
    width: 0,
    left: 0,
    right: 0,
  });

  const theme = useTheme();
  const prevPosition = usePrevious(position);

  const handleMouseMove = React.useCallback(
    (e: SyntheticMouseEvent<HTMLDivElement>) => {
      const setLimit = (pos: number) => Math.min(Math.max(pos, minValue), maxValue);
      if (barLeft && barWidth && barRight) {
        const calculateP = calculateValueFromPosition({
          hasHistogram,
          minValue,
          maxValue,
          handleIndex: 0,
          value: position,
          theme,
          barLeft,
          barWidth,
          barRight,
        });

        setPosition(() => setLimit(calculateP({ pageX: e.pageX })));
      }
    },
    [maxValue, minValue, barLeft, barRight, barWidth, hasHistogram, theme, position],
  );

  const handleMouseUp = React.useCallback(() => {
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
    if (onChangeAfter) onChangeAfter(position);
  }, [handleMouseMove, onChangeAfter, position]);

  const handleMouseDown = React.useCallback(
    (e: SyntheticMouseEvent<HTMLDivElement>) => {
      if (barLeft && e.button === 0 && e.buttons !== 2) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        if (onChangeBefore && prevPosition) onChangeBefore(prevPosition);
      }
    },
    [barLeft, handleMouseMove, handleMouseUp, onChangeBefore, prevPosition],
  );

  React.useEffect(() => {
    if (onChange) onChange(position);
  }, [position, onChange]);

  return (
    <StyledSlider data-test={dataTest}>
      <SliderHeading
        hasHistogram={hasHistogram}
        label={label}
        valueDescription={valueDescription}
        histogramDescription={histogramDescription}
      />
      {hasHistogram && (
        <StyledSliderContent>
          <SliderTexts
            valueDescription={valueDescription}
            histogramDescription={histogramDescription}
            label={label}
          />
          <Histogram
            data={histogramData}
            value={sortedValue}
            min={minValue}
            step={step}
            loading={histogramLoading}
            loadingText={histogramLoadingText}
          />
        </StyledSliderContent>
      )}
      <StyledSliderInput>
        <Bar
          ref={bar}
          onMouseDown={handleMouseDown}
          value={sortedValue}
          max={maxValue}
          min={minValue}
          hasHistogram={hasHistogram}
        />
        <Handles
          valueMax={maxValue}
          valueMin={minValue}
          value={position}
          ariaLabel={ariaLabel}
          hasHistogram={hasHistogram}
          onMouseDown={handleMouseDown}
          // onFocus={handleOnFocus}
          ariaValueText={ariaValueText}
        />
      </StyledSliderInput>
    </StyledSlider>
  );
}
