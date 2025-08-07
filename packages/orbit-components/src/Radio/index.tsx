"use client";

import cx from "clsx";
import React from "react";

import getFieldDataState from "../common/getFieldDataState";
import type { Props } from "./types";

const Radio = (props: Props) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked,
    defaultChecked,
    onChange,
    name,
    info,
    id,
    tabIndex = 0,
    dataTest,
    ariaLabelledby,
    ref,
  } = props;

  const Component = label ? "label" : "div";

  return (
    <Component
      htmlFor={label ? id : undefined}
      className={cx(
        "font-base text-form-element-label-foreground relative flex w-full [align-items:self-start]",
        "[&_.orbit-radio-icon-container]:has-[:checked]:border-2 [&_.orbit-radio-icon-container_span]:has-[:checked]:visible",
        disabled
          ? [
              "cursor-not-allowed",
              "[&_.orbit-radio-icon-container]:bg-cloud-light [&_.orbit-radio-icon-container]:border-cloud-dark",
              "[&_.orbit-radio-icon-container]:has-[:focus]:outline-0 [&_.orbit-radio-icon-container]:has-[:hover]:outline-0",
            ]
          : [
              "cursor-pointer",
              "[&_.orbit-radio-icon-container]:has-[:focus]:outline [&_.orbit-radio-icon-container]:has-[:focus]:outline-2",
              "[&_.orbit-radio-icon-container]:has-[:hover]:outline [&_.orbit-radio-icon-container]:has-[:hover]:outline-2",
              "[&_.orbit-radio-icon-container]:has-[:checked]:bg-white-normal [&_.orbit-radio-icon-container]:bg-form-element-background",
              hasError
                ? [
                    "[&_.orbit-radio-icon-container]:border-form-element-error [&_.orbit-radio-icon-container]:has-[:checked]:border-form-element-error",
                    "[&_.orbit-radio-icon-container]:has-[:focus]:outline-blue-normal [&_.orbit-radio-icon-container]:has-[:focus]:border-red-normal [&_.orbit-radio-icon-container]:has-[:focus]:border",
                    "[&_.orbit-radio-icon-container]:has-[:hover]:outline-red-light [&_.orbit-radio-icon-container]:has-[:hover]:border-red-normal [&_.orbit-radio-icon-container]:has-[:hover]:border",
                    checked &&
                      "[&_.orbit-radio-icon-container]:border-form-element-error [&_.orbit-radio-icon-container]:has-[:focus]:shadow-[inset_0_0_0_1px_rgba(var(--palette-blue-normal))] [&_.orbit-radio-icon-container]:has-[:hover]:shadow-[inset_0_0_0_1px_rgba(var(--palette-blue-normal))]",
                  ]
                : [
                    "[&_.orbit-radio-icon-container]:border-form-element",
                    "[&_.orbit-radio-icon-container]:has-[:focus]:outline-blue-light [&_.orbit-radio-icon-container]:has-[:focus]:border-blue-normal",
                    "[&_.orbit-radio-icon-container]:has-[:hover]:outline-blue-light [&_.orbit-radio-icon-container]:has-[:hover]:border-blue-normal",
                  ],
              checked &&
                !hasError &&
                "[&_.orbit-radio-icon-container]:border-form-element-focus active:border-form-element-focus [&_.orbit-radio-icon-container]:bg-white-normal",
            ],
      )}
    >
      <input
        data-test={dataTest}
        data-state={getFieldDataState(hasError)}
        className="absolute opacity-0"
        value={value}
        type="radio"
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        id={id}
        onChange={onChange}
        name={name}
        tabIndex={Number(tabIndex)}
        ref={ref}
        aria-labelledby={ariaLabelledby}
      />
      <div
        className={cx(
          "orbit-radio-icon-container",
          "relative box-border",
          "flex flex-none items-center justify-center",
          "size-icon-medium rounded-full",
          "duration-fast scale-100 transition-all ease-in-out",
          "border-solid",
          checked ? "border-2" : "border",
          !disabled && "active:scale-95",
        )}
      >
        <span
          className={cx(
            "size-[10px] rounded-full",
            disabled ? "bg-cloud-dark" : "bg-blue-normal",
            checked ? "visible" : "invisible",
          )}
        />
      </div>
      {(label || info) && (
        <div
          className={cx(
            "ms-200 flex flex-1 flex-col font-medium",
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
    </Component>
  );
};

export default Radio;

export { default as FakeRadio } from "./FakeRadio";
