// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/List'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { List, List as default }

declare namespace List {
    type Type = "primary" | "secondary";

    interface Props extends Common.Global, Common.SpaceAfter {
        readonly children: React.ReactNode;
        readonly size?: Common.Size;
        readonly type?: Type;
    }
}

declare class List extends React.Component<List.Props> {}
