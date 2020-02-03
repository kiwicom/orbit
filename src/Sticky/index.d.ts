// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Sticky'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Sticky, Sticky as default }

declare namespace Sticky {
    interface Props {
        readonly offset?: number;
        readonly children: React.ReactNode;
    }

    interface State {
        sticky: boolean;
        height: number;
        width: number;
        initialTop: number;
        initialWidth: boolean;
    }
}

declare class Sticky extends React.Component<Sticky.Props> {}
