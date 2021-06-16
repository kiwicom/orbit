import * as React from "react";
import { InputField, InputGroup, Select } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [month, setMonth] = React.useState("");
    return (
      <InputGroup
        flex={["8 8 15em", "1 1 4em", "2 2 6em"]}
        label="Departure"
        help="Select a month and enter a day and year for your departure."
      >
        <Select
          value={month}
          help="This text is not displayed"
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
          help="This text is not displayed"
          placeholder="DD"
          maxValue={31}
          minValue={1}
          type="number"
        />
        <InputField
          help="This text is not displayed"
          placeholder="YYYY"
          minValue={2022}
          type="number"
        />
      </InputGroup>
    );
  },
  info: {
    title: "Input field help",
    description:
      "Help text can guide users to entering proper data. Only help text for the input group is shown, not help for any child. Note that an error message will override the help text.",
  },
};
