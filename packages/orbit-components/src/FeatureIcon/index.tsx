"use client";

import * as React from "react";

import { baseURL } from "./consts";
import type { Props } from "./types";

const baseSize = 52;
const heightClass = `h-[${baseSize}px]`;

const getURL =
  (name: string) =>
  (size = 1) => {
    const url = `${baseURL}/feature-icons/${baseSize * size}x${baseSize * size}/${name}.png`;
    if (size > 1) {
      return `${url} ${size}x`;
    }
    return url;
  };

const generateURL = (name: string) => {
  const urlWithName = getURL(name);
  return { src: urlWithName(), srcSet: [urlWithName(2), urlWithName(3)].join(",") };
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # FeatureIcon
 *
 * To implement FeatureIcon component into your project you'll need to add the import:
 *
 * ```jsx
 * import FeatureIcon from "@kiwicom/orbit-components/lib/FeatureIcon";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <FeatureIcon name="TicketFlexi" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the FeatureIcon component.
 *
 * | Name     | Type            | Default | Description                                                                                                                      |
 * | :------- | :-------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------- |
 * | alt      | `string`        | `""`    | Defines the alt attribute for the image. Default empty value (`""`) makes the icon decorative (not announced by screen readers). |
 * | dataTest | `string`        |         | Optional prop for testing purposes.                                                                                              |
 * | id       | `string`        |         | Set unique identifier for `FeatureIcon`                                                                                          |
 * | **name** | [`enum`](#enum) |         | The name for the displayed feature icon.                                                                                         |
 *
 * ### enum
 *
 * | name               |
 * | :----------------- |
 * | `"TicketFlexi"`    |
 * | `"TicketSaver"`    |
 * | `"TicketStandard"` |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The FeatureIcon component displays an image representing a specific feature or ticket type.
 *
 * ### Accessibility Props
 *
 * | Name | Type     | Default | Description                                                                  |
 * | :--- | :------- | :------ | :--------------------------------------------------------------------------- |
 * | alt  | `string` | `""`    | Text alternative for the icon, used by screen readers to describe the image. |
 *
 * ### Image Announcements and Alt Text
 *
 * The `alt` attribute determines how screen readers announce the FeatureIcon:
 *
 * - `alt=""` (default): Icon is treated as **decorative** and ignored by screen readers
 * - `alt="text"`: Screen readers will announce the provided text
 *
 * ### Best Practices
 *
 * #### Empty alt text
 *
 * - The icon has adjacent text describing the feature
 * - The icon is purely decorative and doesn't add meaningful information
 *
 * ```jsx
 * <Stack direction="row" align="center">
 *   <FeatureIcon name="TicketFlexi" alt="" />
 *   <Text>Flexi Ticket</Text>
 * </Stack>
 * ```
 *
 * Screen reader announces: "Flexi Ticket" (the icon is ignored)
 *
 * #### Descriptive alt text
 *
 * - The icon stands alone without accompanying text
 * - The icon conveys unique information
 *
 * ```jsx
 * <FeatureIcon name="TicketFlexi" alt="Flexible ticket option" />
 * ```
 *
 * Screen reader announces: "Flexible ticket option"
 *
 * #### Avoid redundant information
 *
 * ```jsx
 * <!-- DON'T do this -->
 * <FeatureIcon name="TicketSaver" alt="Saver Ticket" />
 * <Text>Saver Ticket</Text>
 * ```
 *
 * Screen reader announces: "Saver Ticket, Saver Ticket" (redundant and confusing)
 *
 *
 * @orbit-doc-end
 */
const FeatureIcon = ({ alt = "", name, dataTest, id }: Props) => (
  <img
    className={`${heightClass} w-auto bg-transparent`}
    alt={alt}
    data-test={dataTest}
    id={id}
    {...generateURL(name)}
  />
);

export default FeatureIcon;
