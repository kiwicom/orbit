import * as React from "react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import Illustration from "../Illustration";
import { NAMES } from "../Illustration/consts.mts";
import Button from "../Button";
import List from "../List";
import ListItem from "../List/ListItem";

import CallOutBanner from ".";

export default {
  title: "CallOutBanner",
};

export const Default = ({ title, description }) => {
  return (
    <CallOutBanner
      title={title}
      description={description}
      illustration={<Illustration size="small" name="Accommodation" />}
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
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component.",
  },
};

Default.args = {
  title: "Rooms in Warsaw",
  description:
    "Select your hotel, hostel, apartment, or B&B from more than a million properties worldwide.",
};

export const Actionable = ({ title, description }) => {
  return (
    <CallOutBanner
      title={title}
      description={description}
      onClick={action("onClick")}
      illustration={<Illustration size="small" name="Accommodation" />}
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
};

Actionable.story = {
  parameters: {
    info: "This is the default configuration of this component.",
  },
};

Actionable.args = {
  title: "Rooms in Warsaw",
  description:
    "Select your hotel, hostel, apartment, or B&B from more than a million properties worldwide.",
};

export const Playground = ({ title, description, onClick, actions, dataTest, illustration }) => {
  return (
    <CallOutBanner
      title={title}
      description={description}
      dataTest={dataTest}
      onClick={onClick ? action("onClick") : undefined}
      illustration={illustration ? <Illustration size="small" name={illustration} /> : undefined}
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
};

Playground.story = {
  parameters: {
    info: "This is the default configuration of this component.",
  },
};

Playground.args = {
  title: "Rooms in Warsaw",
  description:
    "Select your hotel, hostel, apartment, or B&B from more than a million properties worldwide.",
  onClick: false,
  actions: false,
  dataTest: "test",
  illustration: "Accommodation",
};

Playground.argTypes = {
  illustration: {
    options: NAMES,
    control: {
      type: "select",
    },
  },
};
