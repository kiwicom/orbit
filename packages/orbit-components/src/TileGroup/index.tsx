"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # TileGroup
 *
 * To implement TileGroup component into your project you'll need to the import at least the TileGroup and Tile:
 *
 * ```jsx
 * import TileGroup from "@kiwicom/orbit-components/lib/TileGroup";
 * import Tile from "@kiwicom/orbit-components/lib/Tile";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <TileGroup>
 *   <Tile title="Title" />
 *   <Tile title="Title" />
 * </TileGroup>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in TileGroup component.
 *
 * | Name     | Type         | Default | Description                                                                                       |
 * | :------- | :----------- | :------ | :------------------------------------------------------------------------------------------------ |
 * | as       | `string`     | `"div"` | The element used for the root node.                                                               |
 * | dataTest | `string`     |         | Optional prop for testing purposes.                                                               |
 * | id       | `string`     |         | Set `id` for `TileGroup`                                                                          |
 * | children | `React.Node` |         | Content of the TileGroup - normally the Tile component. [See functional specs](#functional-specs) |
 *
 * ## Functional specs
 *
 * - You can use the React.Node in many different ways, but please mind that you can't use any additional DOM elements. Otherwise, the styling will be broken.
 *
 *
 * Accessibility
 * -------------
 * # Accessibility
 *
 * ## TileGroup
 *
 * The TileGroup component has been designed with accessibility in mind.
 *
 * The component offers flexibility in terms of the HTML element used for the root node. By default, it will render a `div` element.
 *
 * If needed, it can be rendered as a list by passing the `as` prop with the value `"ul"`.
 *
 * In that case, the `Tile` elements used as `children` should be rendered as `li`.
 *
 * ```jsx
 * <TileGroup as="ul">
 *   <Tile title="Title" as="li" />
 *   <Tile title="Title" as="li" />
 * </TileGroup>
 * ```
 *
 *
 * @orbit-doc-end
 */
const TileGroup = ({ children, dataTest, id, as }: Props) => {
  const Component = (as ?? "div") as React.ElementType;

  return (
    <Component
      className={cx(
        "shadow-level1 rounded-100 [&_.orbit-slide]:bg-white-normal m-0 w-full p-0",
        "first:[&_.orbit-tile-wrapper]:rounded-t-100 last:[&_.orbit-tile-wrapper]:rounded-b-100 not-last:[&_.orbit-tile-wrapper]:border-b not-last:[&_.orbit-tile-wrapper]:border-cloud-normal",
        "[&_.orbit-tile-wrapper]:duration-fast hover:[&_.orbit-tile-wrapper]:bg-cloud-normal focus:[&_.orbit-tile-wrapper]:bg-cloud-normal [&_.orbit-tile-wrapper]:rounded-none [&_.orbit-tile-wrapper]:shadow-none [&_.orbit-tile-wrapper]:transition-colors [&_.orbit-tile-wrapper]:ease-in-out",
      )}
      data-test={dataTest}
      id={id}
    >
      {children}
    </Component>
  );
};

export default TileGroup;
