"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import { getSpacingClasses } from "../common/tailwind";
import { SPACINGS } from "../utils/layout/consts";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # BadgeList
 *
 * To implement BadgeList component into your project you'll need to add the import:
 *
 * ```jsx
 * import BadgeList, { BadgeListItem } from "@kiwicom/orbit-components/lib/BadgeList";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <BadgeList>
 *   <BadgeListItem icon={<Airplane />}>Lorem ipsum dolor sit amet</BadgeListItem>
 * </BadgeList>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in BadgeList component.
 *
 * | Name      | Type                  | Default | Description                                                        |
 * | :-------- | :-------------------- | :------ | :----------------------------------------------------------------- |
 * | children  | `React.Node`          |         | The content of the BadgeList.                                      |
 * | dataTest  | `string`              |         | Optional prop for testing purposes.                                |
 * | id        | `string`              |         | Set `id` for `BadgeList`                                           |
 * | ariaLabel | `string`              |         | Adds aria-label to the BadgeList's `ul` element for accessibility. |
 * | spacing   | [`spacing`](#spacing) | `"100"` | The size of the spacing between BadgeListItems.                    |
 *
 * ### BadgeListItem
 *
 * | Name          | Type            | Default     | Description                                           |
 * | :------------ | :-------------- | :---------- | :---------------------------------------------------- |
 * | children      | `React.Node`    |             | The content of the BadgeListItem.                     |
 * | icon          | `React.Node`    |             | The displayed icon on the left.                       |
 * | iconLabel     | `string`        |             | Adds aria-label to the icon for better accessibility. |
 * | type          | [`enum`](#enum) | `"neutral"` | The color type of the BadgeListItem.                  |
 * | size          | [`enum`](#enum) | `"small"`   | The text size of the BadgeListItem.                   |
 * | strikeThrough | `boolean`       | `false`     | Whether the text is striked through.                  |
 * | dataTest      | `string`        |             | Optional prop for testing purposes.                   |
 *
 * ### enum
 *
 * | type         | size       |
 * | :----------- | ---------- |
 * | `"neutral"`  | `"small"`  |
 * | `"info"`     | `"normal"` |
 * | `"success"`  |            |
 * | `"warning"`  |            |
 * | `"critical"` |            |
 *
 * ### spacing
 *
 * | spacing values |
 * | :------------- |
 * | `"none"`       |
 * | `"reverse"`    |
 * | `"50"`         |
 * | `"100"`        |
 * | `"150"`        |
 * | `"200"`        |
 * | `"300"`        |
 * | `"400"`        |
 * | `"500"`        |
 * | `"600"`        |
 * | `"800"`        |
 * | `"1000"`       |
 * | `"1200"`       |
 * | `"1600"`       |
 *
 *
 * @orbit-doc-end
 */
const BadgeList = ({
  children,
  dataTest,
  id,
  ariaLabel,
  spacing = SPACINGS.ONE_HUNDRED,
}: Props) => {
  return (
    <ul
      className={cx(
        "orbit-badge-list m-0 flex flex-col p-0",
        spacing && getSpacingClasses(spacing, undefined, "column"),
      )}
      data-test={dataTest}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </ul>
  );
};

export { default as BadgeListItem } from "./BadgeListItem";
export default BadgeList;
