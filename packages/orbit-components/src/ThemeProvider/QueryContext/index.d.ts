// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

export interface Context {
  readonly isMediumMobile: boolean | null;
  readonly isLargeMobile: boolean | null;
  readonly isTablet: boolean | null;
  readonly isDesktop: boolean | null;
  readonly isLargeDesktop: boolean | null;
  readonly prefersReducedMotion: boolean | null;
}

declare const QueryContext: React.Context<Context>;
export declare const QueryContextProvider: React.FunctionComponent<{
  readonly children?: React.ReactNode;
}>;

export default QueryContext;
