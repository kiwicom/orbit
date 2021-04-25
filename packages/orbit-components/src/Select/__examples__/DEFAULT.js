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
      />
    );
  },
  info: {
    title: "Default select",
    description:
      "By default, selects offer users choices among listen options with an associated label to guide them.",
  },
};
