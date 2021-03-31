// @flow
import * as React from "react";

import InputField from "../index";
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
        <InputField
          label="Age"
          placeholder="42"
          type="number"
          onBlur={() => addAction("Blurred")}
          onChange={() => addAction("Changed")}
          onFocus={() => addAction("Focused")}
          onKeyDown={() => addAction("Key down")}
          onKeyUp={() => addAction("Key up")}
          onMouseDown={() => addAction("Mouse down")}
          onMouseUp={() => addAction("Mouse up")}
          onSelect={() => addAction("Selected")}
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
      "If you want to take actions on user interaction, use one of the callbacks available for input fields.",
  },
};
