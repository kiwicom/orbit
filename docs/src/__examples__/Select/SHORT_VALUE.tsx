import * as React from "react";
import { Select } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [country, setCountry] = React.useState("");
    return (
      <div style={{ width: "80px" }}>
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
          customValueText={country.toUpperCase()}
        />
      </div>
    );
  },
  info: {
    title: "Input field with inline label",
    description:
      "In contexts with less space, use the customValueText prop to provide a shorter value to display.",
  },
};
