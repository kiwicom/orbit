/*
  DOCUMENTATION: https://orbit.kiwi/components/airportillustration/
*/
import type { Globals, SpaceAfter } from "../common/types";

type Name =
  | "BGYFastTrack"
  | "BUDFastTrack"
  | "MRSSmartPass"
  | "NCEFastTrack"
  | "PRGSmartPass"
  | "VCESmartPass";

export interface Props extends Globals, SpaceAfter {
  readonly size?: "extraSmall" | "small" | "medium" | "large" | "display";
  readonly name: Name;
  readonly alt?: string;
}
