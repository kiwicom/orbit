// @flow
import * as React from "react";

import Button from "../../Button";
import Card, { CardSection } from "../../Card";
import Heading from "../../Heading";
import Loading from "../index";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => (
    <Stack>
      <Stack spacing="XXXSmall">
        <Heading as="h3" type="title3">
          Page loader
        </Heading>
        <Text>Useful when an entire page is loading.</Text>
        <Loading />
      </Stack>
      <Stack spacing="XXXSmall">
        <Heading as="h3" type="title3">
          Box loader
        </Heading>
        <Text>Useful when content in boxes like cards and card sections is being loaded.</Text>
        <Card loading title="Interesting facts">
          <CardSection>Interesting facts about travel</CardSection>
        </Card>
        <Card title="Interesting facts">
          <CardSection>
            <Loading type="boxLoader" loading>
              Interesting facts about travel
            </Loading>
          </CardSection>
        </Card>
      </Stack>
      <Stack spacing="XXXSmall">
        <Heading as="h3" type="title3">
          Button loader
        </Heading>
        <Text>
          Useful when a user has interacted with a button to show that something is happening.
        </Text>
        <Button loading>Save</Button>
      </Stack>
      <Stack spacing="XXXSmall">
        <Heading as="h3" type="title3">
          Inline loader
        </Heading>
        <Text>Useful when content in paragraphs and other inline elements is being loaded.</Text>
        <Loading type="inlineLoader" />
      </Stack>
      <Stack spacing="XXXSmall">
        <Heading as="h3" type="title3">
          Search loader
        </Heading>
        <Text>Useful when waiting for the results of a search.</Text>
        <Loading type="searchLoader" />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Types",
    description: "Each loading type is useful in specific circumstances.",
  },
};
