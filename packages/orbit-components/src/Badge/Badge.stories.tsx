import React from "react";
import { text, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Badge from ".";

const getIcons = (defaultIcon: string | null) =>
  select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = (source: string | null) => source && Icons[source];

export default {
  title: "Badge",
};

export const Default = () => {
  const content = text("Content", "Badge");
  const Icon = getIcon(getIcons("Airplane"));

  return <Badge icon={Icon && <Icon />}>{content}</Badge>;
};

Default.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Neutral = () => {
  const content = text("Content", "Badge");
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

export const Info = () => {
  const content = text("Content", "Badge");
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

export const InfoInverted = () => {
  const content = text("Content", "Badge");
  return (
    <Badge type={TYPE_OPTIONS.INFO_INVERTED} icon={<Icons.Sightseeing />}>
      {content}
    </Badge>
  );
};

InfoInverted.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Success = () => {
  const content = text("Content", "Badge");
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

export const SuccessInverted = () => {
  const content = text("Content", "Badge");
  return (
    <Badge type={TYPE_OPTIONS.SUCCESS_INVERTED} icon={<Icons.CheckCircle />}>
      {content}
    </Badge>
  );
};

SuccessInverted.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Warning = () => {
  const content = text("Content", "Badge");
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

export const WarningInverted = () => {
  const content = text("Content", "Badge");
  return (
    <Badge type={TYPE_OPTIONS.WARNING_INVERTED} icon={<Icons.Clock />}>
      {content}
    </Badge>
  );
};

WarningInverted.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Critical = () => {
  const content = text("Content", "Badge");
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

export const CriticalInverted = () => {
  const content = text("Content", "Badge");
  return (
    <Badge type={TYPE_OPTIONS.CRITICAL_INVERTED} icon={<Icons.Sightseeing />}>
      {content}
    </Badge>
  );
};

CriticalInverted.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Dark = () => {
  const content = text("Content", "Badge");
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

export const White = () => {
  const content = text("Content", "Badge");
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

export const Playground = () => {
  const content = text("Content", "Badge");
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.INFO);
  const dataTest = text("dataTest", "test");
  const Icon = getIcon(getIcons("Airplane"));
  const ariaLabel = text("ariaLabel", "test");

  return (
    <Badge type={type} icon={Icon && <Icon />} dataTest={dataTest} ariaLabel={ariaLabel}>
      {content}
    </Badge>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Accessibility = () => {
  const content = text("Content", "Badge");
  const Icon = getIcon(getIcons("Airplane"));
  const ariaLabel = text("ariaLabel", "test");

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
