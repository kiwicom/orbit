// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/Table/TableCell";

export { TableCell, TableCell as default };

declare namespace TableCell {
  type Align = "left" | "center" | "right";

  interface Props {
    readonly children?: React.ReactNode;
    readonly align?: Align;
  }
}

declare class TableCell extends React.Component<TableCell.Props> {}
