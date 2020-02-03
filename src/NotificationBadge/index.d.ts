// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/NotificationBadge'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { NotificationBadge, NotificationBadge as default }

declare namespace NotificationBadge {
    interface Props extends Badge.Props {}
}

declare class NotificationBadge extends React.Component<NotificationBadge.Props> {}
