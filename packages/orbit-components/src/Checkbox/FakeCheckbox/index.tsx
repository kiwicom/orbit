"use client";

import React from "react";
import cx from "clsx";

import type { Props } from "../types";
import Check from "../../icons/Check";

const FakeCheckbox = ({
  checked,
  disabled,
  hasError,
}: Pick<Props, "checked" | "disabled" | "hasError">) => (
  <div
    className={cx(
      "orbit-fake-checkbox",
      "relative box-border",
      "border border-solid",
      "flex shrink-0 grow-0 basis-auto items-center justify-center",
      "size-icon-medium",
      "rounded-150 de:rounded-100",
      "duration-fast transition-all ease-in-out",
      "[&>svg]:size-icon-small",
      "[&>svg]:flex [&>svg]:items-center [&>svg]:justify-center",
      "hover:shadow-none",
      checked ? "[&>svg]:visible" : "[&>svg]:invisible",
      disabled
        ? [
            "border-cloud-dark cursor-not-allowed hover:outline-0",
            checked ? "bg-cloud-dark" : "bg-form-element-disabled-background",
          ]
        : [
            "cursor-pointer hover:outline hover:outline-2",
            hasError
              ? "border-form-element-error hover:outline-red-light hover:border-red-normal"
              : "hover:outline-blue-light hover:border-blue-normal",
            checked
              ? "bg-blue-normal border-blue-normal"
              : "bg-form-element-background border-form-element-border-color",
          ],
    )}
  >
    <Check ariaHidden customColor="white" />
  </div>
);

export default FakeCheckbox;
