import * as React from "react";
import { Button, Popover, Slider } from "@kiwicom/orbit-components";
import { ChevronDown } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Popover
      content={<Slider label="Volume" minValue={0} maxValue={100} defaultValue={33} />}
      width="320px"
    >
      <Button iconRight={<ChevronDown ariaLabel="Open slider" />}>Volume</Button>
    </Popover>
  ),
  info: {
    title: "Sliders on mobile devices",
    description: "Whenever you use a slider for a mobile device, wrap it in a Popover.",
  },
};
