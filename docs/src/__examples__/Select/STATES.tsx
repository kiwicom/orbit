import React from "react";
import { Select } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
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
