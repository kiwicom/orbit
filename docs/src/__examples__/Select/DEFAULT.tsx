import React from "react";
import { Select, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [country, setCountry] = React.useState("");
    return (
      <OrbitProvider theme={defaultTheme} useId={React.useId}>
        <Select
          value={country}
          placeholder="Choose your country"
          options={[
            { label: "Algeria", value: "dz" },
            { label: "Bolivia", value: "bo" },
            { label: "Croatia", value: "hr" },
            { label: "Indonesia", value: "id" },
            { label: "Mexico", value: "mx" },
          ]}
          label="Nationality"
          onChange={event => setCountry(event.currentTarget.value)}
        />
      </OrbitProvider>
    );
  },
  exampleKnobs: [
    {
      component: "Select",
      knobs: [
        { name: "label", type: "text", defaultValue: "Nationality" },
        { name: "inlineLabel", type: "boolean", defaultValue: false },
        { name: "value", type: "text", defaultValue: "" },
        { name: "error", type: "text", defaultValue: "" },
        { name: "help", type: "text", defaultValue: "" },
        { name: "required", type: "boolean", defaultValue: false },
        { name: "placeholder", type: "text", defaultValue: "Choose your country" },
        { name: "disabled", type: "boolean", defaultValue: false },
      ],
    },
  ],
};
