"use client";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Icon
 *
 * To implement Icon component into your project you need to know its name. You can find it in [the list of all icons](https://kiwicom.github.io/orbit/?selectedKind=Icon&selectedStory=List%20of%20all%20icons). Then just add an import of the icon:
 *
 * ```jsx
 * import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Airplane />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available for icons in general.
 *
 * | Name         | Type            | Default        | Description                                                                                |
 * | :----------- | :-------------- | :------------- | :----------------------------------------------------------------------------------------- |
 * | className    | `string`        |                | The optional className of Icon.                                                            |
 * | color        | [`enum`](#enum) | `currentColor` | The color of the Icon.                                                                     |
 * | customColor  | `string`        |                | The customColor of the Icon, as valid CSS value. [See Functional specs](#functional-specs) |
 * | dataTest     | `string`        |                | Optional prop for testing purposes.                                                        |
 * | size         | [`enum`](#enum) | `"medium"`     | The size of the Icon.                                                                      |
 * | reverseOnRtl | `boolean`       | `false`        | If `true`, the icon will be reversed if `theme.rtl` is set to `true`.                      |
 * | ariaHidden   | `boolean`       |                | Adds prop `aria-hidden` to the icon. See Accessibility tab.                                |
 * | ariaLabel    | `string`        |                | Adds prop `aria-label` to the icon. See Accessibility tab.                                 |
 *
 * ### enum
 *
 * | color         | size       |
 * | :------------ | :--------- |
 * | `"primary"`   | `"small"`  |
 * | `"secondary"` | `"medium"` |
 * | `"tertiary"`  | `"large"`  |
 * | `"info"`      |            |
 * | `"success"`   |            |
 * | `"warning"`   |            |
 * | `"critical"`  |            |
 *
 * ## Functional specs
 *
 * - If you don't pass `customColor` or `color` prop to Icon, it will inherit color from parent container with `currentColor` by default.
 *
 * ## iconFont
 *
 * Icon font is available in `@kiwicom/orbit-components/orbit-icons-font/orbit-icons` folder in these formats `ttf`, `woff2`, `svg`
 *
 * ```jsx
 * import iconFont from "@kiwicom/orbit-components/orbit-icons-font/orbit-icons.woff2";
 * ```
 *
 *
 * Accessibility
 * -------------
 * # Accessibility
 *
 * ## Icon
 *
 * The Icon component has been designed with accessibility in mind.
 *
 * It renders an SVG element that can either be decorative or convey important information. For that reason, it is important to provide the necessary context for screen readers.
 *
 * The following props can be used:
 *
 * | Name       | Type      | Description                                                       |
 * | :--------- | :-------- | :---------------------------------------------------------------- |
 * | ariaLabel  | `string`  | The text that describes the icon, announced by screen readers.    |
 * | ariaHidden | `boolean` | If set to `true`, screen readers will completely ignore the icon. |
 *
 * The props above are required and mutually exclusive. This means that you must use one of them, and you cannot use both at the same time.
 *
 * The `ariaLabel` prop should ideally be translated and be more than just the name of the icon. It is especially important when the icon is used alone and conveys information by itself.
 *
 * The `ariaHidden` prop is useful when the icon is already labeled by surrounding content, and it would be redundant to announce it again.
 *
 *
 * @orbit-doc-end
 */
import * as React from "react";
import cx from "clsx";

import { ICON_SIZES, ICON_COLORS } from "./consts";
import type { GetSize, FactoryProps, Props } from "./types";

export const getSize: GetSize =
  size =>
  ({ theme }) => {
    const tokens = {
      [ICON_SIZES.SMALL]: theme.orbit.iconSmallSize,
      [ICON_SIZES.MEDIUM]: theme.orbit.iconMediumSize,
      [ICON_SIZES.LARGE]: theme.orbit.iconLargeSize,
      [ICON_SIZES.EXTRA_LARGE]: theme.orbit.iconExtraLargeSize,
    };
    return tokens[size] || tokens[ICON_SIZES.MEDIUM];
  };

export const iconColorClasses: Record<ICON_COLORS, string> = {
  [ICON_COLORS.PRIMARY]: "text-icon-primary-foreground",
  [ICON_COLORS.SECONDARY]: "text-icon-secondary-foreground",
  [ICON_COLORS.TERTIARY]: "text-icon-tertiary-foreground",
  [ICON_COLORS.INFO]: "text-icon-info-foreground",
  [ICON_COLORS.SUCCESS]: "text-icon-success-foreground",
  [ICON_COLORS.WARNING]: "text-icon-warning-foreground",
  [ICON_COLORS.CRITICAL]: "text-icon-critical-foreground",
};

const OrbitIcon = ({
  size = ICON_SIZES.MEDIUM,
  color,
  customColor,
  className,
  children,
  viewBox,
  dataTest,
  ariaHidden,
  reverseOnRtl,
  ariaLabel,
}: FactoryProps & Props) => {
  return (
    <svg
      className={cx(
        className,
        "orbit-icon",
        "inline-block shrink-0 fill-current align-middle",
        reverseOnRtl && "rtl:-scale-x-100",
        size === ICON_SIZES.SMALL && "size-icon-small",
        size === ICON_SIZES.MEDIUM && "size-icon-medium",
        size === ICON_SIZES.LARGE && "size-icon-large",
        size === ICON_SIZES.EXTRA_LARGE && "size-icon-extra-large",
        !customColor && color && iconColorClasses[color],
      )}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      data-test={dataTest}
      aria-hidden={ariaHidden ? "true" : undefined}
      aria-label={ariaLabel}
      style={customColor ? { color: customColor } : {}}
    >
      {children}
    </svg>
  );
};

export default OrbitIcon;
