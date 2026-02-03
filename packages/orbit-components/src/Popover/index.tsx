"use client";

import * as React from "react";
import { FloatingPortal } from "@floating-ui/react";

import useStateWithTimeout from "../hooks/useStateWithTimeout";
import { PLACEMENTS } from "../common/placements";
import PopoverContent from "./components/ContentWrapper";
import useRandomId from "../hooks/useRandomId";
import handleKeyDown from "../utils/handleKeyDown";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Popover
 *
 * To implement Popover component into your project you'll need to add the import:
 *
 * ```jsx
 * import Popover from "@kiwicom/orbit-components/lib/Popover";
 * ```
 *
 * After adding import to your project you can use it simply like:
 *
 * ```jsx
 * <Popover content="Your content">
 *   <Button />
 * </Popover>
 * ```
 *
 * ## Props
 *
 * The table below contains all types of props available in the Popover component.
 *
 * | Name           | Type                                                  | Default             | Description                                                                                                                                          |
 * | :------------- | :---------------------------------------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | actions        | `React.Node`                                          |                     | Actions to display at the bottom of the Popover. [See Functional specs](#functional-specs)                                                           |
 * | **content**    | `React.Node`                                          |                     | The content to display in the Popover.                                                                                                               |
 * | **children**   | `React.Node`                                          |                     | The reference element where the Popover will appear.                                                                                                 |
 * | dataTest       | `string`                                              |                     | Optional prop for testing purposes.                                                                                                                  |
 * | id             | `string`                                              |                     | Set `id` for `Popover`.                                                                                                                              |
 * | offset         | [`offset`](#offset)                                   | `{left: 0, top: 0}` | Optional prop to set position offset.                                                                                                                |
 * | fixed          | `boolean`                                             |                     | Changes position to fixed from absolute, good for use in sticky components.                                                                          |
 * | noPadding      | `boolean`                                             | `true`              | Adds or removes padding around popover's content.                                                                                                    |
 * | opened         | `boolean`                                             |                     | Prop for programmatically controlling Popover inner state. If `opened` is present open triggers are ignored.                                         |
 * | overlapped     | `boolean`                                             | `false`             | If `true`, the content of Popover will overlap the trigger children.                                                                                 |
 * | renderInPortal | `boolean`                                             | `true`              | Optional prop, set it to `false` if you're rendering Popover inside a custom portal, defaults to `true`.                                             |
 * | width          | `string`                                              |                     | Width of popover, if undefined, it is set to `auto`.                                                                                                 |
 * | maxHeight      | `string`                                              |                     | The maximum height of the content of the popover, if undefined, it is set to `100%`.                                                                 |
 * | onClose        | `() => void \| Promise`                               |                     | Function for handling onClose.                                                                                                                       |
 * | onOpen         | `() => void \| Promise`                               |                     | Function for handling onOpen.                                                                                                                        |
 * | placement      | [`placement`](#placement)                             | `bottom-start`      | 15 different placements to choose from.                                                                                                              |
 * | lockScrolling  | `boolean`                                             | `true`              | Whether to prevent scrolling of the rest of the page while Popover is open on mobile. This is `true` by default to provide a better user experience. |
 * | noFlip         | `boolean`                                             | `false`             | Turns off automatic flipping of the Popover when there is not enough space.                                                                          |
 * | allowOverflow  | `boolean`                                             | `false`             | Allows the Popover to be cut off instead of moving it while scrolling to keep it visible.                                                            |
 * | labelClose     | `React.Node`                                          | `Close`             | The label for the close button displayed on mobile devices.                                                                                          |
 * | renderTimeout  | `number`                                              | `0`                 | The timeout for rendering the Popover.                                                                                                               |
 * | zIndex         | `number`                                              | `710`               | The zIndex value of the Popover component.                                                                                                           |
 * | ariaLabel      | `string`                                              |                     | Optional prop for `aria-label` attribute.                                                                                                            |
 * | ariaLabelledby | `string`                                              |                     | Optional prop for `aria-labelledby` attribute.                                                                                                       |
 * | role           | `"dialog" \| "menu" \| "grid" \| "listbox" \| "tree"` | `"dialog"`          | Optional prop for `role` attribute on the popover.                                                                                                   |
 * | tabIndex       | `number`                                              |                     | Optional prop for `tabIndex` attribute on the trigger element.                                                                                       |
 * | triggerRole    | `string`                                              |                     | Optional prop for `role` attribute on the trigger element.                                                                                           |
 *
 * ## placement
 *
 * | value            |
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
 *
 * ## offset
 *
 * | key    | value    |
 * | :----- | -------- |
 * | `top`  | `number` |
 * | `left` | `number` |
 *
 * ## Functional specs
 *
 * - Whenever `onClick` fires, the component will calculate possible positions that can be applied and the first possible will be applied, if none is provided to the `placement` prop.
 *
 * - The `actions` prop is a way to override the default close behavior with your own actions. Keep in mind that one of the actions should close the popover.
 *
 * - The Popover component supports rendering of many different components inside its children. You can use a combination of e.g. Text, Stack, ListChoice for example:
 *
 * ```jsx
 * <Popover
 *   content={
 *     <React.Fragment>
 *       <ListChoice
 *         title="Choice Title"
 *         description="Further description"
 *         icon={<Accommodation />}
 *         onClick={action}
 *       />
 *       <ListChoice
 *         title="Choice Title"
 *         description="Further description"
 *         icon={<Accommodation />}
 *         onClick={action}
 *       />
 *       <ListChoice
 *         title="Choice Title"
 *         description="Further description"
 *         icon={<Accommodation />}
 *         onClick={action}
 *       />
 *     </React.Fragment>
 *   }
 * >
 *   <Button>Open Popover</Button>
 * </Popover>
 * ```
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Popover component has been designed with accessibility in mind, providing features that enhance the experience for users of assistive technologies.
 *
 * ### Accessibility props
 *
 * The following props are available to improve the accessibility of your Popover component:
 *
 * | Prop           | Type                                                  | Default    | Description                                                                                                                      |
 * | :------------- | :---------------------------------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | ariaLabel      | `string`                                              |            | Adds `aria-label` to the popover content, providing a description for screen readers.                                            |
 * | ariaLabelledby | `string`                                              |            | References the ID of an element that labels the popover content for screen readers.                                              |
 * | role           | `"dialog" \| "menu" \| "grid" \| "listbox" \| "tree"` | `"dialog"` | Defines the ARIA role of the popover component.                                                                                  |
 * | labelClose     | `React.Node`                                          | `"Close"`  | The label for the close button displayed on mobile devices.                                                                      |
 * | tabIndex       | `number`                                              |            | Controls the tab order of the trigger element. Useful when placing popover in controlled focus contexts like grids.              |
 * | triggerRole    | `string`                                              |            | Sets the ARIA role of the trigger element. Useful for specialized contexts like `"gridcell"` when using popover in tables/grids. |
 *
 * ### Automatic Accessibility Features
 *
 * The Popover component automatically handles several important ARIA attributes on the trigger element:
 *
 * - `aria-controls`: Links the trigger element to the popover content using a unique ID or `id` provided via props.
 * - `aria-haspopup`: Indicates that the trigger reveals additional content (set to the popover's role).
 * - `aria-expanded`: Indicates whether the popover is currently visible or hidden.
 *
 * These attributes are managed by the component and do not need to be manually added to your code.
 *
 * The trigger element is rendered with `role="button"` by default, but this can be customized using the `triggerRole` prop for specialized contexts.
 *
 * The trigger element has `tabIndex="0"` by default, making it focusable and following the natural tab order. You can set `tabIndex="-1"` to make it non-focusable when needed, but ensure focus is still properly handled for keyboard accessibility.
 *
 * ### Best practices
 *
 * #### Non-interactive trigger elements
 *
 * The Popover's trigger element (provided as `children`) should not be an interactive element like a native `<button>` or `<a>` tag, as this creates nested interactive elements which is an accessibility violation.
 *
 * For example, if using a Button component as a trigger, set `asComponent="div"` to avoid this issue:
 *
 * ```jsx
 * <Popover content="Popover content">
 *   <Button asComponent="div">Open popover</Button>
 * </Popover>
 * ```
 *
 * #### Descriptive labels
 *
 * - Provide meaningful `ariaLabel` or `ariaLabelledby` props to help screen reader users understand the purpose of the popover.
 * - The `ariaLabel` should be concise but descriptive, such as "Passenger selection" or "Filter options".
 * - When using `ariaLabelledby`, ensure the referenced element (by ID) contains clear, descriptive text that explains the popover's purpose.
 * - Always ensure that `ariaLabel` text and any text in elements referenced by `ariaLabelledby` are properly translated to match the user's language.
 *
 * For example:
 *
 * ```jsx
 * // Using ariaLabel
 * <Popover ariaLabel="Passenger selection options" content={passengerSelectionContent}>
 *   <Button asComponent="div">Select passengers</Button>
 * </Popover>
 * ```
 *
 * ```jsx
 * // Using ariaLabelledby
 * <div>
 *   <h2 id="passenger-selection-heading">Passenger selection</h2>
 *   <Popover ariaLabelledby="passenger-selection-heading" content={passengerSelectionContent}>
 *     <Button asComponent="div">Select passengers</Button>
 *   </Popover>
 * </div>
 * ```
 *
 * The `ariaLabel` and `ariaLabelledby` props provide important context about the popover's content to screen reader users. Always use one of these props to ensure your Popover is accessible.
 *
 * #### Custom close label
 *
 * When the popover is closable on mobile devices, the default "Close" label can be overridden with a more descriptive one using the `labelClose` prop.
 *
 * ```jsx
 * <Popover content="Popover content" labelClose="Close passenger selection">
 *   <Button asComponent="div">Select passengers</Button>
 * </Popover>
 * ```
 *
 * #### Keyboard navigation
 *
 * The Popover component supports keyboard navigation:
 *
 * - The popover can be opened by pressing <kbd>Enter</kbd> or <kbd>Space</kbd> when the trigger element has focus.
 * - When open, the popover can be closed by pressing <kbd>Escape</kbd>.
 * - Focus is properly managed within the popover when it's open.
 *
 * #### Appropriate roles
 *
 * The `role` prop should be chosen based on the popover's content and purpose:
 *
 * - Use `"dialog"` (the default) for most cases, especially when presenting forms or information.
 * - Use `"menu"` when the popover contains a list of actions or menu items.
 * - Use `"listbox"` when presenting a list of selectable options.
 * - Use `"grid"` for tabular data.
 * - Use `"tree"` for hierarchical, expandable/collapsible content.
 *
 * ### Examples
 *
 * #### Basic popover with proper labeling
 *
 * ```jsx
 * <Popover
 *   content={<Text>This is additional information about this feature.</Text>}
 *   ariaLabel="Feature information"
 * >
 *   <Button asComponent="div">More info</Button>
 * </Popover>
 * ```
 *
 * Screen readers would announce: "More info, dialogue pop-up collapsed, button" and when opened: "Feature information, dialog".
 *
 * #### Popover with custom role and existing label
 *
 * ```jsx
 * <Stack>
 *   <h2 id="passenger-selection">Passenger selection</h2>
 *   <Popover
 *     content={
 *       <Stack>
 *         <Stepper
 *           minValue={0}
 *           ariaLabelValue="Number of adult passengers"
 *           titleIncrement="Add adult passenger"
 *           titleDecrement="Remove adult passenger"
 *         />
 *       </Stack>
 *     }
 *     role="menu"
 *     ariaLabelledby="passenger-selection"
 *   >
 *     <Button asComponent="div" iconRight={<ChevronDown />}>
 *       Select passengers
 *     </Button>
 *   </Popover>
 * </Stack>
 * ```
 *
 * In this example, screen readers would announce "Select passengers, menu pop-up collapsed, button" and when opened: "Passenger selection, menu".
 *
 *
 * @orbit-doc-end
 */
const Popover = ({
  children,
  renderInPortal = true,
  opened,
  zIndex,
  content,
  onClose,
  id,
  onOpen,
  offset,
  placement = PLACEMENTS.BOTTOM_START,
  fixed,
  lockScrolling = true,
  noFlip,
  labelClose = "Close",
  renderTimeout = 0,
  allowOverflow,
  noPadding,
  width,
  maxHeight,
  actions,
  overlapped,
  dataTest,
  ariaLabel,
  ariaLabelledby,
  role = "dialog",
  tabIndex,
  triggerRole,
}: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const popoverId = useRandomId();
  const overlayId = useRandomId();

  const [shown, setShown, setShownWithTimeout, clearShownTimeout] = useStateWithTimeout<boolean>(
    false,
    renderTimeout,
  );

  const [render, setRender, setRenderWithTimeout, clearRenderTimeout] =
    useStateWithTimeout<boolean>(false, renderTimeout);

  const resolveCallback = React.useCallback(
    state => {
      if (onClose && !state) onClose();
      if (onOpen && state) onOpen();
    },
    [onClose, onOpen],
  );

  const closePopover = React.useCallback(() => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      setShown(false);
      clearShownTimeout();
      resolveCallback(false);
      setRenderWithTimeout(false);
    } else if (onClose) onClose();
  }, [setShown, clearShownTimeout, onClose, opened, resolveCallback, setRenderWithTimeout]);

  const handleEsc = React.useCallback(
    (ev: { key: string }) => {
      if (ev.key === "Escape") {
        closePopover();
      }
    },
    [closePopover],
  );

  const handleOut = React.useCallback(
    (ev?: MouseEvent | React.SyntheticEvent<HTMLElement>) => {
      ev?.stopPropagation();

      if (ev && ref.current && !ref.current.contains(ev.target as Node)) {
        closePopover();
      }
    },
    [closePopover],
  );

  const handleClick = React.useCallback(() => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      if (shown) {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
        resolveCallback(false);
      } else {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
        resolveCallback(true);
      }
    } else if (opened) {
      resolveCallback(false);
    } else if (!opened) {
      resolveCallback(true);
    }
  }, [
    clearRenderTimeout,
    clearShownTimeout,
    opened,
    resolveCallback,
    setRender,
    setRenderWithTimeout,
    setShown,
    setShownWithTimeout,
    shown,
  ]);

  React.useEffect(() => {
    if (opened || shown) {
      document.addEventListener("keydown", handleEsc);
    }

    if (typeof opened !== "undefined") {
      if (opened) {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
      } else {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [
    shown,
    handleEsc,
    opened,
    clearRenderTimeout,
    clearShownTimeout,
    setRender,
    setShown,
    setShownWithTimeout,
    setRenderWithTimeout,
  ]);

  const popover = (
    <PopoverContent
      shown={shown}
      id={id || popoverId}
      overlayId={overlayId}
      labelClose={labelClose}
      dataTest={dataTest}
      zIndex={zIndex}
      overlapped={overlapped}
      fixed={fixed}
      noFlip={noFlip}
      allowOverflow={allowOverflow}
      lockScrolling={lockScrolling}
      noPadding={noPadding}
      actions={actions}
      width={width}
      maxHeight={maxHeight}
      offset={offset}
      referenceElement={ref.current}
      onClose={handleOut}
      placement={placement}
      ariaLabel={ariaLabel}
      ariaLabelledby={ariaLabelledby}
      role={role}
    >
      {content}
    </PopoverContent>
  );

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="relative inline-block focus:outline-offset-1"
        ref={ref}
        role={triggerRole || "button"}
        tabIndex={tabIndex ? Number(tabIndex) : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown<HTMLDivElement>(handleClick)}
        aria-controls={shown ? id || popoverId : undefined}
        aria-haspopup={role}
        aria-expanded={shown}
      >
        {children}
      </div>
      {render &&
        (renderInPortal ? <FloatingPortal id="popovers">{popover}</FloatingPortal> : popover)}
    </>
  );
};

export default Popover;
