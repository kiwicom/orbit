"use client";

import React from "react";
import cx from "clsx";

import type { Props, CommonProps, Direction, Spacing } from "./types";
import type * as Common from "../common/types";
import {
  getDisplayClasses,
  getDirectionClasses,
  getAlignItemsClasses,
  getWrapClasses,
  getGrowClasses,
  getShrinkClasses,
  getAlignContentClasses,
  getJustifyClasses,
  getSpacingClasses,
  getSpaceAfterClasses,
} from "../common/tailwind";
import { QUERIES } from "../utils/mediaQuery";
import { DIRECTION } from "../common/tailwind/direction";
import { SPACING } from "../common/tailwind/spacing";
import { ALIGN } from "../common/tailwind/alignItems";
import { JUSTIFY } from "../common/tailwind/justify";

const shouldUseFlex = (props: CommonProps & Common.SpaceAfter) =>
  props.flex ||
  Object.keys(props)
    .map(prop => ["spacing", "spaceAfter", "dataTest", "children", "ariaLabel"].includes(prop))
    .includes(false);

// use margins instead of gap to work with display:block
const shouldUseMargin = (props: CommonProps & Common.SpaceAfter) => {
  if (props.useMargin || props.legacy) return true;
  if (!shouldUseFlex(props) && Boolean(props.spacing)) return true;
  return false;
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Stack
 *
 * To implement the Stack component into your project you'll need to add the import:
 *
 * ```jsx
 * import Stack from "@kiwicom/orbit-components/lib/Stack";
 * ```
 *
 * After adding import to your project you can use it simply like:
 *
 * ```jsx
 * <Stack>
 *   <Button>My button</Button>
 *   <Button iconRight={<ChevronDown />} />
 * </Stack>
 * ```
 *
 * ## Props
 *
 * The table below contains all types of props available in the Stack component.
 *
 * | Name         | Type                       | Default    | Description                                                                                         |
 * | :----------- | :------------------------- | :--------- | :-------------------------------------------------------------------------------------------------- |
 * | as           | `string`                   | `"div"`    | The string used for the root node.                                                                  |
 * | align        | [`enum`](#enum)            | `"start"`  | The `align-items` and `align-content` of the Stack.                                                 |
 * | basis        | `string`                   | `auto`     | Specifies the basis value of `flex-basis`.                                                          |
 * | **children** | `React.Node`               |            | Content of the Stack.                                                                               |
 * | dataTest     | `string`                   |            | Optional prop for testing purposes.                                                                 |
 * | desktop      | [`Object`](#media-queries) |            | Object for setting up properties for the desktop viewport. [See Media queries](#media-queries)      |
 * | direction    | [`enum`](#enum)            |            | The `flex-direction` of the Stack. [See Functional specs](#functional-specs)                        |
 * | flex         | `boolean`                  | `false`    | If `true` or you specify some flex attribute, the Stack will use flex attributes.                   |
 * | grow         | `boolean`                  | `true`     | If `true`, the Stack will have `flex-grow` set to `1`, otherwise it will be `0`.                    |
 * | id           | `string`                   |            | Optional, sets the id for `Stack`.                                                                  |
 * | inline       | `boolean`                  | `false`    | If `true`, the Stack will have `display` set to `inline-flex`.                                      |
 * | justify      | [`enum`](#enum)            | `"start"`  | The `justify-content` of the Stack.                                                                 |
 * | largeDesktop | [`Object`](#media-queries) |            | Object for setting up properties for the largeDesktop viewport. [See Media queries](#media-queries) |
 * | largeMobile  | [`Object`](#media-queries) |            | Object for setting up properties for the largeMobile viewport. [See Media queries](#media-queries)  |
 * | mediumMobile | [`Object`](#media-queries) |            | Object for setting up properties for the mediumMobile viewport. [See Media queries](#media-queries) |
 * | shrink       | `boolean`                  | `false`    | If `true`, the Stack will have `flex-shrink` set to `1`.                                            |
 * | spacing      | [`spacing`](#spacing)      | `"medium"` | The spacing between its children.                                                                   |
 * | spaceAfter   | `enum`                     |            | Additional `padding` to bottom of the Stack.                                                        |
 * | tablet       | [`Object`](#media-queries) |            | Object for setting up properties for the tablet viewport. [See Media queries](#media-queries)       |
 * | wrap         | `boolean`                  | `false`    | If `true`, the Stack will have `flex-wrap` set to `wrap`, otherwise it will be `nowrap`.            |
 * | useMargin    | `boolean`                  | `false`    | If `true`, the Stack will be using margins instead of gap                                           |
 * | ariaLabel    | `string`                   |            | Optional prop for setting `aria-label` attribute.                                                   |
 *
 * ### Media Queries
 *
 * When you need to specify some different behavior of the Stack component on different viewports, you can use properties for it.
 * There are `mediumMobile`, `largeMobile`, `tablet`, `desktop` and `largeDesktop` available and it behaves the same as [mediaQueries](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/mediaQuery) functions.
 * All these properties - objects have the same own properties and none is required.
 *
 * | Name       | Type                  | Default   | Description                                                                                 |
 * | :--------- | :-------------------- | :-------- | :------------------------------------------------------------------------------------------ |
 * | align      | [`enum`](#enum)       | `"start"` | The `align-items` and `align-content` of the Stack.                                         |
 * | basis      | `string`              | `auto`    | Specifies the basis value of `flex-basis`.                                                  |
 * | direction  | [`enum`](#enum)       | `"row"`   | The `flex-direction` of the Stack.                                                          |
 * | grow       | `boolean`             | `true`    | If `true`, the Stack will have `flex-grow` set to `1`, otherwise it will be `0`.            |
 * | inline     | `boolean`             | `false`   | If `true`, the Stack will have `display` set to `inline-flex`, otherwise it will be `flex`. |
 * | justify    | [`enum`](#enum)       | `"start"` | The `justify-content` of the Stack.                                                         |
 * | shrink     | `boolean`             | `true`    | If `false`, the Stack will have `flex-shrink` set to `0`.                                   |
 * | spacing    | [`spacing`](#spacing) |           | The spacing between its children.                                                           |
 * | spaceAfter | `enum`                |           | Additional `padding` to bottom of the Stack.                                                |
 * | wrap       | `boolean`             | `false`   | If `true`, the Stack will have `flex-wrap` set to `wrap`, otherwise it will be `nowrap`.    |
 *
 * ## Functional specs
 *
 * - The default behavior for the `Stack` component is to not be a `flexbox` container. It means that by default it's nesting children natively (below each other) and it won't use any `flex` CSS properties.
 *
 * - If you specify some property (except children, spaceAfter, dataTest and spacing) it will become a `flexbox` container and the `flex-direction: row` will be used.
 *
 * ### enum
 *
 * | justify     | direction          | align       | spaceAfter   |
 * | :---------- | :----------------- | :---------- | :----------- |
 * | `"start"`   | `"row"`            | `"start"`   | `"none"`     |
 * | `"end"`     | `"column"`         | `"end"`     | `"smallest"` |
 * | `"center"`  | `"row-reverse"`    | `"center"`  | `"small"`    |
 * | `"between"` | `"column-reverse"` | `"stretch"` | `"normal"`   |
 * | `"around"`  |                    |             | `"medium"`   |
 * |             |                    |             | `"large"`    |
 * |             |                    |             | `"largest"`  |
 *
 * ### spacing
 *
 * | name     | size on `992px - ∞` |
 * | :------- | :------------------ |
 * | `"none"` | `null`              |
 * | `"50"`   | `2px`               |
 * | `"100"`  | `4px`               |
 * | `"150"`  | `6px`               |
 * | `"200"`  | `8px`               |
 * | `"300"`  | `12px`              |
 * | `"400"`  | `16px`              |
 * | `"500"`  | `20px`              |
 * | `"600"`  | `24px`              |
 * | `"800"`  | `32px`              |
 * | `"1000"` | `40px`              |
 * | `"1200"` | `48px`              |
 * | `"1600"` | `64px`              |
 *
 *
 * @orbit-doc-end
 */
const Stack = (props: Props) => {
  const {
    children,
    as: ComponentTag = "div",
    dataTest,
    id,
    basis,
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
    ariaLabel,
  } = props;

  const viewportProps = { mediumMobile, largeMobile, tablet, desktop, largeDesktop };

  const defaultMediaProps = React.useMemo(() => {
    const isFlex = shouldUseFlex(props);

    const {
      spacing = SPACING.FOUR_HUNDRED,
      spaceAfter,
      direction = isFlex ? DIRECTION.ROW : DIRECTION.COLUMN,
      grow = true,
      justify = JUSTIFY.START,
      shrink = false,
      wrap = false,
      flex,
      useMargin = shouldUseMargin({ ...props, spacing }),
      align = ALIGN.START,
      inline = false,
    } = props;

    return {
      flex: flex || isFlex,
      useMargin,
      direction,
      spacing,
      grow,
      inline,
      justify,
      align,
      shrink,
      wrap,
      spaceAfter,
    };
  }, [props]);

  const vars = {
    "--basis": basis,
    "--mm-basis": mediumMobile?.basis,
    "--lm-basis": largeMobile?.basis,
    "--tb-basis": tablet?.basis,
    "--de-basis": desktop?.basis,
    "--ld-basis": largeDesktop?.basis,
  };

  const varClasses = [
    vars["--basis"] != null && "basis-[var(--basis)]",
    vars["--mm-basis"] != null && "mm:basis-[var(--mm-basis)]",
    vars["--lm-basis"] != null && "lm:basis-[var(--lm-basis)]",
    vars["--tb-basis"] != null && "tb:basis-[var(--tb-basis)]",
    vars["--de:basis"] != null && "de:basis-[var(--de-basis)]",
    vars["--ld:basis"] != null && "ld:basis-[var(--ld-basis)]",
  ];

  const getProperty = React.useCallback(
    (property: string, viewports: string[], index: number) => {
      const viewport = viewports[index];
      const found = props[viewport]?.[property];

      if (typeof found !== "undefined") return found;
      if (index > 0) return getProperty(property, viewports, index - 1);

      return defaultMediaProps[property];
    },
    [props, defaultMediaProps],
  );

  const getTailwindTokensForMedia = (
    opts?: CommonProps & {
      direction: Direction;
      spacing: Spacing;
    },
    viewport?: QUERIES,
  ): string => {
    if (!opts) return "";

    const {
      spaceAfter,
      align,
      wrap,
      grow,
      shrink,
      justify,
      direction,
      spacing,
      inline,
      flex,
      useMargin,
    } = opts;

    return cx(
      typeof spaceAfter !== "undefined" && getSpaceAfterClasses(spaceAfter, viewport),
      flex && [
        typeof align !== "undefined" && getAlignItemsClasses(align, viewport),
        typeof align !== "undefined" && getAlignContentClasses(align, viewport),
        typeof wrap !== "undefined" && getWrapClasses(wrap, viewport),
        typeof grow !== "undefined" && getGrowClasses(grow, viewport),
        typeof shrink !== "undefined" && getShrinkClasses(shrink, viewport),
        typeof justify !== "undefined" && getJustifyClasses(justify, viewport),
        getDirectionClasses(direction, viewport),
      ],
      flex || inline ? getDisplayClasses(inline ? "inline-flex" : "flex", viewport) : "block",
      getSpacingClasses(spacing, viewport, direction, useMargin),
      inline === false && "w-full",
    );
  };

  return (
    // @ts-expect-error orbit string as
    <ComponentTag
      id={id}
      data-test={dataTest}
      style={vars}
      className={cx(
        "orbit-stack",
        getTailwindTokensForMedia(defaultMediaProps),
        ...varClasses,
        Object.values(QUERIES).map((viewport, index, viewports) => {
          if (!viewportProps[viewport]) return null;
          return getTailwindTokensForMedia(
            {
              ...props[viewport],
              flex: getProperty("flex", viewports, index),
              direction: getProperty("direction", viewports, index),
              spacing: getProperty("spacing", viewports, index),
              useMargin: getProperty("useMargin", viewports, index),
            },
            viewport,
          );
        }),
      )}
      aria-label={ariaLabel}
    >
      {children}
    </ComponentTag>
  );
};

export default Stack;
