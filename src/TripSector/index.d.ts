// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/TripSector'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { TripSector, TripSector as default }

declare namespace TripSector {
    interface Props extends Common.Global {
        readonly children: React.ReactNode;
    }
}

declare class TripSector extends React.Component<TripSector.Props> {}
