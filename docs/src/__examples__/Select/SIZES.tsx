import * as React from "react";
import { Select, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [country, setCountry] = React.useState("");
    const [countrySmall, setCountrySmall] = React.useState("");
    return (
      <Stack direction="column">
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
        <Select
          value={countrySmall}
          placeholder="Choose your country"
          options={[
            { label: "Algeria", value: "dz" },
            { label: "Bolivia", value: "bo" },
            { label: "Croatia", value: "hr" },
            { label: "Indonesia", value: "id" },
            { label: "Mexico", value: "mx" },
          ]}
          label="Nationality"
          onChange={event => setCountrySmall(event.currentTarget.value)}
          size="small"
        />
      </Stack>
    );
  },
  info: {
    title: "Sizes",
    description: "Selects can be either normal sized or small.",
  },
};
