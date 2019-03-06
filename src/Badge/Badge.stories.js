// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Badge from "./index";

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Badge", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => {
    const content = text("Content", "Badge");
    const Icon = getIcon(getIcons("Airplane"));

    return <Badge icon={Icon && <Icon />}>{content}</Badge>;
  })

  .add("Neutral", () => {
    const content = text("Content", "Badge");
    return (
      <Badge type={TYPE_OPTIONS.NEUTRAL} icon={<Icons.Sightseeing />}>
        {content}
      </Badge>
    );
  })
  .add("Info", () => {
    const content = text("Content", "Badge");
    return (
      <Badge type={TYPE_OPTIONS.INFO} icon={<Icons.InformationCircle />}>
        {content}
      </Badge>
    );
  })
  .add("Success", () => {
    const content = text("Content", "Badge");
    return (
      <Badge type={TYPE_OPTIONS.SUCCESS} icon={<Icons.CheckCircle />}>
        {content}
      </Badge>
    );
  })
  .add("Warning", () => {
    const content = text("Content", "Badge");
    return (
      <Badge type={TYPE_OPTIONS.WARNING} icon={<Icons.Clock />}>
        {content}
      </Badge>
    );
  })
  .add("Critical", () => {
    const content = text("Content", "Badge");
    return (
      <Badge type={TYPE_OPTIONS.CRITICAL} icon={<Icons.Passport />}>
        {content}
      </Badge>
    );
  })
  .add("Dark", () => {
    const content = text("Content", "Badge");
    return (
      <Badge type={TYPE_OPTIONS.DARK} icon={<Icons.Sightseeing />}>
        {content}
      </Badge>
    );
  })
  .add("White", () => {
    const content = text("Content", "Badge");
    return (
      <div style={{ backgroundColor: "#46515e", padding: "10px" }}>
        <Badge type={TYPE_OPTIONS.WHITE} icon={<Icons.Sightseeing />}>
          {content}
        </Badge>
      </div>
    );
  })
  .add("Notification badge", () => {
    const content = text("Content", "3");
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.NEUTRAL);
    return (
      <Badge type={type} circled>
        {content}
      </Badge>
    );
  })
  .add("Playground", () => {
    const content = text("Content", "Badge");
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.INFO);
    const circled = boolean("Circled", false);
    const dataTest = text("dataTest", "test");
    const Icon = getIcon(getIcons("Airplane"));

    return (
      <Badge type={type} icon={Icon && <Icon />} dataTest={dataTest} circled={circled}>
        {content}
      </Badge>
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <Badge type="info" icon={<Icons.Airplane />}>
        Badge
      </Badge>
    </RenderInRtl>
  ));
