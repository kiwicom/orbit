import React from "react";

import { Airplane, Seat, StarFull } from "../icons";
import Badge from "../Badge";
import type { Props } from "./ItinerarySegment/types";

import Itinerary, {
  ItineraryBadgeList,
  ItineraryBadgeListItem,
  ItinerarySegment,
  ItinerarySegmentBanner,
  ItinerarySegmentDetail,
  ItinerarySegmentStop,
  ItinerarySeparator,
  ItineraryStatus,
} from ".";

const content = [
  {
    title: "Connection Info",
    items: [
      {
        icon: <Airplane size="small" ariaHidden />,
        name: "Carrier",
        value: "Ariline",
      },
      {
        icon: <Seat size="small" ariaHidden />,
        name: "Connection number",
        value: "AC 1234",
      },
    ],
  },
  {
    title: "Seating Info",
    items: [
      {
        icon: <Seat size="small" ariaHidden />,
        name: "Seat pitch",
        value: "76cm",
      },
      {
        icon: <Seat size="small" ariaHidden />,
        name: "Seat width",
        value: "43cm",
      },
      {
        icon: <Seat size="small" ariaHidden />,
        name: "Seat recline",
        value: "7cm",
      },
    ],
  },
];

export function ItineraryBadgeListVisualStory() {
  return (
    <ItineraryBadgeList>
      <ItineraryBadgeListItem strikeThrough icon={<Airplane ariaHidden />}>
        strikeThrough
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem
        cancelledValue="cancelledValue"
        withBackground
        icon={<Airplane ariaHidden />}
      >
        newValue with background
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem cancelledValue="cancelledValue" icon={<Airplane ariaHidden />}>
        newValue
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="neutral" icon={<Airplane ariaHidden />}>
        neutral
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="neutral" withBackground icon={<Airplane ariaHidden />}>
        neutral withBackground
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="success" icon={<Airplane ariaHidden />}>
        success
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="success" withBackground icon={<Airplane ariaHidden />}>
        success withBackground
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="info" icon={<Airplane ariaHidden />}>
        info
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="info" withBackground icon={<Airplane ariaHidden />}>
        info withBackground
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="warning" icon={<Airplane ariaHidden />}>
        warning
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="warning" withBackground icon={<Airplane ariaHidden />}>
        warning withBackground
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="critical" icon={<Airplane ariaHidden />}>
        critical
      </ItineraryBadgeListItem>
      <ItineraryBadgeListItem type="critical" withBackground icon={<Airplane ariaHidden />}>
        critical withBackground
      </ItineraryBadgeListItem>
    </ItineraryBadgeList>
  );
}

export function ItinerarySeparatorVisualStory() {
  return (
    <div className="p-200 gap-400 flex w-full flex-col">
      <ItinerarySeparator>
        <p>Default</p>
      </ItinerarySeparator>
      <ItinerarySeparator />
      <ItinerarySeparator type="solid" color="paletteBlueNormal">
        <p>Colored</p>
      </ItinerarySeparator>
      <ItinerarySeparator type="dashed">
        <p>Dashed</p>
      </ItinerarySeparator>
      <ItinerarySeparator type="dotted">
        <p>Dotted</p>
      </ItinerarySeparator>
      <ItinerarySeparator type="double">Double</ItinerarySeparator>
    </div>
  );
}

export function ItinerarySegmentVisualStory({
  noContent,
  ...props
}: Omit<Props, "children"> & { noContent?: boolean }) {
  return (
    <div className="p-200">
      <Itinerary>
        <ItinerarySegment dataTest="segment" {...props}>
          <ItinerarySegmentStop
            city="Prague"
            station="Václav Havel Airport Prague (PRG)"
            date="Fri, 19.10"
            time="14:05"
          />
          <ItinerarySegmentDetail
            duration="2h 30m"
            summary={<Badge>Carrier</Badge>}
            content={noContent ? undefined : content}
          />
          <ItinerarySegmentStop
            city="Milan"
            station="Milan Bergamo International Airport (BGY)"
            date="Fri, 19.10"
            time="16:35"
          />
        </ItinerarySegment>
      </Itinerary>
    </div>
  );
}

export function ItinerarySegmentStatusVisualStory() {
  return (
    <div className="p-200">
      <Itinerary>
        <ItineraryStatus type="info" label="ItineraryStatus">
          <ItinerarySegment>
            <ItinerarySegmentStop
              city="Prague"
              cancelledCity="Brno"
              type="critical"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              time="14:05"
            />
            <ItinerarySegmentDetail
              duration="2h 30m"
              summary={<Badge>Carrier</Badge>}
              content={[]}
            />
            <ItinerarySegmentStop
              city="Milan"
              station="Milan Bergamo International Airport (BGY)"
              cancelledStation="Milano Linate Airport (LIN)"
              type="warning"
              date="Fri, 19.10"
              time="16:35"
            />
            <ItinerarySegmentDetail
              duration="2h 30m"
              summary={<Badge>Carrier</Badge>}
              content={[]}
            />
            <ItinerarySegmentStop
              city="Rome"
              station="Rome Ciampino Airport (CIA)"
              date="Fri, 19.10"
              cancelledDate="Fri, 18.10"
              type="neutral"
              time="16:35"
            />
            <ItinerarySegmentDetail
              duration="2h 30m"
              summary={<Badge>Carrier</Badge>}
              content={[]}
            />
            <ItinerarySegmentStop
              city="Torino"
              station="Torino Airport (TRN)"
              date="Fri, 19.10"
              time="16:35"
              cancelledTime="18:00"
              type="success"
            />
          </ItinerarySegment>
        </ItineraryStatus>
      </Itinerary>
    </div>
  );
}

export function ItineraryBannerHiddenCityVisualStory() {
  return (
    <div className="p-200">
      <Itinerary>
        <ItinerarySegment
          banner={
            <ItinerarySegmentBanner>
              <ItineraryBadgeList>
                <ItineraryBadgeListItem icon={<StarFull ariaHidden />} type="warning">
                  Hidden city hack: This itinerary finishes in New York (United States), but you’ll
                  get off during the layover.
                </ItineraryBadgeListItem>
              </ItineraryBadgeList>
            </ItinerarySegmentBanner>
          }
        >
          <ItinerarySegmentStop
            city="Prague"
            station="Václav Havel Airport Prague (PRG)"
            time="16:20"
            date="Wed, 15.6"
          />
          <ItinerarySegmentDetail
            duration="2h 10m"
            summary={<Badge>Carrier</Badge>}
            content={content}
          />
          <ItinerarySegmentStop
            hidden
            city="Frankfurt"
            time="18:30"
            date="Wed, 15.6"
            station="Frankfurt International Airport "
          />
          <ItinerarySegmentStop city="New York JFK" station="United States" />
        </ItinerarySegment>
      </Itinerary>
    </div>
  );
}
