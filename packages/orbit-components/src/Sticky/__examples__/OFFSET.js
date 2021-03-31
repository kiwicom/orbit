// @flow
import * as React from "react";

import Sticky from "../index";
import Text from "../../Text";

export default {
  Example: (): React.Element<"div"> => (
    <div style={{ height: "800px" }}>
      <Sticky>
        <Text>Scroll down and see this text at the top of the screen.</Text>
      </Sticky>
      <Sticky offset={40}>
        <Text>Scroll down and see this text 40 px below the top of the screen.</Text>
      </Sticky>
      <Sticky offset={120}>
        <Text>Scroll down and see this text 120 px below the top of the screen.</Text>
      </Sticky>
    </div>
  ),
  info: {
    title: "Offset",
    description:
      "To add space from top of the screen to the Sticky component, use the <code>offset</code> prop.",
  },
};
