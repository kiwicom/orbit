// @flow
import * as React from "react";

import Illustration from "../../Illustration";
import Select from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => {
    const [country, setCountry] = React.useState("");
    return (
      <Stack direction="column">
        <label htmlFor="nationalities">Nationality</label>
        <Illustration name="Success" />
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
          id="nationalities"
          onChange={event => setCountry(event.target.value)}
        />
      </Stack>
    );
  },
  info: {
    title: "Accessibility",
    description:
      "If you need to separate the label from the input, match the for prop on the label with the id props on the input field. Never leave the input field without a connected label.",
  },
};
