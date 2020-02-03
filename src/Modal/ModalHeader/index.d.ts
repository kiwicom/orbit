// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Modal/ModalHeader'

import * as Common from '@kiwicom/orbit-components/common'
import { ModalContext } from '../ModalContext';
import Illustration from '@kiwicom/orbit-components/lib/Illustration';
import { ElementType } from 'react';

export { ModalHeader, ModalHeader as default }

declare namespace ModalHeader {
    interface Props extends Common.Global, ModalContext.Props {
        readonly children?: React.ReactNode,
        //TODO: more concrete type would be appropriate?
        readonly illustration?: React.ReactElement<Illustration.Props>,
        readonly title?: React.ReactNode,
        readonly description?: React.ReactNode,
        readonly suppressed?: boolean,
    };
}

declare class ModalHeader extends React.Component<ModalHeader.Props> {}
