// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/deprecated/TileHeader";

interface Props {
  readonly icon?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly external?: boolean;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLDivElement>>;
  readonly isExpandable?: boolean;
  readonly isExpanded?: boolean;
}

const TileHeader: React.FunctionComponent<Props>;
export { TileHeader, TileHeader as default };
