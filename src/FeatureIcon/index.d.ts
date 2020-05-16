// @flow
/*
  DOCUMENTATION: https://orbit.kiwi/components/featureicon/
*/
import * as Common from "../common/common";

type Name = "TicketFlexi" | "TicketSaver" | "TicketStandard";

export interface Props extends Common.Global {
  readonly name: Name;
}

declare const FeatureIcon: React.FunctionComponent<Props>;
export { FeatureIcon, FeatureIcon as default };
