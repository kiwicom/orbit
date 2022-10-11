import React from "react";
import { List, ListItem, Text, Tooltip } from "@kiwicom/orbit-components";
import { Check, Close } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <List type="secondary">
      <ListItem icon={<Check color="success" size="small" />} label="Kiwi.com services">
        <Tooltip content="Extra info about basic services" stopPropagation>
          <Text>Basic</Text>
        </Tooltip>
      </ListItem>
      <ListItem icon={<Close color="critical" size="small" />} label="Rebooking">
        <Tooltip content="Extra info about rebooking" stopPropagation>
          <Text>New ticket</Text>
        </Tooltip>
      </ListItem>
      <ListItem icon={<Close color="critical" size="small" />} label="Cancelation">
        <Text>$10 refund</Text>
      </ListItem>
    </List>
  ),
};
