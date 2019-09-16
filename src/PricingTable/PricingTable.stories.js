// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Badge from "../Badge";
import Button from "../Button";
import List, { ListItem } from "../List";
import Tooltip from "../Tooltip";
import Text from "../Text";
import Check from "../icons/Check";

import PricingTable, { PricingTableItem } from "./index";

const content = (
  <List type="listItem">
    <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service">
        <Text>Extended.</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Calleer priority" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service">
        <Text>Medium</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Email support" icon={<Check size="small" color="success" />}>
      <Text>Yes</Text>
    </ListItem>
    <ListItem label="Additional Services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service">
        <Text>$10 processing fee</Text>
      </Tooltip>
    </ListItem>
  </List>
);

storiesOf("PricingTable", module)
  .addDecorator(withKnobs)
  .add(
    "Compact",
    () => {
      return (
        <PricingTable>
          <PricingTableItem
            name="Limited Services"
            priceBadge={<Badge type="info">Included</Badge>}
            action={
              <Button type="secondary" block>
                Don't upgrade
              </Button>
            }
            mobileDescription="Basic ticket fare includes:"
            onClick={() => {
              action("onClick");
            }}
          >
            {content}
          </PricingTableItem>
          <PricingTableItem
            name="Plus Services"
            priceBadge={<Badge type="info">+ 10</Badge>}
            promoIcon=""
            badge="Popular"
            action={<Button block>Upgrade and continue</Button>}
            mobileDescription="Flexi ticket fare includes:"
            onClick={() => {
              action("onClick");
            }}
          >
            {content}
          </PricingTableItem>
          <PricingTableItem
            name="Premium Services"
            priceBadge={<Badge type="info">+ 20</Badge>}
            promoIcon=""
            action={
              <Button type="secondary" block>
                Upgrade and continue
              </Button>
            }
            mobileDescription="Premium ticket fare includes:"
            onClick={() => {
              action("onClick");
            }}
          >
            {content}
          </PricingTableItem>
        </PricingTable>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      return (
        <PricingTable>
          <PricingTableItem
            name="Basic"
            price="$749"
            promoIcon
            badge={<Badge type="warning">Popular</Badge>}
            action={<Button block>Continue with Basic</Button>}
            mobileDescription="Basic ticket fare includes:"
            onClick={() => {
              action("onClick");
            }}
          >
            {content}
          </PricingTableItem>
          <PricingTableItem
            name="Plus Services"
            price="$749"
            promoIcon=""
            badge="популярный"
            action={<Button block>Continue with Basic</Button>}
            mobileDescription="Flexi ticket fare includes:"
            onClick={() => {
              action("onClick");
            }}
          >
            {content}
          </PricingTableItem>
          <PricingTableItem
            name="Basic"
            priceBadge={<Badge type="warning">+10</Badge>}
            promoIcon=""
            action={<Button block>Continue with Basic</Button>}
            mobileDescription="Premium ticket fare includes:"
            onClick={() => {
              action("onClick");
            }}
          >
            {content}
          </PricingTableItem>
        </PricingTable>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
