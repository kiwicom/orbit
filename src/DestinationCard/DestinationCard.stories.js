// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, object, number } from "@storybook/addon-knobs/react";
import styles from "@sambego/storybook-styles/dist/index";

import DestinationCard from "./index";

setAddon(chaptersAddon);

storiesOf("DestinationCard", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Direct", () => ({
    info:
      "DestinationCard is a component which is used on the landing page and also on the search page.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <DestinationCard
                departureCity="Prague"
                destinationCity="Dubai"
                destinationCountry="United Arab Emirates"
                image="dubai_ae"
                price="5,563 Kč"
                outbound={{ text: "One-way", type: "Direct", duration: "6h 10m" }}
              />
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Return", () => ({
    info:
      "DestinationCard is a component which is used on the landing page and also on the search page.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <DestinationCard
                departureCity="Prague"
                destinationCity="Dubai"
                destinationCountry="United Arab Emirates"
                image="dubai_ae"
                price="5,563 Kč"
                timeOfStay="10 nights"
                outbound={{ date: "Wed 31 Oct", type: "Direct", duration: "6h 10m" }}
                inbound={{ date: "Fri 9 Nov", type: "Direct", duration: "6h 50m" }}
              />
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Playground", () => {
    const image = text("image", "paris_fr");
    const destinationCity = text("destinationCity", "Paris");
    const dataTest = text("dataTest", "test");
    const height = number("height", 300);
    const departureCity = text("departureCity", "Prague");
    const destinationCountry = text("destinationCountry", "United Arab Emirates");
    const price = text("price", "5,563 Kč");
    const timeOfStay = text("timeOfStay", "10 nights");
    const outbound = object("outbound", { date: "Wed 31 Oct", type: "Direct", duration: "6h 10m" });
    const inbound = object("inbound", { date: "Fri 9 Nov", type: "Direct", duration: "6h 50m" });

    return {
      info:
        "DestinationCard is a component which is used on the landing page and also on the search page.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <DestinationCard
                  dataTest={dataTest}
                  departureCity={departureCity}
                  destinationCity={destinationCity}
                  destinationCountry={destinationCountry}
                  image={image}
                  height={height}
                  price={price}
                  timeOfStay={timeOfStay}
                  outbound={outbound}
                  inbound={inbound}
                />
              ),
            },
          ],
        },
      ],
    };
  });
