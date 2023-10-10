import * as React from "react";
import { select, boolean } from "@storybook/addon-knobs";

import { DIRECTIONS, SPACINGS } from "../utils/layout/consts";
import TextLink from "../TextLink";

import LinkList from ".";

export default {
  title: "LinkList",
};

export const Default = () => {
  const direction = select("Direction", Object.values(DIRECTIONS), DIRECTIONS.ROW);
  const spacing = select("Spacing", Object.values(SPACINGS), SPACINGS.MEDIUM);
  const legacy = boolean("Legacy", false);
  const indent = boolean("Indent", false);

  return (
    <LinkList direction={direction} spacing={spacing} legacy={legacy} indent={indent}>
      <TextLink type="secondary">Flight 1</TextLink>
      <TextLink type="secondary">Flight 2</TextLink>
      <TextLink type="secondary">Flight 3</TextLink>
      <TextLink type="secondary">Flight 4</TextLink>
    </LinkList>
  );
};
