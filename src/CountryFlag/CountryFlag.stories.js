// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";
import styles from "@sambego/storybook-styles/dist/index";

import { CODES } from "./consts";

import CountryFlag from "./index";

setAddon(chaptersAddon);

storiesOf("CountryFlag", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const code = select("Code", Object.values(CODES), CODES.ANYWHERE);

    return {
      info:
        "Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <CountryFlag code={code} />,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const code = select("Code", Object.values(CODES), CODES.ANYWHERE);
    const name = text("Name", "Country");
    return {
      info:
        "Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <CountryFlag code={code} name={name} />,
            },
          ],
        },
      ],
    };
  });
