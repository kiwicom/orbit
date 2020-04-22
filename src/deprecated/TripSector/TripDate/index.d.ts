// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/TripDate";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly duration?: Common.Translation;
}

const TripDate: React.FunctionComponent<Props>;
export { TripDate, TripDate as default };
