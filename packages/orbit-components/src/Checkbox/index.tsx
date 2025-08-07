"use client";

import * as React from "react";
import cx from "clsx";

import Check from "../icons/Check";
import getFieldDataState from "../common/getFieldDataState";
import type { Props } from "./types";

const Checkbox = (props: Props) => {
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
    tabIndex,
    ariaControls,
    ariaDescribedby,
    ref,
  } = props;

  const Component = label ? "label" : "div";

  return (
    <Component
      htmlFor={label ? id : undefined}
      className={cx(
        "orbit-checkbox-label",
        "font-base",
        "flex flex-row",
        "relative w-full",
        "[&_.orbit-checkbox-icon-container>svg]:has-[:checked]:visible",
        disabled
          ? [
              "[&_.orbit-checkbox-icon-container]:bg-form-element-disabled-background [&_.orbit-checkbox-icon-container]:border-cloud-dark cursor-not-allowed",
              "[&_.orbit-checkbox-icon-container]:has-[:checked]:bg-cloud-dark",
              "[&_.orbit-checkbox-icon-container]:has-[:focus]:outline-0 [&_.orbit-checkbox-icon-container]:has-[:hover]:outline-0",
              checked && "[&_.orbit-checkbox-icon-container]:bg-cloud-dark",
            ]
          : [
              "cursor-pointer",
              "[&_.orbit-checkbox-icon-container]:has-[:focus]:outline [&_.orbit-checkbox-icon-container]:has-[:focus]:outline-2",
              "[&_.orbit-checkbox-icon-container]:has-[:hover]:outline [&_.orbit-checkbox-icon-container]:has-[:hover]:outline-2",
              hasError
                ? [
                    "[&_.orbit-checkbox-icon-container]:border-form-element-error",
                    "[&_.orbit-checkbox-icon-container]:has-[:focus]:outline-blue-normal [&_.orbit-checkbox-icon-container]:has-[:focus]:border-red-normal",
                    "[&_.orbit-checkbox-icon-container]:has-[:hover]:outline-red-light [&_.orbit-checkbox-icon-container]:has-[:hover]:border-red-normal",
                  ]
                : [
                    "[&_.orbit-checkbox-icon-container]:border-form-element-border-color",
                    "[&_.orbit-checkbox-icon-container]:has-[:focus]:outline-blue-light [&_.orbit-checkbox-icon-container]:has-[:focus]:border-blue-normal",
                    "[&_.orbit-checkbox-icon-container]:has-[:hover]:outline-blue-light [&_.orbit-checkbox-icon-container]:has-[:hover]:border-blue-normal",
                  ],
              checked
                ? [
                    "[&_.orbit-checkbox-icon-container]:bg-blue-normal [&_.orbit-checkbox-icon-container]:border-blue-normal",
                    "[&_.orbit-checkbox-icon-container]:has-[:checked]:bg-blue-normal [&_.orbit-checkbox-icon-container]:has-[:checked]:border-blue-normal",
                  ]
                : "[&_.orbit-checkbox-icon-container]:bg-form-element-background",
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
        onChange={onChange}
        ref={ref}
        aria-controls={ariaControls}
        aria-describedby={ariaDescribedby}
        aria-invalid={hasError ? true : undefined}
      />
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
        <Check customColor="white" ariaHidden />
      </div>
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
    </Component>
  );
};

export default Checkbox;

export { default as FakeCheckbox } from "./FakeCheckbox";
