import * as React from "react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import * as Icons from "../icons";

import Switch from ".";

const getIcon = (source: string | null) => source && Icons[source];

export default {
  title: "Switch",
};

export const Default = ({ checked }) => {
  return <Switch onChange={action("onChange")} checked={checked} />;
};

Default.story = {
  name: "Default Switch",
};

Default.args = {
  checked: true,
};

export const CustomIcon = ({ checked, icon }) => {
  const Icon = getIcon(icon);
  return <Switch onChange={action("onChange")} checked={checked} icon={Icon && <Icon />} />;
};

CustomIcon.story = {
  name: "Custom icon",
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

CustomIcon.args = {
  checked: true,
  icon: "Lock",
};

CustomIcon.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({ checked, dataTest, icon, disabled }) => {
  const Icon = getIcon(icon);

  return (
    <Switch
      onChange={action("onChange")}
      checked={checked}
      disabled={disabled}
      dataTest={dataTest}
      icon={Icon && <Icon />}
    />
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  checked: false,
  dataTest: "",
  icon: "Lock",
  disabled: false,
};

Playground.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Rtl = ({ checked }) => {
  return (
    <RenderInRtl>
      <Switch onChange={action("onChange")} checked={checked} />
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

Rtl.args = {
  checked: true,
};
