import * as React from "react";

import Button from "./Button";
import Minus from "../../icons/Minus";
import Plus from "../../icons/Plus";
import type { Props } from "./types";

const StepperStateless = ({
  selected,
  disabled,
  id,
  dataTest,
  value,
  name,
  minValue = Number.NEGATIVE_INFINITY,
  maxValue = Number.POSITIVE_INFINITY,
  onKeyDown,
  onBlur,
  onFocus,
  onIncrement,
  onDecrement,
  titleIncrement,
  titleDecrement,
  disabledIncrement,
  disabledDecrement,
}: Props) => {
  return (
    <div
      className="orbit-baggage-stepper flex w-full flex-auto items-center"
      id={id}
      data-test={dataTest}
    >
      <Button
        selected={selected}
        disabled={
          disabled || disabledDecrement || (typeof value === "number" && value <= +minValue)
        }
        iconLeft={<Minus />}
        onClick={(ev: React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          if (onDecrement && !disabled) {
            onDecrement(ev);
          }
        }}
        title={titleDecrement}
      />
      <input
        className="text-large text-ink-dark h-[22px] w-full min-w-0 border-0 p-0 text-center font-bold outline-none disabled:bg-transparent"
        name={name}
        disabled={disabled}
        type="text"
        value={value || 0}
        min={minValue}
        max={maxValue}
        onKeyDown={ev => {
          if (onKeyDown) {
            onKeyDown(ev);
          }
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly
      />
      <Button
        selected={selected}
        disabled={
          disabled || disabledIncrement || (typeof value === "number" && value >= +maxValue)
        }
        iconLeft={<Plus />}
        onClick={ev => {
          if (onIncrement && !disabled) {
            onIncrement(ev);
          }
        }}
        title={titleIncrement}
      />
    </div>
  );
};

export default StepperStateless;
