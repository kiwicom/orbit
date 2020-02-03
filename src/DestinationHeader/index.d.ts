// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/DestinationHeader'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { DestinationHeader, DestinationHeader as default }

declare namespace DestinationHeader {
    interface Props extends Common.Global {
        readonly destinationName: Common.Translation;
        readonly image: string;
        readonly goBack?: Common.Callback;
    }
}

declare class DestinationHeader extends React.Component<DestinationHeader.Props> {}
