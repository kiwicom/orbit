// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { text, select, withKnobs } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import List from "../List";
import ListItem from "../List/ListItem";
import { ICON_COLORS } from "../Icon/consts";
import { SIZES, TYPES } from "../List/consts";
import CarrierLogo from "../CarrierLogo";

import TripSegment from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("TripSegment", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const duration = text("duration", "2h");

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

    const departureTime = text("departureTime", "11:20");
    const arrivalTime = text("arrivalTime", "14:20");
    const type = text("type", "airline");

    const size = select("Size", Object.values(SIZES), SIZES.SMALL);
    const typeList = select("Type", Object.values(TYPES), TYPES.SECONDARY);
    const FlightNumberIcon = getIcon(getIcons("InformationCircle"));
    const iconColor = select("iconColor", Object.keys(ICON_COLORS), "secondary");
    const Airline = text("Airline", "Airline: Ryanair");
    const FlightNum = text("FlightNumber", "Flight no: D8 1762");

    return {
      info: "TripSegments are used for showing information about flight:",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <TripSegment
                  duration={duration}
                  carrier={carrier}
                  departure={departure}
                  departureTime={departureTime}
                  arrival={arrival}
                  type={type}
                  arrivalTime={arrivalTime}
                  onClick={action("clicked")}
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
              ),
            },
          ],
        },
      ],
    };
  });
