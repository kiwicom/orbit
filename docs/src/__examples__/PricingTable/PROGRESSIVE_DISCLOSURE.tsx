import React from "react";
import {
  PricingTable,
  PricingTableItem,
  Badge,
  FeatureIcon,
  List,
  ListItem,
  Button,
  Text,
  Tooltip,
} from "@kiwicom/orbit-components";
import { Check, Close } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <PricingTable>
      <PricingTableItem
        action={<Button fullWidth>Continue with Basic</Button>}
        featureIcon={<FeatureIcon name="TicketSaver" />}
        mobileDescription="Basic tickets include:"
        name="Basic"
        price="$349"
      >
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
      </PricingTableItem>
      <PricingTableItem
        action={<Button fullWidth>Continue with Premium</Button>}
        badge={<Badge type="info">Recommended</Badge>}
        featureIcon={<FeatureIcon name="TicketFlexi" />}
        mobileDescription="Premium tickets include:"
        name="Premium"
        price="$595"
      >
        <List type="secondary">
          <ListItem icon={<Check color="success" size="small" />} label="Kiwi.com services">
            <Tooltip content="Extra info about basic services" stopPropagation>
              <Text>Extended</Text>
            </Tooltip>
          </ListItem>
          <ListItem icon={<Check color="success" size="small" />} label="Rebooking">
            <Tooltip content="Extra info about rebooking" stopPropagation>
              <Text>Pay the difference</Text>
            </Tooltip>
          </ListItem>
          <ListItem icon={<Check color="success" size="small" />} label="Cancelation">
            <Text>90% refund</Text>
          </ListItem>
        </List>
      </PricingTableItem>
    </PricingTable>
  ),
  exampleKnobs: [
    {
      component: "PricingTable",
      knobs: [
        { name: "activeElement", type: "number", defaultValue: 0 },
        { name: "hasError", type: "boolean", defaultValue: false },
        { name: "desktopRatio", type: "boolean", defaultValue: false },
      ],
    },
  ],
};
