// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Heading from "../Heading";
import Text from "../Text";
import TextLink from "../TextLink";
import Card, { CardHeader } from "../Card";

import SkipNavigation from ".";

storiesOf("SkipNavigation", module).add(
  "Default",
  () => {
    return (
      <div>
        <SkipNavigation
          pages={[
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

        <Heading element="h2" dataA11ySection="user-overview">
          User overview
        </Heading>

        <Card>
          <CardHeader title="Card with title" subTitle={null} dataA11ySection="CardTitle" />
        </Card>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate nunc sit amet
          ante ullamcorper pellentesque. Aenean ut felis ut lacus mattis feugiat. Curabitur
          ullamcorper ultrices erat et lobortis. Donec finibus fringilla quam non dapibus. Cras et
          laoreet nulla. Donec ut elit{" "}
          <TextLink external={false} href="https://kiwi.com" type="primary">
            Primary link
          </TextLink>{" "}
          nulla. Ut convallis fermentum efficitur. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vestibulum varius urna ligula, at condimentum
          turpis ultrices id. Cras consequat mattis felis, et convallis nunc ultrices at. Donec
          suscipit elit vitae sapien rhoncus, vel tristique mi convallis.
        </Text>
        <Heading element="h2" dataA11ySection="booking">
          Booking
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate nunc sit amet
          ante ullamcorper pellentesque. Aenean ut felis ut lacus mattis feugiat. Curabitur
          ullamcorper ultrices erat et lobortis. Donec finibus fringilla quam non dapibus. Cras et
          laoreet nulla. Donec ut elit{" "}
          <TextLink external={false} href="https://kiwi.com" type="primary">
            Primary link
          </TextLink>{" "}
          nulla. Ut convallis fermentum efficitur. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vestibulum varius urna ligula, at condimentum
          turpis ultrices id. Cras consequat mattis felis, et convallis nunc ultrices at. Donec
          suscipit elit vitae sapien rhoncus, vel tristique mi convallis.
        </Text>
        <Heading element="h2" dataA11ySection="confirmation">
          Confirmation
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate nunc sit amet
          ante ullamcorper pellentesque. Aenean ut felis ut lacus mattis feugiat. Curabitur
          ullamcorper ultrices erat et lobortis. Donec finibus fringilla quam non dapibus. Cras et
          laoreet nulla. Donec ut elit{" "}
          <TextLink external={false} href="https://kiwi.com" type="primary">
            Primary link
          </TextLink>{" "}
          nulla. Ut convallis fermentum efficitur. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vestibulum varius urna ligula, at condimentum
          turpis ultrices id. Cras consequat mattis felis, et convallis nunc ultrices at. Donec
          suscipit elit vitae sapien rhoncus, vel tristique mi convallis.
        </Text>
      </div>
    );
  },
  {
    info:
      "Configuration with Separator, for separator to work correctly block property has to be set.",
  },
);
