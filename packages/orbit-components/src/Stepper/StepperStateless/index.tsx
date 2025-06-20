"use client";

import * as React from "react";
import cx from "clsx";

import Minus from "../../icons/Minus";
import Plus from "../../icons/Plus";
import ButtonPrimitive from "../../primitives/ButtonPrimitive";
import useTheme from "../../hooks/useTheme";
import type { Props } from "./types";
import useRandomId from "../../hooks/useRandomId";

const getMaxWidth = ({ maxWidth }: { maxWidth: string | number }) => {
  if (typeof maxWidth === "string") return maxWidth;
  return `${parseInt(maxWidth.toString(), 10)}px`;
};

const stepperButtonMixin = ({ disabled, active }: { disabled: boolean; active?: boolean }) =>
  cx(
    "[&_svg]:p-50",
    "de:[&_svg]:size-icon-medium [&_svg]:size-icon-large",
    "[&_svg]:rounded-full",
    "focus:outline-0",
    "[&_svg]:focus:outline-blue-normal [&_svg]:focus:outline [&_svg]:focus:outline-2",
    active ? "[&_svg]:bg-blue-normal" : "[&_svg]:bg-cloud-normal",
    !disabled && [
      active
        ? "hover:[&_svg]:bg-blue-normal-hover [&_svg]:active:focus:shadow-[inset_0_0_0_2px_var(--palette-blue-light-active)]"
        : "hover:[&_svg]:bg-cloud-normal-hover [&_svg]:active:focus:shadow-[inset_0_0_0_2px_var(--palette-cloud-normal-active)]",
    ],
  );

const StepperStateless = ({
  maxWidth = "120px",
  disabled,
  dataTest,
  id,
  value,
  active,
  name,
  minValue = -Infinity,
  maxValue = Infinity,
  onKeyDown,
  onBlur,
  onFocus,
  onIncrement,
  onDecrement,
  titleIncrement,
  titleDecrement,
  disabledIncrement,
  disabledDecrement,
  ariaLabelValue,
  ariaLabelledby,
  ariaDescribedby,
  descriptionIncrement,
  descriptionDecrement,
}: Props) => {
  const theme = useTheme();

  const iconStyles = {
    foreground: active ? theme.orbit.paletteWhite : theme.orbit.paletteInkDark,
  };

  const isMinusDisabled =
    disabled || disabledDecrement || (typeof value === "number" && value <= +minValue);
  const isPlusDisabled =
    disabled || disabledIncrement || (typeof value === "number" && value >= +maxValue);

  const inputId = useRandomId();

  return (
    <div
      data-test={dataTest}
      id={id}
      className="flex w-full flex-auto"
      style={{ maxWidth: getMaxWidth({ maxWidth }) }}
    >
      <ButtonPrimitive
        width="44px"
        className={stepperButtonMixin({ disabled: isMinusDisabled, active })}
        disabled={isMinusDisabled}
        iconLeft={<Minus size="small" ariaHidden />}
        onClick={ev => {
          if (onDecrement && !disabled) {
            onDecrement(ev);
          }
        }}
        icons={iconStyles}
        title={titleDecrement}
        aria-controls={inputId}
        aria-describedby={descriptionDecrement}
      />
      <input
        className={cx(
          "h-form-box-normal w-full min-w-0 border-0",
          "p-0 text-center",
          "text-large text-form-element-filled-foreground font-medium",
          "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          "[&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0",
          disabled ? "bg-transparent opacity-50" : "opacity-100",
          "focus:outline-0",
        )}
        name={name}
        disabled={disabled}
        type="text"
        value={Number(value) || 0}
        min={minValue}
        max={maxValue}
        onKeyDown={ev => {
          if (onKeyDown) {
            onKeyDown(ev);
          }
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-label={ariaLabelValue}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        id={inputId}
        readOnly
      />
      <ButtonPrimitive
        width="44px"
        className={stepperButtonMixin({ disabled: isPlusDisabled, active })}
        disabled={isPlusDisabled}
        iconLeft={<Plus size="small" ariaHidden />}
        onClick={ev => {
          if (onIncrement && !disabled) {
            onIncrement(ev);
          }
        }}
        icons={iconStyles}
        title={titleIncrement}
        aria-controls={inputId}
        aria-describedby={descriptionIncrement}
      />
    </div>
  );
};

export default StepperStateless;
