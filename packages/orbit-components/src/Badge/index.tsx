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
    [TYPE_OPTIONS.INFO]: "bg-badge-info-background text-badge-info-foreground",
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

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Badge
 *
 * To implement Badge component into your project you'll need to add the import:
 *
 * ```jsx
 * import Badge from "@kiwicom/orbit-components/lib/Badge";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Badge>Hello!</Badge>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in Badge component.
 *
 * | Name         | Type                    | Default     | Description                                                          |
 * | :----------- | :---------------------- | :---------- | :------------------------------------------------------------------- |
 * | children     | `React.Node`            |             | The content of the Badge.                                            |
 * | dataTest     | `string`                |             | Optional prop for testing purposes.                                  |
 * | id           | `string`                |             | Set `id` for `Badge`                                                 |
 * | icon         | `React.Node`            |             | The displayed icon on the left.                                      |
 * | type         | [`enum`](#enum)         | `"neutral"` | The color type of the Badge.                                         |
 * | ariaLabel    | `string`                |             | Adds prop adds `aria-label` to an element, useful for screenreaders. |
 * | **carriers** | [`Carrier[]`](#carrier) |             | The content of the CarrierLogo, passed as array of objects.          |
 *
 * ### Carrier
 *
 * Table below contains all types of the props available for object in Carrier array.
 *
 * | Name     | Type            | Description                                                                                   |
 * | :------- | :-------------- | :-------------------------------------------------------------------------------------------- |
 * | **code** | `string`        | The IATA code of the Carrier, defines which logo will be rendered.                            |
 * | name     | `string`        | The name of the Carrier, mainly for information.                                              |
 * | type     | [`enum`](#enum) | The preferred placeholder for non-existing carrier. [See Functional specs](#functional-specs) |
 *
 * ### enum
 *
 * | type               |
 * | :----------------- |
 * | `"neutral"`        |
 * | `"dark"`           |
 * | `"info"`           |
 * | `"success"`        |
 * | `"warning"`        |
 * | `"critical"`       |
 * | `"infoSubtle"`     |
 * | `"criticalSubtle"` |
 * | `"successSubtle"`  |
 * | `"warningSubtle"`  |
 * | `"bundleBasic"`    |
 * | `"bundleMedium"`   |
 * | `"bundleTop"`      |
 *
 * ## Functional specs
 *
 * - If you want to use `circled` badge, please take a look on **NotificationBadge**.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Badge component has been designed with accessibility in mind.
 *
 * ### Screen reader support
 *
 * The Badge component supports screen readers through the `ariaLabel` prop. This prop is especially important when:
 *
 * - The badge contains only an icon
 * - The content is not sufficient to convey the full meaning
 * - Additional context would help understand the badge's purpose
 *
 * For example:
 *
 * ```jsx
 * <Badge ariaLabel="4 passengers" icon={<Icons.Passenger />}>
 *   4
 * </Badge>
 * ```
 *
 * In this example, while sighted users see the number "4" with a passengers icon, screen reader users hear "4 passengers" which provides the complete context.
 *
 * As it is announced by screen readers, the content should have meaningful and translated text.
 *
 * ### Icons
 *
 * When using icons in badges:
 *
 * - Provide an `ariaLabel` if the icon has a meaning by itself that is not obvious to screen readers, regardless of the existence of text
 * - If the icon is decorative and the badge contains text, the icon should be marked as `aria-hidden="true"`
 *
 *
 * @orbit-doc-end
 */
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
