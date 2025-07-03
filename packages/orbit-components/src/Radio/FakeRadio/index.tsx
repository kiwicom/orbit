"use client";

import cx from "clsx";
import React from "react";

import type { Props } from "../types";

const FakeRadio = ({
  checked,
  disabled,
  hasError,
}: Pick<Props, "checked" | "disabled" | "hasError">) => {
  return (
    <div
      className={cx(
        "font-base text-form-element-label-foreground relative flex w-full [align-items:self-start]",
        "[&_.orbit-radio-icon-container]:has-[:checked]:border-2 [&_.orbit-radio-icon-container_span]:has-[:checked]:visible",
        "[&_.orbit-radio-icon-container]:has-[:focus]:outline-blue-normal [&_.orbit-radio-icon-container]:has-[:focus]:outline [&_.orbit-radio-icon-container]:has-[:focus]:outline-2",
        disabled
          ? [
              "cursor-not-allowed",
              "[&_.orbit-radio-icon-container]:bg-cloud-light [&_.orbit-radio-icon-container]:border-cloud-dark",
            ]
          : [
              "cursor-pointer",
              "[&_.orbit-radio-icon-container]:has-[:checked]:border-form-element-focus [&_.orbit-radio-icon-container]:has-[:checked]:active:border-form-element-focus [&_.orbit-radio-icon-container]:has-[:checked]:bg-white-normal [&_.orbit-radio-icon-container]:bg-form-element-background",
              !checked &&
                hasError &&
                "[&_.orbit-radio-icon-container]:border-form-element-error [&_.orbit-radio-icon-container]:hover:border-form-element-error-hover [&_.orbit-radio-icon-container]:active:border-form-element-error",
              !hasError &&
                "[&_.orbit-radio-icon-container]:border-form-element [&_.orbit-radio-icon-container]:hover:border-form-element-hover [&_.orbit-radio-icon-container]:active:border-form-element-active",
              checked &&
                !hasError &&
                "[&_.orbit-radio-icon-container]:border-form-element-focus active:border-form-element-focus [&_.orbit-radio-icon-container]:bg-white-normal",
            ],
      )}
    >
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
          hasError && "border-blue-normal",
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
    </div>
  );
};

export default FakeRadio;
