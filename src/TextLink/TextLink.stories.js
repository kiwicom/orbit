// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import * as Icons from "../icons";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import TextLink from "./index";

const validate = rel => (rel !== undefined && rel !== "" ? rel : undefined);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("TextLink", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Primary link", () => {
    const href = text("Href", "https://kiwi.com");
    const external = boolean("External", false);
    const title = text("Title", "Primary link");

    return (
      <TextLink external={external} onClick={action("clicked")} href={href} type="primary">
        {title}
      </TextLink>
    );
  })
  .add("Secondary link", () => {
    const href = text("Href", "https://kiwi.com");
    const external = boolean("External", false);
    const title = text("Title", "Secondary link");

    return (
      <TextLink external={external} onClick={action("clicked")} href={href} type="secondary">
        {title}
      </TextLink>
    );
  })
  .add("Link with icon", () => {
    const href = text("Href", "https://kiwi.com");
    const title = text("Title", "TextLink with icon");
    const Icon = getIcon(getIcons("ChevronRight"));

    return (
      <TextLink onClick={action("clicked")} href={href} icon={Icon && <Icon />}>
        {title}
      </TextLink>
    );
  })
  .add("Playground", () => {
    const href = text("Href", "https://kiwi.com");
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.SECONDARY);
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
    const external = boolean("External", true);
    const title = text("Text", "Custom link");
    const rel = text("Rel", undefined);
    const Icon = getIcon(getIcons("ChevronRight"));
    const dataTest = text("dataTest", "test");

    return (
      <TextLink
        external={external}
        onClick={action("clicked")}
        href={href}
        type={type}
        size={size}
        rel={validate(rel)}
        icon={Icon && <Icon />}
        dataTest={dataTest}
      >
        {title}
      </TextLink>
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <TextLink onClick={action("clicked")} href="#" icon={<Icons.ChevronRight />}>
        Link
      </TextLink>
    </RenderInRtl>
  ));
