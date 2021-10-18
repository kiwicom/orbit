// @flow
import * as React from "react";

import Select from "../index";

export default {
  Example: (): React.Node => {
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
        label="Nationality"
        onChange={event => setCountry(event.target.value)}
        help="Choose the country where you hold a passport."
      />
    );
  },
  info: {
    title: "Help",
    description:
      "Help text can guide users to making the right selection. Note that an error message will override the help text.",
  },
};
