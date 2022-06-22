// @flow
import * as React from "react";
import { select } from "@storybook/addon-knobs";

import { DIRECTIONS, SPACINGS } from "../utils/layout/consts";
import TextLink from "../TextLink";

import LinkList from ".";

export default {
  title: "Linklist",
};

export const Default = (): React.Node => {
  const direction = select("Direction", [null, ...Object.values(DIRECTIONS)], DIRECTIONS.ROW);
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)], SPACINGS.MEDIUM);

  return (
    <LinkList direction={direction} spacing={spacing}>
      <TextLink type="secondary">Flights</TextLink>
      <TextLink type="secondary">Flights</TextLink>
      <TextLink type="secondary">Flights</TextLink>
      <TextLink type="secondary">Flights</TextLink>
    </LinkList>
  );
};
