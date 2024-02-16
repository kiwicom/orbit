"use client";

import React from "react";
import cx from "clsx";

import BadgePrimitive from "../primitives/BadgePrimitive";
import { TYPE_OPTIONS } from "./consts";
import type { Props, Type } from "./types";

const getTypeToken = (type: Type) => {
  const tokens = {
    [TYPE_OPTIONS.NEUTRAL]: "bg-badge-neutral-background text-badge-neutral-foreground",
    [TYPE_OPTIONS.INFO_SUBTLE]: "bg-badge-info-subtle-background text-badge-info-subtle-foreground",
    [TYPE_OPTIONS.SUCCESS_SUBTLE]:
      "bg-badge-success-subtle-background text-badge-success-subtle-foreground",
    [TYPE_OPTIONS.WARNING_SUBTLE]:
      "bg-badge-warning-subtle-background text-badge-warning-subtle-foreground",
    [TYPE_OPTIONS.CRITICAL_SUBTLE]:
      "bg-badge-critical-subtle-background text-badge-critical-subtle-foreground",
    [TYPE_OPTIONS.DARK]: "bg-badge-dark-background text-badge-dark-foreground",
    [TYPE_OPTIONS.WHITE]: "bg-badge-white-background text-badge-white-foreground",
    [TYPE_OPTIONS.INFO]: "bg-blue-dark text-badge-info-foreground",
    [TYPE_OPTIONS.CRITICAL]: "bg-badge-critical-background text-badge-critical-foreground",
    [TYPE_OPTIONS.SUCCESS]: "bg-badge-success-background text-badge-success-foreground",
    [TYPE_OPTIONS.WARNING]: "bg-badge-warning-background text-badge-warning-foreground",
    [TYPE_OPTIONS.BUNDLE_BASIC]:
      "bg-badge-bundle-basic-background text-badge-bundle-basic-foreground",
    [TYPE_OPTIONS.BUNDLE_MEDIUM]:
      "bg-badge-bundle-medium-background text-badge-bundle-medium-foreground",
    [TYPE_OPTIONS.BUNDLE_TOP]: "bg-badge-bundle-top-background text-badge-bundle-top-foreground",
  };

  return tokens[type];
};

const Badge = ({
  type = TYPE_OPTIONS.NEUTRAL,
  icon,
  children,
  ariaLabel,
  dataTest,
  id,
  carriers,
}: Props) => {
  return (
    <BadgePrimitive
      carriers={carriers}
      className={cx("orbit-badge", getTypeToken(type))}
      icon={icon}
      id={id}
      ariaLabel={ariaLabel}
      dataTest={dataTest}
    >
      {children}
    </BadgePrimitive>
  );
};

export default Badge;
