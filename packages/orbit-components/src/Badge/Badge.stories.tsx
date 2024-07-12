import React from "react";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Badge from ".";

const getIcon = (source: string | null) => source && Icons[source];

export default {
  title: "Badge",
};

export const Default = ({ content, icon }: { content: string; icon: string }) => {
  const Icon = getIcon(icon);

  return <Badge icon={Icon && <Icon />}>{content}</Badge>;
};

Default.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Default.args = {
  content: "Badge",
  icon: "Airplane",
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
  return (
    <Badge type={TYPE_OPTIONS.NEUTRAL} icon={<Icons.Sightseeing />}>
      {content}
    </Badge>
  );
};

Neutral.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Neutral.args = {
  content: "Badge",
};

export const Info = ({ content }) => {
  return (
    <Badge type={TYPE_OPTIONS.INFO} icon={<Icons.InformationCircle />}>
      {content}
    </Badge>
  );
};

Info.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Info.args = {
  content: "Badge",
};

export const InfoSubtle = ({ content }) => {
  return (
    <Badge type={TYPE_OPTIONS.INFO_SUBTLE} icon={<Icons.Sightseeing />}>
      {content}
    </Badge>
  );
};

InfoSubtle.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

InfoSubtle.args = {
  content: "Badge",
};

export const Success = ({ content }) => {
  return (
    <Badge type={TYPE_OPTIONS.SUCCESS} icon={<Icons.CheckCircle />}>
      {content}
    </Badge>
  );
};

Success.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Success.args = {
  content: "Badge",
};

export const SuccessSubtle = ({ content }) => {
  return (
    <Badge type={TYPE_OPTIONS.SUCCESS_SUBTLE} icon={<Icons.CheckCircle />}>
      {content}
    </Badge>
  );
};

SuccessSubtle.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

SuccessSubtle.args = {
  content: "Badge",
};

export const Warning = ({ content }) => {
  return (
    <Badge type={TYPE_OPTIONS.WARNING} icon={<Icons.Clock />}>
      {content}
    </Badge>
  );
};

Warning.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Warning.args = {
  content: "Badge",
};

export const WarningSubtle = ({ content }) => {
  return (
    <Badge type={TYPE_OPTIONS.WARNING_SUBTLE} icon={<Icons.Clock />}>
      {content}
    </Badge>
  );
};

WarningSubtle.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

WarningSubtle.args = {
  content: "Badge",
};

export const Critical = ({ content }) => {
  return (
    <Badge type={TYPE_OPTIONS.CRITICAL} icon={<Icons.Passport />}>
      {content}
    </Badge>
  );
};

Critical.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Critical.args = {
  content: "Badge",
};

export const CriticalSubtle = ({ content }) => {
  return (
    <Badge type={TYPE_OPTIONS.CRITICAL_SUBTLE} icon={<Icons.Sightseeing />}>
      {content}
    </Badge>
  );
};

CriticalSubtle.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

CriticalSubtle.args = {
  content: "Badge",
};

export const Dark = ({ content }) => {
  return (
    <Badge type={TYPE_OPTIONS.DARK} icon={<Icons.Sightseeing />}>
      {content}
    </Badge>
  );
};

Dark.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Dark.args = {
  content: "Badge",
};

export const White = ({ content }) => {
  return (
    <div style={{ backgroundColor: "#46515e", padding: "10px" }}>
      <Badge type={TYPE_OPTIONS.WHITE} icon={<Icons.Sightseeing />}>
        {content}
      </Badge>
    </div>
  );
};

White.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

White.args = {
  content: "Badge",
};

export const BadgeWithTranslatedNode = () => (
  <Badge icon={<Icons.Airplane />}>
    <span>Content should </span>
    <span>be</span>
    <span> with space</span>
  </Badge>
);

BadgeWithTranslatedNode.story = {
  name: "Badge with translated node",
};

export const Playground = ({ content, type, dataTest, Icon, ariaLabel }) => {
  return (
    <Badge type={type} icon={Icon && <Icon />} dataTest={dataTest} ariaLabel={ariaLabel}>
      {content}
    </Badge>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  content: "Badge",
  type: TYPE_OPTIONS.INFO_SUBTLE,
  dataTest: "test",
  ariaLabel: "test",
  Icon: getIcon("Airplane"),
};

Playground.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
  Icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Accessibility = ({
  content,
  icon,
  ariaLabel,
}: {
  content: string;
  icon: string;
  ariaLabel: string;
}) => {
  const Icon = getIcon(icon);

  return (
    <Badge icon={Icon && <Icon />} ariaLabel={ariaLabel}>
      {content}
    </Badge>
  );
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

Accessibility.args = {
  content: "Badge",
  icon: "Airplane",
  ariaLabel: "test",
};

Accessibility.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <Badge type="info" icon={<Icons.Airplane />}>
      Badge
    </Badge>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
