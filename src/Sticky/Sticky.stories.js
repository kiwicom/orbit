// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, number } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import Card from "../Card";
import CardHeader from "../Card/CardHeader";
import CardSection from "../Card/CardSection";

import FloatingCard from "./index";

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Sticky", module).add("Playground", () => {
  const Icon = getIcon(getIcons("Airplane"));
  const offset = number("offset", 0);
  return (
    <div style={{ height: "800px" }}>
      <FloatingCard offset={offset}>
        <Card>
          <CardHeader
            icon={<Icon />}
            title="FloatingCard title"
            subTitle="This is a floating card"
          />
          <CardSection>Card</CardSection>
          <CardSection>Card</CardSection>
          <CardSection>CardHeader</CardSection>
        </Card>
      </FloatingCard>
    </div>
  );
});
