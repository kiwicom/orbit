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
    checked,
    defaultChecked,
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
        "[&_.orbit-checkbox-icon-container]:hover:shadow-none",
        "[&_.orbit-checkbox-icon-container]:has-[:focus]:outline-blue-normal [&_.orbit-checkbox-icon-container]:has-[:focus]:outline [&_.orbit-checkbox-icon-container]:has-[:focus]:outline-2",
        "[&_.orbit-checkbox-icon-container>svg]:has-[:checked]:visible",
        disabled
          ? [
              "cursor-not-allowed",
              "[&_.orbit-checkbox-icon-container]:bg-form-element-disabled-background",
              "[&_.orbit-checkbox-icon-container]:has-[:checked]:bg-cloud-dark",
              checked && "[&_.orbit-checkbox-icon-container]:bg-cloud-dark",
            ]
          : [
              "cursor-pointer",
              "[&_.orbit-checkbox-icon-container]:has-[:checked]:border-blue-normal [&_.orbit-checkbox-icon-container]:has-[:checked]:bg-blue-normal [&_.orbit-checkbox-icon-container]:has-[:checked]:hover:border-blue-dark [&_.orbit-checkbox-icon-container]:has-[:checked]:hover:bg-blue-dark",
              checked &&
                !hasError &&
                "[&_.orbit-checkbox-icon-container]:bg-blue-normal [&_.orbit-checkbox-icon-container]:border-blue-normal [&_.orbit-checkbox-icon-container]:hover:bg-blue-dark [&_.orbit-checkbox-icon-container]:hover:border-blue-dark",
              !checked && "[&_.orbit-checkbox-icon-container]:bg-form-element-background",
              !checked && hasError
                ? "[&_.orbit-checkbox-icon-container]:border-form-element-error"
                : "[&_.orbit-checkbox-icon-container]:border-form-element-border-color [&_.orbit-checkbox-icon-container]:hover:border-blue-light-active [&_.orbit-checkbox-icon-container]:active:border-form-element-focus",
            ],
      )}
    >
      <input
        className="-z-default absolute opacity-0"
        data-test={dataTest}
        id={id}
        data-state={getFieldDataState(!!hasError)}
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        tabIndex={tabIndex ? Number(tabIndex) : undefined}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={!readOnly ? onChange : undefined}
        onClick={e => readOnly && e.stopPropagation()}
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
            "size-icon-medium",
            "rounded-150 de:rounded-100",
            "duration-fast transition-all ease-in-out",
            "[&>svg]:size-icon-small",
            "[&>svg]:flex [&>svg]:items-center [&>svg]:justify-center",
            checked ? "[&>svg]:visible" : "[&>svg]:invisible",
            disabled ? ["border-cloud-dark"] : "active:scale-95",
          )}
        >
          <Check customColor="white" />
        </div>,
      )}
      {(label || info) && (
        <div className={cx("ms-200 flex flex-1 flex-col", disabled ? "opacity-50" : "opacity-100")}>
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
