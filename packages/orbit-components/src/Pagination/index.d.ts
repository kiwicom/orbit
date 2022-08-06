// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

interface Props extends Common.Globals {
  readonly onPageChange: (page: number) => void;
  readonly pageCount: number;
  readonly selectedPage?: number;
  readonly hideLabels?: boolean;
  readonly size?: Common.InputSize;
}

declare const Pagination: React.FunctionComponent<Props>;
export { Pagination, Pagination as default };
