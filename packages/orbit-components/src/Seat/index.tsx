"use client";

import * as React from "react";
import cx from "clsx";

import SeatLegend from "./components/SeatLegend";
import Stack from "../Stack";
import Text from "../Text";
import { useRandomIdSeed } from "../hooks/useRandomId";
import SeatNormal from "./components/SeatNormal";
import SeatSmall from "./components/SeatSmall";
import SeatCircle from "./components/SeatCircle";
import { SIZE_OPTIONS, TYPES } from "./consts";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Seat
 *
 * To implement Seat component into your project you'll need to add the import:
 *
 * ```jsx
 * import Seat, { SeatLegend } from "@kiwicom/orbit-components/lib/Seat";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Seat />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in Seat component.
 *
 * | Name            | Type                    | Default   | Description                                                                             |
 * | :-------------- | :---------------------- | :-------- | :-------------------------------------------------------------------------------------- |
 * | dataTest        | `string`                |           | Optional prop for testing purposes.                                                     |
 * | id              | `string`                |           | `id` of the element.                                                                    |
 * | size            | [`enum`](#modal-enum)   | `medium`  | Size of Seat component.                                                                 |
 * | type            | [`enum`](#modal-enum)   | `default` | Visual type of Seat. If `unavailable`, the element becomes disabled.                    |
 * | price           | `string`                |           | Price of Seat. Displayed as text underneath the svg.                                    |
 * | label           | `string`                |           | Label text inside of a Seat. Not announced by screen readers.                           |
 * | selected        | `boolean`               |           | Displays Seat as selected.                                                              |
 * | onClick         | `() => void \| Promise` |           | Function for handling onClick event.                                                    |
 * | aria-labelledby | `string`                |           | Id(s) of elements that announce the component to screen readers. See accessibility tab. |
 * | title           | `string`                |           | Adds title title to svg element. Announced by screen readers. See accessibility tab.    |
 * | description     | `string`                |           | Adds description to svg element. Announced by screen readers. See accessibility tab.    |
 *
 * ## SeatLegend
 *
 * Table below contains all types of the props available in Seat/SeatLegend component.
 *
 * | Name       | Type                  | Default   | Description                                                                                                  |
 * | :--------- | :-------------------- | :-------- | :----------------------------------------------------------------------------------------------------------- |
 * | dataTest   | `string`              |           | Optional prop for testing purposes.                                                                          |
 * | id         | `string`              |           | `id` of the element.                                                                                         |
 * | type       | [`enum`](#modal-enum) | `default` | Visual type of the rendered seat icon.                                                                       |
 * | label      | `string`              |           | Label text to be displayed next to the seat icon.                                                            |
 * | aria-label | `string`              |           | Adds `aria-label` attribute to the rendered SVG element. Announced by screen readers. See accessibility tab. |
 *
 * ### enum
 *
 * | size       | type            |
 * | :--------- | :-------------- |
 * | `"small"`  | `"default"`     |
 * | `"medium"` | `"legroom"`     |
 * |            | `"unavailable"` |
 *
 *
 * Accessibility
 * -------------
 * # Accessibility
 *
 * ## Seat
 *
 * The Seat component has been designed with accessibility in mind.
 *
 * It can be used with keyboard navigation, and it includes the following properties that allow to improve the experience for users of assistive technologies:
 *
 * | Name            | Type     | Description                                                                                                                 |
 * | :-------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------- |
 * | aria-labelledby | `string` | Id(s) of elements that announce the component to screen readers.                                                            |
 * | title           | `string` | Adds the `title` attribute to the rendered SVG element. Announced by screen readers after the `aria-labelledby` element(s). |
 * | description     | `string` | Adds the `description` attribute to the rendered SVG element. Announced by screen readers after the `title` value.          |
 *
 * All the props above are optional, but recommended to use to ensure the best experience for all users.
 *
 * The `aria-labelledby` prop can reference multiple ids, separated by a space.
 * The elements with those ids can be hidden, so that their text is only announced by screen readers.
 *
 * The `title` and `description` props are used to provide additional context to the rendered SVG element that visually represents the seat.
 * They are also announced by screen readers.
 *
 * The conjugation of these properties allows to provide a detailed description of the seat to users of assistive technologies.
 *
 * ## SeatLegend
 *
 * The SeatLegend component is not interactive. However, it accepts the `aria-label` prop, that is passed to the rendered SVG element.
 *
 * It allows for screen readers to provide a meaningful description of the seat type, which can be useful for users of assistive technologies.
 *
 * The `label` prop is also announced by screen readers.
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages ARIA attributes:
 *   - Uses `aria-pressed` to communicate the selection state of the seat
 *   - Sets `aria-disabled="true"` for unavailable seats
 *   - Combines `aria-labelledby`, `title`, and `description` for comprehensive screen reader announcements
 * - Focus management is handled automatically:
 *   - Seats with `onClick` function are rendered as interactive buttons with proper focus indicators
 * - State management is handled automatically:
 *   - Selected state is visually indicated with a highlight
 *   - Unavailable seats have distinct styling to indicate they cannot be selected
 *
 * ### Best Practices
 *
 * - Always provide either `title`, `aria-labelledby`, or both to ensure seats have accessible names.
 * - Include meaningful `description` for seats with special characteristics (like extra legroom).
 * - Consider adding an explanation of seat types using the SeatLegend component.
 *
 * ### Keyboard Navigation
 *
 * - **Tab**: Moves focus between interactive (available) seats
 * - **Space/Enter**: Selects or deselects the focused seat
 * - Focus order should follow a logical pattern, typically left-to-right and top-to-bottom
 *
 * ### Examples
 *
 * #### Basic Seat with Accessibility Labels
 *
 * ```jsx
 * <p id="l1" style={{ display: "none", visibility: "hidden" }}>
 *   For passenger John Doe
 * </p>
 * <Seat
 *   aria-labelledby="l1"
 *   title="Seat 1A"
 *   description="Extra legroom"
 *   label="25€"
 * />
 * ```
 *
 * It would have the screen reader announce: "For passenger John Doe. Seat 1A. Extra legroom.".
 *
 * Note that the `label` prop is **not** announced by screen readers, as it is intended for visual representation only.
 * So be sure to include all relevant information on the three properties that are announced by screen readers.
 *
 * Alternatively, the paragraph element with the id `l1` is visually hidden, so that its text is only read by screen readers but not present on the screen.
 *
 * It is also recommended to have those strings translated and change dynamically based on the state of the user journey (eg: if the seat is selected and the user is about to deselect it, the screen reader should announce it).
 *
 * #### Selected Seat with Price
 *
 * ```jsx
 * <Seat
 *   title="Extra legroom seat 1C"
 *   description="Aisle seat with extra legroom"
 *   type="legroom"
 *   selected
 *   price="€15"
 *   onClick={() => handleSeatSelection("1C")}
 * />
 * ```
 *
 * Screen reader announces: "Extra legroom seat 1C, Aisle seat with extra legroom, button, pressed".
 *
 * #### Unavailable Seat
 *
 * ```jsx
 * <Seat title="Seat 24B already occupied" type="unavailable" />
 * ```
 *
 * Screen reader announces: "Seat 24B already occupied, dimmed, toggle button".
 *
 * #### Using External Labels
 *
 * ```jsx
 * <div>
 *   <span id="seat-label" className="sr-only">
 *     Exit row seat 15F
 *   </span>
 *   <span id="seat-desc" className="sr-only">
 *     Extra legroom, additional responsibilities
 *   </span>
 *   <Seat
 *     type="legroom"
 *     aria-labelledby="seat-label seat-desc"
 *     onClick={() => handleSeatSelection("15F")}
 *   />
 * </div>
 * ```
 *
 * Mentioned span elements are visually hidden, so that their text is only read by screen readers.
 *
 * Screen reader announces: "Exit row seat 15F Extra legroom, additional responsibilities, toggle button".
 *
 * #### Seat Legend with Accessibility Label
 *
 * ```jsx
 * <div>
 *   <Seat
 *     type="legroom"
 *     title="15F"
 *     description="Window seat"
 *     aria-labelledby="legend"
 *     onClick={() => handleSeatSelection("15F")}
 *   />{" "}
 *   <SeatLegend
 *     id="legend"
 *     type="legroom"
 *     label="Extra legroom"
 *     aria-label="This seat has extra legroom"
 *   />{" "}
 * </div>
 * ```
 *
 * Screen reader announces: "This seat has extra legroom 15F Window seat, toggle button" once the Seat component is focused, and "This seat has extra legroom" once the SeatLegend's legend icon is focused.
 *
 *
 * @orbit-doc-end
 */
const Seat = ({
  type = TYPES.DEFAULT,
  selected = false,
  onClick,
  size = SIZE_OPTIONS.MEDIUM,
  dataTest,
  id,
  price,
  label,
  title,
  description,
  "aria-labelledby": ariaLabelledBy = "",
}: Props) => {
  const randomId = useRandomIdSeed();
  const titleId = title ? randomId("title") : "";
  const descrId = description ? randomId("descr") : "";
  const isAvailable = type !== TYPES.UNAVAILABLE;
  const clickable = isAvailable && onClick !== undefined;

  const commonProps = {
    className: cx(
      "orbit-seat font-base group relative",
      isAvailable && "cursor-pointer",
      size === SIZE_OPTIONS.SMALL ? "w-800 h-[36px]" : "size-[46px]",
    ),
    id,
    "data-test": dataTest,
  };

  const seatContent = (
    <>
      <svg
        viewBox={size === SIZE_OPTIONS.SMALL ? "0 0 32 36" : "0 0 46 46"}
        aria-labelledby={`${[ariaLabelledBy, titleId, descrId].join(" ").trim()}` || undefined}
        fill="none"
        role="img"
      >
        {title && <title id={titleId}>{title}</title>}
        {description && <desc id={descrId}>{description}</desc>}

        {size === SIZE_OPTIONS.SMALL ? (
          <SeatSmall type={type} selected={selected} label={label} />
        ) : (
          <SeatNormal type={type} selected={selected} label={label} />
        )}
      </svg>
      {selected && isAvailable && <SeatCircle size={size} type={type} />}
    </>
  );

  return (
    <Stack inline grow={false} spacing="50" direction="column" align="center">
      {clickable ? (
        <button {...commonProps} onClick={onClick} type="button" aria-pressed={selected}>
          {seatContent}
        </button>
      ) : (
        <div {...commonProps} role="button" aria-pressed={selected} aria-disabled="true">
          {seatContent}
        </div>
      )}
      {price && !(selected && !isAvailable) && (
        <Text size="small" type="secondary">
          {price}
        </Text>
      )}
    </Stack>
  );
};

export { SeatLegend };
export default Seat;
