"use client";

import React from "react";
import cx from "clsx";

import type { Props } from "../types";
import { Check } from "../../icons";

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
        ? ["border-cloud-dark", checked ? "bg-cloud-dark" : "bg-form-element-disabled-background"]
        : [
            checked &&
              !hasError &&
              "border-blue-normal bg-blue-normal hover:border-blue-dark hover:bg-blue-dark",
            checked && hasError && "border-blue-normal bg-blue-normal",
            !checked && "bg-form-element-background ",
            !checked && hasError && "border-form-element-error",
            !checked &&
              !hasError &&
              "border-form-element-border-color hover:border-blue-light-active",
          ],
    )}
  >
    <Check ariaHidden customColor="white" />
  </div>
);

export default FakeCheckbox;
