"use client";

import * as React from "react";

import { TYPE_OPTIONS, LANGUAGE } from "./consts";
import type { Props, Type } from "./types";

const getSrc = (type: Type, lang: string) => {
  if (type === "appStore")
    return `https://images.kiwi.com/common/AppStoreButton${lang}.png, https://images.kiwi.com/common/AppStoreButton${lang}@2x.png 2x`;
  return `https://images.kiwi.com/common/GooglePlayButton${lang}.png, https://images.kiwi.com/common/GooglePlayButton${lang}@2x.png 2x`;
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # ButtonMobileStore
 *
 * To implement ButtonMobileStore component into your project you'll need to add the import:
 *
 * ```jsx
 * import ButtonMobileStore from "@kiwicom/orbit-components/lib/ButtonMobileStore";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <ButtonMobileStore alt="Download on the App Store" type="appStore" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the ButtonMobileStore component.
 *
 * | Name            | Type                       | Default      | Description                                                                   |
 * | :-------------- | :------------------------- | :----------- | :---------------------------------------------------------------------------- |
 * | **alt**         | `string`                   |              | Required property for passing `alt` attribute to the DOM image element.       |
 * | title           | `string`                   |              | Optional property for passing own `title` attribute to the DOM image element. |
 * | dataTest        | `string`                   |              | Optional prop for testing purposes.                                           |
 * | id              | `string`                   |              | Set `id` for `ButtonMobileStore`.                                             |
 * | href            | `string`                   |              | The URL to link when the ButtonMobileStore is clicked.                        |
 * | onClick         | `event => void \| Promise` |              | Function for handling onClick event.                                          |
 * | stopPropagation | `boolean`                  |              | If `true` the click event won't bubble.                                       |
 * | type            | [`enum`](#enum)            | `"appStore"` | The type of the ButtonMobileStore.                                            |
 * | lang            | [`enum`](#enum)            | `EN`         | The language of the image displayed on the button.                            |
 *
 * ### enum
 *
 * | type           | lang   |
 * | :------------- | :----- |
 * | `"appStore"`   | `"EN"` |
 * | `"googlePlay"` | `"ZH"` |
 * |                | `"BG"` |
 * |                | `"CS"` |
 * |                | `"DA"` |
 * |                | `"DE"` |
 * |                | `"ES"` |
 * |                | `"FI"` |
 * |                | `"FR"` |
 * |                | `"HU"` |
 * |                | `"IT"` |
 * |                | `"JA"` |
 * |                | `"KO"` |
 * |                | `"NL"` |
 * |                | `"PL"` |
 * |                | `"PT"` |
 * |                | `"RO"` |
 * |                | `"RU"` |
 * |                | `"SK"` |
 * |                | `"SR"` |
 * |                | `"SV"` |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The ButtonMobileStore component has been designed with accessibility in mind, providing accessible mobile app store download buttons with proper semantic structure and screen reader support.
 *
 * ### Accessibility Props
 *
 * The following props are available to improve the accessibility of your ButtonMobileStore component:
 *
 * | Name            | Type      | Description                                                                                                                                                                                                                             |
 * | :-------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | alt             | `string`  | **Required.** Provides alternative text description of the store button image for screen readers. Should clearly describe the action and store type (e.g., "Download on the App Store" or "Get it on Google Play"). Must be translated. |
 * | title           | `string`  | Provides additional context as a tooltip and is announced by screen readers after the alt text. Use to provide supplementary information about the app or download. Must be translated.                                                 |
 * | stopPropagation | `boolean` | Controls event bubbling behavior. When `true`, prevents the click event from bubbling up to parent elements, which can help avoid focus management issues in complex layouts.                                                           |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically renders with proper semantic structure:
 *   - Renders as a semantic `<a>` element when `href` is provided, creating a proper link that assistive technologies can identify and navigate
 *   - Renders as a semantic `<button>` element when no `href` is provided, ensuring proper keyboard focusability and button behavior
 * - The component uses an `<img>` element with proper `srcSet` for responsive images while maintaining accessibility through the required `alt` attribute
 * - Focus management follows standard behavior with visible focus indicators:
 *   - Links (with `href`) are focusable with Tab and activated with Enter
 *   - Buttons (without `href`) are focusable with Tab and activated with Enter or Space
 * - The component structure ensures screen readers announce both the `alt` text and any title information
 * - When rendered as a link, it automatically opens in a new tab with proper `rel="noopener noreferrer"` attributes for security
 *
 * ### Best Practices
 *
 * - Always provide a descriptive and translated `alt` text that clearly indicates the action and store type
 * - Use specific alt text like "Download on the App Store" or "Get it on Google Play" rather than generic text like "Download app"
 * - Ensure the `href` points to the actual app store page for the specific app to provide a functional download experience
 * - When using the `title` prop, provide additional translated context that supplements but doesn't duplicate the `alt` text
 * - Consider the language of your users and use the appropriate `lang` prop to display store buttons in the correct language
 * - Ensure sufficient color contrast between the button and its background for users with visual impairments
 * - **Inform users that the link opens in a new tab**: Since ButtonMobileStore always opens in a new tab, consider adding context in your surrounding content or using the `title` prop to inform users about this behavior (e.g., "Download the Kiwi.com app (opens in new tab)")
 * - **Avoid nesting interactive elements**: Do not place ButtonMobileStore inside other interactive elements like buttons or links, as this creates invalid HTML and confusing user experiences for assistive technology users
 * - **Use stopPropagation sparingly**: The `stopPropagation` prop should only be used when absolutely necessary to prevent event conflicts in complex layouts. Avoid using this prop when the button is nested inside other interactive elements, as it can create accessibility issues and confusing user experiences. Instead of using `stopPropagation`, consider restructuring your layout to avoid nested interactive elements entirely
 *
 * ### Examples
 *
 * #### Basic App Store Button
 *
 * ```jsx
 * <ButtonMobileStore
 *   type="appStore"
 *   href="https://apps.apple.com/app/your-app/id123456789"
 *   alt="Download on the App Store"
 * />
 * ```
 *
 * Screen reader announces: "link, image, Download on the App Store,"
 *
 * #### Google Play Button with Additional Context
 *
 * ```jsx
 * <ButtonMobileStore
 *   type="googlePlay"
 *   href="https://play.google.com/store/apps/details?id=com.yourapp"
 *   alt="Get it on Google Play"
 *   title="Download the Kiwi.com travel app (opens in new tab)"
 * />
 * ```
 *
 * Screen reader announces: "link, image, Get it on Google Play, Download the Kiwi.com travel app (opens in new tab)"
 *
 * #### Localized Store Button
 *
 * ```jsx
 * <ButtonMobileStore
 *   type="appStore"
 *   lang="DE"
 *   href="https://apps.apple.com/de/app/your-app/id123456789"
 *   alt="Im App Store herunterladen"
 * />
 * ```
 *
 * Screen reader announces: "link, image, Im App Store herunterladen"
 *
 * #### Button Behavior (without href)
 *
 * ```jsx
 * <ButtonMobileStore
 *   type="appStore"
 *   onClick={handleCustomAction}
 *   alt="Download on the App Store"
 *   title="Custom download action"
 * />
 * ```
 *
 * Screen reader announces: "Download on the App Store, Custom download action, button, group"
 *
 *
 * @orbit-doc-end
 */
const ButtonMobileStore = ({
  type = TYPE_OPTIONS.APPSTORE,
  lang = LANGUAGE.EN,
  href,
  onClick,
  dataTest,
  id,
  alt,
  title,
  stopPropagation = false,
}: Props) => {
  const onClickHandler = (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (stopPropagation) {
      ev.stopPropagation();
    }
    if (onClick) onClick(ev as React.MouseEvent<HTMLAnchorElement>);
  };

  const commonProps = {
    className: "orbit-button-mobile-store h-1000 inline-block",
    onClick: onClickHandler,
    "data-test": dataTest,
    id,
  };

  const imageElement = <img srcSet={getSrc(type, lang)} height="40px" alt={alt} title={title} />;

  if (href) {
    return (
      <a {...commonProps} href={href} target="_blank" rel="noopener noreferrer">
        {imageElement}
      </a>
    );
  }

  return (
    <button {...commonProps} type="button">
      {imageElement}
    </button>
  );
};

export default ButtonMobileStore;
