// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { POSITIONS } from "./consts";
import Stack from "../Stack";
import Text from "../Text";
import List from "../List";
import ListItem from "../List/ListItem";
import Button from "../Button";

import Popover from "./index";

setAddon(chaptersAddon);

storiesOf("Popover", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const content = text("content", "Write your text here.");
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Popover content={content}>
                  <Button>Button</Button>
                </Popover>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Prefered Position", () => {
    const content = text("content", "Write your text here.");
    const preferredPosition = select("preferredPosition", Object.values(POSITIONS), POSITIONS.TOP);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Popover content={content} preferredPosition={preferredPosition}>
                  <Button>Button</Button>
                </Popover>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With stack", () => {
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Popover
                  content={
                    <Stack>
                      <Text>More information</Text>
                      <List>
                        <ListItem>Additional information</ListItem>
                        <ListItem>Additional information</ListItem>
                        <ListItem>Additional information</ListItem>
                      </List>
                      <Button>Action</Button>
                    </Stack>
                  }
                  preferredPosition="top"
                >
                  <Button>Button</Button>
                </Popover>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const content = text("content", "Write your text here.");
    const dataTest = text("dataTest", "test");
    const preferredPosition = select(
      "preferredPosition",
      Object.values(POSITIONS),
      POSITIONS.BOTTOM,
    );

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Popover
                  dataTest={dataTest}
                  content={content}
                  preferredPosition={preferredPosition}
                >
                  <Button>Button</Button>
                </Popover>
              ),
            },
          ],
        },
      ],
    };
  });
