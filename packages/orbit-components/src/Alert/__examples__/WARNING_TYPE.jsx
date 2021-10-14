// @flow
import * as React from "react";

import Alert, { AlertButton } from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import Heading from "../../Heading";
import CountryFlag from "../../CountryFlag";
import List, { ListItem } from "../../List";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Alert icon={<Icons.Visa />} title="Visa requirements check" type="warning">
      <Stack spacing="small">
        <Text>
          The requirements found here are for reference purposes only. Contact the embassy or your
          foreign ministry for more information.
        </Text>
        <Heading type="title4">Make sure you know the visa requirements for:</Heading>
        <List>
          <ListItem icon={<CountryFlag code="pl" name="Poland" />}>Poland</ListItem>
        </List>
        <AlertButton type="warning">Check visa requirements</AlertButton>
      </Stack>
    </Alert>
  ),
  info: {
    title: "Warning alert",
    description:
      "Use warning alerts when you need to inform users about a potentially unfavorable situation that requires eventual but not immediate action from them.",
  },
};
