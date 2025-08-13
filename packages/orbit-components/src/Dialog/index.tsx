"use client";

import * as React from "react";
import cx from "clsx";

import useFocusTrap from "../hooks/useFocusTrap";
import Portal from "../Portal";
import useTheme from "../hooks/useTheme";
import Heading from "../Heading";
import Text from "../Text";
import Stack from "../Stack";
import useLockScrolling from "../hooks/useLockScrolling";
import useClickOutside from "../hooks/useClickOutside";
import useRandomId from "../hooks/useRandomId";
import type { Props } from "./types";
import FOCUSABLE_ELEMENT_SELECTORS from "../hooks/useFocusTrap/consts";

const ActionButtonWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lm:w-auto lm:[&>button]:flex-none lm:[&>button]:w-auto w-full [&>button]:w-full [&>button]:flex-auto">
      {children}
    </div>
  );
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Dialog
 *
 * To implement Dialog component into your project you'll need to add the import:
 *
 * ```jsx
 * import Dialog from "@kiwicom/orbit-components/lib/Dialog";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Dialog
 *   title="Are you sure you want to log out now?"
 *   primaryAction={<Button type="critical">Log out</Button>}
 * />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in Dialog component.
 *
 * | Name              | Type                                                    | Default | Description                                                                                                                                                     |
 * | :---------------- | :------------------------------------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | dataTest          | `string`                                                |         | Optional prop for testing purposes.                                                                                                                             |
 * | id                | `string`                                                |         | Set `id` for `Dialog`.                                                                                                                                          |
 * | renderInPortal    | `boolean`                                               | `true`  | Optional prop, set it to `false` if you're rendering Dialog inside a custom portal.                                                                             |
 * | description       | `React.Node`                                            |         | Optional description of the main action that Dialog performs.                                                                                                   |
 * | illustration      | `React.Node`                                            |         | Optional illustration of the Dialog.                                                                                                                            |
 * | **primaryAction** | `React.Node`                                            |         | Primary and required action that user can do with the Dialog.                                                                                                   |
 * | secondaryAction   | `React.Node`                                            |         | Optional, secondary action that user can perform - possibility to close the Dialog most of the time.                                                            |
 * | lockScrolling     | `boolean`                                               | `true`  | Whether to prevent scrolling of the rest of the page while Dialog is open. This is on by default to provide a better user experience.                           |
 * | onClose           | `() => void \| Promise`                                 |         | Callback that is triggered when the dialog is closed.                                                                                                           |
 * | **title**         | `React.Node`                                            |         | The title of the Dialog - preferably the purpose of the main action.                                                                                            |
 * | titleAs           | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "div"` |         | The HTML tag of the title. It **does not** change the visual style of the title. If undefined, it will render as a `div`.                                       |
 * | maxWidth          | `number` (>540)                                         |         | Specifies the maximum width in pixels of the Dialog component. This property only affects the display on larger screen sizes and and widths greater than 540px. |
 * | triggerRef        | `React.RefObject<HTMLElement>`                          |         | The ref to the element which triggers the Dialog.                                                                                                               |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Dialog component has been designed with accessibility in mind, providing features that enhance the experience for users of assistive technologies.
 *
 * ### Accessibility props
 *
 * The following props are available to improve the accessibility of your Dialog component:
 *
 * | Name        | Type                                                    | Description                                                                                                                     |
 * | :---------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
 * | title       | `React.Node`                                            | Provides a visible title that is associated with the dialog as its accessible name.                                             |
 * | titleAs     | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "div"` | Defines the semantic HTML element for the title while maintaining its visual appearance.                                        |
 * | description | `React.Node`                                            | Provides additional context about the dialog's purpose, which is automatically associated with the dialog via aria-describedby. |
 * | triggerRef  | `React.RefObject<HTMLElement>`                          | References the element that triggered the dialog, allowing focus to return to it when the dialog closes.                        |
 *
 * ### Automatic Accessibility Features
 *
 * The Dialog component automatically implements the following accessibility features:
 *
 * - `role="dialog"`: Identifies the element as a dialog to assistive technologies.
 *
 * - `aria-modal="true"`: Indicates that the dialog is modal, meaning it blocks interaction with page content.
 *
 * - `aria-labelledby`: Automatically associates the dialog with its title for screen readers using a generated ID.
 *
 * - `aria-describedby`: When a description is provided, it's automatically associated with the dialog using a generated ID.
 *
 * - The Dialog's animations respect the user's reduced motion preferences.
 *
 * ### Focus Management
 *
 * - When opened, focus is automatically moved to the first focusable element within the dialog.
 *
 * - When closed, focus returns to the element that triggered the dialog (when `triggerRef` is provided).
 *
 * ### Best practices
 *
 * - Always provide a descriptive `title` that clearly indicates the purpose of the dialog.
 *
 * - Use the `description` prop to provide additional context when needed, especially for complex interactions.
 *
 * - Ensure that primary and secondary actions have clear, descriptive labels that indicate their purpose.
 *
 * - Use semantic heading levels (`titleAs` prop) that fit within your page's heading hierarchy. For example, if your dialog appears within a page section that uses `h2`, consider using `titleAs="h3"` for proper document structure.
 *
 * - Test keyboard navigation within the dialog to ensure all interactive elements are accessible.
 *
 * - When creating a dialog trigger, help screen reader users understand the relationship between the trigger and the dialog:
 *   1. Apply `aria-expanded="true"` to the trigger element when the dialog is open and `aria-expanded="false"` when it's closed.
 *   2. Use `aria-controls` on the trigger element to associate it with the dialog via Dialog component's `id`.
 *
 * ### Keyboard Navigation
 *
 * The Dialog component supports the following keyboard interactions:
 *
 * - **Escape** key closes the dialog
 * - **Tab** key navigates through focusable elements within the dialog, with focus being contained within the dialog while it's open
 * - **Enter/Space** keys activate buttons and other interactive elements within the dialog
 *
 * ### Examples
 *
 * #### Basic Dialog with accessible title and semantic heading level
 *
 * ```jsx
 * <Dialog
 *   title="Edit your profile information"
 *   titleAs="h2"
 *   description="Update your personal details to keep your account information current."
 *   primaryAction={<Button type="critical">Save changes</Button>}
 *   secondaryAction={<Button type="secondary">Cancel</Button>}
 *   onClose={() => handleClose()}
 * />
 * ```
 *
 * #### Dialog with proper trigger
 *
 * ```jsx
 * function ExampleComponent() {
 *   const [isOpen, setIsOpen] = React.useState(false);
 *   const buttonRef = React.useRef(null);
 *
 *   return (
 *     <>
 *       <Button ref={buttonRef} onClick={() => setIsOpen(true)} aria-expanded={isOpen}>
 *         Change email preferences
 *       </Button>
 *
 *       {isOpen && (
 *         <Dialog
 *           title="Email notification settings"
 *           description="Choose which email notifications you'd like to receive from us."
 *           primaryAction={
 *             <Button
 *               onClick={() => {
 *                 savePreferences();
 *                 setIsOpen(false);
 *               }}
 *             >
 *               Save preferences
 *             </Button>
 *           }
 *           secondaryAction={
 *             <Button type="secondary" onClick={() => setIsOpen(false)}>
 *               Cancel
 *             </Button>
 *           }
 *           onClose={() => setIsOpen(false)}
 *           triggerRef={buttonRef}
 *         />
 *       )}
 *     </>
 *   );
 * }
 * ```
 *
 *
 * @orbit-doc-end
 */
const Dialog = ({
  dataTest,
  id,
  title,
  titleAs,
  description,
  primaryAction,
  secondaryAction,
  onClose,
  maxWidth,
  renderInPortal = true,
  illustration,
  lockScrolling = true,
  triggerRef,
}: Props) => {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  useLockScrolling(wrapperRef, lockScrolling);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  useFocusTrap(ref, true);

  React.useEffect(() => {
    const transitionLength = parseFloat(theme.orbit.durationFast) * 1000;
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.focus();
      }
    }, transitionLength);

    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [theme.orbit.durationFast, onClose]);

  React.useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      triggerRef?.current?.focus();
    };
  }, [triggerRef]);

  React.useEffect(() => {
    if (ref.current) {
      const focusableElements = ref.current.querySelectorAll<HTMLElement>(
        FOCUSABLE_ELEMENT_SELECTORS,
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, []);

  const handleClose = (ev: MouseEvent) => {
    if (ref && ref.current && onClose) {
      if (ref.current && !ref.current.contains(ev.target as Node)) onClose();
    }
  };

  useClickOutside(ref, handleClose);

  const titleId = useRandomId();
  const descriptionId = useRandomId();

  const vars = {
    "--dialog-max-width": `${maxWidth}px`,
  } as React.CSSProperties;

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      ref={wrapperRef}
      data-test={dataTest}
      id={id}
      className={cx([
        "font-base",
        "size-full",
        "p-400 z-overlay box-border overflow-x-hidden bg-[rgba(0,0,0,0.5)]",
        "fixed inset-0",
        "motion-safe:duration-fast motion-safe:transition-opacity motion-safe:ease-in-out",
        "lm:opacity-100 lm:flex lm:items-center lm:justify-center",
      ])}
    >
      <div className="flex min-h-full items-center">
        <div
          ref={ref}
          style={vars}
          className={cx([
            "shadow-level4 pt-600 px-400 pb-400 bg-white-normal rounded-dialog-mobile box-border block w-full",
            "lm:min-w-dialog-width lm:p-600 lm:rounded-dialog-desktop",
            maxWidth != null && "lm:max-w-[var(--dialog-max-width)]",
          ])}
        >
          {illustration && <div className="mb-400 lm:text-start text-center">{illustration}</div>}
          <div className="mb-400 gap-200 lm:text-start lm:[&>.orbit-text]:text-start flex flex-col text-center [&>.orbit-text]:text-center">
            {title && (
              <Heading
                type="title3"
                align="center"
                largeMobile={{ align: "start" }}
                role={undefined}
                as={titleAs}
                id={titleId}
              >
                {title}
              </Heading>
            )}
            {description && (
              <Text type="secondary" id={descriptionId}>
                {description}
              </Text>
            )}
          </div>
          <Stack
            direction="column-reverse"
            spacing="200"
            largeMobile={{ direction: "row", justify: "end" }}
          >
            {secondaryAction && <ActionButtonWrapper>{secondaryAction}</ActionButtonWrapper>}
            <ActionButtonWrapper>{primaryAction}</ActionButtonWrapper>
          </Stack>
        </div>
      </div>
    </div>
  );

  return renderInPortal ? <Portal renderInto="modals">{dialog}</Portal> : dialog;
};

export default Dialog;
