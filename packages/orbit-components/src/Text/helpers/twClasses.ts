import { SIZE_OPTIONS, TYPE_OPTIONS, WEIGHT_OPTIONS } from "../consts";

export const typeClasses: Record<TYPE_OPTIONS, string> = {
  [TYPE_OPTIONS.PRIMARY]:
    "text-primary-foreground [&_a:not(.orbit-text-link)]:text-link-primary-foreground hover:[&_a:not(.orbit-text-link)]:text-link-primary-foreground-hover active:[&_a:not(.orbit-text-link)]:text-link-primary-foreground-active",
  [TYPE_OPTIONS.SECONDARY]:
    "text-secondary-foreground [&_a:not(.orbit-text-link)]:text-link-secondary-foreground hover:[&_a:not(.orbit-text-link)]:text-link-secondary-foreground-hover active:[&_a:not(.orbit-text-link)]:text-link-secondary-foreground-active",
  [TYPE_OPTIONS.SUCCESS]:
    "text-success-foreground [&_a:not(.orbit-text-link)]:text-link-success-foreground hover:[&_a:not(.orbit-text-link)]:text-link-success-foreground-hover active:[&_a:not(.orbit-text-link)]:text-link-success-foreground-active",
  [TYPE_OPTIONS.INFO]:
    "text-info-foreground [&_a:not(.orbit-text-link)]:text-link-info-foreground hover:[&_a:not(.orbit-text-link)]:text-link-info-foreground-hover active:[&_a:not(.orbit-text-link)]:text-link-info-foreground-active",
  [TYPE_OPTIONS.WARNING]:
    "text-warning-foreground [&_a:not(.orbit-text-link)]:text-link-warning-foreground hover:[&_a:not(.orbit-text-link)]:text-link-warning-foreground-hover active:[&_a:not(.orbit-text-link)]:text-link-warning-foreground-active",
  [TYPE_OPTIONS.CRITICAL]:
    "text-critical-foreground [&_a:not(.orbit-text-link)]:text-link-critical-foreground hover:[&_a:not(.orbit-text-link)]:text-link-critical-foreground-hover active:[&_a:not(.orbit-text-link)]:text-link-critical-foreground-active",
  [TYPE_OPTIONS.WHITE]:
    "text-white-foreground [&_a:not(.orbit-text-link)]:text-link-white-foreground hover:[&_a:not(.orbit-text-link)]:text-link-white-foreground-hover active:[&_a:not(.orbit-text-link)]:text-link-white-foreground-active",
};

export const backgroundClasses: Record<TYPE_OPTIONS, string> = {
  [TYPE_OPTIONS.PRIMARY]: "bg-text-primary-background",
  [TYPE_OPTIONS.SECONDARY]: "bg-text-secondary-background",
  [TYPE_OPTIONS.INFO]: "bg-text-info-background",
  [TYPE_OPTIONS.SUCCESS]: "bg-text-success-background",
  [TYPE_OPTIONS.WARNING]: "bg-text-warning-background",
  [TYPE_OPTIONS.CRITICAL]: "bg-text-critical-background",
  [TYPE_OPTIONS.WHITE]: "bg-text-white-background",
};

export const sizeClasses: Record<SIZE_OPTIONS, string> = {
  [SIZE_OPTIONS.SMALL]: "text-small leading-small",
  [SIZE_OPTIONS.NORMAL]: "text-normal leading-normal",
  [SIZE_OPTIONS.LARGE]: "text-large leading-large",
  [SIZE_OPTIONS.EXTRA_LARGE]: "text-extra-large leading-extra-large",
};

export const weightClasses: Record<WEIGHT_OPTIONS, string> = {
  [WEIGHT_OPTIONS.NORMAL]: "font-normal",
  [WEIGHT_OPTIONS.MEDIUM]: "font-medium",
  [WEIGHT_OPTIONS.BOLD]: "font-bold",
};

export const textLinkCommonClasses = [
  "[&_a:not(.orbit-text-link)]:font-medium",
  "[&_a:not(.orbit-text-link)]:underline",
  "hover:[&_a:not(.orbit-text-link)]:no-underline",
  "active:[&_a:not(.orbit-text-link)]:no-underline",
  "hover:[&_a:not(.orbit-text-link)]:outline-none",
  "active:[&_a:not(.orbit-text-link)]:outline-none",
];
