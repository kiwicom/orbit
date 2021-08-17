import React from "react";
import { Card, CardSection, Inline } from "@kiwicom/orbit-components";
import { GenderWoman } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Card title="Passenger info" description="All passengers in this itinerary">
      <CardSection>
        <Inline>
          <GenderWoman ariaLabel="female" />
          Yasmin Karenth
        </Inline>
      </CardSection>
    </Card>
  ),
  info: {
    title: "Default card",
    description:
      "Cards can have titles and descriptions that cover all of their contents plus sections for organization.",
  },
};
