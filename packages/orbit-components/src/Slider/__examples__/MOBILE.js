// @flow
import * as React from "react";

import Button from "../../Button";
import Popover from "../../Popover";
import Slider from "../index";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Popover
      content={<Slider label="Volume" minValue={0} maxValue={100} defaultValue={33} />}
      width="320px"
    >
      <Button iconRight={<Icons.ChevronDown ariaLabel="Open slider" />}>Volume</Button>
    </Popover>
  ),
  info: {
    title: "Sliders on mobile devices",
    description: "Whenever you use a slider for a mobile device, wrap it in a Popover.",
  },
};
