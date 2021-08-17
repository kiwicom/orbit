import React from "react";
import { Button, Stack, Collapse, Slider } from "@kiwicom/orbit-components";

export default {
  Example: () => {
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
