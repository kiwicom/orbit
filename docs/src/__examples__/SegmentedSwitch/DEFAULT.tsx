import React from "react";
import { SegmentedSwitch, Stack, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [gender, setGender] = React.useState("");

    return (
      <Stack flex direction="column">
        <SegmentedSwitch
          label="Gender"
          onChange={ev => setGender(ev.currentTarget.value)}
          options={[
            { label: "Female", value: "Female" },
            { label: "Male", value: "Male" },
          ]}
        />
        <Text size="large">{gender}</Text>
      </Stack>
    );
  },
  exampleKnobs: [
    {
      component: "SegmentedSwitch",
      knobs: [
        { name: "showTooltip", type: "boolean", defaultValue: false },
        {
          name: "maxWidth",
          type: "text",
          defaultValue: "",
        },
        {
          name: "label",
          type: "text",
          defaultValue: "",
        },
        {
          name: "help",
          type: "text",
          defaultValue: "",
        },
        {
          name: "error",
          type: "text",
          defaultValue: "",
        },
      ],
    },
  ],
};
