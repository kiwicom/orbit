// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Breadcrumbs'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Breadcrumbs, Breadcrumbs as default }

declare namespace Breadcrumbs {
    interface Props extends Common.Global {
        readonly children: React.ReactNode;
        readonly onGoBack?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
    }
}

declare class Breadcrumbs extends React.Component<Breadcrumbs.Props> {}
