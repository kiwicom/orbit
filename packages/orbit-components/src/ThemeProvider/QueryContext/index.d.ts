// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/ThemeProvider/QueryContext";

export interface Props {
  readonly isLargeDesktop: boolean | undefined | null;
  readonly isDesktop: boolean | undefined | null;
  readonly isLargeMobile: boolean | undefined | null;
  readonly isMediumMobile: boolean | undefined | null;
  readonly isTablet: boolean | undefined | null;
  readonly prefersReducedMotion: boolean | undefined | null;
}

declare const QueryContext: React.Context<Props>;
export { QueryContext, QueryContext as default };
