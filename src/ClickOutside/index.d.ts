// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/ClickOutside'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { ClickOutside, ClickOutside as default }

declare namespace ClickOutside {
    interface Props {
        readonly onClickOutside?: Common.Event<React.MouseEvent>;
        readonly children: React.ReactNode | React.ReactNode[];
    }
}

declare class ClickOutside extends React.Component<ClickOutside.Props> {}
