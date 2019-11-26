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
import FeatureIcon from "../FeatureIcon";
import Layout, { LayoutColumn } from "../Layout";
import Card, { CardSection } from "../Card";

import PricingTable, { PricingTableItem } from "./index";

const content = (
  <List type="separated">
    <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Extended.</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Calleer priority" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Medium</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Email support" icon={<Check size="small" color="success" />}>
      <Text>Yes</Text>
    </ListItem>
    <ListItem label="Additional Services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>$10 processing fee</Text>
      </Tooltip>
    </ListItem>
  </List>
);

const longerContent = (
  <List type="separated">
    <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Extended.</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Calleer priority" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Medium</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Email support" icon={<Check size="small" color="success" />}>
      <Text>Yes</Text>
    </ListItem>
    <ListItem label="Additional Services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>$10 processing fee</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Additional Services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>$10 processing fee</Text>
      </Tooltip>
    </ListItem>
  </List>
);

const germanContent = (
  <List type="separated">
    <ListItem label="Verfügbarkeit Support" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Begrenzt</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Anruferpriorität" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Gering</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Email support" icon={<Check size="small" color="success" />}>
      <Text>Yes</Text>
    </ListItem>
    <ListItem label="E-Mail-Support" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Nein</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Zusatzleistungen" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>$10 Rückerstattung</Text>
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
        <PricingTable defaultActiveElement={1} dataTest="PrcingTable">
          <PricingTableItem
            dataTest="PrcingTableItem"
            name="Limited Services"
            priceBadge={<Badge type="info">Included</Badge>}
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                type="secondary"
                fullWidth
              >
                Don&#39;t upgrade
              </Button>
            }
            mobileDescription="Basic ticket fare includes:"
            onClick={action("onClick")}
          >
            {content}
          </PricingTableItem>
          <PricingTableItem
            dataTest="PrcingTableItem"
            name="Plus Services"
            priceBadge={<Badge type="info">+ 10</Badge>}
            badge="Popular"
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                fullWidth
              >
                Upgrade and continue
              </Button>
            }
            mobileDescription="Flexi ticket fare includes:"
            onClick={action("onClick")}
          >
            {longerContent}
          </PricingTableItem>
          <PricingTableItem
            dataTest="PrcingTableItem"
            name="Premium Services"
            priceBadge={<Badge type="info">+ 20</Badge>}
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                type="secondary"
                fullWidth
              >
                Upgrade and continue
              </Button>
            }
            mobileDescription="Premium ticket fare includes:"
            onClick={action("onClick")}
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
  .add("Booking", () => {
    return (
      <Layout type="Booking">
        <LayoutColumn>
          <Card>
            <CardSection>
              <PricingTable defaultActiveElement={1}>
                <PricingTableItem
                  name="Limited Services"
                  priceBadge={<Badge type="info">Included</Badge>}
                  action={
                    <Button
                      onClick={ev => {
                        ev.stopPropagation();
                      }}
                      type="secondary"
                      fullWidth
                    >
                      Don&#39;t upgrade
                    </Button>
                  }
                  mobileDescription="Basic ticket fare includes:"
                  onClick={action("onClick")}
                >
                  {content}
                </PricingTableItem>
                <PricingTableItem
                  name="Plus Services"
                  priceBadge={<Badge type="info">+ 10</Badge>}
                  badge="Popular"
                  action={
                    <Button
                      onClick={ev => {
                        ev.stopPropagation();
                      }}
                      fullWidth
                    >
                      Upgrade and continue
                    </Button>
                  }
                  mobileDescription="Flexi ticket fare includes:"
                  onClick={action("onClick")}
                >
                  {longerContent}
                </PricingTableItem>
                <PricingTableItem
                  name="Premium Services"
                  priceBadge={<Badge type="info">+ 20</Badge>}
                  action={
                    <Button
                      onClick={ev => {
                        ev.stopPropagation();
                      }}
                      type="secondary"
                      fullWidth
                    >
                      Upgrade and continue
                    </Button>
                  }
                  mobileDescription="Premium ticket fare includes:"
                  onClick={action("onClick")}
                >
                  {content}
                </PricingTableItem>
              </PricingTable>
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>
            <CardSection>Test</CardSection>
          </Card>
        </LayoutColumn>
      </Layout>
    );
  })
  .add("Translated", () => {
    return (
      <Layout type="Booking">
        <LayoutColumn>
          <Card>
            <CardSection>
              <PricingTable defaultActiveElement={1}>
                <PricingTableItem
                  name="Basic Service"
                  priceBadge={<Badge type="info">Inbegriffen</Badge>}
                  action={
                    <Button
                      onClick={ev => {
                        ev.stopPropagation();
                      }}
                      type="secondary"
                      fullWidth
                    >
                      Mit Basic fortfahren{" "}
                    </Button>
                  }
                  mobileDescription="Basic ticket fare includes:"
                  onClick={action("onClick")}
                >
                  {germanContent}
                </PricingTableItem>
                <PricingTableItem
                  name="Premium Service"
                  priceBadge={<Badge type="info">+ 20</Badge>}
                  action={
                    <Button
                      onClick={ev => {
                        ev.stopPropagation();
                      }}
                      type="secondary"
                      fullWidth
                    >
                      Auswählen und fortfahren
                    </Button>
                  }
                  mobileDescription="Premium ticket fare includes:"
                  onClick={action("onClick")}
                >
                  {germanContent}
                </PricingTableItem>
              </PricingTable>
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>
            <CardSection>Test</CardSection>
          </Card>
        </LayoutColumn>
      </Layout>
    );
  })
  .add(
    "With FeatureIcon",
    () => {
      return (
        <PricingTable>
          <PricingTableItem
            name="Basic"
            price="$749"
            featureIcon={<FeatureIcon name="TicketSaver" />}
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                fullWidth
              >
                Continue with Basic
              </Button>
            }
            mobileDescription="Basic ticket fare includes:"
            onClick={action("onClick")}
          >
            {content}
          </PricingTableItem>
          <PricingTableItem
            name="Premium"
            price="$1,095"
            featureIcon={<FeatureIcon name="TicketFlexi" />}
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                fullWidth
              >
                Continue with Basic
              </Button>
            }
            mobileDescription="Premium ticket fare includes:"
            onClick={action("onClick")}
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
