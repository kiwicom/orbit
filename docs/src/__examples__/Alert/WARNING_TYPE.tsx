import * as React from "react";
import {
  Stack,
  Text,
  Heading,
  CountryFlag,
  List,
  ListItem,
  Alert,
  AlertButton,
} from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
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
