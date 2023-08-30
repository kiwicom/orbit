import React from "react";
import {
  InputField,
  Select,
  InputGroup,
  OrbitProvider,
  defaultTheme,
} from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <OrbitProvider theme={defaultTheme} useId={React.useId}>
        <InputGroup flex={["8 8 15em", "1 1 4em", "2 2 6em"]} label="Departure">
          <Select
            value="May"
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
          />

          <InputField placeholder="DD" type="number" />
          <InputField placeholder="YYYY" value="2020" type="number" />
        </InputGroup>
      </OrbitProvider>
    );
  },
  exampleVariants: [
    {
      name: "Error",
      code: `
      () => (
      <InputGroup
        flex={["8 8 15em", "1 1 4em", "2 2 6em"]}
        label="Departure"
        error="Enter a year that is not in the past"
      >
        <Select
          placeholder="Month"
          value="May"
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
        />

        <InputField placeholder="DD" type="number" />
        <InputField
          placeholder="YYYY"
          value="2020"
          type="number"
        />
      </InputGroup>
    );`,
    },
    {
      name: "Help",
      code: `
      () => (
      <InputGroup
        flex={["8 8 15em", "1 1 4em", "2 2 6em"]}
        label="Departure"
        help="Select a month and enter a day and year for your departure"
      >
        <Select
          placeholder="Month"
          value="May"
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
        />

        <InputField placeholder="DD" type="number" />
        <InputField
          placeholder="YYYY"
          value="2020"
          type="number"
        />
      </InputGroup>
    );`,
    },
  ],
};
