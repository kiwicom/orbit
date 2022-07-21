import React from "react";
import {
  Badge,
  Itinerary,
  ItinerarySegmentStop,
  ItinerarySegment,
  ItinerarySegmentDetail,
} from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Itinerary>
      <ItinerarySegment spaceAfter="medium">
        <ItinerarySegmentStop
          city="Moscow"
          station="Sheremetyevo International Airport (SVO)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItinerarySegmentDetail
          icon={<Icons.Airplane size="small" />}
          duration="2h 30m"
          summary={<Badge carriers={[{ code: "FR", name: "Ryanair" }]}>Ryanair</Badge>}
          content={[
            {
              title: "Connection Info",
              items: [
                {
                  icon: <Icons.Airplane size="small" />,
                  name: "Carrier",
                  value: "Ryanair",
                },
                {
                  icon: <Icons.InformationCircle size="small" />,
                  name: "Connection number",
                  value: "RA 8345",
                },
              ],
            },
            {
              title: "Seating Info",
              items: [
                {
                  icon: <Icons.Seat size="small" />,
                  name: "Seat pitch",
                  value: "76cm",
                },
                {
                  icon: <Icons.Seat size="small" />,
                  name: "Seat width",
                  value: "43cm",
                },
                {
                  icon: <Icons.Seat size="small" />,
                  name: "Seat recline",
                  value: "7cm",
                },
                {
                  icon: <Icons.Entertainment size="small" />,
                  name: "Audio & video on demand",
                  value: "No",
                },
                {
                  icon: <Icons.PowerPlug size="small" />,
                  name: "In-seat power",
                  value: "No",
                },
                {
                  icon: <Icons.Wifi size="small" />,
                  name: "Wi-Fi on board",
                  value: "No",
                },
              ],
            },
          ]}
        />
        <ItinerarySegmentStop
          city="Prague"
          station="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="16:35"
        />
      </ItinerarySegment>
    </Itinerary>
  ),
  exampleVariants: [
    {
      name: "shot",
      code: `() => (
        <itinerary>
          <itinerarysegment>
            <itinerarysegmentstop
              date="20.08"
              time="14:00"
              cancelledtime="13:25"
              cancelleddate="19.08"
              cancelledcity="barcelona · bcn"
              city="barcelona · bcx"
              station="girona airport"
              cancelledstation="el prat de llobregat"
            />
            <itinerarysegmentdetail
              duration="2h 30m"
              summary={<badge carriers={[{ code: "fr", name: "ryanair" }]} />}
            />
            <itinerarysegmentstop
              date="20.08"
              cancelleddate="19.08"
              time="20:00
              cancelledtime="19:25"
              city="vienna · vix"
              cancelledcity="vienna · vie"
              station="vienna second airport"
              cancelledstation="vienna international airport (vie)"
            />
          </itinerarysegment>
        </itinerary>
      )`,
    },
    {
      name: "THC",
      code: `() => (
        <Itinerary>
          <ItinerarySegment
            banner={
            <div styles={{ display: "flex", flexDirection: "column" gap: "8px" }}>
              <ItineraryBadgeList>
                <BadgeListItem type="warning" icon={<StarFull color="warning" />}>
                  <StyledText as="span" type="warning">
                    Hidden city hack:{" "}
                  </StyledText>{" "}
                  This itinerary finishes in New York (United States), but you’ll get off during the
                  layover
                </BadgeListItem>
                <BadgeListItem icon={<Visa />}>
                  Check travel document requirements for all destinations, including passport, visa
                  and COVID-19 documents.
                </BadgeListItem>
                <BadgeListItem icon={<BaggageCheckedNone />}>
                  You can’t bring checked or cabin baggage.
                </BadgeListItem>
              </ItineraryBadgeList>
            </>
          }>
            <ItinerarySegmentStop
              date="20.08"
              time="14:00"
              city="Barcelona · BCX"
              station="Girona Airport"
            />
            <ItinerarySegmentDetail
              summary={<Badge carriers={[{ code: "FR", name: "Ryanair" } ]} />}
            />
            <ItinerarySegmentStop
              date="20.08"
              time="14:00"
              hidden
              city="Vienna · VIX"
              station="Vienna Second Airport"
            />
            <ItinerarySegmentStop
              city={<Text type="secondary">New York JFK</Text>}
              station={
                <div style={{display: "flex", alignItems: "center", gap: "4px" }}>
                  <CountryFlag code="US" size="small" />
                  <Text type="secondary" size="small">
                    United states
                  </Text>
                </div>
              }
            />
          </ItinerarySegment>
        </Itinerary>
      )`,
    },
    {
      name: "Throw away ticket",
      code: `() => (
        <Itinerary>
          <Itinerarysegment
             banner={
                <ItineraryBadgeList>
                  <BadgeListItem type="info" icon={<StarFull color="info" />}>
                    Throwaway ticketing hack: You are saving money with this travel hack.
                  </BadgeListItem>
                </ItineraryBadgeList>
            >}>
            <Itinerarysegmentstop
              date="20.08"
              time="14:00"
              cancelledtime="13:25"
              cancelleddate="19.08"
              cancelledcity="Barcelona · BCN"
              city="Barcelona · BCX"
              station="Girona airport"
              cancelledstation="El prat de llobregat"
            />
            <ItinerarySegmentDetail
              duration="2h 30m"
              summary={<Badge carriers={[{ code: "fr", name: "ryanair" }]} />}
            />
            <ItinerarySegmentStop
              date="20.08"
              cancelledDate="19.08"
              time="20:00
              cancelledTime="19:25"
              city="Vienna · vix"
              cancelledCity="Vienna · vie"
              station="Vienna second airport"
              cancelledStation="Vienna international airport (VIE)"
            />
          </Itinerarysegment>
        </Itinerary>
      )`,
    },
  ],
};
