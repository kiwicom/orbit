/*
  DOCUMENTATION: https://orbit.kiwi/components/airportillustration/
*/
import type * as Common from "../common/types";

type Name =
  | "BGYFastTrack"
  | "BUDFastTrack"
  | "MRSSmartPass"
  | "NCEFastTrack"
  | "PRGSmartPass"
  | "VCESmartPass";

// Interface content is fetched from /src/Illustration/TYPESCRIPT_TEMPLATE.template
export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly size?: "extraSmall" | "small" | "medium" | "large" | "display";
  readonly name: Name;
  readonly alt?: string;
  readonly role?: "img" | "presentation";
}
