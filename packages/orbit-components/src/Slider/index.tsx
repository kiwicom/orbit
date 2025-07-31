"use client";

import * as React from "react";
import cx from "clsx";

import Text from "../Text";
import Heading from "../Heading";
import Stack from "../Stack";
import Hide from "../Hide";
import Handle from "./components/Handle";
import Bar from "./components/Bar";
import DEFAULT_VALUES from "./consts";
import Histogram from "./components/Histogram";
import type { Props, Value } from "./types";
import {
  sortArray,
  findClosestKey,
  pauseEvent,
  stopPropagation,
  constrainRangeValue,
  alignValue,
  injectCallbackAndSetState,
  moveValueByExtraStep,
  calculateValueFromPosition,
  isNotEqual,
} from "./utils";
import useTheme from "../hooks/useTheme";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Slider
 *
 * To implement Slider component into your project you'll need to add the import:
 *
 * ```jsx
 * import Slider from "@kiwicom/orbit-components/lib/Slider";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Slider defaultValue={5} onChange={value => doSomething(value)} />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Slider component.
 *
 * | Name                 | Type                       | Default | Description                                                                                                                                            |
 * | :------------------- | :------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | ariaLabel            | `string or string[]`       |         | `aria-label` attribute or attributes for handles. See [functional specs](#functional-specs).                                                           |
 * | ariaValueText        | `string`                   |         | Readable text alternative of current value. See [Accessibility](/components/slider/accessibility/).                                                    |
 * | dataTest             | `string`                   |         | Optional prop for testing purposes.                                                                                                                    |
 * | id                   | `string`                   |         | Set `id` for `Slider`                                                                                                                                  |
 * | defaultValue         | [`Value`](#value)          | `1`     | Initial value of the Slider when it mounts. See [value type](#value) for advanced usage.                                                               |
 * | histogramData        | `number[]`                 |         | Property for passing the histogram's data. See [Histogram](#histogram) for more info.                                                                  |
 * | histogramDescription | `Translation`              |         | Text property where you should display the total count of displayed data. See [Histogram](#histogram) for more info.                                   |
 * | histogramLoading     | `boolean`                  | `false` | If `true` the Loading component will replace the Histogram. See [Histogram](#histogram) for more info.                                                 |
 * | histogramLoadingText | `Translation`              |         | The text of the Histogram when it's loading. See [Histogram](#histogram) for more info.                                                                |
 * | label                | `Translation`              |         | The label of the Slider. Should communicate what is the purpose of it.                                                                                 |
 * | maxValue             | `number`                   | `100`   | The maximum value of the Slider.                                                                                                                       |
 * | minValue             | `number`                   | `1`     | The minimum value of the Slider.                                                                                                                       |
 * | onChange             | `Value => void \| Promise` |         | Callback for handling onChange event. See [functional specs](#functional-specs) for advanced usage.                                                    |
 * | onChangeAfter        | `Value => void \| Promise` |         | Calback for handling onChangeAfter event. See [functional specs](#functional-specs) for advanced usage.                                                |
 * | onChangeBefore       | `Value => void \| Promise` |         | Callback for handling onChangeBefore event. See [functional specs](#functional-specs) for advanced usage.                                              |
 * | step                 | `number`                   | `1`     | Value that should be added or subtracted when Handle moves. The `maxValue` and `minValue` should be divisible by this number and it should be integer. |
 * | valueDescription     | `Translation`              |         | Text property where you should display the selected value range.                                                                                       |
 *
 * ## Value
 *
 * The `Slider` component supports usage with one handle and also with multiple handles.
 *
 * If you want to use `Slider` with range possibility, just simply pass array of numbers to the `defaultValue` property, for instance `[1, 12]`.
 * The exact same type will be then returned with all callbacks. e.g.:
 *
 * ```jsx
 * <Slider
 *   defaultValue={[1, 12]}
 *   onChange={value => {
 *     console.log(value); // [X, Y]
 *   }}
 * />
 * ```
 *
 * ## Histogram
 *
 * - If you need to use `Slider` component together with `Histogram`, use property `histogramData` for that.
 * - You need pass the same amount of data that is possible to select by definition of `minValue`, `maxValue` and `step` property. The total count of columns should be `(maxValue - minValue + step) / step`.
 * - The Histogram won't be visible on desktop devices until the user focuses one of the handles. On mobile devices is the Histogram always shown.
 * - By default, the `histogramLoadingText` is null and only glyph of `inlineLoader` will appear.
 * - With Histogram, it's recommended to use also `histogramDescription` property, where you should display the total count of selected data from the array. For it, you can use the [`calculateCountOf`](#calculatecountof) function.
 *
 * ## Functional specs
 *
 * - When you use range type of the `Slider` component, you should specify `ariaLabel` property as array of labels. For instance: `["First handle", "Second handle]`. If you use simple `Slider`, just one string (not array) is enough.
 * - In every case of using the `Slider` component on **mobile devices**, the `Slider` should be wrapped in the **Popover**. For instance like this:
 *
 * ```jsx
 * const MobileSlider = () => {
 *   const [value, setValue] = React.useState([1, 24]);
 *   return (
 *     <Popover
 *       content={
 *         <Slider defaultValue={[1, 24]} minValue={1} maxValue={24} onChange={val => setValue(val)} />
 *       }
 *     >
 *       <Tag selected={!!value}>Time of departure</Tag>
 *     </Popover>
 *   );
 * };
 * ```
 *
 * ## calculateCountOf
 *
 * Function `calculateCountOf` will help you to count the total number of selected data and total number of all columns. You can then use these returned values for displaying the `histogramDescription` property to the user, properly.
 *
 * For using it, you can use this reference:
 *
 * ```jsx
 * import calculateCountOf from "@kiwicom/orbit-components/lib/Slider/utils/calculateCountOf";
 *
 * const histogramData = [0, 10, 14, 40, 0, 11];
 * const value = [1, 3]; // can be just number also
 * const minValue = 1;
 * const [selectedCount, totalCount] = calculateCountOf(histogramData, value, minValue);
 *
 * console.log(`Showing ${selectedCount} of ${totalCount}`); // Showing 24 of 75 flights
 * ```
 *
 * ## Data-test
 *
 * There is a `dataTest` prop for ability to test the component. There are also hardcoded `data-test` attribute on handlers in format `SliderHandle-${index}` where index starts from `0`.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Slider component has been designed with accessibility in mind, providing range selection functionality that is fully keyboard accessible and screen reader compatible. It automatically implements proper ARIA attributes and supports both single value and range selections.
 *
 * ### Accessibility Props
 *
 * **Slider props:**
 *
 * | Name          | Type                   | Description                                                                                                                                                               |
 * | :------------ | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | ariaLabel     | `string` or `string[]` | Specifies the accessible name for slider handles. For single sliders, use a string. For range sliders, use an array with labels for each handle (e.g., `["From", "To"]`). |
 * | ariaValueText | `string`               | Provides readable text alternative of current value. Use when the numeric value doesn't accurately represent the meaning (e.g., time ranges like "00:00 to 13:00").       |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages ARIA attributes:
 *   - `aria-valuemax` is automatically set to the `maxValue` prop
 *   - `aria-valuemin` is automatically set to the `minValue` prop
 *   - `aria-valuenow` is automatically set to the current slider value
 *   - `role="slider"` is applied to each handle
 * - Focus management is handled automatically:
 *   - Each handle is keyboard focusable with `tabIndex={0}`
 *   - Focus indicators are clearly visible
 * - State management is handled automatically:
 *   - Current value is announced to screen readers when changed
 *   - Range boundaries are communicated through ARIA attributes
 *
 * ### Keyboard Navigation
 *
 * The Slider component supports the following keyboard interactions:
 *
 * - **Arrow Up/Right:** Increases the value by one step
 * - **Arrow Down/Left:** Decreases the value by one step
 * - **Home:** Sets the handle to the minimum value
 * - **End:** Sets the handle to the maximum value
 * - **Tab:** Moves focus to the next handle (in range sliders) or next focusable element
 * - **Shift + Tab:** Moves focus to the previous handle or focusable element
 *
 * ### Best Practices
 *
 * - Always provide `ariaLabel` to ensure handles have accessible names, especially important for Storybook accessibility compliance
 * - For range sliders, use descriptive labels like `["Departure time", "Arrival time"]` rather than generic terms
 * - Use `ariaValueText` when the numeric value doesn't represent the actual meaning:
 *   - Time ranges: `"00:00 to 13:00"`
 *   - Price ranges: `"$50 to $200"`
 *   - Percentage ranges: `"25% to 75%"`
 * - When using histograms, ensure the visual information is also available through `histogramDescription` for screen reader users
 *
 * ### Examples
 *
 * #### Basic Slider with Accessibility
 *
 * ```jsx
 * <Slider
 *   label="Departure time"
 *   defaultValue={12}
 *   minValue={0}
 *   maxValue={24}
 *   ariaLabel="Select departure time"
 *   ariaValueText={`Departure at ${value}:00`}
 *   onChange={handleChange}
 * />
 * ```
 *
 * Screen reader announces: "Departure at 12:00, Select departure time, slider"
 *
 * #### Range Slider with Accessibility
 *
 * ```jsx
 * <Slider
 *   label="Flight duration"
 *   defaultValue={[2, 8]}
 *   minValue={0}
 *   maxValue={12}
 *   ariaLabel={["Minimum duration", "Maximum duration"]}
 *   ariaValueText={`${values[0]} to ${values[1]} hours`}
 *   onChange={handleChange}
 * />
 * ```
 *
 * Screen reader announces: "2 to 8 hours, Minimum duration, slider" and "2 to 8 hours, Maximum duration, slider"
 *
 *
 * @orbit-doc-end
 */
const Slider = ({
  defaultValue = DEFAULT_VALUES.VALUE,
  maxValue = DEFAULT_VALUES.MAX,
  minValue = DEFAULT_VALUES.MIN,
  step = DEFAULT_VALUES.STEP,
  onChange,
  onChangeAfter,
  onChangeBefore,
  ariaValueText,
  ariaLabel,
  label,
  histogramData,
  histogramLoading,
  histogramDescription,
  histogramLoadingText,
  valueDescription,
  id,
  dataTest,
}: Props) => {
  const bar = React.useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState(defaultValue);
  const valueRef = React.useRef(value);
  const defaultRef = React.useRef(defaultValue);
  const handleIndex = React.useRef<number | null>(null);
  const [focused, setFocused] = React.useState(false);
  const theme = useTheme();
  const { rtl } = theme;

  const updateValue = (newValue: Value) => {
    valueRef.current = newValue;
    setValue(newValue);
  };

  React.useEffect(() => {
    const newValue = Array.isArray(defaultValue)
      ? defaultValue.map(item => Number(item))
      : Number(defaultValue);

    if (isNotEqual(defaultValue, defaultRef.current)) {
      defaultRef.current = newValue;
      updateValue(newValue);
    }
  }, [defaultValue]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.shiftKey || event.altKey) return;

    // Return early if not a navigation key
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
      return;

    switch (event.key) {
      case "ArrowUp":
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(
            updateValue,
            onChange,
            moveValueByExtraStep(
              valueRef.current,
              maxValue,
              minValue,
              step,
              handleIndex.current,
              step,
            ),
          );
        }
        break;
      case "ArrowDown":
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(
            updateValue,
            onChange,
            moveValueByExtraStep(
              valueRef.current,
              maxValue,
              minValue,
              step,
              handleIndex.current,
              -step,
            ),
          );
        }
        break;
      case "ArrowRight":
        {
          const switchStep = rtl ? -step : step;
          pauseEvent(event);
          if (onChange) {
            injectCallbackAndSetState(
              updateValue,
              onChange,
              moveValueByExtraStep(
                valueRef.current,
                maxValue,
                minValue,
                step,
                handleIndex.current,
                switchStep,
              ),
            );
          }
        }
        break;
      case "ArrowLeft":
        {
          const switchStep = rtl ? step : -step;
          pauseEvent(event);
          if (onChange) {
            injectCallbackAndSetState(
              updateValue,
              onChange,
              moveValueByExtraStep(
                valueRef.current,
                maxValue,
                minValue,
                step,
                handleIndex.current,
                switchStep,
              ),
            );
          }
        }
        break;
      case "Home":
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(
            updateValue,
            onChange,
            moveValueByExtraStep(
              valueRef.current,
              maxValue,
              minValue,
              step,
              handleIndex.current,
              0,
              minValue,
            ),
          );
        }
        break;
      case "End":
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(
            updateValue,
            onChange,
            moveValueByExtraStep(
              valueRef.current,
              maxValue,
              minValue,
              step,
              handleIndex.current,
              0,
              maxValue,
            ),
          );
        }
        break;
      default:
    }
  };

  const handleBlur = () => {
    setFocused(false);
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("focusout", handleBlur);
    if (onChangeAfter) {
      injectCallbackAndSetState(updateValue, onChangeAfter, valueRef.current);
    }
  };

  const handleOnFocus = (i: number) => (event: React.FocusEvent<HTMLDivElement>) => {
    handleIndex.current = i;
    setFocused(true);
    pauseEvent(event.nativeEvent);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("focusout", handleBlur);
    if (onChangeBefore) {
      injectCallbackAndSetState(updateValue, onChangeBefore, value);
    }
  };

  const handleMove = (newValue: number | null) => {
    if (newValue != null) {
      if (Array.isArray(value)) {
        return constrainRangeValue(
          valueRef.current,
          alignValue(maxValue, minValue, step, newValue),
          Number(handleIndex.current),
        );
      }
      return alignValue(maxValue, minValue, step, newValue);
    }
    return null;
  };

  const handleBarMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    handleIndex.current = null;
    const newValue = calculateValueFromPosition({
      histogramData,
      histogramLoading,
      maxValue,
      minValue,
      handleIndex: handleIndex.current,
      bar,
      rtl,
      value,
      pageX: event.pageX,
      throughClick: true,
    });
    if (newValue) {
      if (Array.isArray(value)) {
        const index = findClosestKey(newValue, value);
        const replacedValue = constrainRangeValue(
          value,
          alignValue(maxValue, minValue, step, newValue),
          index || 0,
        );
        if (onChangeBefore) injectCallbackAndSetState(updateValue, onChangeBefore, value);
        if (onChange) injectCallbackAndSetState(updateValue, onChange, replacedValue);
        if (onChangeAfter) injectCallbackAndSetState(updateValue, onChangeAfter, replacedValue);
      } else {
        const alignedValue = alignValue(maxValue, minValue, step, newValue);
        if (onChangeBefore) injectCallbackAndSetState(updateValue, onChangeBefore, value);
        if (onChange) injectCallbackAndSetState(updateValue, onChange, alignedValue);
        if (onChangeAfter) injectCallbackAndSetState(updateValue, onChangeAfter, alignedValue);
      }
    }
  };

  const handleMouseMove = (event: MouseEvent): void => {
    const newValue = calculateValueFromPosition({
      histogramData,
      histogramLoading,
      maxValue,
      minValue,
      handleIndex: handleIndex.current,
      bar,
      rtl,
      value,
      pageX: event.pageX,
    });
    pauseEvent(event);
    injectCallbackAndSetState(updateValue, onChange, handleMove(newValue));
  };

  const handleMouseUp = () => {
    setFocused(false);

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    if (onChangeAfter) {
      injectCallbackAndSetState(updateValue, onChangeAfter, valueRef.current);
    }
  };

  const handleMouseDown = (i: number) => (event: React.MouseEvent<HTMLDivElement>) => {
    // just allow left-click
    if (event.button === 0 && event.buttons !== 2) {
      setFocused(true);
      handleIndex.current = i;
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      pauseEvent(event.nativeEvent);
      if (onChangeBefore) {
        injectCallbackAndSetState(updateValue, onChangeBefore, value);
      }
    }
  };

  const handleOnTouchMove = (event: TouchEvent) => {
    if (event.touches.length > 1) return;
    const newValue = calculateValueFromPosition({
      histogramData,
      histogramLoading,
      maxValue,
      minValue,
      handleIndex: handleIndex.current,
      bar,
      rtl,
      value,
      pageX: event.touches[0]?.pageX || 0,
    });
    pauseEvent(event);
    injectCallbackAndSetState(updateValue, onChange, handleMove(newValue));
  };

  const handleTouchEnd = () => {
    setFocused(false);
    window.removeEventListener("touchmove", handleOnTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    if (onChangeAfter) {
      injectCallbackAndSetState(updateValue, onChangeAfter, valueRef.current);
    }
  };

  const handleOnTouchStart = (i: number) => (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length <= 1) {
      setFocused(true);
      handleIndex.current = i;
      window.addEventListener("touchmove", handleOnTouchMove, {
        passive: false,
      });
      window.addEventListener("touchend", handleTouchEnd);
      stopPropagation(event.nativeEvent);
      if (onChangeBefore) {
        injectCallbackAndSetState(updateValue, onChangeBefore, value);
      }
    }
  };

  const renderHandle = (i?: number) => {
    const key = i && encodeURIComponent(i.toString());
    const index = i || 0;
    return (
      <Handle
        onTop={handleIndex.current === i}
        valueMax={maxValue}
        valueMin={minValue}
        onMouseDown={handleMouseDown(index)}
        onFocus={handleOnFocus(index)}
        onTouchStart={handleOnTouchStart(index)}
        value={valueRef.current}
        ariaValueText={ariaValueText}
        ariaLabel={ariaLabel}
        hasHistogram={histogramLoading || !!histogramData}
        index={index}
        key={key}
        dataTest={`SliderHandle-${index}`}
      />
    );
  };

  const renderHandles = () =>
    Array.isArray(value) ? value.map((_valueNow, index) => renderHandle(index)) : renderHandle();

  const renderSliderTexts = React.useCallback(
    (biggerSpace: boolean) => {
      if (!(label || valueDescription || histogramDescription)) return null;
      return (
        <Stack direction="row" spacing="none" spaceAfter={biggerSpace ? "medium" : "small"}>
          {(label || histogramDescription) && (
            <Stack direction="column" spacing="none" basis="60%" grow>
              {label && <Heading type="title4">{label}</Heading>}
              {valueDescription && (
                <Text type="secondary" size="small">
                  {valueDescription}
                </Text>
              )}
            </Stack>
          )}
          {histogramDescription && (
            <Stack shrink justify="end" grow={false}>
              <Text type="primary" size="small">
                {histogramDescription}
              </Text>
            </Stack>
          )}
        </Stack>
      );
    },
    [histogramDescription, label, valueDescription],
  );

  if (histogramData) {
    const properHistogramLength = (maxValue - minValue + step) / step;

    if (histogramData.length !== properHistogramLength) {
      console.warn(
        `Warning: Length of histogramData array is ${histogramData.length}, but should be ${properHistogramLength}. This will cause broken visuals of the whole Histogram.`,
      );
    }
  }

  const sortedValue = sortArray(valueRef.current);
  const hasHistogram = histogramLoading || !!histogramData;

  return (
    <div className="orbit-slider relative" data-test={dataTest} id={id}>
      {hasHistogram ? (
        <>
          <Hide on={["smallMobile", "mediumMobile", "largeMobile"]} block>
            {renderSliderTexts(true)}
          </Hide>
          <div
            className={cx(
              "pb-200 tb:w-[calc(100%+48px)] tb:absolute tb:-bottom-400 tb:-inset-x-600 tb:pt-300 tb:px-600 tb:pb-1200 tb:rounded-100 tb:transition-opacity tb:ease-in-out tb:duration-fast tb:bg-white-normal tb:shadow-level3",
              focused ? "tb:visible tb:opacity-100" : "tb:invisible tb:opacity-0",
            )}
          >
            {renderSliderTexts(false)}
            <Histogram
              data={histogramData}
              value={sortedValue}
              min={minValue}
              step={step}
              loading={histogramLoading}
              loadingText={histogramLoadingText}
            />
          </div>
        </>
      ) : (
        renderSliderTexts(true)
      )}
      <div className="h-600 flex w-full items-center">
        <Bar
          ref={bar}
          onMouseDown={handleBarMouseDown}
          value={sortedValue}
          max={maxValue}
          min={minValue}
          hasHistogram={hasHistogram}
        />
        {renderHandles()}
      </div>
    </div>
  );
};

export default Slider;
