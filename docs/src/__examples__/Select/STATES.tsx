import React from "react";
import { Select, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <OrbitProvider theme={defaultTheme}>
        <Select
          value=""
          placeholder="Choose your country"
          options={[
            { label: "Algeria", value: "dz" },
            { label: "Bolivia", value: "bo" },
            { label: "Croatia", value: "hr" },
            { label: "Indonesia", value: "id" },
            { label: "Mexico", value: "mx" },
          ]}
          label="Nationality"
          error="Please select a country"
        />
      </OrbitProvider>
    );
  },
  exampleVariants: [
    {
      name: "Error",
      code: `() => (
      <Select
        value=""
        placeholder="Choose your country"
        options={[
          { label: "Algeria", value: "dz" },
          { label: "Bolivia", value: "bo" },
          { label: "Croatia", value: "hr" },
          { label: "Indonesia", value: "id" },
          { label: "Mexico", value: "mx" },
        ]}
        label="Nationality"
        error="Please select a country"
      />
    )`,
    },
    {
      name: "Help",
      code: `() => (
      <Select
        value="Croatia"
        placeholder="Choose your country"
        options={[
          { label: "Algeria", value: "dz" },
          { label: "Bolivia", value: "bo" },
          { label: "Croatia", value: "hr" },
          { label: "Indonesia", value: "id" },
          { label: "Mexico", value: "mx" },
        ]}
        label="Nationality"
        help="Choose the country where you hold a passport."
      />
    )`,
    },
  ],
};
