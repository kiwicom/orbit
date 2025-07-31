"use client";

import * as React from "react";
import cx from "clsx";

import type { Props, Align, SideOffset } from "./types";
import { getSpaceAfterClasses } from "../common/tailwind";

const BORDER_TYPE_CLASSES = {
  none: "border-none",
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double",
} as const;

const enum Indent {
  none = "none",
  small = "small",
  medium = "medium",
  large = "large",
  XLarge = "XLarge",
  XXLarge = "XXLarge",
  THREE_HUNDRED = "300",
  FOUR_HUNDRED = "400",
  SIX_HUNDRED = "600",
  EIGHT_HUNDRED = "800",
  ONE_THOUSAND = "1000",
}

function getSideOffsetAmount(indent: SideOffset, align: Align) {
  const classes = {
    left: {
      [Indent.none]: "w-full",
      [Indent.THREE_HUNDRED]: "w-[calc(100%_-_theme(spacing.300))]",
      [Indent.FOUR_HUNDRED]: "w-[calc(100%_-_theme(spacing.400))]",
      [Indent.SIX_HUNDRED]: "w-[calc(100%_-_theme(spacing.600))]",
      [Indent.EIGHT_HUNDRED]: "w-[calc(100%_-_theme(spacing.800))]",
      [Indent.ONE_THOUSAND]: "w-[calc(100%_-_theme(spacing.1000))]",
    },
    right: {
      [Indent.none]: "w-full",
      [Indent.THREE_HUNDRED]: "ms-300 w-[calc(100%_-_theme(spacing.300))]",
      [Indent.FOUR_HUNDRED]: "ms-400 w-[calc(100%_-_theme(spacing.400))]",
      [Indent.SIX_HUNDRED]: "ms-600 w-[calc(100%_-_theme(spacing.600))]",
      [Indent.EIGHT_HUNDRED]: "ms-800 w-[calc(100%_-_theme(spacing.800))]",
      [Indent.ONE_THOUSAND]: "ms-1000 w-[calc(100%_-_theme(spacing.1000))]",
    },
    center: {
      [Indent.none]: "w-full",
      [Indent.THREE_HUNDRED]: "ms-300 w-[calc(100%_-_theme(spacing.300)*2)]",
      [Indent.FOUR_HUNDRED]: "ms-400 w-[calc(100%_-_theme(spacing.400)*2)]",
      [Indent.SIX_HUNDRED]: "ms-600 w-[calc(100%_-_theme(spacing.600)*2)]",
      [Indent.EIGHT_HUNDRED]: "ms-800 w-[calc(100%_-_theme(spacing.800)*2)]",
      [Indent.ONE_THOUSAND]: "ms-1000 w-[calc(100%_-_theme(spacing.1000)*2)]",
    },
  };

  return classes[align][indent];
}

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Separator
 *
 * To implement the Separator component into your project you'll need to add the import:
 *
 * ```jsx
 * import Separator from "@kiwicom/orbit-components/lib/Separator";
 * ```
 *
 * After adding import to your project you can use it simply like:
 *
 * ```jsx
 * <Separator />
 * ```
 *
 * ## Props
 *
 * The table below contains all types of props available in the Separator component.
 *
 * | Name       | Type              | Default   | Description                                                                                                                                      |
 * | :--------- | :---------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
 * | sideOffset | [`enum`](#enum)   | `"none"`  | Amount of padding expressed as [spacing tokens](https://orbit.kiwi/foundation/spacing/) in the opposite direction depending on the `align` prop. |
 * | align      | [`enum`](#enum)   | `"left"`  | The direction of indentation. If `"center"` then it's indented from both sides.                                                                  |
 * | spaceAfter | [`enum`](#enum)   |           | Additional `margin-bottom` after component.                                                                                                      |
 * | type       | [`enum`](#enum)   | `"solid"` | The type of the separator.                                                                                                                       |
 * | color      | [`enum`](#enum)   |           | The color of the separator. The value should be a string with the value of a Tailwind border color class valid in Orbit.                         |
 * | label      | `React.ReactNode` |           | Optional text or content displayed within the separator line                                                                                     |
 * | ariaHidden | `boolean`         |           | If `true`, hides the separator from screen readers. Use when the separator is purely decorative.                                                 |
 *
 * ### enum
 *
 * | sideOffset | align      | type       | spaceAfter   | color (examples)          |
 * | :--------- | :--------- | :--------- | :----------- | :------------------------ |
 * | `"none"`   | `"left"`   | `"solid"`  | `"none"`     | `"border-blue-normal"`    |
 * | `"300"`    | `"right"`  | `"dashed"` | `"smallest"` | `"border-green-normal"`   |
 * | `"400"`    | `"center"` | `"dotted"` | `"small"`    | `"border-red-normal"`     |
 * | `"600"`    |            | `"double"` | `"normal"`   | `"border-ink-normal"`     |
 * | `"800"`    |            | `"none"`   | `"medium"`   | `"border-product-normal"` |
 * | `"1000"`   |            |            | `"large"`    | ... and many more         |
 * |            |            |            | `"largest"`  |                           |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Separator component has been designed with accessibility in mind, providing semantic separation using a semantic element.
 *
 * ### Accessibility Props
 *
 * | Name       | Type    | Description                                        |
 * | :--------- | :------ | :------------------------------------------------- |
 * | ariaHidden | boolean | If `true`, hides the separator from screen readers |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically renders as a semantic `<hr>` element
 * - When a `label` is provided, the label text is announced by screen readers
 *
 * ### Best Practices
 *
 * - Set `ariaHidden={true}` when the separator is purely decorative and doesn't provide meaningful content structure
 * - When using a `label`, ensure the text is descriptive and helpful for understanding content structure
 *
 * ### Examples
 *
 * #### Semantic separator for content organization
 *
 * ```jsx
 * <Separator />
 * ```
 *
 * Screen reader announces: "Separator".
 *
 * #### Decorative separator
 *
 * ```jsx
 * <Separator ariaHidden />
 * ```
 *
 * Screen reader announces: Nothing.
 *
 * #### Separator with descriptive label
 *
 * ```jsx
 * <Separator label="Contact Information" />
 * ```
 *
 * Screen reader announces: "Separator. Contact Information."
 *
 *
 * @orbit-doc-end
 */
const Separator = ({
  align = "left",
  sideOffset = "none",
  spaceAfter,
  type = "solid",
  color,
  label,
  ariaHidden,
}: Props) => {
  return (
    <div className={cx("relative min-h-px w-full", spaceAfter && getSpaceAfterClasses(spaceAfter))}>
      <hr
        className={cx(
          "orbit-separator",
          "absolute start-0 top-1/2 mt-0 box-border -translate-y-1/2 border-t",
          color || "border-elevation-flat-border-color",
          getSideOffsetAmount(sideOffset, align),
          BORDER_TYPE_CLASSES[type],
        )}
        aria-hidden={ariaHidden}
      />
      {label && (
        <span className="bg-white-normal px-100 absolute left-1/2 top-1/2 flex min-w-max -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          {label}
        </span>
      )}
    </div>
  );
};

export default Separator;
