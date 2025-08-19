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
        "orbit-radio-icon-container",
        "relative box-border",
        "flex flex-none items-center justify-center",
        "size-icon-medium rounded-full",
        "duration-fast scale-100 transition-all ease-in-out",
        "border-solid",
        checked ? "border-2" : "border",
        disabled
          ? "bg-cloud-light border-cloud-dark cursor-not-allowed"
          : [
              "bg-form-element-background cursor-pointer hover:outline hover:outline-2",
              hasError
                ? [
                    "border-form-element-error hover:outline-red-light hover:border-form-element-error border",
                    checked &&
                      "hover:border hover:shadow-[inset_0_0_0_1px_rgba(var(--palette-blue-normal))]",
                  ]
                : [
                    "hover:outline-blue-light hover:border-form-element-focus bg-white-normal",
                    checked ? "border-form-element-focus" : "border-cloud-dark",
                  ],
              !disabled && "active:scale-95",
            ],
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
  );
};

export default FakeRadio;
