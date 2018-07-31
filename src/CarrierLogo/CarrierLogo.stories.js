// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, object, select } from "@storybook/addon-knobs/react";
import styles from "@sambego/storybook-styles/dist/index";

import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS } from "./consts";

import CarrierLogo from "./index";

setAddon(chaptersAddon);

const options = {
  allowSourceToggling: false,
  allowPropTablesToggling: false,
};

const carriersLabel = "Carriers";

storiesOf("CarrierLogo", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("One carrier", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), "large");

    const carrier = [{ code: "FR", name: "Ryanair" }];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info:
        "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <CarrierLogo size={size} carriers={carriersObject} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Two carriers", () => {
    const carrier = [{ code: "FR", name: "Ryanair" }, { code: "TO", name: "Transavia France" }];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info:
        "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <CarrierLogo carriers={carriersObject} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Four carriers", () => {
    const carrier = [
      { code: "FR", name: "Ryanair" },
      { code: "TO", name: "Transavia France" },
      { code: "VY", name: "Vueling" },
      { code: "OK", name: "Czech Airlines" },
    ];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info:
        "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <CarrierLogo carriers={carriersObject} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Non-existing carriers", () => {
    const carrier = [
      { code: "LOL", name: "Lorem ipsum", type: "airline" },
      { code: "KEK", name: "Lorem ipsum", type: "bus" },
      { code: "BUR", name: "Lorem ipsum", type: "train" },
    ];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info:
        "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <CarrierLogo carriers={carriersObject} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Non-existing carrier", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), "large");
    const carrierType = select("Type", Object.values(CARRIER_TYPE_OPTIONS), "airline");
    const carrier = [{ code: "LAL", name: "Lorem ipsum", type: carrierType }];
    const carriersObject = object(carriersLabel, carrier);

    return {
      info:
        "CarrierLogo can display proper placeholder for non-existing carriers by its type. If not you specify the type of carrier, airline placeholder will be displayed.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <CarrierLogo size={size} carriers={carriersObject} />,
              options,
            },
          ],
        },
      ],
    };
  });
