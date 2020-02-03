// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/TripSegment'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { TripSegment, TripSegment as default }

declare namespace TripSegment {
    interface Props extends Common.Global {
        readonly children: React.ReactNode;
        readonly carrier: Common.Carrier;
        readonly departure: Common.Translation;
        readonly departureTime: Common.Translation;
        readonly arrival: Common.Translation;
        readonly arrivalTime: Common.Translation;
        readonly duration: Common.Translation;
        readonly initialExpanded?: boolean;
        readonly tabIndex?: string;
        readonly onClick?: Common.Callback;
    }

    interface State {
        expanded: boolean;
        contentHeight: number;
        initialExpanded: boolean;
    }
}

declare class TripSegment extends React.Component<TripSegment.Props> {}
