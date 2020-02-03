// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/ButtonGroup'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { ButtonGroup, ButtonGroup as default }

declare namespace ButtonGroup {
    interface Props extends Common.Global {
        readonly children: React.ReactNode;
        readonly connected?: boolean;
    }
}

declare class ButtonGroup extends React.Component<ButtonGroup.Props> {}
