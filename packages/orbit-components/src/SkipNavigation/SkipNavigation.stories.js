// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";

import Heading from "../Heading";
import Text from "../Text";
import TextLink from "../TextLink";
import Card, { CardSection } from "../Card";
import Stack from "../Stack";

import SkipNavigation from ".";

const Content = (
  <Stack>
    <Card
      title="Focusable Card Heading"
      dataA11ySection="focusable-card-id"
      description="Buy this trip with us and you'll get exclusive premium services at Milano Bergamo Airport for free"
    >
      <CardSection>
        <Text>
          Lorem ipsum dolor sit &nbsp;
          <TextLink external={false} href="https://kiwi.com" type="primary">
            efficitur
          </TextLink>{" "}
          nulla. Ut convallis fermentum efficitur. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames. convallis.
        </Text>
      </CardSection>
    </Card>

    <Card title="Booking" dataA11ySection="booking">
      <CardSection>
        <Stack>
          <Text>
            Lorem ipsum dolor sit amet &nbsp;
            <TextLink external={false} href="https://kiwi.com" type="primary">
              fermentum
            </TextLink>{" "}
            ulla. Ut convallis fermentum efficitur.
          </Text>
          <Heading as="h2" type="title3" dataA11ySection="subheading">
            Focusable subheading
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet &nbsp;
            <TextLink external={false} href="https://kiwi.com" type="primary">
              habitant
            </TextLink>{" "}
            ulla. Ut convallis fermentum efficitur. Ut convallis fermentum efficitur. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames. convallis.
          </Text>
        </Stack>
      </CardSection>
    </Card>
  </Stack>
);

export default {
  title: "SkipNavigation",
};

export const Default = (): React.Element<"div"> => {
  return (
    <div>
      <SkipNavigation />
      {Content}
    </div>
  );
};

Default.story = {
  parameters: {
    info:
      "Default configuration of SkipNavigation. SkipNavigation is displayed only when focused. Use Tab or Shift + Tab to focus it.",
  },
};

export const Playground = (): React.Element<"div"> => {
  return (
    <div>
      <SkipNavigation
        actions={[
          {
            link: "https://www.kiwi.com/cz/pages/content/terms",
            name: "Go to terms and conditions",
          },
          {
            name: "Add baggage",
            onClick: action("Add baggage"),
          },
          {
            name: "Request refund",
            onClick: action("Request refund"),
          },
        ]}
        feedbackUrl="#"
      />

      {Content}
    </div>
  );
};

Playground.story = {
  parameters: {
    info:
      "All possible options for SkipNavigation. SkipNavigation is displayed only when focused. Use Tab or Shift + Tab to focus it.",
  },
};
