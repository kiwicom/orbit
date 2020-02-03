// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Portal'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Portal, Portal as default }

declare namespace Portal {
    interface Props {
        readonly element?: string;
        readonly children: React.ReactNode;
    }
}

declare class Portal extends React.Component<Portal.Props> {}
