// @flow
/*
  DOCUMENTATION: https://orbit.kiwi/components/airportillustration/
*/
import * as React from "react";

import * as Common from "../common/common";

type Name =
  | "BGYFastTrack"
  | "BUDFastTrack"
  | "MRSSmartPass"
  | "NCEFastTrack"
  | "PRGSmartPass"
  | "VCESmartPass";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly size?: "extraSmall" | "small" | "medium" | "large" | "display";
  readonly name: Name;
  readonly alt?: string;
}

declare const AirportIllustration: React.FunctionComponent<Props>;
export { AirportIllustration, AirportIllustration as default };
