// @flow
import * as React from "react";

import ChoiceGroup from "../index";
import Checkbox from "../../Checkbox";
import Radio from "../../Radio";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => {
    const [checked, setChecked] = React.useState({ plane: false, train: false, auto: false });
    const [radio, setRadio] = React.useState("");
    return (
      <Stack>
        <ChoiceGroup
          label="Transport to search"
          filter
          onChange={event => {
            const { name } = event.target;
            setChecked(prevState => ({ ...prevState, [name]: !checked[name] }));
          }}
        >
          <Checkbox name="plane" label="Planes" checked={checked.plane} />
          <Checkbox name="train" label="Trains" checked={checked.train} />
          <Checkbox name="auto" label="Automobiles" checked={checked.auto} />
        </ChoiceGroup>
        <ChoiceGroup filter label="Number of stops" onChange={event => setRadio(event.target.name)}>
          <Radio name="non" label="Nonstop" checked={radio === "non" || false} />
          <Radio name="1stop" label="Up to 1 stop" checked={radio === "1stop" || false} />
          <Radio name="2stop" label="Up to 2 stops" checked={radio === "2stop" || false} />
        </ChoiceGroup>
      </Stack>
    );
  },
  info: {
    title: "Choice groups as filters",
    description:
      "When used as filters, choice groups change their children by adding a background to hover and adding additional padding.",
  },
};
