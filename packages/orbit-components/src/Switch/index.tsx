"use client";

import * as React from "react";
import cx from "clsx";

import handleKeyDown from "../utils/handleKeyDown";
import type { Props } from "./types";

const Switch = ({
  onChange,
  checked,
  dataTest,
  id,
  icon,
  onBlur,
  onFocus,
  disabled,
  ariaControls,
  ariaLabel,
  ariaLabelledby,
  ref,
}: Props) => {
  return (
    <label className="inline-block">
      <div
        className={cx(
          "duration-fast h-600 w-form-box-normal relative flex items-center justify-between rounded-full transition-colors",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          checked ? "bg-blue-normal" : "bg-cloud-dark",
        )}
      >
        <input
          className={cx(
            "size-full peer absolute inset-0 m-0 p-0 opacity-0",
            !disabled && "cursor-pointer",
          )}
          ref={ref}
          checked={checked}
          disabled={disabled}
          aria-checked={checked}
          role="switch"
          onKeyDown={!disabled ? handleKeyDown<HTMLInputElement>(undefined, onChange) : undefined}
          onBlur={!disabled ? onBlur : undefined}
          onChange={!disabled ? onChange : undefined}
          onFocus={!disabled ? onFocus : undefined}
          type="checkbox"
          data-test={dataTest}
          id={id}
          aria-controls={ariaControls}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
        />
        <div
          className={cx(
            "bg-white-normal duration-fast shadow-switch size-500 absolute box-border inline-flex items-center justify-center rounded-full",
            "peer-focus:outline-blue-normal peer-focus:outline-solid peer-focus:outline-2",
            "[&_svg]:size-300",
            !disabled && "active:shadow-level2",
            !checked && (icon ? "[&_svg]:text-ink-normal" : "[&_svg]:text-cloud-dark"),
            checked
              ? "[&_svg]:text-blue-normal rtl:-translate-x-50 ltr:translate-x-[calc(100%+2px)]"
              : "left-50",
          )}
        >
          {icon || null}
        </div>
      </div>
    </label>
  );
};

export default Switch;
