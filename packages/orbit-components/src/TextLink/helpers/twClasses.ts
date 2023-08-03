import { SIZE_OPTIONS, TYPE_OPTIONS } from "../consts";

export const sizeClasses: Record<SIZE_OPTIONS, string> = {
  [SIZE_OPTIONS.SMALL]: "text-small",
  [SIZE_OPTIONS.NORMAL]: "text-normal",
  [SIZE_OPTIONS.LARGE]: "text-large",
  [SIZE_OPTIONS.EXTRA_LARGE]: "text-extra-large",
};

export const typeClasses: Record<TYPE_OPTIONS, string> = {
  [TYPE_OPTIONS.PRIMARY]:
    "text-link-primary-foreground hover:text-link-primary-foreground-hover active:text-link-primary-foreground-active",
  [TYPE_OPTIONS.SECONDARY]:
    "text-link-secondary-foreground hover:text-link-secondary-foreground-hover active:text-link-secondary-foreground-active",
  [TYPE_OPTIONS.SUCCESS]:
    "text-link-success-foreground hover:text-link-success-foreground-hover active:text-link-success-foreground-active",
  [TYPE_OPTIONS.INFO]:
    "text-link-info-foreground hover:text-link-info-foreground-hover active:text-link-info-foreground-active",
  [TYPE_OPTIONS.WARNING]:
    "text-link-warning-foreground hover:text-link-warning-foreground-hover active:text-link-warning-foreground-active",
  [TYPE_OPTIONS.CRITICAL]:
    "text-link-critical-foreground hover:text-link-critical-foreground-hover active:text-link-critical-foreground-active",
  [TYPE_OPTIONS.WHITE]:
    "text-link-white-foreground hover:text-link-white-foreground-hover active:text-link-white-foreground-active",
};
