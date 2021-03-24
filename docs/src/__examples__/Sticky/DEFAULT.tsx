import * as React from "react";
import { Sticky, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <div style={{ height: "800px" }}>
      <Sticky>
        <Text>Scroll down and see this text stick to the top of the screen.</Text>
      </Sticky>
    </div>
  ),
  info: {
    title: "Default sticky",
    description:
      "By default, sticky components elevate their children and keep them at the top of the screen.",
  },
};
