// @flow
import * as React from "react";

import CarrierLogo from "../../CarrierLogo";
import List from "../index";
import ListItem from "../ListItem";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
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
