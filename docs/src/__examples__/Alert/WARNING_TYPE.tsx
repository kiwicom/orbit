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
import { Visa } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Alert icon={<Visa />} title="Visa requirements check" type="warning">
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
};
