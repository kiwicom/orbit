// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Modal/ModalSection'

import * as Common from '@kiwicom/orbit-components/common'
import { ModalContext } from '../ModalContext'

export { ModalSection, ModalSection as default }

declare namespace ModalSection {
    interface Props extends Common.Global, ModalContext.Props {
        readonly children: React.ReactNode
        readonly suppressed?: boolean
    };
}

declare class ModalSection extends React.Component<ModalSection.Props> {}
