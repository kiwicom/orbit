// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/AirportIllustration";

type Size = "small" | "medium" | "large" | "display";
type Name =
  | "BGYFastTrack"
  | "BUDFastTrack"
  | "MRSSmartPass"
  | "NCEFastTrack"
  | "PRGSmartPass"
  | "VCESmartPass";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly size?: Size;
  readonly name: Name;
  readonly alt?: string;
}

const AirportIllustration: React.FunctionComponent<Props>;
export { AirportIllustration, AirportIllustration as default };
