// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Table/TableCell'

import * as Common from '@kiwicom/orbit-components/common'

export { TableCell, TableCell as default }

declare namespace TableCell {
    type Align = "left" | "center" | "right";

    interface Props {
        readonly children?: React.ReactNode;
        readonly align?: Align;
    }
}

declare class TableCell extends React.Component<TableCell.Props> {}
