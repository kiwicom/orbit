// @flow
import * as React from "react";

import ChoiceGroup from "../index";
import Checkbox from "../../Checkbox";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => {
    const [checked, setChecked] = React.useState({ plane: false, train: false, auto: false });
    return (
      <Stack>
        <ChoiceGroup
          label="Transport to search"
          labelAs="h4"
          onChange={event => {
            const { name } = event.target;
            setChecked(prevState => ({ ...prevState, [name]: !checked[name] }));
          }}
        >
          <Checkbox name="plane" label="Planes" checked={checked.plane} />
          <Checkbox name="train" label="Trains" checked={checked.train} />
          <Checkbox name="auto" label="Automobiles" checked={checked.auto} />
        </ChoiceGroup>
        <ChoiceGroup
          label="Transport to search"
          labelSize="large"
          labelAs="h5"
          onChange={event => {
            const { name } = event.target;
            setChecked(prevState => ({ ...prevState, [name]: !checked[name] }));
          }}
        >
          <Checkbox name="plane" label="Planes" checked={checked.plane} />
          <Checkbox name="train" label="Trains" checked={checked.train} />
          <Checkbox name="auto" label="Automobiles" checked={checked.auto} />
        </ChoiceGroup>
      </Stack>
    );
  },
  info: {
    title: "Labels",
    description:
      "Labels for choice groups come in two sizes: normal (the default) and large. You can also control what element the label will render as. The label element will always be connected to the group using aria-labelledby.",
  },
};
