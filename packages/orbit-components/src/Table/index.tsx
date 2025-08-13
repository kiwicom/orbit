"use client";

import * as React from "react";
import cx from "clsx";

import { TYPE_OPTIONS } from "./consts";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Table
 *
 * To implement Table component into your project you'll need to add the import:
 *
 * ```jsx
 * import Table, {
 *   TableHead,
 *   TableBody,
 *   TableRow,
 *   TableCell,
 *   TableFooter,
 * } from "@kiwicom/orbit-components/lib/Table";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Header</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Content</TableCell>
 *     </TableRow>
 *   </TableBody>
 *   <TableFooter>
 *     <TableRow>
 *       <TableCell>Footer</TableCell>
 *     </TableRow>
 *   </TableFooter>
 * </Table>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Table component.
 *
 * | Name         | Type            | Default     | Description                                                                                |
 * | :----------- | :-------------- | :---------- | :----------------------------------------------------------------------------------------- |
 * | **children** | `React.Node`    |             | The content of the Table, normally [`TableHead`](#tablehead) or [`TableBody`](#tablebody). |
 * | compact      | `boolean`       | `false`     | If `true`, the Table will have more compact styles.                                        |
 * | dataTest     | `string`        |             | Optional prop for testing purposes.                                                        |
 * | id           | `string`        |             | Set `id` for Table.                                                                        |
 * | striped      | `boolean`       | `true`      | Functionality of table where every second line is grey                                     |
 * | type         | [`enum`](#enum) | `"primary"` | The type of Table.                                                                         |
 *
 * ### enum
 *
 * | type          |
 * | :------------ |
 * | `"primary"`   |
 * | `"secondary"` |
 *
 * ## Subcomponents
 *
 * There are four subcomponents which you need to use.
 *
 * ### TableHead
 *
 * ```jsx
 * import TableHead from "@kiwicom/orbit-components/lib/Table/TableHead";
 * ```
 *
 * #### Props
 *
 * Table below contains all types of the props in TableHead component.
 *
 * | Name         | Type         | Default | Description                                                     |
 * | :----------- | :----------- | :------ | :-------------------------------------------------------------- |
 * | **children** | `React.Node` |         | The content of the TableHead, normally [`TableRow`](#tablerow). |
 * | dataTest     | `string`     |         | Optional prop for testing purposes.                             |
 *
 * ### TableBody
 *
 * ```jsx
 * import TableBody from "@kiwicom/orbit-components/lib/Table/TableBody";
 * ```
 *
 * #### Props
 *
 * Table below contains all types of the props in TableBody component.
 *
 * | Name         | Type         | Default | Description                                                     |
 * | :----------- | :----------- | :------ | :-------------------------------------------------------------- |
 * | **children** | `React.Node` |         | The content of the TableBody, normally [`TableRow`](#tablerow). |
 * | dataTest     | `string`     |         | Optional prop for testing purposes.                             |
 *
 * ### TableRow
 *
 * ```jsx
 * import TableRow from "@kiwicom/orbit-components/lib/Table/TableRow";
 * ```
 *
 * #### Props
 *
 * Table below contains all types of the props in TableRow component.
 *
 * | Name         | Type         | Default | Description                                                      |
 * | :----------- | :----------- | :------ | :--------------------------------------------------------------- |
 * | **children** | `React.Node` |         | The content of the TableRow, normally [`TableCell`](#tablecell). |
 * | dataTest     | `string`     |         | Optional prop for testing purposes.                              |
 *
 * ### TableCell
 *
 * ```jsx
 * import TableCell from "@kiwicom/orbit-components/lib/Table/TableCell";
 * ```
 *
 * #### Props
 *
 * Table below contains all types of the props in TableCell component.
 *
 * | Name          | Type            | Default  | Description                                                                                                                      |
 * | :------------ | :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | align         | [`enum`](#enum) | `"left"` | The align of text in the TableCell.                                                                                              |
 * | as            | [`enum`](#enum) | `"td"`   | Possibility to render TableCell in different HTML.                                                                               |
 * | children      | `React.Node`    |          | The content of the TableCell.                                                                                                    |
 * | dataTest      | `string`        |          | Optional prop for testing purposes.                                                                                              |
 * | scope         | [`enum`](#enum) |          | Can be set only when `as="th"`. Identifies whether a table header is a column header or a row header. See the Accessibility tab. |
 * | verticalAlign | [`enum`](#enum) |          | The vertical align of the content in the TableCell.                                                                              |
 * | whiteSpace    | [`enum`](#enum) |          | The white-space setting of text in the TableCell.                                                                                |
 *
 * #### enum
 *
 * | align      | whiteSpace   | VerticalAlign | as     | scope        |
 * | :--------- | :----------- | ------------- | :----- | :----------- |
 * | `"left"`   | `"nowrap"`   | `"baseline"`  | `"th"` | `"col"`      |
 * | `"center"` | `"pre"`      | `"middle"`    | `"td"` | `"row"`      |
 * | `"right"`  | `"pre-line"` | `"top"`       |        | `"colgroup"` |
 * |            | `"normal"`   | `"bottom"`    |        | `"rowgroup"` |
 *
 * ### TableFooter
 *
 * ```jsx
 * import TableFooter from "@kiwicom/orbit-components/lib/Table/TableFooter";
 * ```
 *
 * #### Props
 *
 * Table below contains all types of the props in TableFooter component.
 *
 * | Name         | Type         | Default | Description                                                       |
 * | :----------- | :----------- | :------ | :---------------------------------------------------------------- |
 * | **children** | `React.Node` |         | The content of the TableFooter, normally [`TableRow`](#tablerow). |
 * | dataTest     | `string`     |         | Optional prop for testing purposes.                               |
 *
 *
 * Accessibility
 * -------------
 * # Accessibility
 *
 * ## Table
 *
 * The Table component has been designed with accessibility in mind, and it can be used with keyboard navigation.
 *
 * ### Scope attribute in the TableCell component
 *
 * If the `as` prop is set to `"th"`, it's possible to set the `scope` prop to identify whether a table header is a column header or a row header.
 * You can find more information about the usage in the [official documentation of the scope property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement/scope).
 *
 * ```jsx
 * <TableRow>
 *   <TableCell as="th" scope="row">
 *     Freja Møller
 *   </TableCell>
 *   <TableCell>39</TableCell>
 *   <TableCell>freja21@example.com</TableCell>
 * </TableRow>
 * ```
 *
 * Screen readers will recognize markup structured like this, and allow their users to read out the entire column or row at once, for example.
 *
 *
 * @orbit-doc-end
 */
const Table = ({
  children,
  striped = true,
  compact = false,
  dataTest,
  id,
  type = TYPE_OPTIONS.PRIMARY,
}: Props) => {
  const [shadows, setShadows] = React.useState(false);
  const [right, setRight] = React.useState(false);
  const [left, setLeft] = React.useState(false);

  const outer = React.useRef<HTMLDivElement | null>(null);
  const inner = React.useRef<HTMLDivElement | null>(null);
  const table = React.useRef<HTMLTableElement>(null);

  const handleScroll = () => {
    if (shadows && inner.current && table.current && outer.current) {
      setLeft(inner.current?.scrollLeft >= 5);
      setRight(inner.current.scrollLeft + outer.current.clientWidth < table.current.clientWidth);
    }
  };

  const handleResize = React.useCallback(() => {
    if (table.current && outer.current) {
      const showShadows = table.current.clientWidth > outer.current.clientWidth;
      setShadows(showShadows);
      setRight(showShadows);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div
      className={cx(
        "relative w-full max-w-full",
        "before:duration-normal before:bg-table-shadow-left before:w-400 before:absolute before:left-0 before:top-0 before:h-full before:transition-opacity before:ease-in-out",
        !left && "before:opacity-0",
        "after:duration-normal after:bg-table-shadow-right after:w-400 after:absolute after:right-0 after:top-0 after:h-full after:transition-opacity after:ease-in-out",
        !right && "after:opacity-0",
        shadows ? "before:block after:block" : "before:hidden after:hidden",
      )}
      data-test={dataTest}
      id={id}
      ref={outer}
    >
      <div
        className={cx("w-full", shadows && "overflow-x-auto")}
        onScroll={handleScroll}
        ref={inner}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={shadows ? 0 : undefined}
      >
        <table
          className={cx(
            "w-full border-collapse border-spacing-0 whitespace-nowrap",
            "[&_tbody>tr]:bg-white-normal hover:[&_tbody>tr]:bg-cloud-light [&_tbody>tr]:border-b-cloud-normal [&_tbody>tr]:duration-fast [&_tbody>tr]:border-b [&_tbody>tr]:transition-colors [&_tbody>tr]:ease-in-out last:[&_tbody>tr]:border-b-0",
            striped === true && "type-even:[&_tbody>tr]:bg-cloud-normal",
            "[&_td]:px-300 [&_th]:px-300 [&_td]:leading-normal [&_th]:leading-normal",
            compact === true
              ? // TODO: remove 10px and 6px with new tokens
                "[&_th]:h-800 [&_td]:h-800 [&_td]:py-150 [&_th]:py-150"
              : "[&_th]:h-1000 [&_td]:h-1000 [&_td]:py-[10px] [&_th]:py-[10px]",
            type === TYPE_OPTIONS.SECONDARY && "[&_td]:text-ink-normal [&_th]:text-ink-normal",
          )}
          ref={table}
        >
          {children}
        </table>
      </div>
    </div>
  );
};

export default Table;

export { default as TableHead } from "./TableHead";
export { default as TableBody } from "./TableBody";
export { default as TableFooter } from "./TableFooter";
export { default as TableRow } from "./TableRow";
export { default as TableCell } from "./TableCell";
