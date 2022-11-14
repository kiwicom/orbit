import * as React from "react";
import styled from "styled-components";

import type * as Common from "../common/types";
import ItinerarySegmentBanner from "./ItinerarySegment/ItinerarySegmentBanner";
import ItineraryBadgeList, { ItineraryBadgeListItem } from "./ItineraryBadgeList";
import ItinerarySegment from "./ItinerarySegment";
import ItinerarySeparator from "./ItinerarySeparator";
import ItineraryStatus from "./ItineraryStatus";
import ItinerarySegmentStop from "./ItinerarySegment/ItinerarySegmentStop";
import ItinerarySegmentDetail from "./ItinerarySegment/ItinerarySegmentDetail";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";
import { ItineraryProvider } from "./context";
import type { Props } from "./types";

const StyledItineraryWrapper = styled.div<{ spaceAfter?: Common.SpaceAfterSizes }>`
  margin-bottom: ${getSpacingToken};
`;

StyledItineraryWrapper.defaultProps = {
  theme: defaultTheme,
};

const Itinerary = ({ children, dataTest, spaceAfter, id }: Props) => {
  return (
    <StyledItineraryWrapper data-test={dataTest} id={id} spaceAfter={spaceAfter}>
      <ItineraryProvider>{children}</ItineraryProvider>
    </StyledItineraryWrapper>
  );
};

export {
  ItinerarySegment,
  ItinerarySegmentBanner,
  ItinerarySegmentDetail,
  ItinerarySegmentStop,
  ItinerarySeparator,
  ItineraryBadgeList,
  ItineraryBadgeListItem,
  ItineraryStatus,
};

export default Itinerary;
export { Props };
