// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { text, withKnobs, object, boolean } from "@storybook/addon-knobs";

import List from "../List";
import ListItem from "../List/ListItem";
import CarrierLogo from "../CarrierLogo";
import InformationCircle from "../icons/InformationCircle";

import TripSegment from "./index";

setAddon(chaptersAddon);

storiesOf("TripSegment", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info: "TripSegments are used for showing information about one trip.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <TripSegment
                duration="3h"
                carrier={{
                  code: "FR",
                  type: "airline",
                  name: "Ryanair",
                }}
                departure="Berlin TXL"
                departureTime="11:20"
                arrival="Moscow VKO"
                arrivalTime="4:20"
                onClick={action("clicked")}
              >
                <List size="small" type="secondary">
                  <ListItem
                    icon={
                      <CarrierLogo
                        carriers={[
                          {
                            code: "FR",
                            type: "airline",
                            name: "Ryanair",
                          },
                        ]}
                      />
                    }
                  >
                    Airline: Ryanair
                  </ListItem>
                  <ListItem icon={<InformationCircle color="secondary" />}>
                    Flight no: D8 1762
                  </ListItem>
                </List>
              </TripSegment>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Shown by default", () => ({
    info: "TripSegments are used for showing information about one trip.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <TripSegment
                initialExpanded
                duration="3h"
                carrier={{
                  code: "FR",
                  type: "airline",
                  name: "Ryanair",
                }}
                departure="Berlin TXL"
                departureTime="11:20"
                arrival="Moscow VKO"
                arrivalTime="4:20"
                onClick={action("clicked")}
              >
                <List size="small" type="secondary">
                  <ListItem
                    icon={
                      <CarrierLogo
                        carriers={[
                          {
                            code: "FR",
                            type: "airline",
                            name: "Ryanair",
                          },
                        ]}
                      />
                    }
                  >
                    Airline: Ryanair
                  </ListItem>
                  <ListItem icon={<InformationCircle color="secondary" />}>
                    Flight no: D8 1762
                  </ListItem>
                </List>
              </TripSegment>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Playground", () => {
    const initialExpanded = boolean("initialExpanded", false);
    const duration = text("duration", "3h");
    const carrier = object("carrier", {
      code: "FR",
      type: "airline",
      name: "Ryanair",
    });
    const departure = text("departureCity", "Berlin TXL");
    const arrival = text("arrivalCity", "Moscow VKO");
    const departureTime = text("departureTime", "11:20");
    const arrivalTime = text("arrivalTime", "14:20");
    const dataTest = text("dataTest", "test");

    return {
      info: "TripSegments are used for showing information about one trip.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <TripSegment
                  initialExpanded={initialExpanded}
                  duration={duration}
                  carrier={carrier}
                  departure={departure}
                  departureTime={departureTime}
                  arrival={arrival}
                  arrivalTime={arrivalTime}
                  onClick={action("clicked")}
                  dataTest={dataTest}
                >
                  <List size="small" type="secondary">
                    <ListItem icon={<CarrierLogo carriers={[carrier]} />}>
                      Airline: {carrier.name}
                    </ListItem>
                    <ListItem icon={<InformationCircle color="secondary" />}>
                      Flight no: D8 1762
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
