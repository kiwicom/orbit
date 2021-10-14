// @flow
import * as React from "react";

import Button from "../../Button";
import Badge from "../../Badge";
import FeatureIcon from "../../FeatureIcon";
import List, { ListItem } from "../../List";
import PricingTable from "../index";
import PricingTableItem from "../PricingTableItem";
import Tooltip from "../../Tooltip";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <PricingTable>
      <PricingTableItem
        action={<Button fullWidth>Continue with Basic</Button>}
        featureIcon={<FeatureIcon name="TicketSaver" />}
        mobileDescription="Basic tickets include:"
        name="Basic"
        price="$349"
      >
        <List type="secondary">
          <ListItem icon={<Icons.Check color="success" size="small" />} label="Kiwi.com services">
            <Tooltip content="Extra info about basic services" stopPropagation>
              <Text>Basic</Text>
            </Tooltip>
          </ListItem>
          <ListItem icon={<Icons.Close color="critical" size="small" />} label="Rebooking">
            <Tooltip content="Extra info about rebooking" stopPropagation>
              <Text>New ticket</Text>
            </Tooltip>
          </ListItem>
          <ListItem icon={<Icons.Close color="critical" size="small" />} label="Cancelation">
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
          <ListItem icon={<Icons.Check color="success" size="small" />} label="Kiwi.com services">
            <Tooltip content="Extra info about basic services" stopPropagation>
              <Text>Extended</Text>
            </Tooltip>
          </ListItem>
          <ListItem icon={<Icons.Check color="success" size="small" />} label="Rebooking">
            <Tooltip content="Extra info about rebooking" stopPropagation>
              <Text>Pay the difference</Text>
            </Tooltip>
          </ListItem>
          <ListItem icon={<Icons.Check color="success" size="small" />} label="Cancelation">
            <Text>90% refund</Text>
          </ListItem>
        </List>
      </PricingTableItem>
    </PricingTable>
  ),
  info: {
    title: "Pricing table",
    description: "A table with extra information disclosed progressively.",
  },
};
