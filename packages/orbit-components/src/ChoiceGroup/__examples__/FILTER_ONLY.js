// @flow
import * as React from "react";

import ChoiceGroup from "../index";
import Checkbox from "../../Checkbox";
import List from "../../List";
import ListItem from "../../List/ListItem";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => {
    const defaultItems: Array<React.ElementRef<any>> = [
      <Icons.Airplane ariaLabel="Planes" />,
      <Icons.Train ariaLabel="Trains" />,
      <Icons.Airplane ariaLabel="Planes" />,
      <Icons.Car ariaLabel="Automobiles" />,
      <Icons.Car ariaLabel="Automobiles" />,
      <Icons.Train ariaLabel="Trains" />,
    ];
    const [checked, setChecked] = React.useState({
      Planes: true,
      Trains: true,
      Automobiles: true,
    });
    const [items, setItems] = React.useState(defaultItems);
    return (
      <Stack direction="row">
        <ChoiceGroup
          label="Transport to search"
          filter
          onChange={event => {
            const { name } = event.target;
            const newChecked = { ...checked, [name]: !checked[name] };
            setChecked(newChecked);
            const newItems = defaultItems.filter(item => {
              const array = [];
              if (newChecked.Planes) {
                array.push("Planes");
              }
              if (newChecked.Trains) {
                array.push("Trains");
              }
              if (newChecked.Automobiles) {
                array.push("Automobiles");
              }
              return array.includes(item.props.ariaLabel);
            });
            setItems(newItems);
          }}
          onOnlySelection={(event: SyntheticEvent<>, { label }: any) => {
            const newItems = defaultItems.filter(item => item.props.ariaLabel === label);
            setItems(newItems);
            const newChecked = {
              Planes: false,
              Trains: false,
              Automobiles: false,
            };
            newChecked[label] = true;
            setChecked(newChecked);
          }}
          onlySelectionText="Only"
        >
          <Checkbox name="Planes" label="Planes" checked={checked.Planes} />
          <Checkbox name="Trains" label="Trains" checked={checked.Trains} />
          <Checkbox name="Automobiles" label="Automobiles" checked={checked.Automobiles} />
        </ChoiceGroup>
        <List>
          {items.map((item, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={key}>{item}</ListItem>
          ))}
        </List>
      </Stack>
    );
  },
  info: {
    title: "Filter only",
    description:
      "Your choice group filters can also give users the option to filter to only a given choice. In this case, use only checkboxes. Use the onOnlySelection prop to create the option and the onlySelectionText prop for what users will see on the right of the choice.",
  },
};
