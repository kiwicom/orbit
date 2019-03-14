// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select, array } from "@storybook/addon-knobs";

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
  .addWithChapters("Playground", () => {
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <React.Fragment>
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
                    prefferedAnchorPosition="start"
                  >
                    <Button block={false} type="primary" size="small">
                      Button
                    </Button>
                  </Popover>
                  <Popover
                    content="ContentTest"
                    preferredPosition="bottom"
                    prefferedAnchorPosition="end"
                  >
                    <Button block type="primary" size="small">
                      Button
                    </Button>
                  </Popover>
                </React.Fragment>
              ),
            },
          ],
        },
      ],
    };
  });
