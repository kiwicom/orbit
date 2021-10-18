// @flow
import * as React from "react";

import ChoiceGroup from "../index";
import Checkbox from "../../Checkbox";
import Radio from "../../Radio";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => {
    const [checked, setChecked] = React.useState({ plane: false, train: true, auto: true });
    const [radio, setRadio] = React.useState("non");
    return (
      <Stack>
        <ChoiceGroup
          label="Transport to search"
          error={checked.auto ? "No results for automobiles" : ""}
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
          label="Number of stops"
          error={radio === "non" ? "No results for nonstop journeys" : ""}
          onChange={event => setRadio(event.target.name)}
        >
          <Radio name="non" label="Nonstop" checked={radio === "non" || false} />
          <Radio name="1stop" label="Up to 1 stop" checked={radio === "1stop" || false} />
          <Radio name="2stop" label="Up to 2 stops" checked={radio === "2stop" || false} />
        </ChoiceGroup>
      </Stack>
    );
  },
  info: {
    title: "Errors",
    description:
      "When passed an error string, choice groups will display the string for the whole group and turn empty choices red. Note that this overrides any errors on individual choices.",
  },
};
