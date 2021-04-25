// @flow
import * as React from "react";

import Select from "../index";

export default {
  Example: (): React.Node => {
    const ref: {| current: React.ElementRef<any> |} = React.useRef(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
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
        ref={ref}
      />
    );
  },
  info: {
    title: "References",
    description: "For actions like automatically focusing on an input field, use the ref prop.",
  },
};
