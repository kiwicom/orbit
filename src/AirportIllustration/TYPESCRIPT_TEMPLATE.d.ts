/*
  DOCUMENTATION: https://orbit.kiwi/components/airportillustration/
*/

declare export default React$ComponentType<Props>;

import * as React from "react";
import * as Common from "../common/common.d.ts";

type Name =%NAMES%

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly size?: "extraSmall" | "small" | "medium" | "large" | "display";
  readonly name: Name;
  readonly alt?: string;
}

const AirportIllustration: React.FunctionComponent<Props>
export { AirportIllustration, AirportIllustration as default };
