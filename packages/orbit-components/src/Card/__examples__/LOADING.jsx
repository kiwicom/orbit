// @flow
import * as React from "react";

import Card from "../index";
import CardSection from "../CardSection/index";

export default {
  Example: (): React.Node => (
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
