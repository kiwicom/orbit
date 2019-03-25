// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text } from "@storybook/addon-knobs";
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
    const code = text("Code", CODES.ANYWHERE);

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
    const code = text("Code", CODES.ANYWHERE);
    const name = text("Name", "Country");
    const dataTest = text("dataTest", "test");
    return {
      info:
        "Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <CountryFlag code={code} name={name} dataTest={dataTest} />,
            },
          ],
        },
      ],
    };
  });
