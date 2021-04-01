// @flow
import * as React from "react";

import Card from "../index";
import CardSection from "../CardSection/index";

export default {
  Example: (): React.Node => (
    <Card title="Passenger info" description="All passengers in this itinerary">
      <CardSection>Yasmin Karenth</CardSection>
    </Card>
  ),
  info: {
    title: "Default card",
    description:
      "Cards can have titles and descriptions that cover all of their contents plus sections for organization.",
  },
};
