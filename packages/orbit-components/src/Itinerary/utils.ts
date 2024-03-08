import { TYPE_OPTIONS } from "../Text/consts";
import { typeClasses } from "../Text/helpers/twClasses";

export const alternativeTextTypeColors: Record<TYPE_OPTIONS, string> = {
  [TYPE_OPTIONS.PRIMARY]: typeClasses.primary,
  [TYPE_OPTIONS.SECONDARY]: typeClasses.secondary,
  [TYPE_OPTIONS.INFO]: "text-blue-dark",
  [TYPE_OPTIONS.SUCCESS]: "text-green-dark",
  [TYPE_OPTIONS.WARNING]: "text-orange-dark",
  [TYPE_OPTIONS.CRITICAL]: "text-red-dark",
  [TYPE_OPTIONS.WHITE]: typeClasses.primary,
} as const;

export const commonTextClasses = "orbit-text font-base m-0";
