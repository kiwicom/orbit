"use client";

import * as React from "react";
import cx from "clsx";

import MenuHamburger from "../icons/MenuHamburger";
import ButtonLink from "../ButtonLink";
import useStateWithCallback from "../hooks/useStateWithCallback";
import type { Props } from "./types";

const NAVBAR_HEIGHT = { MOBILE: 52, DESKTOP: 64 };

/**
 * @orbit-doc-start
 * README
 * ----------
 * # NavigationBar
 *
 * To implement NavigationBar component into your project you'll need to add the import:
 *
 * ```jsx
 * import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
 * import LinkList from "@kiwicom/orbit-components/lib/LinkList";
 * import TextLink from "@kiwicom/orbit-components/lib/TextLink";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <NavigationBar
 *   onMenuOpen={handleDrawerOpen}
 *   menuButtonRef={buttonRef}
 *   menuId="main-navigation-drawer"
 *   menuExpanded={isDrawerOpen}
 * >
 *   <LinkList direction="row">
 *     <TextLink> Link 1 </TextLink>
 *     <TextLink> Link 2 </TextLink>
 *     <TextLink> Link 3 </TextLink>
 *   </LinkList>
 * </NavigationBar>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the NavigationBar component.
 *
 * | Name               | Type                                 | Default                  | Description                                                                                                 |
 * | :----------------- | :----------------------------------- | :----------------------- | :---------------------------------------------------------------------------------------------------------- |
 * | **children**       | `React.Node`                         |                          | The content of the NavigationBar.                                                                           |
 * | dataTest           | `string`                             |                          | Optional prop for testing purposes.                                                                         |
 * | id                 | `string`                             |                          | Unique identifier for the `NavigationBar`.                                                                  |
 * | onMenuOpen         | `event => void \| Promise`           |                          | Function for handling onClick event on HamburgerMenu icon. If `null`, the HamburgerMenu won't appear.       |
 * | onHide             | `() => void \| Promise`              |                          | Function for handling event when the NavigationBar disappears.                                              |
 * | onShow             | `() => void \| Promise`              |                          | Function for handling event when the NavigationBar appears.                                                 |
 * | hideOnScroll       | `boolean`                            | `true`                   | Turn on or off hiding navigation bar on scroll                                                              |
 * | openTitle          | `string`                             | `"Open navigation menu"` | Property for passing translation string to open Button.                                                     |
 * | bottomStyle        | `"shadow" \| "border"`               | `"shadow"`               | Property for setting bottom style of NavigationBar.                                                         |
 * | transparentBgAtTop | `boolean`                            | `false`                  | Property for setting the background to be transparent when the NavigationBar is at the top of the viewport. |
 * | menuButtonRef      | `React.RefObject<HTMLButtonElement>` |                          | Reference to access the menu button element for focus management.                                           |
 * | menuId             | `string`                             |                          | ID for connecting the button with its controlled drawer via aria-controls.                                  |
 * | menuExpanded       | `boolean`                            |                          | Indicates drawer open state for the aria-expanded attribute.                                                |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The NavigationBar component has been designed with accessibility in mind, providing semantic structure and menu button accessibility.
 *
 * ### Accessibility Props
 *
 * | Name          | Type            | Description                                                        |
 * | :------------ | :-------------- | :----------------------------------------------------------------- |
 * | openTitle     | string          | Sets the button's accessible name. Default: "Open navigation menu" |
 * | menuButtonRef | React.RefObject | Reference to access the menu button for focus management           |
 * | menuId        | string          | Links the button with its controlled drawer via aria-controls      |
 * | menuExpanded  | boolean         | Controls the button's aria-expanded state                          |
 *
 * ### Automatic Accessibility Features
 *
 * - Renders as a semantic `<header>` element, creating a native landmark
 * - Menu button gets proper ARIA attributes:
 *   - `aria-haspopup="true"` indicating it opens a menu
 *   - `aria-controls` linking to the drawer when `menuId` is provided
 *   - `aria-expanded` reflecting open/closed state when `menuExpanded` is provided
 * - Focus handling works through the provided refs
 *
 * ### Best Practices
 *
 * - Use descriptive `openTitle` text for the menu button
 * - Ensure good contrast when using `transparentBgAtTop`
 * - Add `aria-label` to `<nav>` elements inside the NavigationBar
 * - For drawer/menu implementations:
 *   - Move focus to the drawer when opened
 *   - Trap focus within the drawer
 *   - Return focus to the button when closed
 *
 * ### Keyboard Navigation
 *
 * - **Tab:** Navigate to interactive elements
 * - **Enter/Space:** Open the menu/drawer
 *
 * ### Examples
 *
 * #### Basic Example
 *
 * ```jsx
 * <NavigationBar id="main-navigation" openTitle="Open navigation menu">
 *   <Stack as="nav" aria-label="Main site navigation">
 *     <LinkList direction="row">
 *       <TextLink href="/flights" iconLeft={<Airplane />}>
 *         Flights
 *       </TextLink>
 *       <TextLink href="/about">About</TextLink>
 *       <TextLink href="/contact">Contact</TextLink>
 *     </LinkList>
 *   </Stack>
 * </NavigationBar>
 * ```
 *
 * Screen reader announcements:
 *
 * - "Banner landmark" when encountering the navigation bar
 * - "Main site navigation, navigation" for the nav element
 * - "Open navigation menu, button" for the menu button
 * - "Flights, link" for the first link
 *
 * #### Focus Management Example
 *
 * ```tsx
 * const App = () => {
 *   const buttonRef = useRef<HTMLButtonElement>(null);
 *   const [isDrawerOpen, setDrawerOpen] = useState(false);
 *   const drawerLabelId = "navigation-drawer-title";
 *
 *   const handleDrawerOpen = () => setDrawerOpen(true);
 *   const handleDrawerClose = () => {
 *     setDrawerOpen(false);
 *     // Return focus to button when drawer closes
 *     if (buttonRef.current) buttonRef.current.focus();
 *   };
 *
 *   return (
 *     <>
 *       <NavigationBar
 *         onMenuOpen={handleDrawerOpen}
 *         menuButtonRef={buttonRef}
 *         menuId="main-navigation-drawer"
 *         menuExpanded={isDrawerOpen}
 *       >
 *         {/* navigation content *\/}
 *       </NavigationBar>
 *
 *       <Drawer
 *         id="main-navigation-drawer"
 *         shown={isDrawerOpen}
 *         onClose={handleDrawerClose}
 *         aria-labelledby={drawerLabelId}
 *       >
 *         <Stack direction="column">
 *           <h2 id={drawerLabelId}>Navigation Menu</h2>
 *           <TextLink>Home</TextLink>
 *           <TextLink>Products</TextLink>
 *           <TextLink>Contact</TextLink>
 *         </Stack>
 *       </Drawer>
 *     </>
 *   );
 * };
 * ```
 *
 * This pattern creates a fully accessible experience by:
 *
 * 1. Connecting the button and drawer with matching IDs
 * 2. Communicating drawer state to screen readers
 * 3. Managing focus properly for keyboard users
 *
 *
 * @orbit-doc-end
 */
const NavigationBar = ({
  onMenuOpen,
  children,
  dataTest,
  openTitle = "Open navigation menu",
  id,
  onShow,
  onHide,
  hideOnScroll = true,
  bottomStyle = "shadow",
  transparentBgAtTop = false,
  menuButtonRef,
  menuId,
  menuExpanded,
}: Props) => {
  const resolveCallback = React.useCallback(
    state => {
      if (onHide && !state) onHide();
      if (onShow && state) onShow();
    },
    [onHide, onShow],
  );
  const [shown, setShown] = useStateWithCallback<boolean>(true, resolveCallback);

  const [prevScrollPosition, setPrevScrollPosition] = React.useState(0);
  const [isTransparentBg, setTransparentBg] = React.useState(transparentBgAtTop);

  const handleNavigationBarPosition = React.useCallback(() => {
    const currentScrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop);

    if (transparentBgAtTop) {
      setTransparentBg(currentScrollPosition <= 0);
    }

    if (!hideOnScroll) return;

    if (
      prevScrollPosition < currentScrollPosition &&
      currentScrollPosition > NAVBAR_HEIGHT.DESKTOP
    ) {
      setShown(false);
    } else {
      setShown(true);
    }

    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition, setShown, hideOnScroll, transparentBgAtTop, setTransparentBg]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleNavigationBarPosition);
    return () => {
      window.removeEventListener("scroll", handleNavigationBarPosition);
    };
  });

  React.useEffect(() => {
    const currentScrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop);
    if (transparentBgAtTop) {
      setTransparentBg(currentScrollPosition <= 0);
    } else {
      setTransparentBg(false);
    }
  }, [transparentBgAtTop]);

  React.useEffect(() => {
    if (!hideOnScroll) {
      setShown(true);
    }
  }, [hideOnScroll, setShown]);

  return (
    <header
      data-test={dataTest}
      id={id}
      className={cx(
        "px-400 py-300 tb:p-300 z-navigation-bar fixed inset-x-0 top-0 box-border flex w-full translate-x-0 items-center",
        "duration-normal transform-gpu ease-in-out",
        "tb:h-1600 h-1300", // As defined on the const above
        shown ? "translate-y-0" : "tb:-translate-y-1600 -translate-y-1300", // As defined on the const above
        transparentBgAtTop
          ? "transition-[transform,background-color,border-color]"
          : "transition-transform",
        !isTransparentBg && bottomStyle === "shadow" && "shadow-navbar",
        isTransparentBg && bottomStyle === "border" && "border-transparent", // important for the transition to work well
        !isTransparentBg && bottomStyle === "border" && "border-cloud-normal border-b",
        isTransparentBg ? "bg-transparent" : "bg-white-normal",
      )}
    >
      <div className={cx("block w-full", onMenuOpen && "me-200")}>{children}</div>
      {onMenuOpen && (
        <ButtonLink
          ref={menuButtonRef}
          type="secondary"
          onClick={onMenuOpen}
          iconLeft={<MenuHamburger ariaHidden />}
          title={openTitle}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-expanded={menuExpanded}
        />
      )}
    </header>
  );
};

export default NavigationBar;
