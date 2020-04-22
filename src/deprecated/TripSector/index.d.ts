// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import { TripDateType } from "./TripDate/index.d.ts";
import { TripLayoverType } from "./TripLayover/index.d.ts";
import * as Common from "../../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/TripSector";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

const TripSector: React.FunctionComponent<Props>;
declare const TripDate: TripLayoverType;
declare const TripLayover: TripDateType;

export { TripSector, TripSector as default, TripDate, TripLayover };
