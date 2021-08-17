import React from "react";
import {
  Heading,
  Stack,
  List,
  InputStepper,
  ListItem,
  Text,
  TextLink,
} from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [actions, setActions] = React.useState([]);
    const [currentValue, setCurrentValue] = React.useState(2);
    const addAction = action => {
      setActions(actions.concat(action));
    };
    return (
      <Stack direction="column">
        <Stack spacing="small">
          <Stack direction="column">
            <Heading type="title3" as="h3">
              onChange
            </Heading>
            <Text>For getting the current value.</Text>
          </Stack>
          <div style={{ maxWidth: "11em" }}>
            <InputStepper
              onChange={value => setCurrentValue(value)}
              label="Travelers"
              defaultValue={2}
              maxValue={10}
              minValue={1}
              titleIncrement="Add a traveler"
              titleDecrement="Remove a traveler"
            />
          </div>
          <Text>The current value is: {currentValue}</Text>
        </Stack>
        <Stack direction="column">
          <Heading type="title3" as="h3">
            All callbacks
          </Heading>
          <div style={{ maxWidth: "11em" }}>
            <InputStepper
              onBlur={() => addAction("Blurred")}
              onChange={() => addAction("Changed")}
              onFocus={() => addAction("Focused")}
              label="Travelers"
              defaultValue={2}
              maxValue={10}
              minValue={1}
              titleIncrement="Add a traveler"
              titleDecrement="Remove a traveler"
            />
          </div>
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
      </Stack>
    );
  },
  info: {
    title: "Callbacks",
    description:
      "If you want to take actions on user interaction, use one of the callbacks available for input steppers.",
  },
};
