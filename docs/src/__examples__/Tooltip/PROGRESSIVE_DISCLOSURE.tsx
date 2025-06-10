import React from "react";
import {
  List,
  ListItem,
  OrbitProvider,
  Text,
  Tooltip,
  defaultTheme,
} from "@kiwicom/orbit-components";
import { Check, Close } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <List type="secondary">
        <ListItem
          icon={<Check color="success" size="small" ariaHidden />}
          label="Kiwi.com services"
        >
          <Tooltip content="Extra info about basic services" stopPropagation>
            <Text>Basic</Text>
          </Tooltip>
        </ListItem>
        <ListItem icon={<Close color="critical" size="small" ariaHidden />} label="Rebooking">
          <Tooltip content="Extra info about rebooking" stopPropagation>
            <Text>New ticket</Text>
          </Tooltip>
        </ListItem>
        <ListItem icon={<Close color="critical" size="small" ariaHidden />} label="Cancelation">
          <Text>$10 refund</Text>
        </ListItem>
      </List>
    </OrbitProvider>
  ),
};
