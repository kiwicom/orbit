// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPES, SIZES } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import ButtonLink from "./index";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("ButtonLink", module)
  .add("Default", () => <ButtonLink href="https://kiwi.com">ButtonLink</ButtonLink>, {
    info:
      "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
  })
  .add(
    "Secondary",
    () => (
      <ButtonLink href="https://kiwi.com" type="secondary">
        ButtonLink
      </ButtonLink>
    ),
    {
      info:
        "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
    },
  )
  .add(
    "Circled",
    () => {
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
          title="Button"
        />
      );
    },
    {
      info:
        "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
    },
  )
  .add(
    "Playground",
    () => {
      const label = text("Label", "ButtonLink");
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
      const ariaExpanded = boolean("Aria expanded", false);
      const ariaControls = text("Aria controls", "element ID");
      const tabIndex = text("tabIndex", "0");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      const title = text("Title", "Additional information for accessibility");

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
          ariaExpanded={ariaExpanded}
          ariaControls={ariaControls}
          tabIndex={tabIndex}
          spaceAfter={spaceAfter}
          title={title}
        >
          {label}
        </ButtonLink>
      );
    },
    {
      info:
        "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <ButtonLink icon={<Icons.Airplane />}>ButtonLink</ButtonLink>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
