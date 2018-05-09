// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import styles from "@sambego/storybook-styles";
import { withKnobs, object, select } from "@storybook/addon-knobs/react";

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
  .addWithChapters("Default", () => {
    const carrier = [{ code: "FR", name: "Ryanair" }];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info: "CarrierLogo in default settings does require carriers prop only.",
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
  .addWithChapters("With size", () => {
    const size = select(
      "Size",
      {
        small: "small",
        medium: "medium",
        large: "large",
      },
      "large",
    );

    const carrier = [{ code: "FR", name: "Ryanair" }];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info:
        "If you need to, you can change the size of CarrierLogo, but it only applies when you rendering one - single carrier.",
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
  .addWithChapters("Playground", () => {
    const size = select(
      "Size",
      {
        small: "small",
        medium: "medium",
        large: "large",
      },
      "medium",
    );

    const carrier = [
      { code: "FR", name: "Ryanair" },
      { code: "TO", name: "Transavia France" },
      { code: "VY", name: "Vueling" },
      { code: "OK", name: "Czech Airlines" },
    ];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info: "If you pass more than two carriers, the size prop does not influence anything more.",
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
