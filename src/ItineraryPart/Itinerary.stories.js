// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";

import TripSegment from "../TripSegment";
import List from "../List";
import ListItem from "../List/ListItem";
import CarrierLogo from "../CarrierLogo";
import { ICON_COLORS } from "../Icon/consts";
import { SIZES, TYPES } from "../List/consts";
import * as Icons from "../icons";

import Itinerary from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

// Itinerary Props
const date = new Date(Date.now()).toLocaleString("en-GB", {
  day: "numeric",
  weekday: "short",
  month: "short",
});
// TripSegment Props
const carrier = {
  code: text("code", "FR"),
  type: text("type", "airline"),
  name: text("name", "Ryanair"),
};

const departure = {
  city: text("departureCity", "Berlin"),
  code: text("code", "TXL"),
};

const arrival = {
  city: text("arrivalCity", "Moscow"),
  code: text("code", "VKO"),
};

const duration = "5:40";
const arrivalTime = "11:20";
const departureTime = "5:45";
const type = "airline";
const typeList = select("Type", Object.values(TYPES), TYPES.SECONDARY);
const size = select("Size", Object.values(SIZES), SIZES.SMALL);
const iconColor = select("iconColor", Object.keys(ICON_COLORS), "secondary");
const Airline = text("Airline", "Airline: Ryanair");
const FlightNum = text("FlightNumber", "Flight no: D8 1762");
const FlightNumberIcon = getIcon(getIcons("InformationCircle"));

storiesOf("ItineraryPart", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )

  .addWithChapters("Playground", () => ({
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Itinerary date={date}>
                <TripSegment
                  carrier={carrier}
                  duration={duration}
                  type={type}
                  departure={departure}
                  departureTime={departureTime}
                  arrival={arrival}
                  arrivalTime={arrivalTime}
                >
                  <List size={size} type={typeList}>
                    <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
                      {Airline}
                    </ListItem>
                    <ListItem icon={FlightNumberIcon && <FlightNumberIcon color={iconColor} />}>
                      {FlightNum}
                    </ListItem>
                  </List>
                </TripSegment>
              </Itinerary>
            ),
          },
        ],
      },
    ],
  }));
