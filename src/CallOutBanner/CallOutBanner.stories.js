// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Illustration from "../Illustration";
import { NAMES } from "../Illustration/consts";
import Button from "../Button";
import List from "../List";
import ListItem from "../List/ListItem";

import CallOutBanner from ".";

storiesOf("CallOutBanner", module)
  .add(
    "Default",
    () => {
      const title = text("title", "Rooms in Warsaw");
      const description = text(
        "description",
        "Select your hotel, hostel, apartment, or B&B from more than a million properties worldwide.",
      );
      return (
        <CallOutBanner
          title={title}
          description={description}
          illustration={<Illustration size="extraSmall" name="Accommodation" />}
          actions={
            <Button
              type="secondary"
              size="small"
              onClick={action("onClick")}
              iconRight={<Icons.NewWindow />}
            >
              Find a Room
            </Button>
          }
        >
          <List type="secondary">
            <ListItem icon={<Icons.Check color="success" />}>Up to 50% off.</ListItem>
            <ListItem icon={<Icons.Check color="success" />}>
              From 3-star budget to 5-star luxury.
            </ListItem>
          </List>
        </CallOutBanner>
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  )
  .add(
    "Actionable",
    () => {
      const title = text("title", "Rooms in Warsaw");
      const description = text(
        "description",
        "Select your hotel, hostel, apartment, or B&B from more than a million properties worldwide.",
      );
      return (
        <CallOutBanner
          title={title}
          description={description}
          onClick={action("onClick")}
          illustration={<Illustration size="extraSmall" name="Accommodation" />}
          actions={
            <Button
              type="secondary"
              size="small"
              onClick={action("onClick")}
              iconRight={<Icons.NewWindow />}
            >
              Find a Room
            </Button>
          }
        >
          <List type="secondary">
            <ListItem icon={<Icons.Check color="success" />}>Up to 50% off.</ListItem>
            <ListItem icon={<Icons.Check color="success" />}>
              From 3-star budget to 5-star luxury.
            </ListItem>
          </List>
        </CallOutBanner>
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  )
  .add(
    "Playground",
    () => {
      const title = text("title", "Rooms in Warsaw");
      const description = text(
        "description",
        "Select your hotel, hostel, apartment, or B&B from more than a million properties worldwide.",
      );
      const onClick = boolean("onClick", false);
      const actions = boolean("actions", false);
      const dataTest = text("dataTest", "test");
      const illustration = select("illustration", [null, ...Object.values(NAMES)], "Accommodation");
      return (
        <CallOutBanner
          title={title}
          description={description}
          dataTest={dataTest}
          onClick={onClick ? action("onClick") : undefined}
          illustration={
            illustration ? <Illustration size="extraSmall" name={illustration} /> : undefined
          }
          actions={
            actions ? (
              <Button
                type="secondary"
                size="small"
                onClick={action("onClick")}
                iconRight={<Icons.NewWindow />}
              >
                Find a Room
              </Button>
            ) : null
          }
        >
          <List type="secondary">
            <ListItem icon={<Icons.Check color="success" />}>Up to 50% off.</ListItem>
            <ListItem icon={<Icons.Check color="success" />}>
              From 3-star budget to 5-star luxury.
            </ListItem>
          </List>
        </CallOutBanner>
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  );
