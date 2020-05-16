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
  Example: () => (
    <Alert icon={<Icons.Visa />} title="Visa requirements check" type="warning">
      <Stack spacing="compact">
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
    title: "Success alert",
    description:
      "Success alerts confirm that an instruction from the user, such as to make a payment or request a refund, was processed successfully. Usually used without an action button.",
  },
};
