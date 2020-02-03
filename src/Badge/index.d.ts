// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Badge'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Badge, Badge as default }

declare namespace Badge {
    type Type =
        | "neutral"
        | "dark"
        | "info"
        | "success"
        | "warning"
        | "critical"
        | "white"
        | "infoInverted"
        | "criticalInverted";

    interface Props extends Common.Global {
        readonly children?: React.ReactNode;
        readonly type?: Type;
        readonly icon?: React.ReactNode;
        readonly ariaLabel?: string;
    }
}

declare class Badge extends React.Component<Badge.Props> {}
