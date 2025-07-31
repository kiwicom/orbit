"use client";

import * as React from "react";

import { SIZE_OPTIONS } from "./consts";
import TooltipPrimitive from "../primitives/TooltipPrimitive";
import useMediaQuery from "../hooks/useMediaQuery";
import MobileDialog from "../primitives/MobileDialogPrimitive";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Tooltip
 *
 * To implement Tooltip component into your project you'll need to add the import:
 *
 * ```jsx
 * import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Tooltip content="Your content">
 *   <Airplane />
 * </Tooltip>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Tooltip component.
 *
 * | Name                 | Type                                | Default  | Description                                                                                                                                      |
 * | :------------------- | :---------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
 * | **children**         | `React.Node`                        |          | The reference element where the Tooltip will appear.                                                                                             |
 * | **content**          | `React.Node`                        |          | The content to display in the Tooltip.                                                                                                           |
 * | dataTest             | `string`                            |          | Optional prop for testing purposes.                                                                                                              |
 * | id                   | `string`                            |          | Set `id` for `Tooltip`                                                                                                                           |
 * | enabled              | `boolean`                           | `true`   | Enable render of tooltip                                                                                                                         |
 * | block                | `boolean`                           | `false`  | Whether the children wrapper is inline or block. Useful when children need to take up the entire container width.                                |
 * | removeUnderlinedText | `boolean`                           |          | Removes underline on child component, when underline is not desired.                                                                             |
 * | size                 | [`size`](#size)                     |          | The maximum possible size of the Tooltip.                                                                                                        |
 * | stopPropagation      | `boolean`                           |          | If `true` the click event on children won't bubble. Useful when you use Tooltip inside another clickable element.                                |
 * | lockScrolling        | `boolean`                           | `true`   | Whether to prevent scrolling of the rest of the page while Tooltip is open on mobile. This is on by default to provide a better user experience. |
 * | renderInPortal       | `boolean`                           | `true`   | Optional prop, set it to `false` if you're rendering Tooltip inside a custom portal, defaults to `true`                                          |
 * | placement            | [`placement`](#placement)           | `auto`   | 12 different placements to choose from                                                                                                           |
 * | noFlip               | `boolean`                           | `false`  | Turns off automatic flipping of the Tooltip when there is not enough space                                                                       |
 * | offset               | `[number, number]`                  | `[0, 5]` | Set offset `[vertical, horizontal]` for Tooltip                                                                                                  |
 * | tabIndex             | `string \| number`                  | `"0"`    | Specifies the tab order of an element                                                                                                            |
 * | onShow               | `() => void \| () => Promise<void>` |          | Callback when Tooltip is shown                                                                                                                   |
 * | labelClose           | `string`                            | `Close`  | Label for close button.                                                                                                                          |
 *
 * ## enum
 *
 * | size       |
 * | :--------- |
 * | `"small"`  |
 * | `"medium"` |
 *
 * ## placement
 *
 * | Placement        |
 * | :--------------- |
 * | `"top"`          |
 * | `"right"`        |
 * | `"bottom"`       |
 * | `"left"`         |
 * | `"top-start"`    |
 * | `"top-end"`      |
 * | `"right-start"`  |
 * | `"right-end"`    |
 * | `"bottom-start"` |
 * | `"bottom-end"`   |
 * | `"left-start"`   |
 * | `"left-end"`     |
 * | `"auto"`         |
 * | `"auto-start"`   |
 * | `"auto-end"`     |
 * | `"bottom"`       |
 *
 * ## Functional specs
 *
 * - Whenever event `onMouseEnter`, `onFocus` or `onClick` fires, the script inside this component will calculate possible positions that can be applied and the first possible will be applied.
 *
 * - You can prefer one position and one align that will be used if possible, otherwise the default order in [`enum`](#enum) table will be used for both position and align.
 *
 * - For mobile devices, the user needs to click on the children to open the Tooltip.
 *
 * - The Tooltip component supports rendering of many different components inside its children. You can use combination of e.g. Text, Stack, List and custom image to show information to user about the CVV code. All rendered text inside the Tooltip should have white color on big devices (>= largeMobile) automatically:
 *
 * ```jsx
 * <Tooltip
 *   content={
 *     <Stack>
 *       <CustomImage />
 *       <Text>You can find the CVV in the right corner of your credit card.</Text>
 *       <List>
 *         <ListItem>Additional information</ListItem>
 *       </List>
 *     </Stack>
 *   }
 * >
 *   <InformationCircle />
 * </Tooltip>
 * ```
 *
 * - If you use Tooltip inside Alert, the Text should be automatically underlined with dotted line colored into the color of Alert.
 *
 * - For ensuring that Tooltip component will work properly, add `div` with `id` set to `tooltips`. If not, the Tooltip will be rendered into the end of your DOM.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * ### Tooltip
 *
 * The Tooltip component has been designed with accessibility in mind. It can be used with keyboard navigation and includes properties that enhance the experience for users of assistive technologies.
 *
 * While the `aria-label` and `aria-labelledby` attributes are not needed for the Tooltip component itself, it is important to ensure that the components passed as children can be perceived by assistive technologies. This ensures that the Tooltip component is accessible.
 *
 * #### Example 1
 *
 * The content of children component is text, so it is read by screen reader.
 *
 * ```jsx
 * <Tooltip
 *   content={
 *     <div>
 *       <p>Lorem ipsum dolor sit amet.</p>
 *     </div>
 *   }
 * >
 *   <Text>Learn more.</Text>
 * </Tooltip>
 * ```
 *
 * The screen reader will announce: "Learn more. Lorem ipsum dolor sit amet.".
 *
 * #### Example 2
 *
 * The children element is an icon component. To achieve the accessibility of the Tooltip, adding an `aria-label` to the icon component is necessary.
 *
 * ```jsx
 * <Tooltip
 *   content={
 *     <div>
 *       <p>Lorem ipsum dolor sit amet.</p>
 *     </div>
 *   }
 * >
 *   <Airplane ariaLabel="More information" />
 * </Tooltip>
 * ```
 *
 * Once the icon is focused by the screen reader, it will announce: "More information", followed by announcing the content of the tooltip: "Lorem ipsum dolor sit amet.".
 *
 * The `Tooltip` component renders a wrapping `span` with the `role="button"` attribute by default. Ensure that the trigger component is set as a non-interactive component (for example, using the `asComponent` prop) to avoid the accessibility violation of nesting interactive controls (`Interactive controls must not be nested`).
 *
 *
 * @orbit-doc-end
 */
const Tooltip = ({
  children,
  enabled = true,
  onShow,
  tabIndex = "0",
  dataTest,
  size = SIZE_OPTIONS.SMALL,
  content,
  id,
  placement,
  labelClose = "Close",
  lockScrolling,
  renderInPortal = true,
  stopPropagation = false,
  removeUnderlinedText,
  block = false,
}: Props) => {
  const { isLargeMobile } = useMediaQuery();
  return isLargeMobile ? (
    <TooltipPrimitive
      dataTest={dataTest}
      id={id}
      tabIndex={tabIndex}
      onShow={onShow}
      enabled={enabled}
      content={content}
      size={size}
      renderInPortal={renderInPortal}
      placement={placement}
      stopPropagation={stopPropagation}
      removeUnderlinedText={removeUnderlinedText}
      block={block}
    >
      {children}
    </TooltipPrimitive>
  ) : (
    <MobileDialog
      dataTest={dataTest}
      tabIndex={tabIndex}
      id={id}
      labelClose={labelClose}
      onShow={onShow}
      enabled={enabled}
      lockScrolling={lockScrolling}
      content={content}
      removeUnderlinedText={removeUnderlinedText}
      stopPropagation={stopPropagation}
      block={block}
    >
      {children}
    </MobileDialog>
  );
};

export default Tooltip;
