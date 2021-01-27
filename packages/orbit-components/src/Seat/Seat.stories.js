// @flow

import * as React from "react";
import { select, text, boolean } from "@storybook/addon-knobs";

import { SIZE_OPTIONS } from "./consts";
import Stack from "../Stack";

import Seat from "./index";

export const Default = () => <Seat />;

export const Selected = () => {
  const size = select("Size", Object.values(SIZE_OPTIONS), "medium");
  const dataTest = text("dataTest", "test");
  const label = text("label", "MZ");

  return (
    <Stack direction="row">
      <Seat size={size} label={label} selected dataTest={dataTest} />
      <Seat size={size} label={label} selected type="legroom" dataTest={dataTest} />
    </Stack>
  );
};

export const Playground = () => {
  const dataTest = text("dataTest", "test");
  const size = select("Size", Object.values(SIZE_OPTIONS), "medium");
  const label = text("label", "MZ");
  const price = text("price", "12$");
  const selected = boolean("selected", false);

  return (
    <Stack direction="row">
      <Seat size={size} label={label} price={price} selected={selected} dataTest={dataTest} />
      <Seat
        size={size}
        label={label}
        price={price}
        selected={selected}
        type="legroom"
        dataTest={dataTest}
      />
      <Seat
        size={size}
        label={label}
        price={price}
        selected={selected}
        type="unavailable"
        dataTest={dataTest}
      />
    </Stack>
  );
};

export default {
  title: "Seat",
  component: Seat,
  includeStories: ["Default", "Selected", "Playground"],
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};
