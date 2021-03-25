import * as React from "react";
import { Textarea } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Textarea
      help="Tell us what you liked about your booking experience and what could change."
      label="Your feedback"
      placeholder="What I liked about booking with Kiwi.com was ..."
    />
  ),
  info: {
    title: "Help",
    description:
      "Help text can guide users to entering proper data. Note that an error message will override the help text.",
  },
};
