// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";

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
    const dataTest = text("dataTest", "test");
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ButtonGroup connected={connected} dataTest={dataTest}>
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
    const dataTest = text("dataTest", "test");
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ButtonGroup connected={connected} dataTest={dataTest}>
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
  })
  .addWithChapters("RTL", () => ({
    info: "This is a preview of this component in RTL setup.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <RenderInRtl>
                <ButtonGroup connected>
                  <Button icon={<Icons.Airplane />}>Button</Button>
                  <Button icon={<Icons.ChevronDown />} />
                </ButtonGroup>
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
