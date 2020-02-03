// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/CarrierLogo'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { CarrierLogo, CarrierLogo as default }

declare namespace CarrierLogo {
    type Size = "small" | "medium" | "large";

    interface Props extends Common.Global {
        readonly size?: Size;
        readonly carriers: Common.Carrier[];
    }
}

declare class CarrierLogo extends React.Component<CarrierLogo.Props> {}
