import * as React from "react";
import cx from "clsx";

import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import type { Props } from "./types";

const FormLabel = ({
  className,
  children,
  required,
  filled,
  dataTest,
  id,
  error,
  help,
  onMouseEnter,
  onMouseLeave,
  iconRef,
  inlineLabel,
  labelRef,
  disabled,
}: Props) => (
  <span
    className={cx(
      className,
      "orbit-form-label",
      "font-base text-normal mb-xxs ms-xxs de:ms-0 inline-flex font-medium leading-normal",
      !filled || disabled
        ? "text-form-element-label-foreground"
        : "text-form-element-label-filled-foreground",
    )}
    data-test={dataTest}
    id={id}
    ref={labelRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {!inlineLabel && (error || help) && (
      <span className="me-xxs inline-flex items-center" ref={iconRef}>
        {error && <AlertCircle ariaLabel="error" color="critical" size="small" />}
        {!error && help && <InformationCircle ariaLabel="help" color="info" size="small" />}
      </span>
    )}

    {required && !error && (
      <span
        className={cx(
          "text-normal align-top font-bold",
          filled ? "text-form-element-label-filled-foreground" : "text-critical-foreground",
        )}
        aria-hidden="true"
      >
        *
      </span>
    )}
    <span>{children}</span>
  </span>
);

export default FormLabel;
