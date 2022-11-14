import * as React from "react";

import StepperStateless from "./StepperStateless";
import validateIncrement from "../utils/validateIncrement";
import validateDecrement from "../utils/validateDecrement";
import useStateWithCallback from "../hooks/useStateWithCallback";
import { Props } from "./types";

const Stepper = ({ onChange, defaultValue = 0, maxWidth = 108, ...props }: Props) => {
  const [value, setValue] = useStateWithCallback<number>(defaultValue, onChange);

  const incrementCounter = () => {
    const { maxValue = Number.POSITIVE_INFINITY, step = 1 } = props;

    setValue(validateIncrement({ value, maxValue, step }));
  };

  const decrementCounter = () => {
    const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = props;

    setValue(validateDecrement({ value, minValue, step }));
  };

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 40) {
      ev.preventDefault();
      decrementCounter();
    }
    if (ev.keyCode === 38) {
      ev.preventDefault();
      incrementCounter();
    }
  };

  const {
    onBlur,
    onFocus,
    disabled,
    name,
    dataTest,
    id,
    minValue,
    maxValue,
    titleIncrement,
    titleDecrement,
    active,
  } = props;
  return (
    <StepperStateless
      onKeyDown={handleKeyDown}
      maxWidth={maxWidth}
      onIncrement={incrementCounter}
      onDecrement={decrementCounter}
      minValue={minValue}
      maxValue={maxValue}
      onFocus={onFocus}
      onBlur={onBlur}
      active={active}
      disabled={disabled}
      dataTest={dataTest}
      id={id}
      value={value}
      name={name}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
    />
  );
};

export default Stepper;
export { Props };
export { default as StepperStateless } from "./StepperStateless";
