import React from "react";

import Common from "../../../common/common";

export interface Props {
  readonly children: React.ReactNode;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLDivElement>>;
}

declare const ItinerarySegmentBanner: React.FunctionComponent<Props>;
export default ItinerarySegmentBanner;
