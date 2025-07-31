"use client";

import * as React from "react";
import cx from "clsx";

import Heading from "../Heading";
import { FakeCheckbox } from "../Checkbox";
import Text from "../Text";
import handleKeyDown from "../utils/handleKeyDown";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # ListChoice
 *
 * To implement ListChoice component into your project you'll need to add the import:
 *
 * ```jsx
 * import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <ListChoice title="My Choice" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the ListChoice component.
 *
 * | Name        | Type                       | Default | Description                                                                                                                                     |
 * | :---------- | :------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
 * | dataTest    | `string`                   |         | Optional prop for testing purposes.                                                                                                             |
 * | id          | `string`                   |         | Set `id` for `ListChoice`.                                                                                                                      |
 * | description | `Translation`              |         | The additional info about the ListChoice.                                                                                                       |
 * | disabled    | `boolean`                  |         | If `true`, the ListChoice won't perform any `onClick` action and if `selectable` is set to `true`, the check box glyph will use disabled state. |
 * | icon        | `React.Node`               |         | The icon on the left of the ListChoice.                                                                                                         |
 * | onClick     | `event => void \| Promise` |         | Function for handling onClick event.                                                                                                            |
 * | selectable  | `boolean`                  |         | If `true`, the check box glyph appears on the right size and it will be possible to select the ListChoice.                                      |
 * | selected    | `boolean`                  | `false` | If `true`, the check box glyph will be checked.                                                                                                 |
 * | **title**   | `Translation`              |         | The title of the ListChoice.                                                                                                                    |
 * | action      | `React.Node`               |         | Area for action elements, like Button.                                                                                                          |
 * | role        | `string`                   |         | ARIA role. Defaults to "checkbox" when selectable, "button" when no action is provided or undefined otherwise.                                  |
 * | tabIndex    | `number`                   | `0`     | Specifies the tab order of an element.                                                                                                          |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The ListChoice component has been designed with accessibility in mind, providing interactive list options that can function as buttons or selectable items.
 *
 * ### Accessibility Props
 *
 * The following props are available to improve the accessibility of your ListChoice component:
 *
 * | Name     | Type     | Description                                                                                        |
 * | :------- | :------- | :------------------------------------------------------------------------------------------------- |
 * | role     | `string` | Specifies the ARIA role of the component. If not provided, the role is set automatically.          |
 * | tabIndex | `number` | Specifies the tab order of the component. Default is `0`, automatically set to `-1` when disabled. |
 *
 * ### Automatic Accessibility Features
 *
 * The ListChoice component handles several important ARIA attributes automatically:
 *
 * - `aria-disabled` is automatically set to match the `disabled` prop value
 * - `aria-checked` is automatically set to the value of the `selected` prop when `selectable` is true
 * - Role is automatically determined in this order:
 *   - If a `role` prop is explicitly provided, it will use that value
 *   - Otherwise, if `selectable` is true, it uses "checkbox"
 *   - Otherwise, if `action` is not provided, it uses "button"
 *   - If none of these conditions are met, the role will be undefined
 *
 * ### Keyboard Navigation
 *
 * - **Enter** or **Space** keys trigger the `onClick` action when the component is focused
 * - **Tab** key moves focus to and from the component following the document's tab order
 *
 * ### Best practices
 *
 * - Provide a descriptive `title` that clearly explains the purpose of the list item
 * - Use `description` to provide additional context when the action isn't self-explanatory
 * - When using `icon`, ensure it visually reinforces the action and is marked as decorative
 * - When using a custom `role`, ensure it matches the component's behavior (e.g., use "link" only if it navigates to another page)
 * - When using the `selectable` prop, group related options together and ensure your implementation correctly updates the selected state
 *
 * ### Examples
 *
 * #### Navigation Option
 *
 * In this example, the ListChoice functions like a navigation link:
 *
 * ```jsx
 * <ListChoice
 *   title="Flight details"
 *   description="View your booking information"
 *   icon={<Airplane ariaHidden />}
 *   role="link"
 *   onClick={() => navigate("/booking-details")}
 * />
 * ```
 *
 * Screen reader announces: "Flight details, View your booking information, link"
 *
 * #### Selectable Option in a Group
 *
 * ```jsx
 * <Stack>
 *   <ListChoice
 *     title="Window seat"
 *     selectable
 *     selected={selectedSeat === "window"}
 *     onClick={() => setSelectedSeat("window")}
 *   />
 *   <ListChoice
 *     title="Aisle seat"
 *     selectable
 *     selected={selectedSeat === "aisle"}
 *     onClick={() => setSelectedSeat("aisle")}
 *   />
 * </Stack>
 * ```
 *
 * Screen reader announces: "Window seat, checkbox, checked" (when selected)
 *
 * #### Disabled Option
 *
 * ```jsx
 * <ListChoice
 *   title="Unavailable flight"
 *   description="This flight is fully booked"
 *   disabled
 *   icon={<CloseCircle ariaHidden />}
 * />
 * ```
 *
 * Screen reader announces: "Unavailable flight, This flight is fully booked, button, disabled"
 *
 * #### Option with Action Component
 *
 * ```jsx
 * <ListChoice
 *   title="Priority boarding"
 *   description="Board the plane first"
 *   action={
 *     <Button size="small" type="secondary">
 *       Add €10
 *     </Button>
 *   }
 * />
 * ```
 *
 * Screen reader announces: "Priority boarding, Board the plane first" for the ListChoice content and then "Add €10, button" when navigating to the action button.
 *
 *
 * @orbit-doc-end
 */
const ListChoice = ({
  dataTest,
  id,
  icon,
  action,
  title,
  description,
  selectable,
  role,
  onClick,
  tabIndex = 0,
  selected = false,
  disabled,
  ref,
}: Props) => {
  return (
    <div
      className={cx(
        "orbit-list-choice",
        "py-300 px-400 box-border flex w-full items-center",
        "border-b-cloud-normal bg-white-normal border-b border-solid",
        "duration-fast transition-[background-color] ease-in-out",
        disabled ? "cursor-not-allowed" : "hover:bg-cloud-light cursor-pointer",
        "hover:outline-none [&_button]:hover:bg-transparent",
        "[&_.orbit-checkbox-label]:w-auto",
      )}
      onClick={!disabled ? onClick : undefined}
      data-test={dataTest}
      id={id}
      ref={ref}
      onKeyDown={!disabled ? handleKeyDown<HTMLDivElement>(onClick) : undefined}
      tabIndex={tabIndex || disabled ? -1 : 0}
      data-title={title}
      aria-disabled={disabled}
      aria-checked={selectable ? selected : undefined}
      role={role || (selectable && "checkbox") || (!action && "button") || undefined}
    >
      {icon && (
        <div
          className={cx(
            "me-200 h-icon-medium flex flex-none items-center self-start",
            "[&_svg]:size-icon-medium [&_svg]:text-icon-primary-foreground [&_svg]:self-center",
            "[&_svg]:duration-fast [&_svg]:transition-[color] [&_svg]:ease-in-out",
          )}
        >
          {icon}
        </div>
      )}
      <div className="pe-300 flex w-full flex-col justify-center">
        <Heading type="title4">{title}</Heading>
        {description && (
          <Text type="secondary" size="small">
            {description}
          </Text>
        )}
      </div>
      {selectable && <FakeCheckbox checked={selected} disabled={disabled} />}
      {!selectable && action}
    </div>
  );
};

export default ListChoice;
