// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/utils/Grid";

export type BasicProps = {
  readonly inline?: boolean;
  readonly rows?: string;
  readonly columns?: string;
  readonly gap?: string;
  readonly rowGap?: string;
  readonly columnGap?: string;
  readonly maxWidth?: string;
};

interface Props extends Common.Global, BasicProps {
  readonly element?: string;
  readonly mediumMobile?: BasicProps;
  readonly largeMobile?: BasicProps;
  readonly tablet?: BasicProps;
  readonly desktop?: BasicProps;
  readonly largeDesktop?: BasicProps;
  readonly children: React$Node;
}

const Grid: React.FunctionComponent<Props>;
export { Grid, Grid as default };
