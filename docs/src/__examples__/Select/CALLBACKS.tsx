import * as React from "react";
import { Select, Stack, Text, List, ListItem, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [actions, setActions] = React.useState<string[]>([]);
    const [country, setCountry] = React.useState("");
    const addAction = action => {
      setActions([...actions, action]);
    };
    return (
      <Stack direction="column">
        <Select
          value={country}
          placeholder="Choose your country"
          options={[
            { label: "Algeria", value: "dz" },
            { label: "Bolivia", value: "bo" },
            { label: "Croatia", value: "hr" },
            { label: "Indonesia", value: "id" },
            { label: "Mexico", value: "mx" },
          ]}
          label="Nationality"
          onChange={event => {
            setCountry(event.currentTarget.value);
            addAction("Changed value");
          }}
          onBlur={() => addAction("Blurred")}
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
      "In addition to onChange for changing the value, you can also use onBlur and onFocus to take actions on user interaction.",
  },
};
