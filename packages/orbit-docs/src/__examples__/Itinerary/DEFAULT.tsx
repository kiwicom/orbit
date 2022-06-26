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
};
