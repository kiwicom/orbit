// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/TripSector";

export { TripSector, TripSector as default };

declare namespace TripSector {
  interface Props extends Common.Global {
    readonly children: React.ReactNode;
  }
}

declare class TripSector extends React.Component<TripSector.Props> {}
