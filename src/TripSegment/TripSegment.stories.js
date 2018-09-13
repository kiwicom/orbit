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
    const arrivalCity = text("arrivalCity", "Moscow");
    const departureCity = text("departureCity", "Berlin");
    const duration = text("duration", "2h");
    const code = text("code", "FR");
    const type = text("type", "airline");
    const name = text("name", "Ryanair");
    const departureTime = text("departureTime", "11:20");
    const arrivalTime = text("arrivalTime", "14:20");
    const departureCode = text("departureCode", "VKO");
    const arrivalCode = text("arrivalCode", "TXL");

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
                  arrivalCity={arrivalCity}
                  departureCity={departureCity}
                  departureCode={departureCode}
                  arrivalCode={arrivalCode}
                  duration={duration}
                  code={code}
                  type={type}
                  name={name}
                  departureTime={departureTime}
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
