"use client";

import * as React from "react";
import cx from "clsx";

import Check from "../icons/Check";
import getFieldDataState from "../common/getFieldDataState";
import cloneWithTooltip from "../utils/cloneWithTooltip";
import type { Props } from "./types";

const Checkbox = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked = false,
    name,
    onChange,
    dataTest,
    id,
    info,
    readOnly,
    tabIndex,
    tooltip,
  } = props;

  return (
    <label
      className={cx(
        "orbit-checkbox-label",
        "font-base",
        "flex flex-row",
        "relative w-full",
        "hover:[&_.orbit-checkbox-icon-container]:shadow-none",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
      )}
    >
      <input
        className="peer absolute z-[-1] opacity-0"
        data-test={dataTest}
        id={id}
        data-state={getFieldDataState(!!hasError)}
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        tabIndex={tabIndex ? Number(tabIndex) : undefined}
        checked={checked}
        onChange={onChange}
        ref={ref}
        readOnly={readOnly}
      />
      {cloneWithTooltip(
        tooltip,
        <div
          className={cx(
            "orbit-checkbox-icon-container",
            "relative box-border",
            "border border-solid",
            "flex shrink-0 grow-0 basis-auto items-center justify-center",
            "h-icon-medium w-icon-medium",
            "rounded-large de:rounded-normal",
            "duration-fast transition-all ease-in-out",
            "peer-focus:outline-blue-normal peer-focus:outline peer-focus:outline-2",
            "[&_>_svg]:w-icon-small [&_>_svg]:h-icon-small [&_>_svg]:invisible peer-checked:[&_>_svg]:visible",
            "[&_>_svg]:flex [&_>_svg]:items-center [&_>_svg]:justify-center",
            "active:scale-95",
            disabled
              ? [
                  "border-cloud-dark",
                  checked && "bg-cloud-dark",
                  !checked && "bg-form-element-disabled-background",
                ]
              : [
                  checked &&
                    "bg-blue-normal hover:bg-blue-dark border-blue-normal hover:border-blue-dark",
                  !checked && [
                    "bg-form-element-background",
                    hasError
                      ? "border-form-element-error"
                      : " border-form-element-border-color hover:border-blue-light-active active:border-form-element-focus",
                  ],
                ],
          )}
        >
          <Check customColor="white" />
        </div>,
      )}
      {(label || info) && (
        <div className={cx("ms-xs flex flex-1 flex-col", disabled ? "opacity-50" : "opacity-1")}>
          {label && (
            <span className="font-base text-form-element-normal text-form-element-label-foreground [&_.orbit-text]:text-form-element-normal [&_.orbit-text]:text-form-element-label-foreground [&_.orbit-text]:leading-small font-medium leading-normal [&_.orbit-text]:font-medium">
              {label}
            </span>
          )}
          {info && (
            <span className="text-small leading-small text-secondary-foreground">{info}</span>
          )}
        </div>
      )}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
