"use client";

import * as React from "react";

import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getCommonProps from "../primitives/ButtonPrimitive/common/getCommonProps";
import ChevronForwardIcon from "../icons/ChevronForward";
import useTheme from "../hooks/useTheme";
import getSocialButtonStyles from "./helpers/getSocialButtonStyles";
import getSocialButtonIconForeground from "./helpers/getSocialButtonIconForeground";
import getSocialButtonIcon from "./helpers/getSocialButtonIcon";
import { TYPE_OPTIONS } from "./consts";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # SocialButton
 *
 * To implement SocialButton component into your project you'll need to add the import:
 *
 * ```jsx
 * import SocialButton from "@kiwicom/orbit-components/lib/SocialButton";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <SocialButton>Hello World!</SocialButton>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in SocialButton component.
 *
 * | Name         | Type                       | Default    | Description                                                                                         |
 * | :----------- | :------------------------- | :--------- | :-------------------------------------------------------------------------------------------------- |
 * | ariaControls | `string`                   |            | Id of the element the button controls.                                                              |
 * | ariaExpanded | `boolean`                  |            | Tells screen reader the controlled element from `ariaControls` is expanded.                         |
 * | asComponent  | `string \| React.Element`  | `"button"` | The component used for the root node.                                                               |
 * | fullWidth    | `boolean`                  | `false`    | If `true`, the SocialButton will grow up to the full width of its container.                        |
 * | children     | `React.Node`               |            | The content of the SocialButton. [See Functional specs](#functional-specs)                          |
 * | dataTest     | `string`                   |            | Optional prop for testing purposes.                                                                 |
 * | id           | `string`                   |            | Set `id` for `SocialButton`.                                                                        |
 * | disabled     | `boolean`                  | `false`    | If `true`, the SocialButton will be disabled.                                                       |
 * | external     | `boolean`                  | `false`    | If `true`, the SocialButton opens link in a new tab. [See Functional specs](#functional-specs)      |
 * | href         | `string`                   |            | The URL of the link to open when SocialButton is clicked. [See Functional specs](#functional-specs) |
 * | loading      | `boolean`                  | `false`    | If `true`, the loading glyph will be displayed.                                                     |
 * | onClick      | `event => void \| Promise` |            | Function for handling onClick event.                                                                |
 * | ref          | `func`                     |            | Prop for forwarded ref of the SocialButton.                                                         |
 * | role         | `string`                   |            | Specifies the role of an element.                                                                   |
 * | **size**     | [`enum`](#enum)            | `"normal"` | The size of the SocialButton.                                                                       |
 * | spaceAfter   | `enum`                     |            | Additional `margin-bottom` after component.                                                         |
 * | submit       | `boolean`                  | `false`    | If `true`, the SocialButton will have `type="submit"` attribute, otherwise `type="button"`.         |
 * | tabIndex     | `string \| number`         |            | Specifies the tab order of an element.                                                              |
 * | title        | `string`                   |            | Adds `aria-label`.                                                                                  |
 * | **type**     | [`enum`](#enum)            | `"apple"`  | The type of SocialButton.                                                                           |
 * | width        | `string`                   |            | The width of the SocialButton. Can be any string - `100px`, `20%`.                                  |
 *
 * ### enum
 *
 * | type         | size       | spaceAfter   |
 * | :----------- | :--------- | :----------- |
 * | `"apple"`    | `"small"`  | `"none"`     |
 * | `"facebook"` | `"normal"` | `"smallest"` |
 * | `"google"`   | `"large"`  | `"small"`    |
 * | `"X"`        |            | `"normal"`   |
 * | `"email"`    |            | `"medium"`   |
 * |              |            | `"large"`    |
 * |              |            | `"largest"`  |
 *
 * ## Functional specs
 *
 * - When the `external` is specified, `noopener` value will be automatically added to attribute `rel` for security reason.
 *
 * - By passing the `href` prop into SocialButton, it will render into `a` element. If you pass `asComponent` prop it will override this logic.
 *
 * - If you want to use the `asComponent` prop then **YourComponent** should accept at least `className`. Otherwise it won't be rendered with proper styling, e.g.:
 *
 *   ```jsx
 *   const YourComponent = props => <div {...props} />
 *
 *   <SocialButton asComponent={YourComponent}>Title</SocialButton>
 *   ```
 *
 *   If you specify the children of **YourComponent** component, it will override the children prop of SocialButton component, e.g.:
 *
 *   ```jsx
 *   const YourComponent = props => <div {...props}>YourComponent</div>;
 *   ```
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The SocialButton component has been designed with accessibility in mind, providing accessible social authentication buttons with proper semantic structure and screen reader support for sign-in flows.
 *
 * ### Accessibility Props
 *
 * The following props are available to improve the accessibility of your SocialButton component:
 *
 * | Name           | Type               | Description                                                                                                                                                                                                                               |
 * | :------------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | ariaControls   | `string`           | Identifies the element controlled by the button, establishing a programmatic relationship for screen readers. Use with unique element IDs.                                                                                                |
 * | ariaExpanded   | `boolean`          | Indicates whether the element controlled by the button (via `ariaControls`) is expanded or collapsed. Commonly used with dropdowns, modals, or expandable content triggered by social sign-in.                                            |
 * | ariaLabelledby | `string`           | References the ID(s) of element(s) that provide a label for the button. The referenced elements can be hidden and their text will be announced by screen readers to describe the button.                                                  |
 * | title          | `string`           | Provides additional context as an `aria-label` attribute. Use when you need to add extra information for screen readers or when there are no `children` to serve as the button label. Should describe the specific social sign-in action. |
 * | disabled       | `boolean`          | When `true`, makes the button inactive and removes it from keyboard navigation. Screen readers will announce the button as disabled and users cannot interact with it.                                                                    |
 * | role           | `string`           | Specifies the ARIA role of the element. Should only be used in edge cases when rendering SocialButton as non-actionable HTML elements like `div` or `span`, though this is anti-pattern behavior.                                         |
 * | tabIndex       | `string \| number` | Controls the tab order of the element. Use with caution and only when necessary to modify the default focus flow.                                                                                                                         |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages HTML semantics and ARIA attributes:
 *
 *   - Renders as a semantic `<button>` element by default, ensuring proper keyboard focusability and button behavior
 *   - Renders as a semantic `<a>` element when `href` is provided, creating a proper link that assistive technologies can identify
 *   - Sets `type="button"` or `type="submit"` based on the `submit` prop when rendered as a button
 *   - Automatically adds `rel="noopener noreferrer"` for external links when `external` prop is true
 *   - Properly handles the `disabled` state by preventing interaction and removing from tab order
 *
 * - Focus management is handled automatically:
 *
 *   - Native focus behavior is preserved based on the rendered element
 *   - Visible focus indicators are provided for keyboard users
 *   - Disabled and loading states are properly excluded from tab navigation
 *
 * - Icon accessibility is managed automatically:
 *
 *   - Icons are rendered with appropriate semantic structure
 *   - Both the social icon and the chevron forward icon are automatically hidden from screen readers with `ariaHidden` attribute
 *   - Icons receive proper color contrast and sizing for accessibility
 *
 * - Loading state accessibility:
 *   - When `loading` is true, the button becomes disabled and shows a loading indicator
 *   - The loading spinner inherits the proper color for sufficient contrast
 *   - Screen readers are informed of the disabled state during loading
 *
 * ### Best Practices
 *
 * - Use clear and specific button text that describes the social sign-in action, such as "Sign in with Google" or "Continue with Apple" rather than just "Google" or "Apple"
 * - Ensure the button text follows a consistent pattern across all social buttons in your application
 * - When using the `title` prop, provide additional context that supplements but doesn't duplicate the button text
 * - For social sign-in flows, consider informing users about account creation vs. existing account sign-in behavior
 * - Ensure sufficient color contrast between the button and its background, especially for custom styled social buttons
 * - When social buttons trigger modals or popups, use `ariaControls` and `ariaExpanded` to establish the relationship between the button and the controlled content
 * - Avoid nesting interactive elements: Do not place SocialButton inside other interactive elements like buttons or links, as this creates invalid HTML and confusing experiences for assistive technology users
 *
 * ### Keyboard Navigation
 *
 * SocialButton components are fully navigable with keyboard:
 *
 * - **When rendered as button (default):**
 *
 *   - Users can focus on the button using the **Tab** key
 *   - Users can activate the button using both **Enter** and **Space** keys
 *   - When `disabled` or `loading`, the button is skipped in tab navigation
 *
 * - **When rendered as link (with href):**
 *   - Users can focus on the link using the **Tab** key
 *   - Users can activate the link using the **Enter** key
 *   - Standard link keyboard behavior applies
 *
 * On mobile devices with on-screen keyboards, standard touch interactions apply while maintaining the same keyboard accessibility patterns when an external keyboard is connected.
 *
 * ### Examples
 *
 * #### Basic Social Sign-in Button
 *
 * ```jsx
 * <SocialButton type="google">Sign in with Google</SocialButton>
 * ```
 *
 * Screen reader announces: "Sign in with Google, button"
 *
 * #### Apple Sign-in with Additional Context
 *
 * ```jsx
 * <SocialButton type="apple" title="Sign in with Apple ID to access your account">
 *   Continue with Apple
 * </SocialButton>
 * ```
 *
 * Screen reader announces: "Sign in with Apple ID to access your account, button"
 *
 * #### Social Button with Modal Control
 *
 * ```jsx
 * <SocialButton
 *   type="facebook"
 *   ariaControls="social-auth-modal"
 *   ariaExpanded={isModalOpen}
 *   onClick={handleFacebookSignIn}
 * >
 *   Sign in with Facebook
 * </SocialButton>
 * ```
 *
 * Screen reader announces: "Sign in with Facebook, button, collapsed" (when modal is closed) or "Sign in with Facebook, button, expanded" (when modal is open).
 *
 * #### External Social Authentication Link
 *
 * ```jsx
 * <SocialButton type="google" href="https://accounts.google.com/oauth/authorize?..." external>
 *   Sign in with Google
 * </SocialButton>
 * ```
 *
 * Screen reader announces: "Sign in with Google, link"
 *
 * #### Loading State Social Button
 *
 * ```jsx
 * <SocialButton type="apple" loading={isAuthenticating} disabled={isAuthenticating}>
 *   {isAuthenticating ? "Signing in..." : "Continue with Apple"}
 * </SocialButton>
 * ```
 *
 * When loading, screen reader announces: "Signing in..., button, dimmed" (indicating the disabled state).
 *
 *
 * @orbit-doc-end
 */
const SocialButton = ({
  type = TYPE_OPTIONS.APPLE,
  disabled = false,
  size,
  ref,
  ...props
}: Props) => {
  const theme = useTheme();
  const propsWithTheme = { theme, size, ...props };
  const commonProps = getCommonProps(propsWithTheme);
  const buttonStyles = getSocialButtonStyles({ type, disabled, theme });
  const icons = getIconContainer({
    ...propsWithTheme,
    iconForeground: getSocialButtonIconForeground({ type, theme }),
  });
  const iconLeft = getSocialButtonIcon(type);
  return (
    <ButtonPrimitive
      ref={ref}
      {...props}
      {...commonProps}
      {...buttonStyles}
      {...icons}
      disabled={disabled}
      iconLeft={iconLeft}
      iconRight={
        <ChevronForwardIcon
          customColor={type === TYPE_OPTIONS.APPLE ? "#FFF" : ""}
          color="primary"
          ariaHidden
          reverseOnRtl
        />
      }
      circled={false}
    />
  );
};

export default SocialButton;
