"use client";

import * as React from "react";
import cx from "clsx";

import useFocusTrap from "../hooks/useFocusTrap";
import useLockScrolling from "../hooks/useLockScrolling";
import DrawerClose from "./components/DrawerClose";
import POSITIONS from "./consts";
import Stack from "../Stack";
import Heading from "../Heading";
import type { Props } from "./types";
import theme from "../defaultTheme";
import useStateWithTimeout from "../hooks/useStateWithTimeout";
import useClickOutside from "../hooks/useClickOutside";
import FOCUSABLE_ELEMENT_SELECTORS from "../hooks/useFocusTrap/consts";

const getTransitionClasses = (shown: boolean, position: string) => {
  if (shown) return "translate-x-0 visible";

  return position === POSITIONS.RIGHT
    ? "ltr:lm:translate-x-[var(--lm-drawer-width)] rtl:lm:-translate-x-[var(--lm-drawer-width)] ltr:translate-x-full rtl:-translate-x-full invisible w-0"
    : "ltr:lm:-translate-x-[var(--lm-drawer-width)] rtl:lm:translate-x-[var(--lm-drawer-width)] ltr:-translate-x-full rtl:translate-x-full invisible w-0";
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Drawer
 *
 * To implement Drawer component into your project you'll need to add the import:
 *
 * ```jsx
 * import Drawer from "@kiwicom/orbit-components/lib/Drawer";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Drawer shown>Content to show</Drawer>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Drawer component.
 *
 * | Name          | Type                    | Default   | Description                                                                                                                           |
 * | :------------ | :---------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------ |
 * | actions       | `React.Node`            |           | Actions, especially Buttons, that will be rendered in the Drawer's header.                                                            |
 * | **children**  | `React.Node`            |           | The content of the Drawer.                                                                                                            |
 * | dataTest      | `string`                |           | Optional prop for testing purposes.                                                                                                   |
 * | id            | `string`                |           | Sets the `id` attribute for the `Drawer`.                                                                                             |
 * | noPadding     | `boolean`               | `false`   | If `true`, the wrapper won't have any inner padding.                                                                                  |
 * | onClose       | `() => void \| Promise` |           | Function for handling the onClose event.                                                                                              |
 * | position      | [`enum`](#enum)         | `"right"` | The side on which the Drawer should appear.                                                                                           |
 * | shown         | `boolean`               | `"true"`  | If `true`, the Drawer will be visible; otherwise, it will be visually hidden but will stay in the DOM.                                |
 * | suppressed    | `boolean`               | `false`   | If `true`, the Drawer will have a cloudy background.                                                                                  |
 * | title         | `string`                |           | Title of the Drawer that will be rendered in the Drawer's header. If `ariaLabel` is undefined, this will be used as `aria-label`.     |
 * | width         | `string`                | `"320px"` | The width of the Drawer.                                                                                                              |
 * | lockScrolling | `boolean`               | `true`    | Whether to prevent scrolling of the rest of the page while Drawer is open. This is on by default to provide a better user experience. |
 * | fixedHeader   | `boolean`               |           | If `true`, the DrawerHeader will be fixed to the top.                                                                                 |
 * | labelHide     | `string`                | `Hide`    | Label for the close button.                                                                                                           |
 * | ariaLabel     | `string`                |           | Optional prop for `aria-label`.                                                                                                       |
 *
 * ### enum
 *
 * | position  |
 * | :-------- |
 * | `"right"` |
 * | `"left"`  |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * ## Drawer
 *
 * The Drawer component has been designed with accessibility in mind.
 *
 * To ease keyboard navigation, when opening a drawer, the focus is moved to the drawer.
 *
 * It should not be possible to focus anything outside of the drawer while it is open, ensuring a focused user experience.
 *
 * When closing the drawer, **the focus should be moved back to the element that triggered the drawer**.
 * This is not handled automatically, so make sure to implement this behavior in your application by managing focus properly.
 *
 * ### Keyboard interaction
 *
 * The Drawer component handles the following keyboard interactions:
 *
 * - **Escape** key closes the drawer
 * - **Tab** key cycles through focusable elements within the drawer
 * - **Shift+Tab** navigates backward through focusable elements
 *
 * ### ARIA attributes
 *
 * The Drawer component accepts ARIA attributes to ensure it's accessible to users of assistive technologies. You can provide these attributes as described below:
 *
 * | Name      | Type     | Description                                                                                                                 |
 * | :-------- | :------- | :-------------------------------------------------------------------------------------------------------------------------- |
 * | ariaLabel | `string` | Text that labels the drawer content. Think of it as the title of the drawer. This should be used if `title` is not defined. |
 *
 * If you provide a `title` prop, it is automatically used as the drawer's `aria-label`.
 * However, if you also provide a `ariaLabel` prop, it will take precedence over the `title` prop.
 *
 * ### Close button
 *
 * The Drawer component includes a close button that can be displayed in the header. It's important to use the `labelHide` prop to provide an accessible label for this button.
 *
 * The default value is "Hide", but you should consider providing a more descriptive label, especially for internationalization purposes.
 *
 * ### Toggle element
 *
 * When implementing a toggle element to open and close the drawer, it's essential that the element uses the `aria-expanded` attribute to indicate whether the drawer is open (`true`) or closed (`false`).
 * This informs assistive technologies about the current state of the drawer.
 *
 * Additionally, the toggle element should use the `aria-controls` attribute with the value matching the drawer's ID.
 * This creates a programmatic association between the toggle and the drawer it controls, helping assistive technologies understand this relationship.
 *
 *
 * @orbit-doc-end
 */
const Drawer = ({
  children,
  onClose,
  lockScrolling = true,
  fixedHeader,
  labelHide = "Hide",
  shown = true,
  width = "320px",
  position = POSITIONS.RIGHT,
  dataTest,
  id,
  noPadding,
  suppressed,
  title,
  actions,
  ariaLabel,
  triggerRef,
}: Props) => {
  const overlayRef = React.useRef(null);
  const drawerRef = React.useRef<HTMLDivElement | null>(null);
  const focusableElements = React.useRef<HTMLElement[]>([]);

  const [overlayShown, setOverlayShown, setOverlayShownWithTimeout] = useStateWithTimeout<boolean>(
    shown,
    parseFloat(theme.orbit.durationNormal) * 1000,
  );

  useFocusTrap(drawerRef, true);
  useLockScrolling(drawerRef, lockScrolling && overlayShown);

  React.useEffect(() => {
    if (overlayShown !== shown) {
      if (shown) {
        setOverlayShown(true);
      } else if (!shown) {
        setOverlayShownWithTimeout(false);
      }
    }
  }, [overlayShown, setOverlayShown, shown, setOverlayShownWithTimeout]);

  React.useEffect(() => {
    const findFocusableElements = () => {
      return Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENT_SELECTORS) || [],
      );
    };

    if (!shown || !drawerRef.current) return undefined;

    // Find all focusable elements within the drawer
    focusableElements.current = findFocusableElements();

    if (focusableElements.current.length) {
      focusableElements.current[0].focus();
    }

    const observer = new MutationObserver(() => {
      focusableElements.current = findFocusableElements();
    });

    // Start observing the drawer content for DOM changes
    observer.observe(drawerRef.current, {
      childList: true, // Watch for added/removed nodes
      subtree: true, // Watch all descendants, not just direct children
    });

    return () => {
      observer.disconnect();
    };
  }, [shown]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (shown && event.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, shown]);

  const handleClickOutside = React.useCallback(() => {
    if (shown && onClose) onClose();
  }, [shown, onClose]);

  const vars = {
    "--lm-drawer-width": width,
  };

  const varClasses = [vars["--lm-drawer-width"] != null && "lm:max-w-[var(--lm-drawer-width)]"];

  const onlyIcon = !title && !actions;
  const bordered = !!(title || actions);

  useClickOutside(drawerRef, handleClickOutside);

  React.useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      triggerRef?.current?.focus();
    };
  }, [triggerRef]);

  return (
    <>
      <div
        className={cx(
          "orbit-drawer",
          "flex",
          "fixed inset-0",
          "size-full",
          "z-drawer",
          "duration-fast transition-[background-color,visibility] ease-in-out",
          overlayShown ? "visible" : "invisible",
          shown ? "bg-drawer-overlay-background" : "bg-transparent",
        )}
        id={id}
        ref={overlayRef}
        aria-hidden="true"
      />
      <div
        className={cx(
          "box-border block",
          "fixed inset-y-0",
          "size-full",
          "font-base",
          "z-drawer",
          "overflow-y-auto",
          "overflow-x-hidden",
          "shadow-level3",
          "duration-normal transform-gpu transition-[transform,visibility,width] ease-in-out",
          getTransitionClasses(shown, position),
          suppressed ? "bg-cloud-light" : "bg-white-normal",
          position === POSITIONS.RIGHT ? "end-0" : "start-0",
          ...varClasses,
        )}
        style={vars as React.CSSProperties}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel || title}
        data-test={dataTest}
      >
        {(title || actions || onClose) && (
          <div
            className={cx(
              "flex",
              "items-center",
              "h-1600",
              "box-border",
              suppressed && !bordered ? "bg-cloud-light" : "bg-white-normal",
              fixedHeader && "z-sticky sticky top-0",
              onlyIcon ? "justify-end" : "justify-between",
              bordered && "border-cloud-normal border-x-0 border-b border-t-0 border-solid",
              "px-400 lm:ps-800 lm:pe-600 py-0",
            )}
          >
            {title && <Heading type="title2">{title}</Heading>}
            {actions && (
              <Stack spacing="none" justify="end" flex shrink>
                {actions}
              </Stack>
            )}
            {onClose && <DrawerClose onClick={onClose} title={labelHide} />}
          </div>
        )}
        <div
          className={cx(
            !onClose && noPadding && "mt-600",
            noPadding && "mb-600",
            !noPadding && (bordered ? "p-400 lm:p-800" : "px-400 pb-400 lm:px-800 lm:pb-800"),
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
