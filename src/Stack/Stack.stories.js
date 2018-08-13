// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, boolean, select, object, text } from "@storybook/addon-knobs/react";

import { DIRECTIONS, ALIGNS, SPACINGS } from "./consts";
import Edit from "../icons/Edit";
import Button from "../Button";
import InputField from "../InputField";
import Text from "../Text";
import TextLink from "../TextLink";
import Airplane from "../icons/Airplane";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Stack from "./index";

setAddon(chaptersAddon);

storiesOf("Stack", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Stack>
                <Button type="success" iconLeft={<Airplane />}>
                  Button
                </Button>
                <Button type="warning">Button</Button>
              </Stack>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Mobile properties", () => {
    const inline = boolean("Inline", false);
    const direction = select("Direction", [undefined, ...Object.values(DIRECTIONS)]);
    const wrap = boolean("Wrap", false);
    const grow = boolean("Grow", true);
    const shrink = boolean("Shrink", false);
    const basis = text("Basis", "auto");
    const align = select("Align", [undefined, ...Object.values(ALIGNS)]);
    const spacing = select("Spacing", [undefined, ...Object.values(SPACINGS)]);
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Stack
                  inline={inline}
                  direction={direction}
                  wrap={wrap}
                  shrink={shrink}
                  grow={grow}
                  basis={basis}
                  align={align}
                  spacing={spacing}
                  spaceAfter={spaceAfter}
                >
                  <Button type="success" iconLeft={<Airplane />}>
                    Button
                  </Button>
                  <Button type="warning">Button</Button>
                </Stack>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Desktop properties", () => {
    const inline = boolean("Inline", false);
    const direction = select("Direction", [undefined, ...Object.values(DIRECTIONS)]);
    const wrap = boolean("Wrap", false);
    const grow = boolean("Grow", true);
    const shrink = boolean("Shrink", false);
    const basis = text("Basis", "auto");
    const align = select("Align", [undefined, ...Object.values(ALIGNS)]);
    const spacing = select("Spacing", [undefined, ...Object.values(SPACINGS)]);
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
    const desktop = {
      inline,
      direction,
      wrap,
      grow,
      shrink,
      basis,
      align,
      spacing,
      spaceAfter,
    };

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Stack desktop={desktop}>
                  <InputField type="password" label="Password" help="You need some help!" />
                  <Button>Sign In</Button>
                </Stack>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Nested example", () => ({
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Stack spacing="condensed" direction="column" align="start">
                <Stack spacing="condensed" direction="row">
                  <Text weight="bold">email@gmail.com</Text>
                  <Edit size="small" color="success" />
                </Stack>
                <Stack direction="row" spaceAfter="large" align="end">
                  <InputField type="password" label="Password" error="You need some help!" />
                  <Button>Sign In</Button>
                </Stack>
                <Text size="small">
                  <TextLink type="secondary">Forgot password?</TextLink>
                </Text>
              </Stack>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Playground", () => {
    const inline = boolean("Inline", false);
    const direction = select("Direction", [undefined, ...Object.values(DIRECTIONS)]);
    const wrap = boolean("Wrap", false);
    const grow = boolean("Grow", true);
    const shrink = boolean("Shrink", false);
    const basis = text("Basis", "auto");
    const align = select("Align", [undefined, ...Object.values(ALIGNS)]);
    const spacing = select("Spacing", [undefined, ...Object.values(SPACINGS)]);
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
    const desktop = object("Desktop", {
      inline: false,
      direction: DIRECTIONS.ROW,
      wrap: false,
      grow: false,
      shrink: false,
      basis: "auto",
      align: ALIGNS.END,
      spacing: SPACINGS.CONDENSED,
      spaceAfter: SPACINGS.COMFY,
    });

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Stack
                  direction={direction}
                  align={align}
                  wrap={wrap}
                  grow={grow}
                  basis={basis}
                  inline={inline}
                  shrink={shrink}
                  spacing={spacing}
                  spaceAfter={spaceAfter}
                  desktop={desktop}
                >
                  <Button type="secondary">Sign In</Button>
                  <Button type="facebook">Sign In</Button>
                  <Button>Sign In</Button>
                </Stack>
              ),
            },
          ],
        },
      ],
    };
  });
