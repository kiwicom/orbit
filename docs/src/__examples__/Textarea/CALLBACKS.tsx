import * as React from "react";
import { Stack, Text, Textarea, List, ListItem, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [actions, setActions] = React.useState<string[]>([]);
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
