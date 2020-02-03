// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Pagination'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Pagination, Pagination as default }

declare namespace Pagination {
    interface Props extends Common.Global {
      readonly onPageChange: (page: number) => void;
      readonly pageCount: number;
      readonly selectedPage?: number;
      readonly hideLabels?: boolean;
      readonly size?: Common.InputSize;
    }
}

declare class Pagination extends React.Component<Pagination.Props> {}
