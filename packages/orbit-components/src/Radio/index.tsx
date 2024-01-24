"use client";

import cx from "clsx";
import React from "react";

import cloneWithTooltip from "../utils/cloneWithTooltip";
import getFieldDataState from "../common/getFieldDataState";
import type { Props } from "./types";

const Radio = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked = false,
    onChange,
    name,
    info,
    readOnly,
    id,
    tabIndex = 0,
    dataTest,
    tooltip,
  } = props;

  return (
    <label
      htmlFor={id}
      className={cx(
        "font-base text-form-element-label-foreground relative flex w-full [align-items:self-start]",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        !disabled && [
          !checked &&
            (hasError
              ? "[&>.orbit-radio-icon-container]:border-form-element-error [&>.orbit-radio-icon-container]:hover:border-form-element-error-hover [&>.orbit-radio-icon-container]:active:border-form-element-error "
              : "[&>.orbit-radio-icon-container]:border-form-element [&>.orbit-radio-icon-container]:hover:border-form-element-hover [&>.orbit-radio-icon-container]:active:border-form-element-active"),
          checked &&
            "[&>.orbit-radio-icon-container]:border-form-element-focus [&>.orbit-radio-icon-container]:bg-blue-normal active:border-form-element-focus",
        ],
      )}
    >
      <input
        data-test={dataTest}
        data-state={getFieldDataState(hasError)}
        className="peer absolute opacity-0"
        value={value}
        type="radio"
        disabled={disabled}
        checked={checked}
        id={id}
        onChange={onChange}
        name={name}
        tabIndex={Number(tabIndex)}
        ref={ref}
        readOnly={readOnly}
      />
      {cloneWithTooltip(
        tooltip,
        <div
          className={cx(
            "orbit-radio-icon-container",
            "relative box-border",
            "flex flex-none items-center justify-center",
            "rounded-circle size-icon-medium",
            "duration-fast scale-100 transition-all ease-in-out",
            "lm:border border-[2px] border-solid",
            "active:scale-95",
            "peer-focus:outline-blue-normal peer-focus:outline peer-focus:outline-2",
            disabled
              ? "bg-form-element-disabled-background border-transparent"
              : "bg-form-element-background",
          )}
        >
          <span
            className={cx(
              "size-xs rounded-circle",
              disabled ? "bg-cloud-light" : "bg-form-element-background",
              checked ? "visible" : "invisible",
            )}
          />
        </div>,
      )}
      {(label || info) && (
        <div
          className={cx(
            "ms-xs flex flex-1 flex-col font-medium",
            disabled ? "opacity-50" : "opacity-100",
          )}
        >
          {label && (
            <span className="text-normal text-primary-foreground [&_.orbit-text]:text-normal font-medium leading-normal [&_.orbit-text]:font-medium [&_.orbit-text]:leading-normal">
              {label}
            </span>
          )}
          {info && (
            <span className="text-small leading-small text-form-element-label-filled-foreground">
              {info}
            </span>
          )}
        </div>
      )}
    </label>
  );
});

Radio.displayName = "Radio";

export default Radio;
