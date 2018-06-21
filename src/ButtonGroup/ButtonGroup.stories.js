// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import Button from "../Button";
import ButtonLink from "../ButtonLink";

import ButtonGroup from "./index";

setAddon(chaptersAddon);

storiesOf("ButtonGroup", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("With Buttons", () => {
    const connected = boolean("Connected", true);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ButtonGroup connected={connected}>
                  <Button icon={<Icons.Airplane />}>Button</Button>
                  <Button icon={<Icons.ChevronDown />} />
                </ButtonGroup>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With ButtonLinks", () => {
    const connected = boolean("Connected", true);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ButtonGroup connected={connected}>
                  <ButtonLink type="secondary" icon={<Icons.Airplane />}>
                    Button
                  </ButtonLink>
                  <ButtonLink type="secondary" icon={<Icons.ChevronDown />} />
                </ButtonGroup>
              ),
            },
          ],
        },
      ],
    };
  });
