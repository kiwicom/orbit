"use client";

import * as React from "react";
import cx from "clsx";

import { ELEMENT_OPTIONS, TYPE_OPTIONS, ALIGN } from "./consts";
import { textAlignClasses } from "../common/tailwind/textAlign";
import { spaceAfterClasses } from "../common/tailwind/spaceAfter";
import { QUERIES } from "../utils/mediaQuery";
import type { Props } from "./types";
import { typeClasses } from "./twClasses";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Heading
 *
 * To implement the Heading component into your project you'll need to add the import:
 *
 * ```jsx
 * import Heading from "@kiwicom/orbit-components/lib/Heading";
 * ```
 *
 * After adding import to your project you can use it simply like:
 *
 * ```jsx
 * <Heading>Hello World!</Heading>
 * ```
 *
 * ## Props
 *
 * The table below contains all types of props available in the Heading component.
 *
 * | Name            | Type                       | Default    | Description                                                                                                                       |
 * | :-------------- | :------------------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------- |
 * | as              | [`enum`](#enum)            | `"div"`    | Defines the HTML element to be rendered. See Accessibility tab.                                                                   |
 * | role            | `"heading"`                |            | The role attribute of the element. Can only be defined if `as="div"`. If defined, `level` must be defined. See Accessibility tab. |
 * | level           | `number`                   |            | The level of the Heading. Required if `role` is defined as `"heading"`. See Accessibility tab.                                    |
 * | children        | `React.Node`               |            | The content of the Heading.                                                                                                       |
 * | dataTest        | `string`                   |            | Optional prop for testing purposes.                                                                                               |
 * | align           | [`enum`](#enum)            | `start`    | `text-align` of the Heading component.                                                                                            |
 * | dataA11ySection | `string`                   |            | ID for a SkipNavigation component. See Accessibility tab.                                                                         |
 * | id              | `string`                   |            | Adds `id` HTML attribute to an element. Expects a unique ID.                                                                      |
 * | inverted        | `boolean`                  |            | If `true`, the Heading color will be white.                                                                                       |
 * | spaceAfter      | `enum`                     |            | Additional `margin-bottom` after component.                                                                                       |
 * | type            | [`enum`](#enum)            | `"title0"` | The size type of the Heading.                                                                                                     |
 * | mediumMobile    | [`Object`](#media-queries) |            | Object for setting up properties for the mediumMobile viewport. [See Media queries](#media-queries)                               |
 * | largeMobile     | [`Object`](#media-queries) |            | Object for setting up properties for the largeMobile viewport. [See Media queries](#media-queries)                                |
 * | tablet          | [`Object`](#media-queries) |            | Object for setting up properties for the tablet viewport. [See Media queries](#media-queries)                                     |
 * | desktop         | [`Object`](#media-queries) |            | Object for setting up properties for the desktop viewport. [See Media queries](#media-queries)                                    |
 * | largeDesktop    | [`Object`](#media-queries) |            | Object for setting up properties for the largeDesktop viewport. [See Media queries](#media-queries)                               |
 *
 * ### enum
 *
 * | as      | type                | align     | spaceAfter   |
 * | :------ | :------------------ | :-------- | :----------- |
 * | `"h1"`  | `"display"`         | `start`   | `"none"`     |
 * | `"h2"`  | `"displaySubtitle"` | `end`     | `"smallest"` |
 * | `"h3"`  | `"title0"`          | `center`  | `"small"`    |
 * | `"h4"`  | `"title1"`          | `justify` | `"normal"`   |
 * | `"h5"`  | `"title2"`          |           | `"medium"`   |
 * | `"h6"`  | `"title3"`          |           | `"large"`    |
 * | `"div"` | `"title4"`          |           | `"largest"`  |
 * |         | `"title5"`          |           |
 * |         | `"title6"`          |           |
 *
 * ### Media Queries
 *
 * To make Heading responsive you can use props `mediumMobile`, `largeMobile`, `tablet`, `desktop` and `largeDesktop`,
 * which match
 * the [mediaQueries](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/mediaQuery)
 * functions and contain the following properties:
 *
 * | Name       | Type            | Default    | Description                                 |
 * | :--------- | :-------------- | :--------- | :------------------------------------------ |
 * | type       | [`enum`](#enum) | `"title0"` | The size type of Heading.                   |
 * | spaceAfter | `enum`          |            | Additional `margin-bottom` after component. |
 *
 *
 * Accessibility
 * -------------
 * # Accessibility
 *
 * ## Heading
 *
 * The Heading component has been designed with accessibility in mind.
 *
 * The component offers flexibility in terms of the HTML element used for the root node, the `role` attribute, and the `level` attribute.
 * These properties allow for the creation of semantic and accessible headings.
 *
 * | Name  | Type                                                    | Description                                                                                                            |
 * | :---- | :------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------- |
 * | as    | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "div"` | Defines the HTML element to be rendered.                                                                               |
 * | role  | `"heading"`                                             | Can only be used if `as="div"`. If defined, sets the role of the element to be "heading".                              |
 * | level | `number`                                                | Must be used if `as="div"` and `role="heading"`. Defines the `aria-level` of the rendered `div` with the heading role. |
 *
 * All the props above are optional by default.
 *
 * ### Example 1
 *
 * If the `as` prop is not provided, the component will render a `div` element.
 * In this case, no `role` or `level` are defined by default, and the component will render just a `div` element.
 *
 * ```jsx
 * <Heading>Hello World!</Heading>
 * ```
 *
 * renders:
 *
 * ```html
 * <div>Hello World!</div>
 * ```
 *
 * It is not semantically wrong but won't tell screen readers that the element is a heading. This should be used only for decorative purposes.
 *
 * If the `as` prop is set to `"div"` (or undefined), it's possible to set the `role="heading` to indicate to assistive technologies that this element should be treated and formatted like a heading.
 * This is the only accepted value for the `role` prop.
 *
 * In addition, if the `role` prop is set to `"heading"`, the `level` prop **must** be defined as well. It will tell assistive technologies the level of the heading.
 * The `level` prop must be a number between 1 and 6 and cannot be used if the `role` prop is not set to `"heading"`.
 *
 * ```jsx
 * <Heading as="div" role="heading" level={1}>
 *   Hello World!
 * </Heading>
 * ```
 *
 * renders:
 *
 * ```html
 * <div role="heading" aria-level="1">Hello World!</div>
 * ```
 *
 * ### Example 2
 *
 * If the `as` prop is set to `"h1"`, `"h2"`, `"h3"`, `"h4"`, `"h5"`, or `"h6"`, the component will render the corresponding HTML element.
 * In that case, the `role` and `level` props **cannot** be used, since assistive technologies will recognize the element as a heading and its correct level automatically.
 *
 * ```jsx
 * <Heading as="h1">Hello World!</Heading>
 * ```
 *
 * renders:
 *
 * ```html
 * <h1>Hello World!</h1>
 * ```
 *
 * ### Compatibility with SkipNavigation
 *
 * The `dataA11ySection` prop can be used to link the Heading to a `SkipNavigation` component.
 *
 *
 * @orbit-doc-end
 */
const Heading = ({
  children,
  type = TYPE_OPTIONS.TITLE0,
  align = ALIGN.START,
  as: Component = ELEMENT_OPTIONS.DIV,
  level,
  role,
  dataTest,
  inverted = false,
  spaceAfter,
  dataA11ySection,
  id,
  mediumMobile,
  largeMobile,
  tablet,
  desktop,
  largeDesktop,
}: Props) => {
  const viewportSpecs = { mediumMobile, largeMobile, tablet, desktop, largeDesktop };
  const viewportClasses = Object.values(QUERIES).map(viewport => {
    const viewportProps = viewportSpecs[viewport];

    if (viewportProps == null) {
      return null;
    }

    const { type: vpType, align: vpAlign, spaceAfter: vpSpaceAfter } = viewportProps;
    return [
      vpType && typeClasses[viewport][vpType],
      vpAlign && textAlignClasses[viewport][vpAlign],
      vpSpaceAfter && spaceAfterClasses[viewport][vpSpaceAfter],
    ];
  });

  return (
    <Component
      aria-level={Component === "div" ? level : undefined}
      id={id}
      data-test={dataTest}
      role={Component === "div" ? role : undefined}
      data-a11y-section={dataA11ySection}
      className={cx(
        "orbit-heading font-base m-0",
        inverted ? "text-heading-foreground-inverted" : "text-heading-foreground",
        typeClasses[type],
        textAlignClasses[align],
        spaceAfter && spaceAfterClasses[spaceAfter],
        ...viewportClasses,
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
