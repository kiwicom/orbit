import React from "react";
import { InputSelect, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const currencyOptions = [
      {
        title: "Euro",
        value: "EUR",
        group: "Popular",
      },
      {
        title: "US Dollar",
        value: "USD",
        group: "Popular",
      },
      {
        title: "Pound Sterling",
        value: "GBP",
        group: "Popular",
      },
      {
        title: "Australian Dollar",
        value: "AUD",
      },
      {
        title: "Brazilian Real",
        value: "BRL",
      },
      {
        title: "Czech Koruna",
        value: "CZK",
      },
    ];

    return (
      <OrbitProvider theme={defaultTheme}>
        <InputSelect
          placeholder="Search currency"
          options={currencyOptions}
          emptyState="No results found"
          labelClear="Clear value"
        />
      </OrbitProvider>
    );
  },
  exampleKnobs: [
    {
      component: "InputSelect",
      knobs: [
        { name: "showAll", type: "boolean", defaultValue: true },
        { name: "showAllLabel", type: "text", defaultValue: "" },
        { name: "error", type: "text", defaultValue: "" },
        { name: "help", type: "text", defaultValue: "" },
        { name: "label", type: "text", defaultValue: "Select a currency" },
        { name: "disabled", type: "boolean", defaultValue: false },
      ],
    },
  ],
};
