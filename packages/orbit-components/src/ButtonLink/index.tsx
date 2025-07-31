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
} from "../primitives/ButtonPrimitive/sizes";
import type { Props, Type } from "./types";

const typeStyles: Record<Type, string> = {
  primary:
    "bg-button-link-primary-background hover:[@media(hover)_and_(pointer:fine)]:bg-button-link-primary-background-hover active:bg-button-link-primary-background-active focus:bg-button-link-primary-background-focus text-button-link-primary-foreground focus:text-button-link-primary-foreground-focus active:text-button-link-primary-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-primary-foreground-hover",
  secondary:
    "bg-button-link-secondary-background hover:[@media(hover)_and_(pointer:fine)]:bg-button-link-secondary-background-hover active:bg-button-link-secondary-background-active focus:bg-button-link-secondary-background-focus text-button-link-secondary-foreground focus:text-button-link-secondary-foreground-focus active:text-button-link-secondary-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-secondary-foreground-hover",
  critical:
    "bg-button-link-critical-background hover:[@media(hover)_and_(pointer:fine)]:bg-button-link-critical-background-hover active:bg-button-link-critical-background-active focus:bg-button-link-critical-background-focus text-button-link-critical-foreground focus:text-button-link-critical-foreground-focus active:text-button-link-critical-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-critical-foreground-hover",
};

const typeCompactStyles: Record<Type, string> = {
  primary:
    "text-button-link-primary-foreground focus:text-button-link-primary-foreground-focus active:text-button-link-primary-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-primary-foreground-hover",
  secondary:
    "text-button-link-secondary-foreground focus:text-product-normal-hover active:text-product-normal-active hover:[@media(hover)_and_(pointer:fine)]:text-product-normal-hover",
  critical:
    "text-button-link-critical-foreground focus:text-button-link-critical-foreground-focus active:text-button-link-critical-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-critical-foreground-hover",
};

const typeDisabledStyles: Record<Type, string> = {
  primary: "bg-button-link-primary-background text-button-link-primary-foreground",
  secondary: "bg-button-link-secondary-background text-button-link-secondary-foreground",
  critical: "bg-button-link-critical-background text-button-link-critical-foreground",
};

const typeCompactDisabledStyles: Record<Type, string> = {
  primary: "text-button-link-primary-foreground",
  secondary: "text-button-link-secondary-foreground",
  critical: "text-button-link-critical-foreground",
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # ButtonLink
 *
 * To implement ButtonLink component into your project you'll need to add the import:
 *
 * ```jsx
 * import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <ButtonLink>Hello World!</ButtonLink>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in ButtonLink component.
 *
 * | Name         | Type                            | Default     | Description                                                                                                                                                  |
 * | :----------- | :------------------------------ | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | ariaControls | `string`                        |             | Id of the element the button controls.                                                                                                                       |
 * | ariaExpanded | `boolean`                       |             | Tells screen reader the controlled element from `ariaControls` is expanded                                                                                   |
 * | asComponent  | `string \| () => React.Element` | `"button"`  | The component used for the root node.                                                                                                                        |
 * | centered     | `boolean`                       | `false`     | Can only be used when `fullWidth` is true and if `iconLeft` and/or `iconRight` are defined. If `centered` prop is `true`, the Button will center everything. |
 * | circled      | `boolean`                       | `false`     | If `true`, the ButtonLink will have circular shape.                                                                                                          |
 * | children     | `React.Node`                    |             | The content of the ButtonLink. [See Functional specs](#functional-specs)                                                                                     |
 * | compact      | `boolean`                       | `false`     | If `true`, the ButtonLink will not have horizontal paddings.                                                                                                 |
 * | disabled     | `boolean`                       | `false`     | If `true`, the ButtonLink will be disabled.                                                                                                                  |
 * | download     | `boolean \| string`             |             | Can only be used when `href` is defined. Adds the `download` attribute to the anchor element.                                                                |
 * | dataTest     | `string`                        |             | Optional prop for testing purposes.                                                                                                                          |
 * | id           | `string`                        |             | Set `id` for `ButtonLink`                                                                                                                                    |
 * | external     | `boolean`                       | `false`     | If `true`, the ButtonLink opens link in a new tab. [See Functional specs](#functional-specs)                                                                 |
 * | fullWidth    | `boolean`                       | `false`     | If `true`, the ButtonLink will grow up to the full width of its container.                                                                                   |
 * | href         | `string`                        |             | The URL of link to open when ButtonLink is clicked. [See Functional specs](#functional-specs)                                                                |
 * | iconLeft     | `React.Node`                    |             | The displayed icon on the left.                                                                                                                              |
 * | iconRight    | `React.Node`                    |             | The displayed icon on the right.                                                                                                                             |
 * | onClick      | `event => void \| Promise`      |             | Function for handling onClick event.                                                                                                                         |
 * | ref          | `func`                          |             | Prop for forwarded ref of the Button.                                                                                                                        |
 * | ref          | `string`                        |             | Specifies the ref of an element. [See Functional specs](#functional-specs)                                                                                   |
 * | role         | `string`                        |             | Specifies the role of an element.                                                                                                                            |
 * | **size**     | [`enum`](#enum)                 | `"normal"`  | The size of the ButtonLink.                                                                                                                                  |
 * | spaceAfter   | `enum`                          |             | Additional `margin-bottom` after component.                                                                                                                  |
 * | submit       | `boolean`                       | `false`     | If `true`, the Button will have `type="submit"` attribute, otherwise `type="button"`.                                                                        |
 * | tabIndex     | `string \| number`              |             | Specifies the tab order of an element.                                                                                                                       |
 * | title        | `string`                        |             | Adds `aria-label`.                                                                                                                                           |
 * | **type**     | [`enum`](#enum)                 | `"primary"` | The type of ButtonLink.                                                                                                                                      |
 * | width        | `string`                        |             | The width of the ButtonLink. Can be any string - `100px`, `20%`.                                                                                             |
 *
 * ### enum
 *
 * | type          | size       | spaceAfter   |
 * | :------------ | :--------- | :----------- |
 * | `"primary"`   | `"small"`  | `"none"`     |
 * | `"secondary"` | `"normal"` | `"smallest"` |
 * | `"critical"`  | `"large"`  | `"small"`    |
 * |               |            | `"normal"`   |
 * |               |            | `"medium"`   |
 * |               |            | `"large"`    |
 * |               |            | `"largest"`  |
 *
 * ## Functional specs
 *
 * - When the `external` is specified, `noopener` value will be automatically added to attribute `rel` for security reason. Read more about it [here](https://web.dev/external-anchors-use-rel-noopener/).
 *
 * - By passing the `href` prop into Button, it will render into `a` element. If you pass `component` prop it will override this logic.
 *
 * - If you want to render **Icon only ButtonLink**, you just need to let `children` prop empty and set up any `icon` you want to use.
 *
 * - If you want to use the `asComponent` prop then **YourComponent** should accept at least `className`. Otherwise it won't be rendered with proper styling, e.g.:
 *
 * ```jsx
 * const YourComponent = props => <div {...props} />
 *
 * <ButtonLink asComponent={YourComponent}>Title</ButtonLink>
 * ```
 *
 * If you specify the children of **YourComponent** component, it will override the children prop of Button component, e.g.:
 *
 * ```jsx
 * const YourComponent = props => <div {...props}>YourComponent</div>
 *
 * <ButtonLink asComponent={YourComponent}>Title</ButtonLink>
 * ```
 *
 * This example will render ButtonLink in div with children **YourComponent** and not **Title**.
 *
 * ## Accessibility
 *
 * If you use `ButtonLink` without `href` so it's rendered as a `<button>` HTML element, then you can use props below. In case you are passing `href` and element is rendered as `<a>` then it should be treated as a link and `ariaControls`, `ariaExpanded` shouldn't be useful.
 *
 * - Use `ariaControls` prop to add `aria-controls` attribute to establish the relationship between button and element which is controlled by it. `aria-controls` works only with a unique `id` of an element.
 *
 * - Use `ariaExpands` prop to add `aria-expands` to indicate screenreaders, that element controlled by button through `ariaControls` is expanded or not.
 *
 * - Use `disabled` prop to indicate users that button is inactive and they can't interact with it.
 *
 * - Use `role` and `tabIndex` when you are rendering `ButtonLink` to non-actionable HTML element as `div` or `span`. However, this should be done only in edge-cases as it is anti-pattern behavior.
 *
 * - Use `title` to add `aria-label` when you need to add extra informations to screen readers or there is no `children` presented to be used as label.
 *
 *
 * @orbit-doc-end
 */
const ButtonLink = ({
  type = "primary",
  size = "normal",
  compact,
  disabled,
  children,
  iconLeft,
  iconRight,
  ref,
  ...props
}: Props) => {
  return (
    <ButtonPrimitive
      ref={ref}
      iconLeft={iconLeft}
      iconRight={iconRight}
      disabled={disabled}
      {...props}
      className={cx(
        "space-x-200 rtl:space-x-reverse",
        sizeStyles[size],
        children == null && iconOnlyStyles[size],
        compact !== true && disabled !== true && typeStyles[type],
        compact === true && disabled !== true && typeCompactStyles[type],
        compact !== true && disabled === true && typeDisabledStyles[type],
        compact === true && disabled === true && typeCompactDisabledStyles[type],
        compact !== true &&
          children != null && [
            iconLeft == null && iconRight == null && paddingNoIconsStyles[size],
            iconLeft != null && iconRight == null && paddingLeftIconStyles[size],
            iconLeft == null && iconRight != null && paddingRightIconStyles[size],
            iconLeft != null && iconRight != null && paddingBothIconsStyles[size],
          ],
        props.circled === true && "rounded-full",
      )}
    >
      {children}
    </ButtonPrimitive>
  );
};

export default ButtonLink;
