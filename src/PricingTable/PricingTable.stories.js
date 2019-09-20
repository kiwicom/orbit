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

const icon = (
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAAB2FJREFUWAm1mHtsFEUcx+fu9nbv2d4dFGppbYTIw6PER2mlYmwtrYDBRyIQAxpfUWNMfJD+4x/ahH/0H0NM1BhFooKaGq0mtgQrXgNIfRQbJC3y0NgWSqW0d7t3t3d7t7vnfKdO2dbS9HhMcjuzOzO/3+f3m99vZvds5ApKy+HD7pAjWO/2eF6VRHFlKqW+kcykP1lbFe69XLG2y524/5fjNV6f/y0KchtkpNNp4vF4SDaTUZNJ9X1lKPbKhg2Var7y7flOwPh9Xb3VgUDgW8BomkaOHj1K2traSH9/PzFM01MYKHxBDEnvtbS0OPKVn7eH2tvbpeD1yw+4XK6qTCZD9u3bR2RZJmjncjmyYsUKsmjRIsaR1Y0ta2vCn+YDlbeHxNDCGqfTWWWaJgM5e/Ysqa6uJqWlpWTjxo1k7ty5RNd1BpfLGU83NzfnpSOvwbDUKTqqKBAxDIP4/X5SUlJCIpEIGRoaIqdPnyY+n48AFv12Ylt2e+PGwDX1kM1u92Bp8BNFkaxbt45UVlaS8+fPszjq6uoiDoeD2Gw2opum09CIeE2BMpnsKSiA0lgsRgYGBkgoFCJlZWWkpqaGnDhxgnkIYwSH4x9bqj+K9myLMNuBfJyZUX/QNN8YXbYQUr21tZXY7XYWN2fOnCGLFy9m3gFwJqN/vX79eo3PnU2ddww1rr51SE0lX9V1Q0csbdq0iYTDYaartraWBThbLt2IC4KzbTYQ1jF5p/13h/4o8Qc8mw3D3J5MJrwQhiBGDCHAEVsAKioqMgVBULKZbA814OOTo39//nhdXdqqfLr2BFBHR3ehEPRX2IjDaeb0oQOJc38219XpfBKOiTJ/6csFhYXPS5JYDMWJRIKMjIwQVR3fkJHubrebzJ8/n3i9XhZnFIrt4vF4/GdZjm1rXLX8Ry5zunoCKPLbqYdKSxZ8AWszmpamedQrx5Vd5xLDH7o10XtdyYIWGrx12AAvXLjAUhw78+joKAMaXyadAECSJEJ3clJeXs7giouLWUYaup6UFeW5u1cu+Xg6GDy7CNR9YnVJyYKD2WyWWYZARWDGFeVnehxkgsHgnQjizs5O0t3dzYIY2TVv3jwyZ84cphDj4S1kH6AHBwdJNBplS7l161a2adKlzsoxeXN99ZLW6aAmsiyZ0nrpaT3sdnuKAcU3N3qSV3NFCGIaG6SiooIsXbqUwHIsDZYPBqDmRVEUtlkeO3aMLRm8hiWlHnT6/L53Og71HmlYHR7g43k94SE8+PX40EeBYOBRHJhQgN0WMLwGJO7RhzYKlOAeBUDohyd5P+/DOCwrZCHO6Pm3886bFz7FJlou45L+exBLRHfQrEhbISCEHqRMGIZBKT9ILwUDpfgBCmPgccjhBmG+S3Jt/v7g7wstLKzJgFoivb72A78V2WT7gJJQdsIqBCdKX18f2b17N3M/P8OswBhj9QwHAQDv4x7lNcZLLskneN0PsEGWi9DZc7IhWBh6mwIEaMBRKwwbtwxnVU9PD9mzZw8L0KamJgbKPQPB+cIAFD+AS6K0hrK8CZ7IkVOviaKzQggGQt9Q97khGAPtdidzMbyAZ5iIN0G8XuAZ4ov3zQYG8zEeRnIYtOEtmgLh9vafClxFgdoCn+8VSjBq6xuUWWrwibzmAhCgw8PDbE+BJRCKcqUwkE+FGXRv+sshCAtdkuQYi8Zes/UOxHLohBVWGChlVlAvIZ54YF4tGC4bNQoMHYuNNtoBcikYAGIgsoJPvBqegSzmIQoCedCR1fW/czH1F3tKTXUieLE38OXABO4tXmPi1YSBLuhB5tIgSKoJtamhoVJ2rN98/1c2Q9Do28R5qnGuy+328eMDMNfCMxwmq2fTmqq9rsSj2+qrl0XY0uHCS9uPfeXXFYU+8BcUrEEwXysYDkRDoev2cFkN14960k597x039Y+cG3kilUqNwpUoV7pM3Ms8awGDNhIlrWmfMSWWyyQgPL/nropB+uW5E0BXCsOzF3IAwmEQs8lk8mRUjn9iYWHN/wHhKX1neUNR4sdxhmHpYCW3EP1QYA183scV8j7U6EPhfeNbiK6rqdSLD9bdEmOdlsu0QPRrcyw6OvYwhRrkQiEQZTYw3DNTQQFDn+Xiifi2+pVL9lo4JprjWiZuJzc6Dh+v8Bd6dzmd4m0QPlsYqxFWz5iGmaSvvU21lTe+O1nTxbtpPcS7G2qWHUultR3YOK0w/1k6KS4wBtCAwViAcBj00YyKRmNja2eCgd6JN0YOMaW2iYKw1QrDX0EAxZXjGWA4OJeB/Yx7SxAcHuIgSd53qXpGoI7DvTeLklgLZQhsZEcmo52TE8ojQs5OiYhvqmCDPrCbdpN+mdxXUFjwGN/PKLTkcrqeod3PTp1jvZ8RSJCcVfQdW8KLOzxCj2YtIStPNq4K77cKma69KxLZu9hxQ7nP62NfKjBKdIqrmyMRwfp5NXXujDGUUJQvZUWO0D8YDDNnphPx5Ev1q8LTZsdUwfgojEfVLal0+ohJ/5dBcqlJdftMMJDxL/yVNn1wgwwEAAAAAElFTkSuQmCC"
    alt=""
  />
);

const content = (
  <List type="separated">
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

const longerContent = (
  <List type="separated">
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
                block
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
                block
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
                block
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
  .add(
    "With FeatureIcon",
    () => {
      return (
        <PricingTable>
          <PricingTableItem
            name="Basic"
            price="$749"
            featureIcon={icon}
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                block
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
            name="Plus Services"
            price="$749"
            featureIcon={icon}
            badge={<Badge type="warningInverted">Popular</Badge>}
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                block
              >
                Continue with Basic
              </Button>
            }
            mobileDescription="Flexi ticket fare includes:"
            onClick={action("onClick")}
          >
            {longerContent}
          </PricingTableItem>
          <PricingTableItem
            name="Premium"
            price="$1,095"
            featureIcon={icon}
            action={
              <Button
                onClick={ev => {
                  ev.stopPropagation();
                }}
                block
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
