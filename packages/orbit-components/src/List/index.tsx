"use client";

import * as React from "react";
import cx from "clsx";

import { SIZES, TYPES } from "./consts";
import type { Props } from "./types";
import { getSpacingClasses, spaceAfterClasses } from "../common/tailwind";
import { SPACINGS } from "../utils/layout/consts";

const sizeTokens = {
  [SIZES.SMALL]:
    "text-small leading-small [&_.orbit-list-item-icon>svg]:h-icon-small [&_.orbit-list-item-icon>svg]:w-icon-small",
  [SIZES.NORMAL]:
    "text-normal leading-normal [&_.orbit-list-item-icon>svg]:h-icon-medium [&_.orbit-list-item-icon>svg]:w-icon-medium [&_.orbit-list-item-label]:text-small",
  [SIZES.LARGE]:
    "text-large leading-large [&_.orbit-list-item-icon>svg]:h-icon-large [&_.orbit-list-item-icon>svg]:w-icon-large [&_.orbit-list-item-label]:text-normal",
};

const typeTokens = {
  [TYPES.PRIMARY]: "text-primary-foreground",
  [TYPES.SECONDARY]: "text-secondary-foreground",
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # List
 *
 * To implement List component into your project you'll need to add the import:
 *
 * ```jsx
 * import List, { ListItem } from "@kiwicom/orbit-components/lib/List";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <List>
 *   <ListItem>Hello world!</ListItem>
 * </List>
 * ```
 *
 * For accessibility, you can associate the List with a heading using `ariaLabelledby`:
 *
 * ```jsx
 * <Heading id="flights-heading">Affected flights</Heading>
 * <List ariaLabelledby="flights-heading">
 *   <ListItem>Flight ABC123</ListItem>
 *   <ListItem>Flight DEF456</ListItem>
 * </List>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in List component.
 *
 * | Name           | Type                  | Default     | Description                                                      |
 * | :------------- | :-------------------- | :---------- | :--------------------------------------------------------------- |
 * | **children**   | `React.Node`          |             | The content of the List, normally [`ListItem`](#listitem-props). |
 * | ariaLabelledby | `string`              |             | Optional prop for setting `aria-labelledby` attribute.           |
 * | dataTest       | `string`              |             | Optional prop for testing purposes.                              |
 * | id             | `string`              |             | Set `id` for `List`.                                             |
 * | size           | [`enum`](#enum)       | `"normal"`  | The size of the List.                                            |
 * | spaceAfter     | `enum`                |             | Additional `margin-bottom` after component.                      |
 * | type           | [`enum`](#enum)       | `"primary"` | The color type of the List.                                      |
 * | spacing        | [`spacing`](#spacing) | `"100"`     | The spacing between List children.                               |
 *
 * ### enum
 *
 * | spaceAfter   |
 * | :----------- |
 * | `"none"`     |
 * | `"smallest"` |
 * | `"small"`    |
 * | `"normal"`   |
 * | `"medium"`   |
 * | `"large"`    |
 * | `"largest"`  |
 *
 * ### spacing
 *
 * | name     |        |
 * | :------- | :----- |
 * | `"none"` | `null` |
 * | `"50"`   | `2px`  |
 * | `"100"`  | `4px`  |
 * | `"150"`  | `6px`  |
 * | `"200"`  | `8px`  |
 * | `"300"`  | `12px` |
 * | `"400"`  | `16px` |
 * | `"500"`  | `20px` |
 * | `"600"`  | `24px` |
 * | `"800"`  | `32px` |
 * | `"1000"` | `40px` |
 * | `"1200"` | `48px` |
 * | `"1600"` | `64px` |
 *
 * ### ListItem Props
 *
 * Table below contains all types of the props in ListItem component.
 *
 * | Name         | Type          | Default         | Description                                                                            |
 * | :----------- | :------------ | :-------------- | :------------------------------------------------------------------------------------- |
 * | **children** | `React.Node`  |                 | The content of the ListItem.                                                           |
 * | dataTest     | `string`      |                 | Optional prop for testing purposes.                                                    |
 * | icon         | `React.Node`  | `"CircleSmall"` | The displayed Icon or CarrierLogo component. [See Functional specs](#functional-specs) |
 * | label        | `Translation` |                 | Adds a label to ListItem                                                               |
 *
 * ### enum
 *
 * | size       | type          |
 * | :--------- | :------------ |
 * | `"small"`  | `"primary"`   |
 * | `"normal"` | `"secondary"` |
 * | `"large"`  |
 *
 * #### Functional specs
 *
 * - You can color your icon if you pass some value into `color` or `customColor` prop of the **Icon**. Be aware of using other components, because they are not styled by default.
 *
 *
 * @orbit-doc-end
 */
const List = ({
  children,
  dataTest,
  id,
  size = SIZES.NORMAL,
  type = TYPES.PRIMARY,
  spacing = SPACINGS.ONE_HUNDRED,
  spaceAfter,
  ariaLabelledby,
}: Props) => {
  return (
    <ul
      data-test={dataTest}
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cx(
        "orbit-list font-base m-0 flex w-full list-none flex-col p-0",
        sizeTokens[size],
        typeTokens[type],
        spaceAfter != null && spaceAfterClasses[spaceAfter],
        spacing && getSpacingClasses(spacing as SPACINGS),
      )}
    >
      {children}
    </ul>
  );
};

export default List;

export { default as ListItem } from "./ListItem";
