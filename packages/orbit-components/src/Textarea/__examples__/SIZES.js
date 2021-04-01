// @flow
import * as React from "react";

import Heading from "../../Heading";
import Stack from "../../Stack";
import Text from "../../Text";
import Textarea from "../index";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <Stack direction="column">
        <Heading as="h3" type="title3">
          Size
        </Heading>
        <Text>
          Properties like the amount of padding and the line height can be either small or
          normal-sized (the default).
        </Text>
        <Textarea
          size="small"
          label="Your feedback"
          placeholder="What I liked about booking with Kiwi.com was ..."
        />
        <Textarea
          label="Your feedback"
          placeholder="What I liked about booking with Kiwi.com was ..."
        />
      </Stack>
      <Stack direction="column">
        <Heading as="h3" type="title3">
          Rows
        </Heading>
        <Text>
          You can set the number of rows that are initially visible. If they enter more text, users
          can still scroll within the text area to see more rows.
        </Text>
        <Textarea
          rows={1}
          label="Your feedback"
          placeholder="What I liked about booking with Kiwi.com was ..."
        />
        <Textarea
          rows={5}
          label="Your feedback"
          placeholder="What I liked about booking with Kiwi.com was ..."
        />
        <Stack direction="column">
          <Heading as="h3" type="title3">
            Full height
          </Heading>
          <Text>
            To make the text area take up the entire height of its parent, use the{" "}
            <code>fullHeight</code> prop. This overrides the <code>rows</code> and{" "}
            <code>resize</code> options.
          </Text>
          <div style={{ height: "180px", width: "100%" }}>
            <Textarea
              label="Your feedback"
              placeholder="What I liked about booking with Kiwi.com was ..."
            />
          </div>
          <div style={{ height: "180px", width: "100%" }}>
            <Textarea
              fullHeight
              label="Your feedback"
              placeholder="What I liked about booking with Kiwi.com was ..."
            />
          </div>
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description:
      "You can change the visual size of the text area through its size (padding) or rows. Neither changes how much text users can enter (controlled through max length).",
  },
};
