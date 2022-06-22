// @flow
import * as React from "react";
import styled from "styled-components";

import ItineraryBadgeList from "./ItineraryBadgeList";
import ItinerarySegment from "./ItinerarySegment";
import ItineraryStatus from "./ItineraryStatus";
import ItinerarySegmentStop from "./ItinerarySegment/ItinerarySegmentStop";
import ItinerarySegmentDetail from "./ItinerarySegment/ItinerarySegmentDetail";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";
import { ItineraryProvider } from "./context";

import type { Props } from ".";

const StyledItineraryWrapper = styled.div`
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledItineraryWrapper.defaultProps = {
  theme: defaultTheme,
};

const Itinerary = ({ children, dataTest, spaceAfter, id }: Props): React.Node => {
  return (
    <StyledItineraryWrapper data-test={dataTest} id={id} spaceAfter={spaceAfter}>
      <ItineraryProvider>{children}</ItineraryProvider>
    </StyledItineraryWrapper>
  );
};

export {
  ItinerarySegment,
  ItinerarySegmentDetail,
  ItinerarySegmentStop,
  ItineraryBadgeList,
  ItineraryStatus,
};
export default Itinerary;
