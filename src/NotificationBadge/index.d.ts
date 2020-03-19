// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/NotificationBadge";

export { NotificationBadge, NotificationBadge as default };

declare namespace NotificationBadge {
  type Props = Badge.Props;
}

declare class NotificationBadge extends React.Component<NotificationBadge.Props> {}
