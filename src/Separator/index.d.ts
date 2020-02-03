// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Separator'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Separator, Separator as default }

declare namespace Separator {
    interface Props extends Common.SpaceAfter {}
}

declare class Separator extends React.Component<Separator.Props> {}
