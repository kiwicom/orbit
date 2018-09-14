// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";

import { NAME_OPTIONS, SIZE_OPTIONS } from "./consts";

import ServiceLogo from "./index";

setAddon(chaptersAddon);

storiesOf("ServiceLogo", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const name = select("Type", Object.values(NAME_OPTIONS), NAME_OPTIONS.AIRHELP);
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
    const grayScale = boolean("GrayScale", false);
    const dataTest = text("dataTest", "test");

    return {
      info: "Some description about this type of component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ServiceLogo name={name} size={size} grayScale={grayScale} dataTest={dataTest} />
              ),
            },
          ],
        },
      ],
    };
  });
