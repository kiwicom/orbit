/*
  DOCUMENTATION: https://orbit.kiwi/components/featureicon/
*/

import type { Globals } from "../common/types";

type Name = "TicketFlexi" | "TicketSaver" | "TicketStandard";

export interface Props extends Globals {
  readonly name: Name;
  readonly alt?: string;
}
