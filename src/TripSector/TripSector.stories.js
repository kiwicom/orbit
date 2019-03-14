// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text } from "@storybook/addon-knobs";

import TripSector, { TripLayover, TripDate } from "../TripSector";
import TripSegment from "../TripSegment";
import List from "../List";
import ListItem from "../List/ListItem";
import CarrierLogo from "../CarrierLogo";
import InformationCircle from "../icons/InformationCircle";
import TextLink from "../TextLink";
import FlightReturn from "../icons/FlightReturn";
import Clock from "../icons/Clock";
import Check from "../icons/Check";
import RenderInRtl from "../utils/rtl/RenderInRtl";

setAddon(chaptersAddon);

storiesOf("TripSector", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Multiple days", () => ({
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <TripSector>
                <TripDate>Mon 22 Oct</TripDate>
                <TripSegment
                  carrier={{
                    code: "FR",
                    type: "airline",
                    name: "Ryanair",
                  }}
                  duration="2h"
                  departure="Barcelona BCN"
                  departureTime="6:30"
                  arrival="Paris BVA"
                  arrivalTime="8:30"
                >
                  <List size="small" type="secondary">
                    <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
                      Airline: Ryanair
                    </ListItem>
                    <ListItem icon={<InformationCircle color="secondary" />}>
                      Flight no: D8 1762
                    </ListItem>
                  </List>
                </TripSegment>
                <TripLayover>
                  <List type="secondary" size="small">
                    <ListItem icon={<Clock />}>4h 50m layover</ListItem>
                    <ListItem icon={<Check />}>
                      Transfer protected by the&nbsp;
                      <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
                    </ListItem>
                    <ListItem icon={<FlightReturn />}>
                      Changing airports is your responsibility
                    </ListItem>
                  </List>
                </TripLayover>
                <TripSegment
                  carrier={{
                    code: "REGIOJETT",
                    type: "bus",
                    name: "RegioJet",
                  }}
                  duration="3h"
                  departure="Paris CDG"
                  departureTime="13:20"
                  arrival="Lille XDB"
                  arrivalTime="16:20"
                >
                  <List size="small" type="secondary">
                    <ListItem icon={<InformationCircle color="secondary" />}>
                      Flight no: D8 1762
                    </ListItem>
                  </List>
                </TripSegment>
                <TripLayover>
                  <List type="secondary" size="small">
                    <ListItem icon={<Clock />}>2h 25m layover</ListItem>
                    <ListItem icon={<Check />}>
                      Transfer protected by the&nbsp;
                      <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
                    </ListItem>
                  </List>
                </TripLayover>
                <TripSegment
                  carrier={{
                    code: "FLIXBUS",
                    type: "bus",
                    name: "FLIXBUS",
                  }}
                  duration="1h 30m"
                  departure="Lille XDB"
                  departureTime="18:45"
                  arrival="City of Brussels CRL"
                  arrivalTime="20:15"
                >
                  <List size="small" type="secondary">
                    <ListItem icon={<InformationCircle color="secondary" />}>
                      Flight no: D8 1762
                    </ListItem>
                  </List>
                </TripSegment>
                <TripLayover>
                  <List type="secondary" size="small">
                    <ListItem icon={<Clock />}>13h 05m layover</ListItem>
                    <ListItem icon={<Check />}>
                      Transfer protected by the&nbsp;
                      <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
                    </ListItem>
                    <ListItem icon={<FlightReturn />}>
                      Changing airports is your responsibility
                    </ListItem>
                  </List>
                </TripLayover>
                <TripDate>Tue 23 Oct</TripDate>
                <TripSegment
                  carrier={{
                    code: "UA",
                    type: "airline",
                    name: "United Airlines",
                  }}
                  duration="10h 55m"
                  departure="City of Brussels BRU"
                  departureTime="09:20"
                  arrival="Miami MIA"
                  arrivalTime="14:15"
                >
                  <List size="small" type="secondary">
                    <ListItem icon={<InformationCircle color="secondary" />}>
                      Flight no: D8 1762
                    </ListItem>
                  </List>
                </TripSegment>
              </TripSector>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Playground", () => {
    const date = text("date", "Mon 22 Oct");
    const dataTest = text("dataTest", "test");
    const duration = text("duration", "15h 10m");
    return {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <TripSector dataTest={dataTest}>
                  <TripDate duration={duration}>{date}</TripDate>
                  <TripSegment
                    carrier={{
                      code: "FR",
                      type: "airline",
                      name: "Ryanair",
                    }}
                    duration="2h"
                    departure="Barcelona BCN"
                    departureTime="6:30"
                    arrival="Paris BVA"
                    arrivalTime="8:30"
                  >
                    <List size="small" type="secondary">
                      <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
                        Airline: Ryanair
                      </ListItem>
                      <ListItem icon={<InformationCircle color="secondary" />}>
                        Flight no: D8 1762
                      </ListItem>
                    </List>
                  </TripSegment>
                </TripSector>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("RTL", () => ({
    info: "This is a preview of this component in RTL setup.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <RenderInRtl>
                <TripSector>
                  <TripDate>Mon 22 Oct</TripDate>
                  <TripSegment
                    carrier={{
                      code: "FR",
                      type: "airline",
                      name: "Ryanair",
                    }}
                    duration="2h"
                    departure="Barcelona BCN"
                    departureTime="6:30"
                    arrival="Paris BVA"
                    arrivalTime="8:30"
                  >
                    <List size="small" type="secondary">
                      <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
                        Airline: Ryanair
                      </ListItem>
                      <ListItem icon={<InformationCircle color="secondary" />}>
                        Flight no: D8 1762
                      </ListItem>
                    </List>
                  </TripSegment>
                  <TripLayover>
                    <List type="secondary" size="small">
                      <ListItem icon={<Clock />}>4h 50m layover</ListItem>
                      <ListItem icon={<Check />}>
                        Transfer protected by the&nbsp;
                        <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
                      </ListItem>
                      <ListItem icon={<FlightReturn />}>
                        Changing airports is your responsibility
                      </ListItem>
                    </List>
                  </TripLayover>
                  <TripSegment
                    carrier={{
                      code: "REGIOJETT",
                      type: "bus",
                      name: "RegioJet",
                    }}
                    duration="3h"
                    departure="Paris CDG"
                    departureTime="13:20"
                    arrival="Lille XDB"
                    arrivalTime="16:20"
                  >
                    <List size="small" type="secondary">
                      <ListItem icon={<InformationCircle color="secondary" />}>
                        Flight no: D8 1762
                      </ListItem>
                    </List>
                  </TripSegment>
                  <TripLayover>
                    <List type="secondary" size="small">
                      <ListItem icon={<Clock />}>2h 25m layover</ListItem>
                      <ListItem icon={<Check />}>
                        Transfer protected by the&nbsp;
                        <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
                      </ListItem>
                    </List>
                  </TripLayover>
                  <TripSegment
                    carrier={{
                      code: "FLIXBUS",
                      type: "bus",
                      name: "FLIXBUS",
                    }}
                    duration="1h 30m"
                    departure="Lille XDB"
                    departureTime="18:45"
                    arrival="City of Brussels CRL"
                    arrivalTime="20:15"
                  >
                    <List size="small" type="secondary">
                      <ListItem icon={<InformationCircle color="secondary" />}>
                        Flight no: D8 1762
                      </ListItem>
                    </List>
                  </TripSegment>
                  <TripLayover>
                    <List type="secondary" size="small">
                      <ListItem icon={<Clock />}>13h 05m layover</ListItem>
                      <ListItem icon={<Check />}>
                        Transfer protected by the&nbsp;
                        <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
                      </ListItem>
                      <ListItem icon={<FlightReturn />}>
                        Changing airports is your responsibility
                      </ListItem>
                    </List>
                  </TripLayover>
                  <TripDate>Tue 23 Oct</TripDate>
                  <TripSegment
                    carrier={{
                      code: "UA",
                      type: "airline",
                      name: "United Airlines",
                    }}
                    duration="10h 55m"
                    departure="City of Brussels BRU"
                    departureTime="09:20"
                    arrival="Miami MIA"
                    arrivalTime="14:15"
                  >
                    <List size="small" type="secondary">
                      <ListItem icon={<InformationCircle color="secondary" />}>
                        Flight no: D8 1762
                      </ListItem>
                    </List>
                  </TripSegment>
                </TripSector>
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
