import React from "react";
import { Textarea } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Textarea
      label="Your feedback"
      placeholder="What I liked about booking with Kiwi.com was ..."
    />
  ),
  info: {
    title: "Default textarea",
    description:
      "By default, the text area will be a normal-sized space for text that can be resized vertically.",
  },
};
