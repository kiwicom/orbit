// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Modal'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'
import ModalHeaderType from '@kiwicom/orbit-components/lib/Modal/ModalHeader'
import ModalSectionType from '@kiwicom/orbit-components/lib/Modal/ModalSection'

export { ModalContext, ModalContextType, withModalContext, WithModalContextType }

declare namespace ModalContext {
    interface Props {
        setDimensions?: () => void
        decideFixedFooter?: () => void
        setHasModalSection?: () => void
        removeHasModalSection?: () => void
        manageFocus?: () => void
        hasModalSection?: boolean
        isMobileFullPage?: boolean
    }
}

type ModalContextType = React.Context<ModalContext.Props>

type WithModalContextType = (component: React.Component<infer U>) => (props: Partial<U>) => any;

declare let ModalContext: ModalContextType;
declare let withModalContext: WithModalContextType;
