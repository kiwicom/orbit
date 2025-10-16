"use client";

import * as React from "react";

import Svg from "./Svg";
import * as Presets from "./presets";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Skeleton
 *
 * Skeleton component displays a placeholder preview while data is loading.
 *
 * To implement the Skeleton component into your project, you'll need to add the import:
 *
 * ```jsx
 * import Skeleton from "@kiwicom/orbit-components/lib/Skeleton";
 * ```
 *
 * After adding the import into your project, you can use it simply like:
 *
 * ```jsx
 * <Skeleton height={100} width={300} />
 * ```
 *
 * or
 *
 * ```jsx
 * <Skeleton>
 *   <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
 *   <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
 *   <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
 * </Skeleton>
 * ```
 *
 * or if you need to render only rect elements, you can use the `rows` property like:
 *
 * ```jsx
 * <Skeleton rows={3} rowOffset={15} rowHeight={10} />
 * ```
 *
 * or you can pick one from our predefined presets:
 *
 * ```jsx
 * <Skeleton preset="Button" />
 * ```
 *
 * ## Props
 *
 * | Name            | Type                | Default            | Description                                        |
 * | :-------------- | :------------------ | :----------------- | :------------------------------------------------- |
 * | animate         | `boolean`           | `true`             | Turns animation on/off                             |
 * | children        | `React.ReactNode`   |                    | Custom skeleton shapes                             |
 * | color           | `string`            | `paletteCloudDark` | Sets color for SVG rect elements from Orbit tokens |
 * | dataTest        | `string`            |                    | Optional prop for testing purposes                 |
 * | height          | `number \| string`  | `100%`             | Sets height for SVG element                        |
 * | id              | `string`            |                    | Sets `id` attribute for the Skeleton component     |
 * | maxHeight       | `number \| string`  |                    | Sets maximum height for SVG element                |
 * | preset          | [`Preset`](#preset) |                    | Predefined skeleton layouts                        |
 * | rowBorderRadius | `number`            | `3`                | Sets border-radius for row rect elements           |
 * | rowHeight       | `number`            | `21px`             | Sets height for rect elements                      |
 * | rowOffset       | `number`            | `20px`             | Sets offset between rect elements                  |
 * | rows            | `number`            |                    | Number of rect elements to display                 |
 * | spaceAfter      | `enum`              |                    | Additional `margin-bottom` after component         |
 * | title           | `string`            |                    | Provides text for screen readers                   |
 * | viewBox         | `string`            |                    | Sets viewBox attribute for SVG element             |
 * | width           | `number \| string`  | `100%`             | Width of SVG element                               |
 *
 * ### enum
 *
 * | spaceAfter   |
 * | :----------- |
 * | `"none"`     |
 * | `"smallest"` |
 * | `"small"`    |
 * | `"normal"`   |
 * | `"medium"`   |
 * | `"large"`    |
 * | `"largest"`  |
 *
 * ### Preset
 *
 * | Preset     |
 * | ---------- |
 * | `"List"`   |
 * | `"Image"`  |
 * | `"Card"`   |
 * | `"Button"` |
 * | `"Text"`   |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Skeleton component has been designed with accessibility in mind, providing features that enhance the experience for users of assistive technologies during content loading.
 *
 * ### Accessibility props
 *
 * The following props are available to improve the accessibility of your Skeleton component:
 *
 * | Name  | Type     | Description                                                            |
 * | :---- | :------- | :--------------------------------------------------------------------- |
 * | title | `string` | Provides an accessible description of the skeleton for screen readers. |
 *
 * The `title` prop is crucial for screen reader accessibility. When provided, it ensures that screen readers announce the loading state to users. Without it, users might not be aware that content is loading.
 *
 * ### Automatic Accessibility Features
 *
 * The Skeleton component automatically implements the following accessibility features:
 *
 * - `aria-hidden="true"`: The SVG element that renders the skeleton is hidden from screen readers to prevent them from announcing the complex SVG structure.
 *
 * - When a `title` prop is provided, the component adds a visually hidden element containing the title text. This ensures screen readers announce the loading state without disrupting the visual appearance.
 *
 * - The component includes a subtle pulsing animation to indicate loading, but this animation is only applied when the user has not enabled reduced motion settings.
 *
 * These features ensure that the loading state is communicated effectively to screen reader users while maintaining a clean visual experience for all users.
 *
 * ### Best practices
 *
 * - Always provide a `title` prop with a clear, descriptive message that informs users that content is loading. For example: "Loading profile information" or "Flight details loading".
 *
 * - Use proper ARIA attributes on the container that will display the actual content (not on the Skeleton itself):
 *
 *   - Apply `aria-busy="true"` to the content container while data is loading
 *   - Change to `aria-busy="false"` when loading completes
 *   - Consider adding `role="status"` to the container to inform screen readers of state changes
 *
 * - When loading completes, completely remove the Skeleton component rather than just hiding it. This ensures screen readers don't encounter hidden loading indicators.
 *
 * - When multiple Skeleton components are used together, provide a title only for one of them to avoid redundant announcements to screen reader users. Alternatively, you can set `aria-label` on the container element with proper role to ensure the label is announced.
 *
 * - Ensure that the `title` text is properly translated to match the user's language.
 *
 * ### Keyboard Navigation
 *
 * Since Skeleton is a non-interactive component used to represent loading states, it doesn't have specific keyboard interactions. However, developers should ensure that:
 *
 * - When content finishes loading and interactive elements appear, they should be properly focusable according to a logical tab order.
 * - If loading content will add focusable elements to the page, consider managing focus to guide users to the newly loaded content.
 * - For very long loading times, consider providing a way for keyboard users to skip over large skeleton sections to reach other interactive content on the page.
 *
 * ### Examples
 *
 * #### Basic Skeleton with accessible title
 *
 * ```jsx
 * <Skeleton title="Loading product details" height={200} width={300} />
 * ```
 *
 * #### Proper use of aria-busy with Skeleton
 *
 * ```jsx
 * <div role="status" aria-busy={isLoading}>
 *   {isLoading ? (
 *     // While loading, show skeleton
 *     <Skeleton title="Loading flights list" rows={3} />
 *   ) : (
 *     // When loaded, show content (aria-busy is already false via the container)
 *     <FlightsList />
 *   )}
 * </div>
 * ```
 *
 *
 * @orbit-doc-end
 */
const Skeleton = ({ preset, ...props }: Props) => {
  const Component = preset ? Presets[preset] : Svg;

  return <Component {...props} />;
};

export default Skeleton;
