import React from "react";
import { ChoiceGroup, Checkbox, Radio, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [checked, setChecked] = React.useState({ plane: false, train: false, auto: false });
    const [radio, setRadio] = React.useState("");
    return (
      <Stack>
        <ChoiceGroup
          label="Transport to search"
          onChange={event => {
            const { name } = event.currentTarget;
            setChecked(prevState => ({ ...prevState, [name]: !checked[name] }));
          }}
        >
          <Checkbox name="plane" label="Planes" checked={checked.plane} />
          <Checkbox name="train" label="Trains" checked={checked.train} />
          <Checkbox name="auto" label="Automobiles" checked={checked.auto} />
        </ChoiceGroup>
        <ChoiceGroup label="Number of stops" onChange={event => setRadio(event.currentTarget.name)}>
          <Radio name="non" label="Nonstop" checked={radio === "non" || false} />
          <Radio name="1stop" label="Up to 1 stop" checked={radio === "1stop" || false} />
          <Radio name="2stop" label="Up to 2 stops" checked={radio === "2stop" || false} />
        </ChoiceGroup>
      </Stack>
    );
  },
  exampleKnobs: [
    {
      component: "ChoiceGroup",
      knobs: [
        { name: "error", type: "text", defaultValue: "" },
        { name: "filter", type: "boolean", defaultValue: false },
        { name: "label", type: "text", defaultValue: "Transport to search" },
        { name: "labelSize", type: "select", options: ["normal", "large"], defaultValue: "normal" },
      ],
    },
  ],
};
