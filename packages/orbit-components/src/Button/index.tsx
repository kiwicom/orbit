"use client";

import * as React from "react";
import cx from "clsx";

import ButtonPrimitive from "../primitives/ButtonPrimitive";
import {
  iconOnlyStyles,
  paddingBothIconsStyles,
  paddingLeftIconStyles,
  paddingNoIconsStyles,
  paddingRightIconStyles,
  sizeStyles,
  radiusStyles,
} from "../primitives/ButtonPrimitive/sizes";
import type { Props, Type } from "./types";

const typeStyles: Record<Type, string> = {
  primary:
    "bg-button-primary-background hover:bg-button-primary-background-hover active:bg-button-primary-background-active disabled:bg-button-primary-background focus:bg-button-primary-background-focus text-button-primary-foreground focus:text-button-primary-foreground-focus active:text-button-primary-foreground-active hover:text-button-primary-foreground-hover disabled:text-button-primary-foreground active:shadow-button-active",
  secondary:
    "bg-button-secondary-background hover:bg-button-secondary-background-hover active:bg-button-secondary-background-active disabled:bg-button-secondary-background focus:bg-button-secondary-background-focus text-button-secondary-foreground focus:text-button-secondary-foreground-focus active:text-button-secondary-foreground-active hover:text-button-secondary-foreground-hover disabled:text-button-secondary-foreground active:shadow-button-active-pale",
  critical:
    "bg-button-critical-background hover:bg-button-critical-background-hover active:bg-button-critical-background-active disabled:bg-button-critical-background focus:bg-button-critical-background-focus text-button-critical-foreground focus:text-button-critical-foreground-focus active:text-button-critical-foreground-active hover:text-button-critical-foreground-hover disabled:text-button-critical-foreground active:shadow-button-active",
  primarySubtle:
    "bg-button-primary-subtle-background hover:bg-button-primary-subtle-background-hover active:bg-button-primary-subtle-active-background disabled:bg-button-primary-subtle-background focus:bg-button-primary-subtle-background-focus text-button-primary-subtle-foreground focus:text-button-primary-subtle-foreground-focus active:text-button-primary-subtle-foreground-active hover:text-button-primary-subtle-foreground-hover disabled:text-button-primary-subtle-foreground active:shadow-button-active-pale",
  criticalSubtle:
    "bg-button-critical-subtle-background hover:bg-button-critical-subtle-background-hover active:bg-button-critical-subtle-active-background disabled:bg-button-critical-subtle-background focus:bg-button-critical-subtle-background-focus text-button-critical-subtle-foreground focus:text-button-critical-subtle-foreground-focus active:text-button-critical-subtle-foreground-active hover:text-button-critical-subtle-foreground-hover disabled:text-button-critical-subtle-foreground active:shadow-button-active-pale",
  white:
    "bg-button-white-background hover:bg-button-white-background-hover active:bg-button-white-background-active disabled:bg-button-white-background focus:bg-button-white-background-focus text-button-white-foreground focus:text-button-white-foreground-focus active:text-button-white-foreground-active hover:text-button-white-foreground-hover disabled:text-button-white-foreground active:shadow-button-active-pale",
  bundleBasic:
    "bg-button-bundle-basic-background hover:bg-button-bundle-basic-background-hover active:bg-button-bundle-basic-background-active disabled:bg-button-bundle-basic-background focus:bg-button-bundle-basic-background-focus text-white-foreground focus:text-white-foreground-focus active:text-white-foreground-active hover:text-white-foreground-hover disabled:text-white-foreground active:shadow-button-active",
  bundleMedium:
    "bg-button-bundle-medium-background hover:bg-button-bundle-medium-background-hover active:bg-button-bundle-medium-background-active disabled:bg-button-bundle-medium-background focus:bg-button-bundle-medium-background-focus text-white-foreground focus:text-white-foreground-focus active:text-white-foreground-active hover:text-white-foreground-hover disabled:text-white-foreground active:shadow-button-active",
  bundleTop:
    "bg-button-bundle-top-background hover:bg-button-bundle-top-background-hover active:bg-button-bundle-top-background-active disabled:bg-button-bundle-top-background focus:bg-button-bundle-top-background-focus text-white-foreground focus:text-white-foreground-focus active:text-white-foreground-active hover:text-white-foreground-hover disabled:text-white-foreground active:shadow-button-active",
};

/**
 * This is necessary for <a> elements since they don't have the `disabled` attribute.
 */
const typeDisabledStyled: Record<Type, string> = {
  primary: "bg-button-primary-background text-button-primary-foreground",
  secondary: "bg-button-secondary-background text-button-secondary-foreground",
  critical: "bg-button-critical-background text-button-critical-foreground",
  primarySubtle: "bg-button-primary-subtle-background text-button-primary-subtle-foreground",
  criticalSubtle: "bg-button-critical-subtle-background text-button-critical-subtle-foreground",
  white: "bg-button-white-background text-button-white-foreground",
  bundleBasic: "bg-button-bundle-basic-background text-white-foreground",
  bundleMedium: "bg-button-bundle-medium-background text-white-foreground",
  bundleTop: "bg-button-bundle-top-background text-white-foreground",
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Button
 *
 * To implement Button component into your project you'll need to add the import:
 *
 * ```jsx
 * import Button from "@kiwicom/orbit-components/lib/Button";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Button>Hello World!</Button>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in Button component.
 *
 * | Name           | Type                       | Default     | Description                                                                                                                                                  |
 * | :------------- | :------------------------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | ariaControls   | `string`                   |             | Optional prop for `aria-controls` attribute.                                                                                                                 |
 * | ariaExpanded   | `boolean`                  |             | Optional prop for `aria-expanded` attribute.                                                                                                                 |
 * | ariaCurrent    | `string`                   |             | Optional prop for `aria-current` attribute.                                                                                                                  |
 * | asComponent    | `string \| React.Element`  | `"button"`  | The component used for the root node.                                                                                                                        |
 * | fullWidth      | `boolean`                  | `false`     | If `true`, the Button will grow up to the full width of its container.                                                                                       |
 * | centered       | `boolean`                  | `false`     | Can only be used when `fullWidth` is true and if `iconLeft` and/or `iconRight` are defined. If `centered` prop is `true`, the Button will center everything. |
 * | circled        | `boolean`                  | `false`     | If `true`, the Button will have circular shape.                                                                                                              |
 * | children       | `React.Node`               |             | The content of the Button. [See Functional specs](#functional-specs)                                                                                         |
 * | dataTest       | `string`                   |             | Optional prop for testing purposes.                                                                                                                          |
 * | id             | `string`                   |             | Set `id` for `Button`                                                                                                                                        |
 * | disabled       | `boolean`                  | `false`     | If `true`, the Button will be disabled.                                                                                                                      |
 * | download       | `boolean \| string`        |             | Can only be used when `href` is defined. Adds the `download` attribute to the the anchor element.                                                            |
 * | external       | `boolean`                  | `false`     | If `true`, the Button opens link in a new tab. [See Functional specs](#functional-specs)                                                                     |
 * | href           | `string`                   |             | The URL of the link to open when Button is clicked. [See Functional specs](#functional-specs)                                                                |
 * | iconLeft       | `React.Node`               |             | The displayed icon on the left.                                                                                                                              |
 * | iconRight      | `React.Node`               |             | The displayed icon on the right.                                                                                                                             |
 * | loading        | `boolean`                  | `false`     | If `true`, the loading glyph will be displayed.                                                                                                              |
 * | onClick        | `event => void \| Promise` |             | Function for handling onClick event.                                                                                                                         |
 * | ref            | `func`                     |             | Prop for forwarded ref of the Button.                                                                                                                        |
 * | rel            | `string`                   |             | Specifies the rel of an element. [See Functional specs](#functional-specs)                                                                                   |
 * | role           | `string`                   |             | Specifies the role of an element.                                                                                                                            |
 * | **size**       | [`enum`](#enum)            | `"normal"`  | The size of the Button.                                                                                                                                      |
 * | spaceAfter     | `enum`                     |             | Additional `margin-bottom` after component.                                                                                                                  |
 * | submit         | `boolean`                  | `false`     | If `true`, the Button will have `type="submit"` attribute, otherwise `type="button"`.                                                                        |
 * | tabIndex       | `string \| number`         |             | Specifies the tab order of an element.                                                                                                                       |
 * | title          | `string`                   |             | Adds `aria-label`.                                                                                                                                           |
 * | ariaLabelledby | `string`                   |             | Optional prop for `aria-labelledby`.                                                                                                                         |
 * | **type**       | [`enum`](#enum)            | `"primary"` | The type of Button.                                                                                                                                          |
 * | width          | `string`                   |             | The width of the Button. Can be any string - `100px`, `20%`.                                                                                                 |
 *
 * ### enum
 *
 * | type               | size       | spaceAfter   |
 * | :----------------- | :--------- | :----------- |
 * | `"primary"`        | `"small"`  | `"none"`     |
 * | `"secondary"`      | `"normal"` | `"smallest"` |
 * | `"critical"`       | `"large"`  | `"small"`    |
 * | `"white"`          |            | `"normal"`   |
 * | `"primarySubtle"`  |            | `"medium"`   |
 * | `"criticalSubtle"` |            | `"large"`    |
 * | `"bundleBasic"`    |            | `"largest"`  |
 * | `"bundleMedium"`   |            |
 * | `"bundleTop"`      |            |
 *
 * ## Functional specs
 *
 * - When the `external` is specified, `noopener` value will be automatically added to attribute `rel` for security reason. Read more about it [here](https://web.dev/external-anchors-use-rel-noopener/).
 *
 * * By passing the `href` prop into Button, it will render into `a` element. If you pass `asComponent` prop it will override this logic.
 *
 * - If you want to render **Icon only Button**, you just need to let `children` prop empty and set up any `icon` you want to use.
 *
 * * If you want to use the `asComponent` prop then **YourComponent** should accept at least `className`. Otherwise it won't be rendered with proper styling, e.g.:
 *
 *   ```jsx
 *   const YourComponent = props => <div {...props} />
 *
 *   <Button asComponent={YourComponent}>Title</Button>
 *   ```
 *
 *   If you specify the children of **YourComponent** component, it will override the children prop of Button component, e.g.:
 *
 *   ```jsx
 *   const YourComponent = props => <div {...props}>YourComponent</div>;
 *   ```
 *
 * - By default, a full width Button renders with the children centered. However, if `iconLeft` and/or `iconRight` are defined, the content will align to the left by default. In such scenario, the `centered` prop can be used to center everything.
 *
 *
 * Accessibility
 * -------------
 * # Accessibility
 *
 * ## Button
 *
 * The Button component has been designed with accessibility in mind.
 *
 * The following props provide additional information to screen readers:
 *
 * | Name           | Type      | Description                                                            |
 * | :------------- | :-------- | :--------------------------------------------------------------------- |
 * | title          | `string`  | Allows you to specify an `aria-label` attribute of the component.      |
 * | ariaLabelledby | `string`  | Allows you to specify an `aria-labelledby` attribute of the component. |
 * | ariaControls   | `string`  | Allows you to specify an `aria-controls` attribute of the component.   |
 * | ariaExpanded   | `boolean` | Allows you to specify an `aria-expanded` attribute of the component.   |
 * | ariaCurrent    | `string`  | Allows you to specify an `aria-current` attribute of the component.    |
 *
 * While these props are optional, we recommend including them in a correct usage to ensure proper functionality with assistive technologies.
 *
 * - Use `title` when you need to add extra information to screen readers or there is no `children` presented to be used as label.
 *
 * - Prop `ariaLabelledby` references the id(s) of element(s) that label(s) the Button, separated by a space. The elements with those ids can be hidden, so that their text is only announced by screen readers to describe the button.
 *
 * - Use `ariaControls` prop to establish a connection between a Button and an element it controls. The prop accepts a unique `id` of an element.
 *
 * - The `ariaExpanded` prop is useful to indicate if a related control is expanded or collapsed. This attribute is commonly used in combination with `ariaControls`.
 *
 * - Use `ariaCurrent` prop to indicate that the Button represents the current item within a set of related Buttons. This prop helps assistive technologies convey the current state of the Button to users.
 *
 * - Use `disabled` prop to indicate users that button is inactive and they can't interact with it. When `disabled` prop is set to `true`, the button is ignored by a screen reader and not focusable by Tab key.
 *
 * Also, the component offers flexibility in terms of the HTML element used for the root node:
 *
 * - The prop `asComponent` can be used to define the HTML element to be rendered. This prop is optional and if it is not provided, the component will render a default (button) element.
 *
 * - When `href` prop is defined, the component will render as an `a` element.
 *
 * - Use `role` and `tabIndex` when you are rendering `Button` to non-actionable HTML element as `div` or `span`. However, this should be done only in edge-cases as it is anti-pattern behavior.
 *
 * - When a `Button` is loading, the loading indicator is hidden from screen readers. For this reason, you should use the `title` prop (or any alternative available) to provide additional information about the button and its loading state.
 *
 * ## Example
 *
 * ### Example 1:
 *
 * ```jsx
 * <Button title="Open modal window">Open</Button>
 * ```
 *
 * In this example, the screen reader will announce the title of the button (`Open modal window`). This is prioritized over text content (`Open`) inside the Button.
 *
 * ### Example 2:
 *
 * ```jsx
 * <div>
 *   <h2 id="section-title">Section Title</h2>
 *   <Button
 *     title="Expand section"
 *     ariaLabelledby="section-title"
 *     ariaControls="section-content"
 *     ariaExpanded={true}
 *     ariaCurrent="true"
 *   >
 *     Expand
 *   </Button>
 *   <div id="section-content">
 *     <p>This is the content of the section.</p>
 *   </div>
 * </div>
 * ```
 *
 * In this example, the screen reader will announce the title of the section (`Section Title`) and that the section is expanded - section with respective id (`section-content`) is present.
 *
 * Note that the `title` prop is **not** announced by screen readers.
 *
 *
 * @orbit-doc-end
 */
const Button = ({
  type = "primary",
  size = "normal",
  children,
  iconLeft,
  iconRight,
  disabled,
  ref,
  ...props
}: Props) => {
  return (
    <ButtonPrimitive
      ref={ref}
      iconLeft={iconLeft}
      iconRight={iconRight}
      disabled={disabled}
      borderRadius={radiusStyles[size]}
      {...props}
      className={cx(
        "space-x-200 rtl:space-x-reverse",
        sizeStyles[size],
        children == null && iconOnlyStyles[size],
        disabled === true ? typeDisabledStyled[type] : typeStyles[type],
        children != null && iconLeft == null && iconRight == null && paddingNoIconsStyles[size],
        children != null && iconLeft != null && iconRight == null && paddingLeftIconStyles[size],
        children != null && iconLeft == null && iconRight != null && paddingRightIconStyles[size],
        children != null && iconLeft != null && iconRight != null && paddingBothIconsStyles[size],
        props.circled === true && "rounded-full",
      )}
    >
      {children}
    </ButtonPrimitive>
  );
};

export default Button;
