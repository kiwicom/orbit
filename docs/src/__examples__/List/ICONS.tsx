import React from "react";
import { Stack, ListItem, CarrierLogo, List } from "@kiwicom/orbit-components";
import { Airplane, Check, InformationCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack>
      <List>
        <ListItem icon={<Check color="success" />}>Download boarding passes</ListItem>
        <ListItem icon={<Check color="success" />}>Get exclusive deals</ListItem>
        <ListItem icon={<Check color="success" />}>Book in one click</ListItem>
      </List>
      <List>
        <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
          Airline: Ryanair
        </ListItem>
        <ListItem icon={<InformationCircle />}>Flight no: FR 1337</ListItem>
        <ListItem icon={<Airplane />}>Plane: Airbus A320</ListItem>
      </List>
    </Stack>
  ),
  info: {
    title: "Lists with icons",
    description:
      "To make the lists more engaging, you can use other icons or carrier logos in place of the circles for the items.",
  },
};
