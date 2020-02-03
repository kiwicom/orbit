// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from 'react'

export { TableBase, TableBase as default }

declare namespace TableBase {
    interface Props {
        readonly children: React.ReactNode;
    }
}

declare class TableBase extends React.Component<TableBase.Props> {}
