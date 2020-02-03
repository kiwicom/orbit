// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Popover'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Popover, Popover as default }

declare namespace Popover {
    type Position = "top" | "bottom";

    interface Props extends Common.Global {
        readonly children: React.ReactNode;
        readonly content: React.ReactNode;
        readonly preferredPosition?: Position;
        readonly opened?: boolean;
        readonly width?: string;
        readonly noPadding?: boolean;
        readonly onOpen?: Common.Callback;
        readonly onClose?: Common.Callback;
    }
}

declare class Popover extends React.Component<Popover.Props> {}
