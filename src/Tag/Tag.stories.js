// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SIZES } from "./consts";

import Tag from "./index";

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Tag", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => {
    const content = text("Content", "Brno");
    const Icon = getIcon(getIcons("Airplane"));

    return (
      <Tag icon={Icon && <Icon />} onClick={action("onClick")}>
        {content}
      </Tag>
    );
  })
  .add("Playground", () => {
    const content = text("Content", "Transport");
    const size = select("size", Object.values(SIZES), SIZES.NORMAL);
    const selected = boolean("selected", true);
    const dataTest = text("dataTest", "test");
    const Icon = getIcon(getIcons("Bus"));

    return (
      <Tag
        icon={Icon && <Icon />}
        size={size}
        selected={selected}
        onClick={action("onClick")}
        onRemove={action("onRemove")}
        dataTest={dataTest}
      >
        {content}
      </Tag>
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <Tag icon={<Icons.Airplane />} onRemove={action("onRemove")}>
        Transport
      </Tag>
    </RenderInRtl>
  ));
