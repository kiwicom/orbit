// @flow
import * as React from "react";
import { select, number } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Card, { CardSection } from "../Card";

import FloatingCard from ".";

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "Sticky",
};

export const Playground = (): React.Element<"div"> => {
  const Icon = getIcon(getIcons("Airplane"));
  const offset = number("offset", 0);
  return (
    <div style={{ height: "800px" }}>
      <FloatingCard offset={offset}>
        <Card>
          <CardSection icon={<Icon />} title="FloadingCard title">
            This is a floating card
          </CardSection>
          <CardSection>Card</CardSection>
          <CardSection>Card</CardSection>
          <CardSection>CardHeader</CardSection>
        </Card>
      </FloatingCard>
    </div>
  );
};
