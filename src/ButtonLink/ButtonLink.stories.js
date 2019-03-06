// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import { withKnobs, text, number, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPES, SIZES } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import ButtonLink from "./index";

const getIcons = (name, defaultIcon) =>
  select(name, [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("ButtonLink", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => <ButtonLink href="https://kiwi.com">ButtonLink</ButtonLink>)
  .add("Secondary", () => (
    <ButtonLink href="https://kiwi.com" type="secondary">
      ButtonLink
    </ButtonLink>
  ))
  .add("Circled", () => {
    const circled = boolean("circled", true);
    const type = select("Type", Object.values(TYPES), TYPES.SECONDARY);
    const size = select("Size", Object.values(SIZES), SIZES.LARGE);
    const IconLeft = getIcon(getIcons("iconLeft", "Airplane"));

    return (
      <ButtonLink
        type={type}
        size={size}
        iconLeft={IconLeft && <IconLeft />}
        onClick={action("clicked")}
        circled={circled}
      />
    );
  })
  .add("Playground", () => {
    const title = text("Title", "ButtonLink");
    const disabled = boolean("Disabled", false);
    const block = boolean("Block", false);
    const type = select("Type", Object.values(TYPES), TYPES.SECONDARY);
    const size = select("Size", Object.values(SIZES), SIZES.LARGE);
    const width = number("Width", 0);
    const IconLeft = getIcon(getIcons("iconLeft", "Airplane"));
    const IconRight = getIcon(getIcons("iconRight", "ChevronDown"));
    const href = text("Href", "");
    const dataTest = text("dataTest", "test");
    const external = boolean("External", false);
    const transparent = boolean("Transparent", false);
    const submit = boolean("Submit", false);

    return (
      <ButtonLink
        disabled={disabled}
        block={block}
        type={type}
        size={size}
        href={href}
        dataTest={dataTest}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
        width={width}
        external={external}
        onClick={action("clicked")}
        transparent={transparent}
        submit={submit}
      >
        {title}
      </ButtonLink>
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <ButtonLink icon={<Icons.Airplane />}>ButtonLink</ButtonLink>
    </RenderInRtl>
  ));
