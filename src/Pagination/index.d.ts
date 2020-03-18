// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/Pagination";

export { Pagination, Pagination as default };

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
