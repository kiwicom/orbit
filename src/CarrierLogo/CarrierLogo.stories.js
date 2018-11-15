// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, object, select, text } from "@storybook/addon-knobs";
import styles from "@sambego/storybook-styles/dist/index";

import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import CarrierLogo from "./index";

setAddon(chaptersAddon);

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
    const dataTest = text("dataTest", "test");

    const carrier = [{ code: "FR", name: "Ryanair" }];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info:
        "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <CarrierLogo size={size} carriers={carriersObject} dataTest={dataTest} />
              ),
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
                <CarrierLogo
                  size="large"
                  carriers={[
                    { code: "FR", name: "Lorem ipsum", type: "airline" },
                    { code: "TO", name: "Lorem ipsum", type: "train" },
                  ]}
                />
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
