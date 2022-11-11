/*
  DOCUMENTATION: https://orbit.kiwi/components/airportillustration/
*/
import * as React from "react";

import * as Common from "../common/types";

type Name =
  | "BGYFastTrack"
  | "BUDFastTrack"
  | "MRSSmartPass"
  | "NCEFastTrack"
  | "PRGSmartPass"
  | "VCESmartPass";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly size?: "extraSmall" | "small" | "medium" | "large" | "display";
  readonly name: Name;
  readonly alt?: string;
}
