import * as React from "react";

import { SIZE_OPTIONS } from "../InputField/consts";
import KEY_CODE_MAP from "../../common/keyMaps";
import InputStepperStateless from "./InputStepperStateless";
import validateIncrement from "../../utils/validateIncrement";
import validateDecrement from "../../utils/validateDecrement";
import useStateWithCallback from "../../hooks/useStateWithCallback";
import useTranslate from "../../hooks/useTranslate";
import { Props } from "./index.d";

const InputStepper = React.forwardRef<HTMLInputElement, Props>(
  ({ onChange, defaultValue = 0, disabled = false, ...props }, ref) => {
    const translate = useTranslate();
    const [value, setValue] = useStateWithCallback<number>(defaultValue, onChange);

    const incrementCounter = () => {
      const { maxValue = Number.POSITIVE_INFINITY, step = 1 } = props;

      if (!disabled) {
        setValue(validateIncrement({ value, maxValue, step }));
      }
    };

    const decrementCounter = () => {
      const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = props;
      if (!disabled) {
        setValue(validateDecrement({ value, minValue, step }));
      }
    };

    const handleIncrementCounter = (
      ev?:
        | React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>
        | React.KeyboardEvent<HTMLButtonElement>,
    ) => {
      if (ev && ev.type === "click") {
        incrementCounter();
      }
      if (ev && ev instanceof KeyboardEvent) {
        if (ev.keyCode === KEY_CODE_MAP.SPACE) {
          ev.preventDefault();
          incrementCounter();
        } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
          incrementCounter();
        }
      }
    };

    const handleDecrementCounter = (
      ev?:
        | React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>
        | React.KeyboardEvent<HTMLButtonElement>,
    ) => {
      if (ev && ev.type === "click") {
        decrementCounter();
      }
      if (ev && ev instanceof KeyboardEvent) {
        if (ev.keyCode === KEY_CODE_MAP.SPACE) {
          ev.preventDefault();
          decrementCounter();
        } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
          decrementCounter();
        }
      }
    };

    const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
      if (ev.keyCode === KEY_CODE_MAP.ARROW_DOWN) {
        ev.preventDefault();
        decrementCounter();
      }
      if (ev.keyCode === KEY_CODE_MAP.ARROW_UP) {
        ev.preventDefault();
        incrementCounter();
      }
    };

    const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
      const eventValue = ev && parseInt(ev.currentTarget.value, 10);
      const prevValue = value;

      const { maxValue, minValue } = props;

      if (disabled) return;
      if (prevValue <= eventValue) {
        setValue(validateIncrement({ value, maxValue, step: 0 }));
      }

      if (prevValue >= eventValue) {
        setValue(validateDecrement({ value, minValue, step: 0 }));
      }
    };

    const {
      label,
      error,
      onBlur,
      onFocus,
      help,
      name,
      dataTest,
      size = SIZE_OPTIONS.NORMAL,
      required,
      readOnly,
      minValue,
      maxValue,
      tabIndex,
      spaceAfter,
      width = "100%",
      titleIncrement,
      titleDecrement,
    } = props;

    return (
      <InputStepperStateless
        dataTest={dataTest}
        size={size}
        label={label}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        name={name}
        width={width}
        error={error}
        help={help}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        value={value || 0}
        minValue={minValue}
        maxValue={maxValue}
        tabIndex={tabIndex}
        forwardedRef={ref}
        spaceAfter={spaceAfter}
        onDecrement={handleDecrementCounter}
        onIncrement={handleIncrementCounter}
        titleIncrement={titleIncrement || translate("increment_value")}
        titleDecrement={titleDecrement || translate("decrement_value")}
      />
    );
  },
);

InputStepper.displayName = "InputStepper";

export default InputStepper;

export { default as InputStepperStateless } from "./InputStepperStateless";
