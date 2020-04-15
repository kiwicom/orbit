// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/TripSector";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

const TripSector: React.FunctionComponent<Props>;
export { TripSector, TripSector as default };
