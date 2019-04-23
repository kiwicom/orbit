// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Badge from "./index";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Badge", module)
  .add(
    "Default",
    () => {
      const content = text("Content", "Badge");
      const Icon = getIcon(getIcons("Airplane"));

      return <Badge icon={Icon && <Icon />}>{content}</Badge>;
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )

  .add(
    "Neutral",
    () => {
      const content = text("Content", "Badge");
      return (
        <Badge type={TYPE_OPTIONS.NEUTRAL} icon={<Icons.Sightseeing />}>
          {content}
        </Badge>
      );
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Info",
    () => {
      const content = text("Content", "Badge");
      return (
        <Badge type={TYPE_OPTIONS.INFO} icon={<Icons.InformationCircle />}>
          {content}
        </Badge>
      );
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Info Inverted",
    () => {
      const content = text("Content", "Badge");
      return (
        <Badge type={TYPE_OPTIONS.INFO_INVERTED} icon={<Icons.Sightseeing />}>
          {content}
        </Badge>
      );
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Success",
    () => {
      const content = text("Content", "Badge");
      return (
        <Badge type={TYPE_OPTIONS.SUCCESS} icon={<Icons.CheckCircle />}>
          {content}
        </Badge>
      );
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Warning",
    () => {
      const content = text("Content", "Badge");
      return (
        <Badge type={TYPE_OPTIONS.WARNING} icon={<Icons.Clock />}>
          {content}
        </Badge>
      );
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Critical",
    () => {
      const content = text("Content", "Badge");
      return (
        <Badge type={TYPE_OPTIONS.CRITICAL} icon={<Icons.Passport />}>
          {content}
        </Badge>
      );
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Critical Inverted",
    () => {
      const content = text("Content", "Badge");
      return (
        <Badge type={TYPE_OPTIONS.CRITICAL_INVERTED} icon={<Icons.Sightseeing />}>
          {content}
        </Badge>
      );
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Dark",
    () => {
      const content = text("Content", "Badge");
      return (
        <Badge type={TYPE_OPTIONS.DARK} icon={<Icons.Sightseeing />}>
          {content}
        </Badge>
      );
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "White",
    () => {
      const content = text("Content", "Badge");
      return (
        <div style={{ backgroundColor: "#46515e", padding: "10px" }}>
          <Badge type={TYPE_OPTIONS.WHITE} icon={<Icons.Sightseeing />}>
            {content}
          </Badge>
        </div>
      );
    },
    {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add("Badge with translated node", () => (
    <Badge icon={<Icons.Airplane />}>
      <span>Content should </span>
      <span>be</span>
      <span> with space</span>
    </Badge>
  ))
  .add(
    "Playground",
    () => {
      const content = text("Content", "Badge");
      const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.INFO);
      const dataTest = text("dataTest", "test");
      const Icon = getIcon(getIcons("Airplane"));

      return (
        <Badge type={type} icon={Icon && <Icon />} dataTest={dataTest}>
          {content}
        </Badge>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Badge type="info" icon={<Icons.Airplane />}>
          Badge
        </Badge>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
