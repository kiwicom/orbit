// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Heading from "../Heading";
import Text from "../Text";
import TextLink from "../TextLink";
import Card, { CardHeader, CardSection } from "../Card";
import Stack from "../Stack";

import SkipNavigation from ".";

const Content = (
  <Stack>
    <Card>
      <CardHeader
        title="Focusable Card Heading"
        subTitle="Buy this trip with us and you'll get exclusive premium services at Milano Bergamo Airport for free."
        dataA11ySection="focusable-card-id"
      />
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

    <Card>
      <CardHeader title="Booking" dataA11ySection="booking" />
      <CardSection>
        <Stack>
          <Text>
            Lorem ipsum dolor sit amet &nbsp;
            <TextLink external={false} href="https://kiwi.com" type="primary">
              fermentum
            </TextLink>{" "}
            ulla. Ut convallis fermentum efficitur.
          </Text>
          <Heading element="h2" type="title3" dataA11ySection="subheading">
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

storiesOf("SkipNavigation", module)
  .add(
    "Default",
    () => {
      return (
        <div>
          <SkipNavigation />
          {Content}
        </div>
      );
    },
    {
      info:
        "Default configuration of SkipNavigation. SkipNavigation is displayed only when focused. Use Tab or Shift + Tab to focus it.",
    },
  )
  .add(
    "Playground",
    () => {
      return (
        <div>
          <SkipNavigation
            actions={[
              {
                link: "https://www.kiwi.com/cz/pages/content/terms",
                name: "Got to terms and condition",
              },
              {
                name: "Add baggage",
                onClick: action("Add baggage"),
              },
              {
                name: "Reguest refund",
                onClick: action("Reguest refund"),
              },
            ]}
            feedbackUrl="#"
          />

          {Content}
        </div>
      );
    },
    {
      info:
        "All possible options for SkipNavigation. SkipNavigation is displayed only when focused. Use Tab or Shift + Tab to focus it.",
    },
  );
