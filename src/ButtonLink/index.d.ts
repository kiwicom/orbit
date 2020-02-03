// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/ButtonLink'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { ButtonLink, ButtonLink as default }

declare namespace ButtonLink {
    type Type = "primary" | "secondary";

    interface Props extends Common.Global, Common.Ref, Common.SpaceAfter {
        readonly children?: React.ReactNode;
        readonly component?: Common.Component;
        readonly onClick?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
        readonly disabled?: boolean;
        readonly block?: boolean;
        readonly external?: boolean;
        readonly type?: Type;
        readonly size?: Common.Size;
        readonly href?: string;
        readonly width?: number;
        readonly icon?: React.ReactNode;
        readonly iconLeft?: React.ReactNode;
        readonly iconRight?: React.ReactNode;
        readonly circled?: boolean;
        readonly submit?: boolean;
        readonly transparent?: boolean;
        readonly tabIndex?: string;
        readonly ariaExpanded?: boolean;
        readonly ariaControls?: string;
        readonly role?: string;
        readonly title?: string | ((param: any) => string);
    }
}

declare class ButtonLink extends React.Component<ButtonLink.Props> {}
