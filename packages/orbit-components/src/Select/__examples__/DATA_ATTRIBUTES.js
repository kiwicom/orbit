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
        dataAttrs={{ "data-recording-ignore": true }}
      />
    );
  },
  info: {
    title: "Data attributes",
    description:
      "If you need to pass data attributes to the select (such as if you need to exclude the selection from any recording to protect privacy), use the dataAttrs prop.",
  },
};
