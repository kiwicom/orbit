"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import createRel from "../primitives/ButtonPrimitive/common/createRel";
import { sizeClasses, typeClasses } from "./helpers/twClasses";

function filterAriaDataProps(props: object) {
  return Object.keys(props).reduce((acc, key) => {
    if (key.startsWith("data-") || key.startsWith("aria-")) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}

const getComponent = (href: string | undefined, asComponent: Props["asComponent"]) => {
  if (asComponent) return asComponent;
  if (href) return "a";
  return "button";
};

const IconContainer = ({ children, size }) => {
  if (!children) return null;
  return (
    <span
      className={cx("flex items-center", {
        "[&_svg]:w-icon-large [&_svg]:h-icon-large": size === SIZE_OPTIONS.LARGE,
        "[&_svg]:w-icon-small [&_svg]:h-icon-small": size === SIZE_OPTIONS.SMALL,
        "[&_svg]:w-icon-medium [&_svg]:h-icon-medium":
          !size || (size !== SIZE_OPTIONS.SMALL && size !== SIZE_OPTIONS.LARGE),
      })}
    >
      {children}
    </span>
  );
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # TextLink
 *
 * To implement TextLink component into your project you'll need to add the import:
 *
 * ```jsx
 * import TextLink from "@kiwicom/orbit-components/lib/TextLink";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <TextLink>Hello World!</TextLink>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in TextLink component.
 *
 * | Name            | Type                            | Default        | Description                                                                                                                                                                    |
 * | :-------------- | :------------------------------ | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | ariaCurrent     | `string`                        |                | Indicates whether the element represents the current item within a container or set of related elements.                                                                       |
 * | asComponent     | `string \| () => React.Element` | `"a"/"button"` | The component used for the root node. Either a string to use a DOM element or a component. Defaults to `"a"` when `href` is provided or `"button"` when no `href` is provided. |
 * | children        | `React.Node`                    |                | The content of the TextLink.                                                                                                                                                   |
 * | dataTest        | `string`                        |                | Optional prop for testing purposes.                                                                                                                                            |
 * | download        | `boolean \| string`             |                | Can only be used when `href` is defined. Adds the `download` attribute to the anchor element.                                                                                  |
 * | id              | `string`                        |                | Set `id` for `TextLink`                                                                                                                                                        |
 * | external        | `boolean`                       | `false`        | If `true`, the TextLink opens link in a new tab.                                                                                                                               |
 * | href            | `string`                        |                | The URL to link when the TextLink is clicked.                                                                                                                                  |
 * | iconLeft        | `React.Node`                    |                | The displayed icon.                                                                                                                                                            |
 * | iconRight       | `React.Node`                    |                | The displayed icon.                                                                                                                                                            |
 * | noUnderline     | `boolean`                       |                | If `true` the TextLink won't have underline in any its state.                                                                                                                  |
 * | onClick         | `event => void \| Promise`      |                | Function for handling onClick event.                                                                                                                                           |
 * | ref             | `React.Ref`                     |                | A ref to the underlying DOM element (either `HTMLAnchorElement` or `HTMLButtonElement`). Useful for accessibility when used with modals.                                       |
 * | rel             | `string`                        |                | The rel of the TextLink. [See Functional specs](#functional-specs)                                                                                                             |
 * | size            | [`enum`](#enum)                 |                | The size of the TextLink. [See Functional specs](#functional-specs)                                                                                                            |
 * | standAlone      | `boolean`                       |                | If `true` the TextLink will have safe clickable area, so it's properly accessible. Useful for usages out of a block of text.                                                   |
 * | stopPropagation | `boolean`                       |                | If `true` the click event on children won't bubble. Useful when you use TextLink inside another clickable element.                                                             |
 * | tabIndex        | `string \| number`              |                | Specifies the tab order of an element                                                                                                                                          |
 * | title           | `string`                        |                | HTML attribute `title`.                                                                                                                                                        |
 * | **type**        | [`enum`](#enum)                 | `"primary"`    | The color type of the TextLink.                                                                                                                                                |
 *
 * ### enum
 *
 * | type          | size           |
 * | :------------ | :------------- |
 * | `"primary"`   | `"small"`      |
 * | `"secondary"` | `"normal"`     |
 * | `"info"`      | `"large"`      |
 * | `"success"`   | `"extraLarge"` |
 * | `"warning"`   |
 * | `"critical"`  |
 * | `"white"`     |
 *
 * ## Functional specs
 *
 * - When the `external` is specified, `noopener` value will be automatically added to attribute `rel` for security reason. Read more about it [here](https://web.dev/external-anchors-use-rel-noopener/).
 *
 * - The default size of the `TextLink` is inherited from parent element, e.g. `TextLink` is wrapped in `Text` component. Use `size` prop only when you need to set it explicitly.
 *
 * - When no `href` is provided, the component renders as a `<button>` element.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The TextLink component has been designed with accessibility in mind.
 *
 * ### Accessibility Props
 *
 * The following props are available to improve the accessibility of your TextLink component:
 *
 * | Name          | Type                            | Description                                                                                         |
 * | :------------ | :------------------------------ | :-------------------------------------------------------------------------------------------------- |
 * | asComponent   | `string \| () => React.Element` | Allows rendering the component as a different element.                                              |
 * | ariaCurrent   | `string`                        | Indicates if the component represents the current item within a set of related elements.            |
 * | aria-label    | `string`                        | Defines accessible text for the component, replacing the visible text for screen readers.           |
 * | aria-controls | `string`                        | Identifies the element controlled by the component, establishing a relationship for screen readers. |
 * | ref           | `React.Ref`                     | A ref to the underlying DOM element. Useful for focus management and modal accessibility.           |
 * | title         | `string`                        | HTML attribute providing additional information.                                                    |
 *
 * The TextLink component accepts all standard HTML attributes including ARIA attributes. While `ariaCurrent` is implemented as a specific prop, other ARIA attributes (like `aria-controls`, `aria-label`, etc.) can be passed directly as HTML attributes.
 *
 * ### Automatic Accessibility Features
 *
 * The TextLink component automatically manages several accessibility features:
 *
 * - The component automatically manages HTML semantics and ARIA attributes:
 *
 *   - Uses the semantically correct element based on props:
 *     - Renders as `<a>` when `href` is provided
 *     - Renders as `<button>` when no `href` is provided
 *     - Renders as specified custom element when `asComponent` is provided
 *   - Sets `role="button"` when `onClick` is provided without `href`
 *   - Sets proper `rel` attributes for external links (`noopener`, `noreferrer`)
 *   - Sets `type="button"` when rendered as a button element
 *
 * - Focus management is handled automatically:
 *   - Native focus behavior is preserved based on the rendered element
 *   - Ensures proper focus appearance for keyboard users
 *
 * ### Best Practices
 *
 * - Use clear and descriptive link text that describes the destination or purpose of the link. Avoid generic text like "click here" or "read more" without proper context.
 *
 * - When using icons in links (with `iconLeft` or `iconRight`), ensure they have appropriate accessibility labels:
 *
 *   - If the icon is decorative and accompanied by text, the icon should be hidden from screen readers
 *   - If the icon alone conveys meaning (especially when used without text), use the `ariaLabel` prop on the icon to describe its purpose
 *
 * - For links that open in a new window/tab (when `external={true}`), ensure users are aware of this behavior:
 *
 *   - Always use the `<NewWindow />` icon to visually indicate that the link opens in a new window/tab
 *   - Add an accessibility label to the icon using `ariaLabel="Opens in new window"` to ensure screen reader users are informed
 *
 * - For TextLinks with only icons (no text content), always provide an `aria-label` to ensure screen reader users understand the link's purpose.
 *
 * - The `title` attribute is not reliably announced by screen readers and should not be used as the primary method for providing additional information to screen reader users. Instead:
 *
 *   - Use descriptive link text
 *   - Use `aria-label` for links with unclear text or icon-only links
 *   - For additional descriptive information, consider using visible text or alternative ARIA attributes
 *
 * - When using the `ref` prop for focus management:
 *
 *   - **Modal triggers**: Always pass the trigger ref to modals so focus can return properly when closed
 *   - **Dynamic content**: Use refs to announce content changes to screen readers with `aria-live` regions
 *   - **Form validation**: Focus invalid fields or error messages using refs after form submission
 *   - **Progressive disclosure**: Manage focus when revealing or hiding content to maintain user context
 *   - **Skip links**: Use refs to implement skip navigation functionality for keyboard users
 *
 * - The `ref` will reference different element types based on component configuration:
 *   - `HTMLAnchorElement` when `href` is provided
 *   - `HTMLButtonElement` when no `href` is provided
 *   - The custom element type when `asComponent` is used
 *
 * ### Keyboard Navigation
 *
 * TextLink components are navigable with keyboard by default:
 *
 * - **When rendered as anchor (`<a>`):**
 *
 *   - Users can focus on links using the **Tab** key
 *   - Users can activate links using the **Enter** key
 *
 * - **When rendered as button (`<button>`):**
 *   - Users can focus using the **Tab** key
 *   - Users can activate using both **Enter** and **Space** keys
 *
 * On mobile devices with on-screen keyboards, standard touch interactions apply while maintaining the same keyboard accessibility patterns when an external keyboard is connected.
 *
 * ### Examples
 *
 * #### Using aria-label
 *
 * ```jsx
 * <TextLink href="https://orbit.kiwi" aria-label="Visit the Orbit design system website">
 *   Orbit
 * </TextLink>
 * ```
 *
 * Screen reader announces: "Visit the Orbit design system website, link".
 *
 * #### External link with accessible icon
 *
 * ```jsx
 * <TextLink
 *   href="https://orbit.kiwi"
 *   external
 *   iconRight={<NewWindow ariaLabel="Opens in new window" />}
 * >
 *   Orbit design system
 * </TextLink>
 * ```
 *
 * Screen reader announces: "Orbit design system, opens in new window, link".
 *
 * This pattern ensures both visual users and screen reader users understand that the link will open in a new window/tab.
 *
 * #### Button behavior with onClick
 *
 * ```jsx
 * <TextLink onClick={handleClick}>Perform an action</TextLink>
 * ```
 *
 * Screen reader announces: "Perform an action, button".
 *
 * This example shows TextLink rendering as a semantically correct button element when no `href` is provided, improving accessibility while maintaining link-like styling. This ensures proper keyboard interaction patterns, as buttons respond to both Enter and Space keys, while links only respond to Enter.
 *
 * #### Using ariaCurrent for navigation
 *
 * ```jsx
 * import { Stack, List, ListItem, TextLink } from "@kiwicom/orbit-components";
 *
 * function Navigation() {
 *   // Assuming current page is "profile"
 *   const currentPage = "profile";
 *
 *   return (
 *     <Stack as="nav" aria-label="Main navigation">
 *       <List type="secondary">
 *         <ListItem>
 *           <TextLink href="/home" ariaCurrent={currentPage === "home" ? "page" : undefined}>
 *             Home
 *           </TextLink>
 *         </ListItem>
 *         <ListItem>
 *           <TextLink href="/profile" ariaCurrent={currentPage === "profile" ? "page" : undefined}>
 *             Profile
 *           </TextLink>
 *         </ListItem>
 *         <ListItem>
 *           <TextLink href="/settings" ariaCurrent={currentPage === "settings" ? "page" : undefined}>
 *             Settings
 *           </TextLink>
 *         </ListItem>
 *       </List>
 *     </Stack>
 *   );
 * }
 * ```
 *
 * When on the profile page, screen readers announce: "Profile, current page, link" when focused on the Profile link.
 *
 * The `ariaCurrent="page"` attribute helps users of assistive technologies understand which navigation item represents the current page, enhancing orientation within the site.
 *
 * #### Using aria-controls with TextLink
 *
 * ```jsx
 * import { Stack, Text, Box, TextLink } from "@kiwicom/orbit-components";
 * import { ChevronDown, ChevronUp } from "@kiwicom/orbit-components/icons";
 *
 * function ExpandableContent() {
 *   const [isExpanded, setIsExpanded] = React.useState(false);
 *   const contentId = "expandable-content";
 *
 *   return (
 *     <Stack>
 *       <TextLink
 *         onClick={() => setIsExpanded(!isExpanded)}
 *         aria-expanded={isExpanded}
 *         aria-controls={contentId}
 *         iconRight={isExpanded ? <ChevronUp ariaHidden /> : <ChevronDown ariaHidden />}
 *         type="secondary"
 *       >
 *         {isExpanded ? "Hide details" : "Show details"}
 *       </TextLink>
 *
 *       {isExpanded && (
 *         <Box id={contentId}>
 *           <Text>
 *             This content is controlled by the TextLink. When expanded, screen readers can navigate
 *             directly between the control and this content.
 *           </Text>
 *         </Box>
 *       )}
 *     </Stack>
 *   );
 * }
 * ```
 *
 * In this example, the TextLink controls the visibility of content with ID "expandable-content". The `aria-controls` attribute creates a programmatic relationship between the TextLink and the content it controls, while `aria-expanded` indicates the current state.
 *
 * When the TextLink is focused, screen readers will announce its text content ('Show details'), its role ('button'), and its expanded state ('collapsed'). Depending on the screen reader, it may also indicate the control relationship with the content it manages.
 *
 * #### Using ref for Modal Accessibility
 *
 * The `ref` prop is particularly useful for modal accessibility, allowing proper focus management when modals are triggered by TextLinks:
 *
 * ```jsx
 * import React, { useRef, useState } from "react";
 * import { Stack, TextLink, Modal, ModalSection, Button } from "@kiwicom/orbit-components";
 *
 * function ModalExample() {
 *   const [isModalOpen, setIsModalOpen] = useState(false);
 *   const triggerRef = useRef(null);
 *
 *   const openModal = () => setIsModalOpen(true);
 *   const closeModal = () => setIsModalOpen(false);
 *
 *   return (
 *     <Stack>
 *       <TextLink ref={triggerRef} onClick={openModal}>
 *         Open user settings
 *       </TextLink>
 *
 *       {isModalOpen && (
 *         <Modal
 *           onClose={closeModal}
 *           triggerRef={triggerRef} // Focus returns to this element when modal closes
 *         >
 *           <ModalSection>
 *             <Stack>
 *               <h2>User Settings</h2>
 *               <p>Configure your account preferences here.</p>
 *               <Button onClick={closeModal}>Close</Button>
 *             </Stack>
 *           </ModalSection>
 *         </Modal>
 *       )}
 *     </Stack>
 *   );
 * }
 * ```
 *
 * This pattern ensures that:
 *
 * - When the modal opens, focus moves to the modal content
 * - When the modal closes, focus returns to the TextLink that triggered it
 * - Screen reader users maintain their place in the document flow
 *
 * Screen reader announces: "Open user settings, button" when focused on the TextLink.
 *
 * #### Using ref for Focus Management
 *
 * You can also use the `ref` for custom focus management scenarios:
 *
 * ```jsx
 * import React, { useRef } from "react";
 * import { Stack, TextLink, Button } from "@kiwicom/orbit-components";
 *
 * function FocusManagementExample() {
 *   const linkRef = useRef(null);
 *
 *   const focusLink = () => {
 *     if (linkRef.current) {
 *       linkRef.current.focus();
 *     }
 *   };
 *
 *   const handleLinkClick = () => {
 *     // Perform some action, then programmatically focus another element
 *     console.log("Action performed");
 *   };
 *
 *   return (
 *     <Stack>
 *       <TextLink ref={linkRef} onClick={handleLinkClick}>
 *         Perform action
 *       </TextLink>
 *       <Button onClick={focusLink}>Focus the link above</Button>
 *     </Stack>
 *   );
 * }
 * ```
 *
 * Screen reader announces: "Perform action, button" when focused on the TextLink.
 *
 *
 * @orbit-doc-end
 */
const TextLink = ({
  ariaCurrent,
  type = TYPE_OPTIONS.PRIMARY,
  size,
  children,
  href,
  external = false,
  rel,
  iconLeft,
  iconRight,
  onClick,
  dataTest,
  download,
  id,
  tabIndex,
  asComponent,
  stopPropagation = false,
  title,
  standAlone,
  noUnderline,
  ref,
  ...props
}: Props) => {
  const onClickHandler = (ev: React.SyntheticEvent<HTMLAnchorElement | HTMLElement>) => {
    if (stopPropagation) {
      ev.stopPropagation();
    }

    if (onClick) {
      // @ts-expect-error We can't infer the correct event type here, but it works at runtime
      onClick(ev);
    }
  };

  const filteredAriaDataProps = filterAriaDataProps(props);
  const Component = getComponent(href, asComponent);

  return (
    <Component
      ref={ref}
      aria-current={ariaCurrent}
      id={id}
      href={href}
      target={external ? "_blank" : undefined}
      rel={createRel({ href, external, rel })}
      onClick={onClickHandler}
      data-test={dataTest}
      tabIndex={tabIndex}
      type={Component === "button" ? "button" : undefined}
      role={!href && onClick ? "button" : undefined}
      title={title}
      download={download}
      className={cx(
        "orbit-text-link font-base duration-fast inline-flex cursor-pointer items-center font-medium transition-colors delay-0 ease-in-out hover:no-underline hover:outline-none active:no-underline active:outline-none",
        type === "secondary" && "orbit-text-link--secondary",
        standAlone && "h-form-box-normal",
        typeClasses[type],
        size != null && sizeClasses[size],
        noUnderline ? "no-underline" : "underline",
      )}
      {...filteredAriaDataProps}
    >
      <IconContainer size={size}>{iconLeft}</IconContainer>
      {children}
      <IconContainer size={size}>{iconRight}</IconContainer>
    </Component>
  );
};

TextLink.displayName = "TextLink";

export default TextLink;
