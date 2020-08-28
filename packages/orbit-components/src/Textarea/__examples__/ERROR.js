// @flow
import * as React from "react";

import Textarea from "../index";

export default {
  Example: () => {
    const [value, setValue] = React.useState("");
    return (
      <Textarea
        error={value ? "" : "Please enter some feedback"}
        value={value}
        onChange={event => setValue(event.target.value)}
        help="Tell us what you liked about your booking experience and what could change."
        label="Your feedback"
        placeholder="What I liked about booking with Kiwi.com was ..."
      />
    );
  },
  info: {
    title: "Error messages",
    description:
      "Include error messages when validation isn't passed, either on change in focus or form submission. Note that an error message will override any help text.",
  },
};
