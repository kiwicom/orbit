// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/FormLabel'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { FormLabel, FormLabel as default }

declare namespace FormLabel {
    interface Props extends Common.Global {
       readonly children: React.ReactNode;
       readonly filled?: boolean;
       readonly disabled?: boolean;
       readonly required?: boolean;
       readonly id?: string;
   }
}

declare class FormLabel extends React.Component<FormLabel.Props> {}
