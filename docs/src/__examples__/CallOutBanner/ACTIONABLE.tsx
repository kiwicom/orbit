import React from "react";
import { CallOutBanner, Illustration } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <CallOutBanner
      title="Accommodation in Warsaw"
      description="Select the perfect place to rest during your stay in Warsaw."
      illustration={<Illustration name="Accommodation" />}
      onClick={() => {
        window.open("https://rooms.kiwi.com", "_blank");
      }}
    />
  ),
  info: {
    title: "Actionable callout banner",
    description:
      "To make the entire callout banner actionable and automatically add the appropriate elevation, use the onClick prop. This will also make the callout banner focusable by adding a tab index.",
  },
};
