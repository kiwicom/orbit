import React from "react";
import { InputField, Select, InputGroup } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [month, setMonth] = React.useState("");
    const [year, setYear] = React.useState(2000);
    return (
      <InputGroup
        flex={["8 8 15em", "1 1 4em", "2 2 6em"]}
        label="Departure"
        help="Select a month and enter a day and year for your departure."
        error={year < new Date().getFullYear() ? "Enter a year that is not in the past" : ""}
      >
        <Select
          value={month}
          error="This text is not displayed"
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

        <InputField error="This text is not displayed" placeholder="DD" type="number" />
        <InputField
          error="This text is not displayed"
          placeholder="YYYY"
          value={year}
          type="number"
          onChange={event => {
            setYear(parseInt(event.currentTarget.value, 10));
          }}
        />
      </InputGroup>
    );
  },
};
