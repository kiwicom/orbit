import * as React from "react";

import IconList from "./IconList";
import * as Icons from "../icons";
import { ICON_SIZES, ICON_COLORS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

export default {
  title: "Icon",
};

export const Default = ({ size, color, source, dataTest, ariaLabel, ariaHidden }) => {
  const Icon = Icons[source];
  return (
    <Icon
      size={size}
      color={color}
      dataTest={dataTest}
      ariaLabel={ariaLabel}
      ariaHidden={ariaHidden}
    />
  );
};

Default.story = {
  name: "Default",
  parameters: {
    info: "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Default.args = {
  size: ICON_SIZES.MEDIUM,
  color: ICON_COLORS.PRIMARY,
  source: "Airplane",
  dataTest: "test",
  ariaLabel: "label",
  ariaHidden: true,
};

Default.argTypes = {
  size: {
    options: Object.values(ICON_SIZES),
    control: {
      type: "select",
    },
  },
  color: {
    options: Object.values(ICON_COLORS),
    control: {
      type: "select",
    },
  },
  source: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const CustomColor = ({ size, customColor, source }) => {
  const Icon = Icons[source];

  return <Icon size={size} customColor={customColor} />;
};

CustomColor.story = {
  name: "Custom Color",
  parameters: {
    info: "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

CustomColor.args = {
  size: ICON_SIZES.MEDIUM,
  customColor: "#ABCDEF",
  source: "Airplane",
};

CustomColor.argTypes = {
  size: {
    options: Object.values(ICON_SIZES),
    control: {
      type: "select",
    },
  },
  source: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const ReversedOnRtl = ({ source }) => {
  const Icon = Icons[source];
  return (
    <RenderInRtl>
      <Icon reverseOnRtl />
    </RenderInRtl>
  );
};

ReversedOnRtl.story = {
  name: "Reversed on RTL",
  parameters: {
    info: "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

ReversedOnRtl.args = {
  source: "ChevronBackward",
};

ReversedOnRtl.argTypes = {
  source: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const ListOfAllIcons = () => <IconList />;

ListOfAllIcons.story = {
  name: "List of all icons",
};
