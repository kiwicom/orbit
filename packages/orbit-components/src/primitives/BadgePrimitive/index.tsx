"use client";

import React from "react";
import cx from "clsx";

import CarrierLogo from "../../CarrierLogo";
import type { Props } from "./types";

const BadgePrimitive = ({
  icon,
  children,
  ariaLabel,
  dataTest,
  id,
  carriers,
  className,
}: Props) => {
  const isCarrier = carriers && carriers.length > 0;

  return (
    <div
      className={cx(
        className,
        "orbit-badge-primitive",
        "font-base text-small font-medium leading-[14px]",
        "inline-flex shrink-0 grow-0 basis-auto items-center justify-center",
        "rounded-badge min-h-icon-large relative box-border",
        "px-200 py-0",
        "[&>.orbit-carrier-logo]:absolute [&>.orbit-carrier-logo]:start-0",
      )}
      id={id}
      data-test={dataTest}
      aria-label={ariaLabel}
      role="status"
    >
      {carriers && <CarrierLogo carriers={carriers} rounded size="medium" />}
      {icon && (
        <div className={cx("[&>svg]:size-icon-small flex shrink-0", Boolean(children) && "me-100")}>
          {icon}
        </div>
      )}
      <div className={cx("py-100 px-0 leading-none", isCarrier && "ms-400")}>{children}</div>
    </div>
  );
};

export default BadgePrimitive;
