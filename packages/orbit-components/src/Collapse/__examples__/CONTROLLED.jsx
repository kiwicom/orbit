// @flow
import * as React from "react";

import Button from "../../Button";
import Collapse from "../index";
import Stack from "../../Stack";
import Slider from "../../Slider";

export default {
  Example: (): React.Node => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
      <Stack>
        <Button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Close" : "Open"} collapse
        </Button>
        <Collapse expanded={collapsed} label="Duration" onClick={() => setCollapsed(!collapsed)}>
          <Slider label="Travel time" defaultValue={[0, 5]} maxValue={24} minValue={0} />
        </Collapse>
      </Stack>
    );
  },
  info: {
    title: "Controlled component",
    description:
      "When passed the expanded prop, the collapse becomes a controlled component. You can then control the state using the onClick prop on the collapse or any other action.",
  },
};
