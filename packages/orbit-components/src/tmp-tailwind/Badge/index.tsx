"use client";

import React from "react";
import clsx from "clsx";

import BadgePrimitive from "../primitives/BadgePrimitive";
import { TYPE_OPTIONS, TOKENS } from "./consts";
import type { Props, Type } from "./types";

const getTypeToken = ({ name, type }: { name: string; type: Type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: "bg-badge-neutral-background",
      [TYPE_OPTIONS.INFO_SUBTLE]: "bg-badge-info-subtle-background",
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: "bg-badge-success-subtle-background",
      [TYPE_OPTIONS.WARNING_SUBTLE]: "bg-badge-warning-subtle-background",
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: "bg-badge-critical-subtle-background",
      [TYPE_OPTIONS.DARK]: "bg-badge-dark-background",
      [TYPE_OPTIONS.WHITE]: "bg-badge-white-background",
      [TYPE_OPTIONS.INFO]: "bg-badge-info-background",
      [TYPE_OPTIONS.CRITICAL]: "bg-badge-critical-background",
      [TYPE_OPTIONS.SUCCESS]: "bg-badge-success-background",
      [TYPE_OPTIONS.WARNING]: "bg-badge-warning-background",
      // TODO: repalce with proper granular tokens for gradients
      [TYPE_OPTIONS.BUNDLE_BASIC]: "bg-badge-bundle-basic-background",
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: "bg-badge-bundle-medium-background",
      [TYPE_OPTIONS.BUNDLE_TOP]: "bg-badge-bundle-top-background",
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: "text-badge-neutral-foreground",
      [TYPE_OPTIONS.INFO_SUBTLE]: "text-badge-info-subtle-foreground",
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: "text-badge-success-subtle-foreground",
      [TYPE_OPTIONS.WARNING_SUBTLE]: "text-badge-warning-subtle-foreground",
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: "text-badge-critical-subtle-foreground",
      [TYPE_OPTIONS.DARK]: "text-badge-dark-foreground",
      [TYPE_OPTIONS.WHITE]: "text-badge-white-foreground",
      [TYPE_OPTIONS.INFO]: "text-badge-info-foreground",
      [TYPE_OPTIONS.CRITICAL]: "text-badge-critical-foreground",
      [TYPE_OPTIONS.SUCCESS]: "text-badge-success-foreground",
      [TYPE_OPTIONS.WARNING]: "text-badge-warning-foreground",
      [TYPE_OPTIONS.BUNDLE_BASIC]: "text-badge-bundle-basic-foreground",
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: "text-badge-bundle-medium-foreground",
      [TYPE_OPTIONS.BUNDLE_TOP]: "text-badge-bundle-top-foreground",
    },
  };
  return tokens[name][type];
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
      className={clsx(
        "orbit-badge",
        getTypeToken({ name: TOKENS.background, type }),
        getTypeToken({ name: TOKENS.color, type }),
      )}
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
