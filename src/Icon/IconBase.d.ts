// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { IconBase, IconBase as default }

declare namespace IconBase {
    type Size = "small" | "medium" | "large"
    type Color =
        | "attention"
        | "primary"
        | "secondary"
        | "tertiary"
        | "info"
        | "success"
        | "warning"
        | "critical";

    interface Props extends Common.Global {
        readonly color?: Color;
        readonly size?: Size;
        readonly customColor?: string;
        readonly className?: string;
        readonly ariaHidden?: boolean;
        readonly reverseOnRtl?: boolean;
        readonly ariaLabel?: string;
    }
}

declare class IconBase extends React.Component<IconBase.Props> {}
