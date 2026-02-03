"use client";

import * as React from "react";

import TileHeader from "./components/TileHeader";
import TileContent from "./components/TileContent";
import TileExpandable from "./components/TileExpandable";
import TileWrapper from "./components/TileWrapper";
import handleKeyDown from "../utils/handleKeyDown";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Tile
 *
 * To implement Tile component into your project you'll need to the import at least the Tile:
 *
 * ```jsx
 * import Tile from "@kiwicom/orbit-components/lib/Tile";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Tile title="Title" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in Tile component.
 *
 * | Name            | Type                       | Default | Description                                                                                                                  |
 * | :-------------- | :------------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------- |
 * | children        | `React.Node`               |         | Content of expandable Tile.                                                                                                  |
 * | as              | `string`                   | `"div"` | The element used for the root node.                                                                                          |
 * | dataTest        | `string`                   |         | Optional prop for testing purposes.                                                                                          |
 * | id              | `string`                   |         | Set `id` for `Tile`                                                                                                          |
 * | description     | `React.Node`               |         | The description of the Tile.                                                                                                 |
 * | expandable      | `boolean`                  | `false` | If `true`, the Tile will be expandable.                                                                                      |
 * | external        | `boolean`                  | `false` | If `true`, the Tile opens link in a new tab. [See Functional specs](#functional-specs)                                       |
 * | header          | `React.Node`               |         | The header of the Tile. Useful when you need different layout than combination of e.g. `title` and `description` properties. |
 * | href            | `string`                   |         | The URL of the link to open when Tile is clicked. [See Functional specs](#functional-specs)                                  |
 * | htmlTitle       | `string`                   |         | HTML attribute title for adding extra piece of information.                                                                  |
 * | noHeaderIcon    | `boolean`                  | `false` | If `true`, the icon on the right won't appear. But when Tile is expandable, this property won't have any effect.             |
 * | noPadding       | `boolean`                  |         | If `true`, the `children` content won't have inner spacing.                                                                  |
 * | icon            | `React.Node`               |         | Displayed icon on the left side of the Tile.                                                                                 |
 * | initialExpanded | `boolean`                  | `false` | Initial state of expandable Tile when it mounts.                                                                             |
 * | onClick         | `event => void \| Promise` |         | Function for handling onClick event.                                                                                         |
 * | title           | `React.Node`               |         | The title of the Tile.                                                                                                       |
 * | expanded        | `boolean`                  |         | If `true`, the Tile will be expanded.                                                                                        |
 *
 * ## Functional specs
 *
 * - When the `external` is specified, `noopener` value will be automatically added to attribute `rel` for security reason.
 * - By passing the `href` prop into Tile, it will render into `a` element.
 *
 *
 * Accessibility
 * -------------
 * # Accessibility
 *
 * ## Tile
 *
 * The Tile component has been designed with accessibility in mind.
 *
 * The component offers flexibility in terms of the HTML element used for the root node. By default, it will render a `div` element.
 *
 * ### Expandable / Clickable
 *
 * The prop `expandable` makes the Tile clickable. In that case, assistive props like `aria-expanded` are handled automatically.
 *
 * The component will render, by default, a `div` element with `role="button"` and `tabindex={0}`.
 *
 * This also happens when the `onClick` prop is defined.
 *
 * For that reason, one should refrain from using other interactive elements inside the Tile, like buttons or links, including on the `header` prop.
 *
 * ### Href
 *
 * When the `href` prop is defined, the Tile will render an `a` element inside of the `div`.
 * For the same reason as above, one should refrain from using other interactive elements inside the Tile.
 *
 * ### HTML Title
 *
 * The `htmlTitle` prop can be used to add extra information to the Tile.
 *
 * It will be added as the `title` attribute to the `a` element when the `href` prop is defined.
 *
 * Defining `htmlTitle` without defining `href` will produce no effect on the component.
 *
 *
 * @orbit-doc-end
 */
const Tile = ({
  href,
  external = false,
  dataTest,
  id,
  icon,
  title,
  expanded,
  description,
  header,
  children,
  noPadding = false,
  expandable = false,
  initialExpanded = false,
  noHeaderIcon = false,
  htmlTitle,
  onClick,
  as,
}: Props) => {
  if (expandable) {
    return (
      <TileExpandable
        dataTest={dataTest}
        id={id}
        icon={icon}
        expanded={expanded}
        title={title}
        description={description}
        header={header}
        noPadding={noPadding}
        initialExpanded={initialExpanded}
        onClick={onClick}
        htmlTitle={htmlTitle}
      >
        {children}
      </TileExpandable>
    );
  }
  const hasHeader = !!(title || description || icon || header);

  return (
    <TileWrapper
      href={href}
      external={external}
      dataTest={dataTest}
      id={id}
      onClick={onClick}
      onKeyDown={handleKeyDown(onClick)}
      as={as}
      tabIndex={!href ? 0 : undefined}
      role={onClick ? "button" : undefined}
      htmlTitle={htmlTitle}
    >
      {hasHeader && (
        <TileHeader
          title={title}
          description={description}
          icon={icon}
          external={external}
          header={header}
          expandable={expandable}
          noHeaderIcon={noHeaderIcon}
        />
      )}
      {children && (
        <TileContent noPadding={noPadding} withPointer withBorder={hasHeader} useMargins={false}>
          {children}
        </TileContent>
      )}
    </TileWrapper>
  );
};

export default Tile;
