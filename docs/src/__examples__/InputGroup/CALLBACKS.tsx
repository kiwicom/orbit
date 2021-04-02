import * as React from "react";
import {
  InputGroup,
  Stack,
  Text,
  List,
  ListItem,
  TextLink,
  InputField,
} from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [month, setMonth] = React.useState("");
    const [year, setYear] = React.useState("");
    const [month2, setMonth2] = React.useState("");
    const [year2, setYear2] = React.useState("");
    const [actions, setActions] = React.useState([]);

    const addAction = action => {
      setActions(actions.concat(action));
    };

    const handleGroupChange = event => {
      const { name, value } = event.currentTarget;

      if (name === "month") {
        setMonth(value);
      } else {
        setYear(value);
      }
      addAction(`The ${name} in the first group changed`);
    };
    return (
      <Stack>
        <InputGroup
          flex={["1 1 4em"]}
          label="Expiration date"
          onChange={handleGroupChange}
          onFocus={event => addAction(`Focused on ${event.currentTarget.name} in first group`)}
          onBlur={event => addAction(`Unfocused on ${event.currentTarget.name} in first group`)}
        >
          <InputField
            placeholder="MM"
            name="month"
            value={month}
            maxValue={12}
            minValue={1}
            type="number"
          />
          <InputField placeholder="YYYY" name="year" value={year} minValue={2020} type="number" />
        </InputGroup>
        <InputGroup flex={["1 1 4em"]} label="Expiration date">
          <InputField
            placeholder="MM"
            value={month2}
            maxValue={12}
            minValue={1}
            onChange={event => {
              setMonth2(event.currentTarget.value);
              addAction("The month in the second group changed");
            }}
            onFocus={() => addAction("Focused on month in second group")}
            onBlur={() => addAction("Unfocused on month in second group")}
            type="number"
          />
          <InputField
            placeholder="YYYY"
            value={year2}
            minValue={2020}
            onChange={event => {
              setYear2(event.currentTarget.value);
              addAction("The year in the second group changed");
            }}
            onFocus={() => addAction("Focused on year in second group")}
            onBlur={() => addAction("Unfocused on year in second group")}
            type="number"
          />
        </InputGroup>
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
      "If you want to handle changes for the group as a whole (such as to validate dates in one function), set callbacks (onChange, onFocus, and/or onBlur) for the group as a whole. You can also use callbacks for each field separately.",
  },
};
