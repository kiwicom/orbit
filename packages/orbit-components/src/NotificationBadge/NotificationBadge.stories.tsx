import * as React from "react";

import { TYPE_OPTIONS } from "../Badge/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import * as Icons from "../icons";

import NotificationBadge from ".";

const getIcon = (source: string | null) => source && Icons[source];

export default {
  title: "NotificationBadge",
};

export const Default = ({ content, icon }) => {
  const Icon = getIcon(icon);
  return <NotificationBadge icon={Icon && <Icon />}>{content}</NotificationBadge>;
};

Default.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Default.args = {
  content: "10",
  icon: "null",
};

Default.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Neutral = ({ content }) => {
  return <NotificationBadge type={TYPE_OPTIONS.NEUTRAL}>{content}</NotificationBadge>;
};

Neutral.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Neutral.args = {
  content: "10",
};

export const Info = ({ content }) => {
  return <NotificationBadge type={TYPE_OPTIONS.INFO}>{content}</NotificationBadge>;
};

Info.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Info.args = {
  content: "10",
};

export const InfoSubtle = ({ content }) => {
  return <NotificationBadge type={TYPE_OPTIONS.INFO_SUBTLE}>{content}</NotificationBadge>;
};

InfoSubtle.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

InfoSubtle.args = {
  content: "10",
};

export const Success = ({ content }) => {
  return <NotificationBadge type={TYPE_OPTIONS.SUCCESS}>{content}</NotificationBadge>;
};

Success.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Success.args = {
  content: "10",
};

export const Warning = ({ content }) => {
  return <NotificationBadge type={TYPE_OPTIONS.WARNING}>{content}</NotificationBadge>;
};

Warning.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Warning.args = {
  content: "10",
};

export const Critical = ({ content }) => {
  return <NotificationBadge type={TYPE_OPTIONS.CRITICAL}>{content}</NotificationBadge>;
};

Critical.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Critical.args = {
  content: "10",
};

export const CriticalSubtle = ({ content }) => {
  return <NotificationBadge type={TYPE_OPTIONS.CRITICAL_SUBTLE}>{content}</NotificationBadge>;
};

CriticalSubtle.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

CriticalSubtle.args = {
  content: "10",
};

export const Dark = ({ content }) => {
  return <NotificationBadge type={TYPE_OPTIONS.DARK}>{content}</NotificationBadge>;
};

Dark.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Dark.args = {
  content: "10",
};

export const White = ({ content }) => {
  return (
    <div style={{ backgroundColor: "#46515e", padding: "10px" }}>
      <NotificationBadge type={TYPE_OPTIONS.WHITE}>{content}</NotificationBadge>
    </div>
  );
};

White.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

White.args = {
  content: "10",
};

export const Playground = ({ content, type, icon, dataTest, ariaLabel }) => {
  const Icon = getIcon(icon);

  return (
    <NotificationBadge
      type={type}
      dataTest={dataTest}
      ariaLabel={ariaLabel}
      icon={Icon && <Icon />}
    >
      {content}
    </NotificationBadge>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  content: "10",
  type: TYPE_OPTIONS.INFO,
  dataTest: "test",
  ariaLabel: "additional information for screen readers",
  icon: "Airplane",
};

Playground.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Accessibility = ({ content, ariaLabel }) => {
  return (
    <NotificationBadge type="info" ariaLabel={ariaLabel}>
      {content}
    </NotificationBadge>
  );
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

Accessibility.args = {
  content: "10",
  ariaLabel: "additional information for screen readers",
};

export const Rtl = () => (
  <RenderInRtl>
    <NotificationBadge type="info">10</NotificationBadge>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
