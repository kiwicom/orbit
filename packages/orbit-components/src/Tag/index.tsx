"use client";

import * as React from "react";
import cx from "clsx";

import type * as Common from "../common/types";
import CloseCircle from "../icons/CloseCircle";
import { SIZES, TYPES } from "./consts";
import type { Props } from "./types";

const buttonClickEmulation = (
  ev?: React.KeyboardEvent<HTMLDivElement>,
  callback?: Common.Callback,
) => {
  if (ev && ev.code === "Space") {
    ev.preventDefault();
    if (callback) callback();
  } else if (ev && ev.code === "Enter") {
    if (callback) callback();
  }
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Tag
 *
 * To implement Tag component into your project you'll need to add the import:
 *
 * ```jsx
 * import Tag from "@kiwicom/orbit-components/lib/Tag";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Tag>Hello!</Tag>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Tag component.
 *
 * | Name         | Type                    | Default   | Description                                                                                          |
 * | :----------- | :---------------------- | :-------- | :--------------------------------------------------------------------------------------------------- |
 * | **children** | `React.Node`            |           | The content of the Tag.                                                                              |
 * | dataTest     | `string`                |           | Optional prop for testing purposes.                                                                  |
 * | iconLeft     | `React.Node`            |           | The displayed icon on the left.                                                                      |
 * | id           | `string`                |           | Set `id` for `Tag`.                                                                                  |
 * | dateTag      | `boolean`               |           | Optional prop, if it's true, selected color has a different background.                              |
 * | type         | [`enum`](#enum)         | `neutral` | The color type of the Tag.                                                                           |
 * | onClick      | `() => void \| Promise` |           | Function for handling the onClick event.                                                             |
 * | onRemove     | `() => void \| Promise` |           | Function for handling the onClick event of the close icon. [See Functional specs](#functional-specs) |
 * | selected     | `boolean`               | `false`   | If `true`, the Tag will have selected styles.                                                        |
 * | size         | [`enum`](#enum)         | `normal`  | Size of the Tag.                                                                                     |
 * | ref          | `func`                  |           | Prop for forwarded ref of the Tag.                                                                   |
 * | labelDismiss | `string`                |           | Optional prop for `aria-label` attribute of dismiss button (available when `onRemove` is not null).  |
 *
 * ### enum
 *
 * | size       | type        |
 * | :--------- | :---------- |
 * | `"small"`  | `"neutral"` |
 * | `"normal"` | `"colored"` |
 *
 * ## Functional specs
 *
 * - By passing the `onRemove` the close icon will appear on the right side of the Tag.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Tag component has been designed with accessibility in mind, providing proper semantic structure and keyboard navigation for interactive labels that can be selected, clicked, or removed.
 *
 * ### Accessibility Props
 *
 * **Tag props:**
 *
 * | Name         | Type   | Description                                                                                                                                                        |
 * | :----------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | labelDismiss | string | Specifies the accessible name for the dismiss button when `onRemove` is provided. Required for screen reader users to understand the purpose of the remove action. |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages ARIA attributes:
 *   - When `onClick` is provided, the tag receives `role="button"` and `tabIndex="0"` to make it keyboard accessible
 *   - When `onRemove` is provided, the dismiss button receives `role="button"`, `tabIndex="0"`, and `aria-label` from the `labelDismiss` prop
 *   - The dismiss button is properly isolated from the main tag interaction to prevent nested interactive elements
 * - Focus management is handled automatically:
 *   - Interactive tags are included in the tab order with proper focus indicators
 *   - The dismiss button can be focused independently from the main tag when both are present
 * - Keyboard navigation is fully supported:
 *   - **Space** and **Enter** keys activate both the main tag and dismiss button
 *   - Event propagation is properly managed to prevent conflicts between tag and dismiss actions
 *
 * ### Best Practices
 *
 * - Always provide a `labelDismiss` prop when using `onRemove` to ensure screen reader users understand the purpose of the dismiss button.
 * - Use clear, descriptive text content for tags to help users understand their meaning and purpose.
 * - Use the `selected` prop to indicate which tags are currently active or applied, providing clear visual feedback through enhanced contrast and styling.
 *
 * ### Icons
 *
 * When using icons in tags:
 *
 * - Provide an `ariaLabel` if the icon has a meaning by itself that is not obvious to screen readers, regardless of the existence of text
 * - If the icon is decorative and the badge contains text, the icon should be marked as `aria-hidden="true"`
 *
 * ### Examples
 *
 * #### Basic Interactive Tag
 *
 * ```jsx
 * <Tag onClick={() => console.log("Tag clicked")}>Transport</Tag>
 * ```
 *
 * Screen reader announces: "Transport, button"
 *
 * #### Tag with Both Click and Remove Actions
 *
 * ```jsx
 * <Tag
 *   onClick={() => console.log("Tag clicked")}
 *   onRemove={() => console.log("Tag removed")}
 *   labelDismiss="Remove transport filter"
 * >
 *   Transport
 * </Tag>
 * ```
 *
 * Screen reader announces: "Transport, button" for the main tag, then "Remove transport filter, button" for the dismiss button
 *
 * #### Tag with Icon
 *
 * ```jsx
 * <Tag iconLeft={<Icons.PlusMinus ariaHidden />} onClick={() => console.log("Tag clicked")}>
 *   Add Filter
 * </Tag>
 * ```
 *
 * Screen reader announces: "Add Filter, button"
 *
 *
 * @orbit-doc-end
 */
const Tag = ({
  selected,
  children,
  iconLeft,
  size = SIZES.NORMAL,
  onClick,
  onRemove,
  id,
  dataTest,
  type = TYPES.NEUTRAL,
  dateTag,
  labelDismiss,
  ref,
}: Props) => {
  return (
    <div
      className={cx(
        "orbit-tag",
        "font-base rounded-150 box-border inline-flex items-stretch justify-center font-medium",
        "duration-fast transition-[color,_background-color,_box-shadow] ease-in-out",
        "tb:rounded-100",
        size === SIZES.SMALL && "text-small leading-small",
        size === SIZES.NORMAL && "text-normal leading-normal",
        !!onRemove && !onClick && "pointer-events-none",
        selected && [
          "text-white-normal",
          dateTag
            ? [
                "bg-ink-light-hover",
                !!(onClick || onRemove) &&
                  "hover:bg-ink-light-active focus:bg-ink-light-active active:bg-ink-light-hover",
              ]
            : [
                "bg-blue-normal",
                !!(onClick || onRemove) &&
                  "hover:bg-blue-normal-hover focus:bg-blue-normal-hover active:bg-blue-normal-active",
              ],
        ],
        type === TYPES.NEUTRAL && [
          "text-ink-dark",
          !selected && [
            "bg-cloud-normal",
            !!(onClick || onRemove) &&
              "hover:bg-cloud-normal-hover focus:bg-cloud-normal-hover active:bg-cloud-normal-active",
          ],
        ],
        type === TYPES.COLORED && [
          "text-blue-darker",
          !selected && [
            "bg-blue-light",
            !!(onClick || onRemove) &&
              "hover:bg-blue-light-hover focus:bg-blue-light-hover active:bg-blue-light-active",
          ],
        ],
      )}
      data-test={dataTest}
    >
      <div
        className={cx(
          "flex items-center",
          "focus:rounded-150 focus:z-default",
          onRemove ? "ps-200 py-200 pe-100 rounded-l-150" : "p-200 rounded-150",
          selected && [
            dateTag ? "focus-visible:bg-ink-light-active" : "focus-visible:bg-blue-normal-hover",
          ],
          type === TYPES.NEUTRAL && !selected && "focus-visible:bg-cloud-normal-hover",
          type === TYPES.COLORED && !selected && "focus-visible:bg-blue-light-hover",
        )}
        id={id}
        ref={ref}
        {...(onClick && {
          role: "button",
          tabIndex: 0,
          onClick,
          onKeyDown: ev => buttonClickEmulation(ev, onClick),
        })}
      >
        {iconLeft && (
          <div className="pe-200 [&_svg]:size-icon-small flex flex-row items-center justify-center">
            {iconLeft}
          </div>
        )}
        {children}
      </div>

      {onRemove && (
        <div
          className={cx(
            "orbit-tag-close-container",
            "pe-200 ps-100 rounded-r-150 flex items-center justify-center",
            "duration-fast transition-[color,_opacity] ease-in-out",
            "focus:rounded-150 focus:z-default focus:opacity-100 active:opacity-100",
            !onClick && "pointer-events-auto",
            !selected &&
              (type === TYPES.NEUTRAL
                ? "text-ink-normal active:text-ink-dark focus-visible:bg-cloud-normal-hover"
                : "text-blue-darker"),
            !selected && TYPES.COLORED && "focus-visible:bg-blue-light-hover",
            selected ? "text-white-normal opacity-100" : "opacity-50",
            selected && [
              dateTag ? "focus-visible:bg-ink-light-active" : "focus-visible:bg-blue-normal-hover",
            ],
          )}
          tabIndex={0}
          aria-label={labelDismiss}
          role="button"
          onKeyDown={ev => {
            ev.stopPropagation();
            buttonClickEmulation(ev, onRemove);
          }}
          onClick={ev => {
            ev.stopPropagation();
            onRemove();
          }}
        >
          <CloseCircle size="small" ariaHidden />
        </div>
      )}
    </div>
  );
};

export default Tag;
