import React from "react";
import { Textarea } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <Textarea
        error="Please enter some feedback"
        value=""
        help="Tell us what you liked about your booking experience and what could change."
        label="Your feedback"
        placeholder="What I liked about booking with Kiwi.com was ..."
      />
    );
  },
  exampleVariants: [
    {
      name: "Error",
      code: `() => (
      <Textarea
      error="Please enter some feedback"
      value=""
      label="Your feedback"
      placeholder="What I liked about booking with Kiwi.com was ..."
    />
    )`,
    },
    {
      name: "Help",
      code: `() => (
      <Textarea
      value=""
      help="Tell us what you liked about your booking experience and what could change."
      label="Your feedback"
      placeholder="What I liked about booking with Kiwi.com was ..."
    />
    )`,
    },
  ],
};
