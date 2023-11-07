import { SIZE_OPTIONS, TYPE_OPTIONS } from "../consts";
import type { Type as ALERT_TYPE } from "../../Alert/types";

export const sizeClasses: Record<SIZE_OPTIONS, string> = {
  [SIZE_OPTIONS.SMALL]: "text-small leading-small",
  [SIZE_OPTIONS.NORMAL]: "text-normal leading-normal",
  [SIZE_OPTIONS.LARGE]: "text-large leading-large",
  [SIZE_OPTIONS.EXTRA_LARGE]: "text-extra-large leading-extra-large",
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

export const alertDescendantClasses: Record<ALERT_TYPE, string[]> = {
  info: [
    "[&_a:not([class])]:text-link-info-foreground [&_a:not([class])]:font-medium [&_a:not([class])]:no-underline",
    "[&_.orbit-text-link:not(.orbit-text-link--secondary)]:text-link-info-foreground [&_.orbit-text-link:not(.orbit-text-link--secondary)]:font-medium [&_.orbit-text-link:not(.orbit-text-link--secondary)]:no-underline",
    "hover:[&_a:not([class])]:text-link-info-foreground-hover active:[&_a:not([class])]:text-link-info-foreground-active hover:[&_a:not([class])]:outline-none active:[&_a:not([class])]:outline-none hover:[&_a:not([class])]:no-underline active:[&_a:not([class])]:no-underline",
    "hover:[&_.orbit-text-link]:text-link-info-foreground-hover active:[&_.orbit-text-link]:text-link-info-foreground-active hover:[&_.orbit-text-link]:outline-none active:[&_.orbit-text-link]:outline-none hover:[&_.orbit-text-link]:no-underline active:[&_.orbit-text-link]:no-underline",
  ],
  success: [
    "[&_a:not([class])]:text-link-success-foreground [&_a:not([class])]:font-medium [&_a:not([class])]:no-underline",
    "[&_.orbit-text-link:not(.orbit-text-link--secondary)]:text-link-success-foreground [&_.orbit-text-link:not(.orbit-text-link--secondary)]:font-medium [&_.orbit-text-link:not(.orbit-text-link--secondary)]:no-underline",
    "hover:[&_a:not([class])]:text-link-success-foreground-hover active:[&_a:not([class])]:text-link-success-foreground-active hover:[&_a:not([class])]:outline-none active:[&_a:not([class])]:outline-none hover:[&_a:not([class])]:no-underline active:[&_a:not([class])]:no-underline",
    "hover:[&_.orbit-text-link]:text-link-success-foreground-hover active:[&_.orbit-text-link]:text-link-success-foreground-active hover:[&_.orbit-text-link]:outline-none active:[&_.orbit-text-link]:outline-none hover:[&_.orbit-text-link]:no-underline active:[&_.orbit-text-link]:no-underline",
  ],
  warning: [
    "[&_a:not([class])]:text-link-warning-foreground [&_a:not([class])]:font-medium [&_a:not([class])]:no-underline",
    "[&_.orbit-text-link:not(.orbit-text-link--secondary)]:text-link-warning-foreground [&_.orbit-text-link:not(.orbit-text-link--secondary)]:font-medium [&_.orbit-text-link:not(.orbit-text-link--secondary)]:no-underline",
    "hover:[&_a:not([class])]:text-link-warning-foreground-hover active:[&_a:not([class])]:text-link-warning-foreground-active hover:[&_a:not([class])]:outline-none active:[&_a:not([class])]:outline-none hover:[&_a:not([class])]:no-underline active:[&_a:not([class])]:no-underline",
    "hover:[&_.orbit-text-link]:text-link-warning-foreground-hover active:[&_.orbit-text-link]:text-link-warning-foreground-active hover:[&_.orbit-text-link]:outline-none active:[&_.orbit-text-link]:outline-none hover:[&_.orbit-text-link]:no-underline active:[&_.orbit-text-link]:no-underline",
  ],
  critical: [
    "[&_a:not([class])]:text-link-critical-foreground [&_a:not([class])]:font-medium [&_a:not([class])]:no-underline",
    "[&_.orbit-text-link:not(.orbit-text-link--secondary)]:text-link-critical-foreground [&_.orbit-text-link:not(.orbit-text-link--secondary)]:font-medium [&_.orbit-text-link:not(.orbit-text-link--secondary)]:no-underline",
    "hover:[&_a:not([class])]:text-link-critical-foreground-hover active:[&_a:not([class])]:text-link-critical-foreground-active hover:[&_a:not([class])]:outline-none active:[&_a:not([class])]:outline-none hover:[&_a:not([class])]:no-underline active:[&_a:not([class])]:no-underline",
    "hover:[&_.orbit-text-link]:text-link-critical-foreground-hover active:[&_.orbit-text-link]:text-link-critical-foreground-active hover:[&_.orbit-text-link]:outline-none active:[&_.orbit-text-link]:outline-none hover:[&_.orbit-text-link]:no-underline active:[&_.orbit-text-link]:no-underline",
  ],
};
