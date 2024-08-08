import * as React from "react";

import { DIRECTIONS, SPACINGS } from "../utils/layout/consts";
import TextLink from "../TextLink";

import LinkList from ".";

export default {
  title: "LinkList",
};

export const Default = ({ direction, spacing, legacy, indent }) => {
  return (
    <LinkList direction={direction} spacing={spacing} legacy={legacy} indent={indent}>
      <TextLink type="secondary">Flight 1</TextLink>
      <TextLink type="secondary">Flight 2</TextLink>
      <TextLink type="secondary">Flight 3</TextLink>
      <TextLink type="secondary">Flight 4</TextLink>
    </LinkList>
  );
};

Default.args = {
  direction: DIRECTIONS.ROW,
  spacing: SPACINGS.FOUR_HUNDRED,
  legacy: false,
  indent: false,
};

Default.argTypes = {
  direction: {
    options: Object.values(DIRECTIONS),
    control: {
      type: "select",
    },
  },
  spacing: {
    options: Object.values(SPACINGS),
    control: {
      type: "select",
    },
  },
};
