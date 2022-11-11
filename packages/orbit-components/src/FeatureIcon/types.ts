/*
  DOCUMENTATION: https://orbit.kiwi/components/featureicon/
*/
import * as Common from "../common/types";

type Name = "TicketFlexi" | "TicketSaver" | "TicketStandard";

export interface Props extends Common.Globals {
  readonly name: Name;
  readonly alt?: string;
}

declare const FeatureIcon: React.FunctionComponent<Props>;
export { FeatureIcon, FeatureIcon as default };
