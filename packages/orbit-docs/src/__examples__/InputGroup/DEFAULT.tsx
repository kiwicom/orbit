import React from "react";
import { InputGroup, Select, InputField } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [month, setMonth] = React.useState("");
    return (
      <InputGroup flex={["8 8 15em", "1 1 4em", "2 2 6em"]} label="Departure">
        <Select
          value={month}
          label="This text is not displayed"
          placeholder="Month"
          options={[
            {
              label: "January",
              value: "January",
            },
            {
              label: "February",
              value: "February",
            },
            {
              label: "March",
              value: "March",
            },
            {
              label: "April",
              value: "April",
            },
            {
              label: "May",
              value: "May",
            },
            {
              label: "June",
              value: "June",
            },
            {
              label: "July",
              value: "July",
            },
            {
              label: "August",
              value: "August",
            },
            {
              label: "September",
              value: "September",
            },
            {
              label: "October",
              value: "October",
            },
            {
              label: "November",
              value: "November",
            },
            {
              label: "December",
              value: "December",
            },
          ]}
          onChange={event => setMonth(event.currentTarget.value)}
        />

        <InputField
          label="This text is not displayed"
          placeholder="DD"
          maxValue={31}
          minValue={1}
          type="number"
        />
        <InputField
          label="This text is not displayed"
          placeholder="YYYY"
          minValue={new Date().getFullYear()}
          type="number"
        />
      </InputGroup>
    );
  },
  exampleKnobs: [
    {
      component: "InputGroup",
      knobs: [
        { name: "error", type: "text", defaultValue: "" },
        { name: "help", type: "text", defaultValue: "" },
        { name: "label", type: "text", defaultValue: "" },
        { name: "disabled", type: "boolean", defaultValue: false },
        { name: "size", type: "select", options: ["small", "normal"], defaultValue: "normal" },
      ],
    },
  ],
};
