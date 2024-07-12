import * as React from "react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";

import SegmentedSwitch from ".";

export default {
  title: "SegmentedSwitch",
};

export const Default = ({ label, help, error, maxWidth, showTooltip }) => {
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

Default.args = {
  label: "Gender",
  help: "When Chuck Norris plays dodgeball, the balls dodge him.",
  error: "Chuck Norris makes onions cry.",
  maxWidth: "20%",
  showTooltip: false,
};

export const Rtl = ({ label, help, error, maxWidth, showTooltip }) => {
  return (
    <RenderInRtl>
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
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
