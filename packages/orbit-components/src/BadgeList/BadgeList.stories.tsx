import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Tooltip from "../Tooltip";
import TextLink from "../TextLink";
import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import BadgeList, { BadgeListItem } from ".";

export default {
  title: "BadgeList",
};

export const Default = () => {
  return (
    <BadgeList>
      <BadgeListItem icon={<Icons.AlertCircle />}>
        You&apos;re departing from a different place
      </BadgeListItem>
      <BadgeListItem icon={<Icons.BaggageCabin />}>
        You must collect and recheck your baggage
      </BadgeListItem>
    </BadgeList>
  );
};

export const Types = () => {
  const component = type => (
    <BadgeListItem icon={<Icons.KiwicomGuarantee />} type={type}>
      <TextLink onClick={action("link clicked")} type="secondary">
        Transfer protected
      </TextLink>{" "}
      by the Kiwi.com Guarantee
    </BadgeListItem>
  );
  return (
    <BadgeList>
      {component(TYPE_OPTIONS.NEUTRAL)}
      {component(TYPE_OPTIONS.INFO)}
      {component(TYPE_OPTIONS.SUCCESS)}
      {component(TYPE_OPTIONS.WARNING)}
      {component(TYPE_OPTIONS.CRITICAL)}
    </BadgeList>
  );
};

export const Sizes = () => (
  <BadgeList>
    <BadgeListItem icon={<Icons.AlertCircle />} size="small">
      Size small
    </BadgeListItem>
    <BadgeListItem icon={<Icons.BaggageCabin />} size="normal">
      Size normal
    </BadgeListItem>
  </BadgeList>
);

export const Playground = () => {
  const dataTest = text("dataTest", "test");
  const type = select("type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.NEUTRAL);
  const size = select("size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
  const strikeThrough = boolean("strikeThrough", false);

  return (
    <BadgeList dataTest={dataTest}>
      <BadgeListItem
        icon={<Icons.AlertCircle />}
        type={type}
        strikeThrough={strikeThrough}
        size={size}
      >
        You&apos;re departing from a different place
      </BadgeListItem>
      <BadgeListItem
        icon={<Icons.SelfTransfer />}
        type={type}
        strikeThrough={strikeThrough}
        size={size}
      >
        <Tooltip content="Additional information">
          <Text>Self transfer at Vienna</Text>
        </Tooltip>{" "}
        is your responsibility
      </BadgeListItem>
      <BadgeListItem
        icon={<Icons.KiwicomGuarantee />}
        type={type}
        strikeThrough={strikeThrough}
        size={size}
      >
        <TextLink onClick={action("link clicked")} type="secondary">
          Transfer protected
        </TextLink>{" "}
        by the Kiwi.com Guarantee
      </BadgeListItem>
    </BadgeList>
  );
};

Playground.story = {
  parameters: {
    info: "Here you can try BadgeList component with additional functionality.",
  },
};

export const RTL = () => {
  return (
    <RenderInRtl>
      <BadgeList>
        <BadgeListItem icon={<Icons.AlertCircle />}>
          You&apos;re departing from a different place
        </BadgeListItem>
        <BadgeListItem icon={<Icons.SelfTransfer />}>
          <Tooltip content="Additional information">
            <Text>Self transfer at Vienna</Text>
          </Tooltip>{" "}
          is your responsibility
        </BadgeListItem>
        <BadgeListItem icon={<Icons.KiwicomGuarantee />}>
          <TextLink onClick={action("link clicked")} type="secondary">
            Transfer protected
          </TextLink>{" "}
          by the Kiwi.com Guarantee
        </BadgeListItem>
      </BadgeList>
    </RenderInRtl>
  );
};

export const BadgeListVisualTest = () => {
  return (
    <div className="space-y-md">
      <div className="space-y-xs">
        {Object.values(TYPE_OPTIONS).map(type => (
          <BadgeList>
            <BadgeListItem icon={<Icons.KiwicomGuarantee />} type={type}>
              List type {type} item #1
            </BadgeListItem>
            <BadgeListItem icon={<Icons.KiwicomGuarantee />} type={type}>
              List type {type} item #2
            </BadgeListItem>
          </BadgeList>
        ))}
      </div>

      {Object.values(SIZE_OPTIONS).map(size => (
        <BadgeList>
          <BadgeListItem icon={<Icons.KiwicomGuarantee />} size={size}>
            List size {size} item #1
          </BadgeListItem>
          <BadgeListItem icon={<Icons.KiwicomGuarantee />} size={size}>
            List size {size} item #2
          </BadgeListItem>
        </BadgeList>
      ))}
    </div>
  );
};

BadgeListVisualTest.story = {
  name: "BadgeList visual test",
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
