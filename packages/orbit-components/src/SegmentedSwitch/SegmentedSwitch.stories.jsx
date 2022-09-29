// @flow
import * as React from "react";
import { text, number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import SegmentedSwitch from ".";

export default {
  title: "SegmentedSwitch",
};

export const Default = (): React.Node => {
  const label = text("Label", "Gender");
  const help = text("Help", "When Chuck Norris plays dodgeball, the balls dodge him.");
  const error = text("Error", "Chuck Norris makes onions cry.");
  const maxWidth = number("maxWidth", undefined);
  const showTooltip = boolean("showTooltip", false);

  return (
    <SegmentedSwitch
      label={label}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      showTooltip={showTooltip}
      help={help}
      error={error}
      maxWidth={maxWidth}
      options={[
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
      ]}
    />
  );
};

Default.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};
