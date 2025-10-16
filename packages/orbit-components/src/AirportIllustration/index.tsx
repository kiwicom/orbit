"use client";

import React from "react";

import type { Props } from "./types";
import IllustrationPrimitive, { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # AirportIllustration
 *
 * To implement AirportIllustration component into your project you'll need to add the import:
 *
 * ```jsx
 * import AirportIllustration from "@kiwicom/orbit-components/lib/AirportIllustration";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <AirportIllustration name="Accommodation" size="small" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in AirportIllustration component.
 *
 * | Name       | Type                | Default          | Description                                                                                                                             |
 * | :--------- | :------------------ | :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
 * | alt        | `string`            |                  | Optional property for passing own `alt` attribute to the DOM image element. By default, an empty string is used. See Accessibility tab. |
 * | dataTest   | `string`            |                  | Optional prop for testing purposes.                                                                                                     |
 * | id         | `string`            |                  | Set `id` for `Illustration`.                                                                                                            |
 * | **name**   | [`enum`](#enum)     |                  | Name for the displayed Airportillustration.                                                                                             |
 * | size       | [`enum`](#enum)     | `"medium"`       | The size of the AirportIllustration.                                                                                                    |
 * | spaceAfter | `enum`              |                  | Additional `margin-bottom` after component.                                                                                             |
 * | role       | `img\|presentation` | `"presentation"` | Optional property for a role attribute. See Accessibility tab.                                                                          |
 *
 * ### enum
 *
 * | name             | size           | spaceAfter   |
 * | :--------------- | :------------- | :----------- |
 * | `"BGYFastTrack"` | `"extraSmall"` | `"none"`     |
 * | `"BUDFastTrack"` | `"small"`      | `"smallest"` |
 * | `"MRSSmartPass"` | `"medium"`     | `"small"`    |
 * | `"NCEFastTrack"` | `"large"`      | `"normal"`   |
 * | `"PRGSmartPass"` | `"displays"`   | `"medium"`   |
 * | `"VCESmartPass"` |                | `"large"`    |
 * |                  |                | `"largest"`  |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The AirportIllustration component has been designed with accessibility in mind, providing appropriate ARIA roles and alt text options for screen reader users.
 *
 * ### Accessibility Props
 *
 * The following props are available to improve the accessibility of your AirportIllustration component:
 *
 * | Name | Type                      | Description                                                                                                                                                                                                                                      |
 * | :--- | :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | alt  | `string`                  | Provides alternative text description of the illustration for screen readers when using `role="img"`. Should be used when the illustration conveys important information.                                                                        |
 * | role | `"img" \| "presentation"` | Defines the ARIA role of the illustration. Default is `"presentation"`, which hides the illustration from screen readers. Use `"img"` when the illustration conveys important information and be sure to include a meaningful `alt` description. |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages ARIA attributes:
 *   - Default role is set to `"presentation"` to hide the illustration from screen readers.
 *   - When using `role="img"`, the alt text is announced to screen readers.
 *
 * ### Best Practices
 *
 * - Use `role="presentation"` (default) for illustrations that are purely decorative and do not convey important information.
 * - Use `role="img"` with a descriptive `alt` text when the AirportIllustration conveys important information that users need to understand.
 * - Keep `alt` text descriptions concise but descriptive when the illustration has informational value.
 * - The `alt` text should always be translated to the user's language.
 * - Do not use empty alt text (`alt=""`) with `role="img"` as this creates confusion for screen reader users.
 * - Consider providing text alternatives in the surrounding content for complex illustrations.
 *
 * ### Examples
 *
 * #### Decorative Illustration (Default)
 *
 * ```jsx
 * <AirportIllustration name="PRGSmartPass" />
 * ```
 *
 * Nothing is announced by a screen reader (illustration is skipped as it has `role="presentation"` by default).
 *
 * #### Informational Illustration
 *
 * ```jsx
 * <AirportIllustration
 *   name="PRGSmartPass"
 *   role="img"
 *   alt="Prague Airport SmartPass illustration showing fast track entrance"
 * />
 * ```
 *
 * Screen reader announces: "Prague Airport SmartPass illustration showing fast track entrance".
 *
 * #### Illustration within Content Context
 *
 * ```jsx
 * <div>
 *   <Heading>Prague Fast Track</Heading>
 *   <AirportIllustration name="PRGSmartPass" role="presentation" />
 *   <Text>Skip the regular security lines with our SmartPass option at Prague Airport.</Text>
 * </div>
 * ```
 *
 * Screen reader announces the heading content (`Prague Fast Track`) and text content (`Skip the regular security lines with our SmartPass option at Prague Airport.`), but skips the illustration.
 *
 *
 * @orbit-doc-end
 */
const AirportIllustration = ({
  size = SIZE_OPTIONS.MEDIUM,
  role = "presentation",
  ...props
}: Props) => <IllustrationPrimitive {...props} size={size} role={role} />;

export default AirportIllustration;
