import * as React from "react";
import { action } from "@storybook/addon-actions";

import { SIZE_OPTIONS } from "./consts";
import Stack from "../Stack";
import SeatLegend from "./components/SeatLegend";

import Seat from ".";

export const Default = () => <Seat type="default" />;

export const Mixed = ({ label, size }) => {
  return (
    <Stack direction="column">
      <Stack align="end">
        <Seat size={size} onClick={action("onClick")} label={label} price="12$" />
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          type="unavailable"
        />
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          selected
          type="legroom"
        />
      </Stack>
      <Stack align="end">
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          type="unavailable"
        />
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          selected
          type="legroom"
        />
        <Seat size={size} onClick={action("onClick")} label={label} price="12$" />
      </Stack>
      <Stack align="end">
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          selected
          type="legroom"
        />
        <Seat size={size} onClick={action("onClick")} label={label} price="12$" />
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          type="unavailable"
        />
      </Stack>
    </Stack>
  );
};

Mixed.args = {
  label: "XY",
  size: SIZE_OPTIONS.MEDIUM,
};

Mixed.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Selected = ({ size, dataTest, label }) => {
  return (
    <Stack direction="row">
      <Seat size={size} onClick={action("onClick")} label={label} selected dataTest={dataTest} />
      <Seat
        size={size}
        onClick={action("onClick")}
        label={label}
        selected
        type="legroom"
        dataTest={dataTest}
      />
      <Seat size={size} onClick={action("onClick")} label={label} selected dataTest={dataTest} />
    </Stack>
  );
};

Selected.args = {
  size: SIZE_OPTIONS.MEDIUM,
  dataTest: "test",
  label: "XY",
};

Selected.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({ dataTest, size, label, price, selected }) => {
  return (
    <Stack direction="row">
      <Seat size={size} label={label} price={price} selected={selected} dataTest={dataTest} />
      <Seat
        size={size}
        label={label}
        price={price}
        selected={selected}
        onClick={action("onClick")}
        type="legroom"
        dataTest={dataTest}
      />
      <Seat
        size={size}
        label={label}
        price={price}
        onClick={action("onClick")}
        selected={selected}
        type="unavailable"
        dataTest={dataTest}
      />
    </Stack>
  );
};

Playground.args = {
  dataTest: "test",
  size: SIZE_OPTIONS.MEDIUM,
  label: "XY",
  price: "$12",
  selected: false,
};

Playground.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Legend = () => {
  return (
    <Stack direction="column">
      <SeatLegend label="Extra legroom ($ 5.99 – $ 12.98)" />
      <SeatLegend type="legroom" label="Standard ($ 5.99 – $ 12.98)" />
      <SeatLegend type="unavailable" label="Unavailable" />
    </Stack>
  );
};

export default {
  title: "Seat",
  includeStories: ["Default", "Selected", "Mixed", "Legend", "Playground"],
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};
