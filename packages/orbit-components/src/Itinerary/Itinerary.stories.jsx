// @flow
import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import {
  KiwicomGuarantee as Guarantee,
  Airplane,
  Train,
  AlertCircle,
  Clock,
  SelfTransfer,
  PowerPlug,
  BaggageSet,
  Wifi,
  Seat,
  Entertainment,
  InformationCircle as Info,
} from "../icons";
import Stack from "../Stack";
import Badge from "../Badge";
import Text from "../Text";
import Heading from "../Heading";
import { BadgeListItem } from "../BadgeList";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Itinerary, {
  ItinerarySeparator,
  ItinerarySegment,
  ItineraryBadgeList,
  ItinerarySegmentDetail,
  ItinerarySegmentStop,
  ItineraryStatus,
} from ".";

const BadgeGroup = () => {
  const carriers = [{ code: "REGIOJETT", name: "Regiojet" }];

  return (
    <Stack flex align="center" spacing="XSmall">
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge border={false}>1 stop</Badge>
    </Stack>
  );
};

export const BadgeList = (): React.Node => {
  return (
    <Stack flex direction="column">
      <ItineraryBadgeList>
        <BadgeListItem type="warning" icon={<SelfTransfer />}>
          You’re departing from a different place
        </BadgeListItem>
        <BadgeListItem type="warning" icon={<SelfTransfer />}>
          Self transfer at Vienna is your responsibility
        </BadgeListItem>
        <BadgeListItem type="warning" icon={<Clock />}>
          1h 20m layover
        </BadgeListItem>
        <BadgeListItem icon={<BaggageSet />}>
          You must collect and recheck your baggage
        </BadgeListItem>
        <BadgeListItem icon={<Guarantee />}>
          Connection protected by the Kiwi.com Guarantee
        </BadgeListItem>
        <BadgeListItem icon={<Info />} type="info">
          Rooms from 35 € by Booking.com
        </BadgeListItem>
      </ItineraryBadgeList>
    </Stack>
  );
};

const content = [
  {
    title: "Connection Info",
    items: [
      {
        icon: <Airplane size="small" />,
        name: "Carrier",
        value: "Ryanair",
      },
      {
        icon: <Info size="small" />,
        name: "Connection number",
        value: "RA 8345",
      },
    ],
  },
  {
    title: "Seating Info",
    items: [
      {
        icon: <Seat size="small" />,
        name: "Seat pitch",
        value: "76cm",
      },
      {
        icon: <Seat size="small" />,
        name: "Seat width",
        value: "43cm",
      },
      {
        icon: <Seat size="small" />,
        name: "Seat recline",
        value: "7cm",
      },
      {
        icon: <Entertainment size="small" />,
        name: "Audio & video on demand",
        value: "No",
      },
      {
        icon: <PowerPlug size="small" />,
        name: "In-seat power",
        value: "No",
      },
      {
        icon: <Wifi size="small" />,
        name: "Wi-Fi on board",
        value: "No",
      },
    ],
  },
];

export const Segment = (): React.Node => {
  return (
    <Stack spacing="large">
      <Itinerary>
        <ItinerarySegment>
          <ItinerarySegmentStop
            city="Prague"
            station="Václav Havel Airport Prague (PRG)"
            date="Fri, 19.10"
            time="14:05"
          />
          <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
          <ItinerarySegmentStop
            city="Milan"
            station="Milan Bergamo International Airport (BGY)"
            date="Fri, 19.10"
            time="16:35"
          />
        </ItinerarySegment>
      </Itinerary>
      <Heading type="title2">Without ItinerarySegmentDetail content</Heading>
      <Itinerary>
        <ItinerarySegment actionable={false}>
          <ItinerarySegmentStop
            city="Prague"
            station="Václav Havel Airport Prague (PRG)"
            date="Fri, 19.10"
            time="14:05"
          />
          <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} />
          <ItinerarySegmentStop
            city="Milan"
            station="Milan Bergamo International Airport (BGY)"
            date="Fri, 19.10"
            time="16:35"
          />
        </ItinerarySegment>
      </Itinerary>
    </Stack>
  );
};

export const Status = (): React.Node => {
  return (
    <>
      <Itinerary>
        <ItineraryStatus type="critical" label="Rescheduled · 4h later" spaceAfter="medium">
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              time="14:05"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="15:35"
            />
          </ItinerarySegment>
        </ItineraryStatus>
        <ItineraryBadgeList>
          <BadgeListItem icon={<AlertCircle />}>The layover in Vienna is too short</BadgeListItem>
        </ItineraryBadgeList>
        <ItineraryStatus type="warning" label="Affected connection">
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="18:15"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Milan"
              station="Milan Bergamo International Airport (BGY)"
              date="Fri, 19.10"
              time="19:20"
            />
          </ItinerarySegment>
        </ItineraryStatus>
      </Itinerary>
      <Itinerary>
        <ItineraryStatus type="info" label="Added stopover" spaceAfter="medium">
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              time="14:05"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="15:35"
            />
          </ItinerarySegment>
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="18:15"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Milan"
              station="Milan Bergamo International Airport (BGY)"
              date="Fri, 19.10"
              time="19:20"
            />
          </ItinerarySegment>
        </ItineraryStatus>
      </Itinerary>
      <Itinerary>
        <ItineraryStatus type="success" label="Your new alternative" spaceAfter="medium">
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              time="14:05"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="15:35"
            />
          </ItinerarySegment>
        </ItineraryStatus>
      </Itinerary>
    </>
  );
};

export const Separator = (): React.Node => {
  return (
    <Stack direction="column">
      <ItinerarySeparator>
        <Text weight="bold">8 nights in Barcelona</Text>
      </ItinerarySeparator>
      <ItinerarySeparator />
    </Stack>
  );
};

export const Stop = (): React.Node => {
  const date = text("date", "Fr, 19.10");
  const time = text("time", "14:05");
  const station = text("place", "Václav Havel Airport Prague (PRG)");
  const city = text("city", "Prague");
  const canceled = boolean("canceled", false);
  const type = select("type", ["warning", "critical", "success", "info"], "warning");

  return (
    <Stack direction="column" spacing="large">
      <ItinerarySegmentStop
        city={city}
        canceled={canceled}
        station={station}
        date={date}
        time={time}
        type={type}
      />
      <ItinerarySegmentStop
        city={city}
        canceled={canceled}
        station={station}
        date={date}
        time={time}
        type={type}
      />
      <ItinerarySegmentStop
        city={city}
        canceled={canceled}
        station={station}
        date={date}
        time={time}
        icon={<Train size="small" />}
      />
      <ItinerarySegmentStop
        city={city}
        canceled={canceled}
        station={station}
        date={date}
        time={time}
        icon={<Train size="small" />}
      />
    </Stack>
  );
};

export const Detail = (): React.Node => {
  return (
    <ItinerarySegment noElevation>
      <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
    </ItinerarySegment>
  );
};

export const Default = (): React.Node => {
  const source = select("icon", Object.keys(Icons), "Airplane");
  const Icon = Icons[source];

  return (
    <Itinerary>
      <ItinerarySegment spaceAfter="medium">
        <ItinerarySegmentStop
          city="Moscow"
          station="Sheremetyevo International Airport (SVO)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItinerarySegmentDetail
          icon={<Icon size="small" />}
          duration="2h 30m"
          summary={<BadgeGroup />}
          content={content}
        />
        <ItinerarySegmentStop
          city="Prague"
          station="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="16:35"
        />
      </ItinerarySegment>
      <ItineraryBadgeList>
        <BadgeListItem icon={<Guarantee />}>
          Connection protected by the Kiwi.com Guarantee
        </BadgeListItem>
      </ItineraryBadgeList>
      <ItinerarySegment spaceAfter="large">
        <ItinerarySegmentStop
          city="Prague"
          station="Václav Havel Airport Prague (PRG)"
          date="Sat, 20.10"
          time="11:05"
        />
        <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
        <ItinerarySegmentStop
          city="Milan"
          station="Milan Bergamo International Airport (BGY)"
          date="Fri, 20.10"
          time="16:35"
          type="warning"
        />
      </ItinerarySegment>
    </Itinerary>
  );
};

export const RTL = (): React.Node => {
  const source = select("icon", Object.keys(Icons), "Airplane");
  const Icon = Icons[source];

  return (
    <RenderInRtl>
      <Itinerary>
        <ItinerarySegment spaceAfter="medium">
          <ItinerarySegmentStop
            city="Moscow"
            station="Sheremetyevo International Airport (SVO)"
            date="Fri, 19.10"
            time="14:05"
          />
          <ItinerarySegmentDetail
            icon={<Icon size="small" />}
            duration="2h 30m"
            summary={<BadgeGroup />}
            content={content}
          />
          <ItinerarySegmentStop
            city="Prague"
            station="Václav Havel Airport Prague (PRG)"
            date="Fri, 19.10"
            time="16:35"
          />
        </ItinerarySegment>
        <ItineraryBadgeList>
          <BadgeListItem icon={<Guarantee />}>
            Connection protected by the Kiwi.com Guarantee
          </BadgeListItem>
        </ItineraryBadgeList>
        <ItinerarySegment spaceAfter="large">
          <ItinerarySegmentStop
            city="Prague"
            station="Václav Havel Airport Prague (PRG)"
            date="Sat, 20.10"
            time="11:05"
          />
          <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
          <ItinerarySegmentStop
            city="Milan"
            station="Milan Bergamo International Airport (BGY)"
            date="Fri, 20.10"
            time="16:35"
            type="warning"
          />
        </ItinerarySegment>
      </Itinerary>
    </RenderInRtl>
  );
};

export default {
  title: "Itinerary",
  component: Itinerary,
  includeStories: [
    "BadgeList",
    "CarrierBadge",
    "Default",
    "Detail",
    "RTL",
    "Segment",
    "Separator",
    "Status",
    "Stop",
  ],
};
