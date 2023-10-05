"use client";

import * as React from "react";
import cx from "clsx";

import Circle from "../../icons/Circle";
import handleKeyDown from "../../utils/handleKeyDown";
import type { Props } from "../../Switch/types";

const Switch = React.forwardRef<HTMLInputElement, Props>(
  ({ onChange, checked, dataTest, id, icon, onBlur, onFocus, disabled, ariaLabelledby }, ref) => {
    return (
      <label className="inline-block">
        <div
          className={cx(
            "duration-fast relative flex h-[20px] w-[40px] items-center justify-between rounded-[100px] transition-colors",
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
            checked ? "bg-blue-normal" : "bg-cloud-dark",
          )}
        >
          <input
            className="peer absolute inset-0 m-0 h-full w-full p-0 opacity-0"
            ref={ref}
            checked={checked}
            disabled={disabled}
            aria-checked={checked}
            role="switch"
            aria-labelledby={ariaLabelledby}
            onKeyDown={!disabled ? handleKeyDown<HTMLInputElement>(undefined, onChange) : undefined}
            onBlur={!disabled ? onBlur : undefined}
            onChange={!disabled ? onChange : undefined}
            onFocus={!disabled ? onFocus : undefined}
            type="checkbox"
            data-test={dataTest}
            id={id}
          />
          <div
            className={cx(
              "rounded-circle bg-white-normal duration-fast shadow-switch absolute box-border inline-flex h-[24px] w-[24px] items-center justify-center",
              "peer-focus:outline-blue-normal peer-focus:outline peer-focus:outline-2",
              "[&_svg]:h-icon-small [&_svg]:w-icon-small",
              !disabled && "active:shadow-action-active",
              !checked && (icon ? "[&_svg]:text-ink-normal" : "[&_svg]:text-cloud-dark"),
              checked
                ? "[&_svg]:text-blue-normal left-[calc(100%+2px)] -translate-x-full"
                : "left-[-3px]",
            )}
          >
            {icon || <Circle size="small" />}
          </div>
        </div>
      </label>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
