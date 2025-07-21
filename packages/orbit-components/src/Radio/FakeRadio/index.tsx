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
        "relative box-border",
        "flex flex-none items-center justify-center",
        "size-icon-medium rounded-full",
        "duration-fast scale-100 transition-all ease-in-out",
        "border-solid",
        checked ? "border-2" : "border",
        disabled && "bg-cloud-light border-cloud-dark cursor-not-allowed",
        !disabled && [
          "bg-form-element-background cursor-pointer active:scale-95",
          checked &&
            "border-form-element-focus hover:border-form-element-focus active:border-form-element-focus",
          !checked &&
            hasError &&
            "border-form-element-error hover:border-form-element-error-hover active:border-form-element-error",
          !checked &&
            !hasError &&
            "border-cloud-dark hover:border-cloud-dark-hover active:border-cloud-dark-active",
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
