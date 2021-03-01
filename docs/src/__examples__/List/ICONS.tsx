import * as React from "react";
import { Stack } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

import { ListItem, CarrierLogo, List } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <List>
        <ListItem icon={<Icons.Check color="success" />}>Download boarding passes</ListItem>
        <ListItem icon={<Icons.Check color="success" />}>Get exclusive deals</ListItem>
        <ListItem icon={<Icons.Check color="success" />}>Book in one click</ListItem>
      </List>
      <List>
        <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
          Airline: Ryanair
        </ListItem>
        <ListItem icon={<Icons.InformationCircle />}>Flight no: FR 1337</ListItem>
        <ListItem icon={<Icons.Airplane />}>Plane: Airbus A320</ListItem>
      </List>
    </Stack>
  ),
  info: {
    title: "Lists with icons",
    description:
      "To make the lists more engaging, you can use other icons or carrier logos in place of the circles for the items.",
  },
};
