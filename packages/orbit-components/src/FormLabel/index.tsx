import * as React from "react";
import cx from "clsx";

import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import type { Props } from "./types";

const FormLabel = ({
  className,
  children,
  required,
  dataTest,
  id,
  error,
  help,
  onMouseEnter,
  onMouseLeave,
  iconRef,
  inlineLabel,
  labelRef,
}: Props) => (
  <span
    className={cx(
      className,
      "orbit-form-label",
      "font-base text-normal mb-100 ms-100 de:ms-0 inline-flex font-medium leading-normal",
      inlineLabel
        ? "text-form-element-label-filled-foreground"
        : "text-form-element-label-foreground",
    )}
    data-test={dataTest}
    id={id}
    ref={labelRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {!inlineLabel && (error || help) && (
      <span className="me-100 inline-flex items-center" ref={iconRef}>
        {error && <AlertCircle ariaLabel="error" color="critical" size="small" />}
        {!error && help && <InformationCircle ariaLabel="help" color="info" size="small" />}
      </span>
    )}

    {required && (
      <span className="text-normal text-critical-foreground align-top font-bold" aria-hidden="true">
        *
      </span>
    )}
    <span>{children}</span>
  </span>
);

export default FormLabel;
