// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/TripSector";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

export declare const TripSector: React.FunctionComponent<Props>;
export * from "./TripDate/index";
export * from "./TripLayover/index";
