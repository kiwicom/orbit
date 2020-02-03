// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Checkbox'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Checkbox, Checkbox as default }

declare namespace Checkbox {
    interface Props extends Common.Global, Common.Ref {
        readonly label?: React.ReactNode;
        readonly value?: string;
        readonly hasError?: boolean;
        readonly disabled?: boolean;
        readonly checked?: boolean;
        readonly name?: string;
        readonly info?: React.ReactNode;
        readonly tabIndex?: string;
        readonly readOnly?: boolean;
        // Should be InputEvent type
        // There is missing support for this event type in Typescript ATM
        // @see https://fettblog.eu/typescript-react/events/#wheres-inputevent
        readonly onChange?: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
    }
}

declare class Checkbox extends React.Component<Checkbox.Props> {}
