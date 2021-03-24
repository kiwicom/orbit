import * as React from "react";
import { Card, CardSection } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
