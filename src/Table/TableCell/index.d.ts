// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import SharedProps from "../index.d.ts";

declare module "@kiwicom/orbit-components/lib/Table/TableCell";

type Align = "left" | "center" | "right";

interface Props extends SharedProps {
  readonly align?: Align;
}

const TableCell: React.FunctionComponent<Props>;
export { TableCell, TableCell as default };
