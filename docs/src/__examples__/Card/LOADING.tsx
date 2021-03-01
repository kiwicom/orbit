import * as React from "react";
import { Card, CardSection } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Card loading title="Passenger info">
      <CardSection>Yasmin Karenth</CardSection>
    </Card>
  ),
  info: {
    title: "Loading card",
    description:
      "Pass the loading prop if you need to wait for data to load before displaying the card.",
  },
};
