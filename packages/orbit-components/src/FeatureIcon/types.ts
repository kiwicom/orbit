/*
  DOCUMENTATION: https://orbit.kiwi/components/featureicon/
*/

import type * as Common from "../common/types";

type Name = "TicketFlexi" | "TicketSaver" | "TicketStandard";

export interface Props extends Common.Globals {
  readonly name: Name;
  readonly alt?: string;
}
