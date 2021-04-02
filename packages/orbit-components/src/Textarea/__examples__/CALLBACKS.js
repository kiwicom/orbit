// @flow
import * as React from "react";

import Textarea from "../index";
import List from "../../List";
import ListItem from "../../List/ListItem";
import Stack from "../../Stack";
import Text from "../../Text";
import TextLink from "../../TextLink";

export default {
  Example: (): React.Node => {
    const [actions, setActions] = React.useState([]);
    const addAction = action => {
      setActions([...actions, action]);
    };
    return (
      <Stack direction="column">
        <Textarea
          label="Your feedback"
          placeholder="What I liked about booking with Kiwi.com was ..."
          onBlur={() => addAction("Blurred")}
          onChange={() => addAction("Changed")}
          onFocus={() => addAction("Focused")}
        />
        <Text>
          What has happened?{" "}
          <TextLink type="secondary" onClick={() => setActions([])}>
            Clear list
          </TextLink>
        </Text>
        {actions && (
          <List>
            {actions.map((action, i) => {
              // eslint-disable-next-line react/no-array-index-key
              return <ListItem key={i}>{action}</ListItem>;
            })}
          </List>
        )}
      </Stack>
    );
  },
  info: {
    title: "Callbacks",
    description:
      "If you want to take actions on user interaction, use one of the available callbacks.",
  },
};
