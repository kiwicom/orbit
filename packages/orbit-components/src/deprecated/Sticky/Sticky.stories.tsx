import * as React from "react";
import { number } from "@storybook/addon-knobs";

import Card, { CardSection } from "../../Card";

import FloatingCard from ".";

export default {
  title: "Sticky",
};

export const Playground = () => {
  const offset = number("offset", 0);
  return (
    <div style={{ height: "800px" }}>
      <FloatingCard offset={offset}>
        <Card>
          <CardSection title="FloadingCard title">This is a floating card</CardSection>
          <CardSection>Card</CardSection>
          <CardSection>Card</CardSection>
          <CardSection>CardHeader</CardSection>
        </Card>
      </FloatingCard>
    </div>
  );
};
