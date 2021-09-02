import React from "react";
import { Select, CountryFlag } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [country, setCountry] = React.useState("");
    return (
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
        onChange={event => setCountry(event.currentTarget.value)}
        label="Nationality"
        prefix={<CountryFlag code={country || "anywhere"} />}
      />
    );
  },
  info: {
    title: "Prefixes",
    description: "If you need additional context, you can add it as a prefix.",
  },
};
