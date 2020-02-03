// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/CallOutBanner'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { CallOutBanner, CallOutBanner as default }

declare namespace CallOutBanner {
    interface Props {
        readonly tabIndex?: string;
        readonly onClick?: Common.Callback;
        readonly title: Common.Translation;
        readonly description?: Common.Translation;
        readonly illustration?: React.ElementType<typeof Illustration>;
        readonly actions?: React.ReactNode;
        readonly children?: React.ReactNode;
    }
}

declare class CallOutBanner extends React.Component<CallOutBanner.Props> {}
