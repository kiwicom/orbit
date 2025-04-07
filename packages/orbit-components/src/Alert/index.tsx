"use client";

import * as React from "react";
import cx from "clsx";

import type { Props as IconProps } from "../Icon/types";
import type * as Common from "../common/types";
import type { Type, Props } from "./types";
import InformationCircle from "../icons/InformationCircle";
import AlertCircle from "../icons/AlertCircle";
import AlertOctagon from "../icons/AlertOctagon";
import CheckCircle from "../icons/CheckCircle";
import Close from "../icons/Close";
import ButtonLink from "../ButtonLink";
import { TYPE_OPTIONS, CLOSE_BUTTON_DATA_TEST } from "./consts";
import { spaceAfterClasses } from "../common/tailwind";
import { alertDescendantClasses } from "../TextLink/helpers/twClasses";

const COLORS: Record<Type, string> = {
  info: "bg-blue-light border-blue-light-hover lm:border-t-blue-light-hover",
  success: "bg-green-light border-green-light-hover lm:border-t-green-light-hover",
  warning: "bg-orange-light border-orange-light-hover lm:border-t-orange-light-hover",
  critical: "bg-red-light border-red-light-hover lm:border-t-red-light-hover",
};

const ACCENT_BORDER: Record<Type, string> = {
  info: "border-t-blue-normal lm:border-s-blue-normal",
  success: "border-t-green-normal lm:border-s-green-normal",
  warning: "border-t-orange-normal lm:border-s-orange-normal",
  critical: "border-t-red-normal lm:border-s-red-normal",
};

const ICON_COLOR: Record<Type, string> = {
  info: "text-blue-normal",
  success: "text-green-normal",
  warning: "text-orange-normal",
  critical: "text-red-normal",
};

const StyledIcon = ({ icon, type }: Pick<Props, "icon" | "type">) => {
  // Icon should be boolean and TRUE
  if (typeof icon === "boolean" && icon) {
    if (type === TYPE_OPTIONS.INFO) {
      return <InformationCircle size="small" />;
    }
    if (type === TYPE_OPTIONS.SUCCESS) {
      return <CheckCircle size="small" />;
    }
    if (type === TYPE_OPTIONS.WARNING) {
      return <AlertCircle size="small" />;
    }
    if (type === TYPE_OPTIONS.CRITICAL) {
      return <AlertOctagon size="small" />;
    }
  }

  if (React.isValidElement(icon) && typeof icon !== "boolean") {
    // @ts-expect-error TODO
    return React.cloneElement<IconProps>(icon, { size: "small" });
  }

  return <>{icon}</>;
};

const ContentWrapper = ({
  type,
  inlineActions,
  children,
}: {
  inlineActions?: boolean;
  type: Type;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cx(
        "min-h-icon-medium flex items-center",
        !inlineActions && "w-full",
        "[&_.orbit-list-item]:text-ink-dark [&_.orbit-text]:text-ink-dark [&_.orbit-heading]:text-ink-dark",
        ...alertDescendantClasses[type],
      )}
    >
      {children}
    </div>
  );
};

const AlertCloseButton = ({
  hasChildren,
  dataTest,
  onClick,
  labelClose,
  icon,
}: {
  hasChildren: boolean;
  dataTest: string;
  labelClose?: string;
  onClick?: Common.Callback;
  icon: React.ReactNode;
}) => {
  return (
    <div className={cx("end-0", hasChildren && "top-0")}>
      <ButtonLink
        dataTest={dataTest}
        onClick={onClick}
        size="small"
        iconLeft={icon}
        type="secondary"
        title={labelClose}
      />
    </div>
  );
};

const Alert = (props: Props) => {
  const {
    type = TYPE_OPTIONS.INFO,
    title,
    icon,
    closable,
    onClose,
    children,
    dataTest,
    id,
    spaceAfter,
    suppressed,
    inlineActions,
    labelClose,
  } = props;
  return (
    <div
      className={cx(
        "orbit-alert",
        "rounded-150 text-ink-dark font-base text-normal p-300 relative box-border flex w-full border border-t-[3px] leading-normal",
        "lm:border-s-[3px] lm:border-t",
        "tb:rounded-100",
        Boolean(inlineActions) && "items-center",
        suppressed ? "bg-cloud-light border-cloud-normal lm:border-t-cloud-normal" : COLORS[type],
        ACCENT_BORDER[type],
        spaceAfter && spaceAfterClasses[spaceAfter],
      )}
      id={id}
      data-test={dataTest}
    >
      {icon && (
        <div
          className={cx(
            "me-200 m-0 shrink-0 leading-none",
            Boolean(inlineActions) && "lm:mt-150 flex items-center self-baseline",
            ICON_COLOR[type],
            "tb:me-200 tb:[&_svg]:size-icon-medium",
          )}
        >
          <StyledIcon type={type} icon={icon} />
        </div>
      )}
      <div
        className={cx(
          "flex flex-1",
          title && inlineActions ? "flex-row" : "flex-col",
          !title && "items-center",
          Boolean(inlineActions) && "justify-between",
        )}
      >
        {title && (
          <div
            className={cx(
              "text-ink-dark min-h-icon-medium flex items-center font-bold",
              !!children && (inlineActions ? "mb-0" : "mb-100"),
              Boolean(inlineActions) && "grow basis-0",
            )}
          >
            {title}
          </div>
        )}
        {children && !inlineActions && <ContentWrapper type={type}>{children}</ContentWrapper>}
        {inlineActions && (
          <ContentWrapper type={type} inlineActions={!!inlineActions}>
            {inlineActions}
          </ContentWrapper>
        )}
      </div>
      {closable && (
        <AlertCloseButton
          hasChildren={!!children}
          dataTest={CLOSE_BUTTON_DATA_TEST}
          onClick={onClose}
          labelClose={labelClose}
          icon={<Close size="small" color={type} />}
        />
      )}
    </div>
  );
};

export { default as AlertButton } from "./AlertButton";

export default Alert;
