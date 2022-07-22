import * as React from "react";
import { text, select } from "@storybook/addon-knobs";

import Clock from "../icons/Clock";
import Stack from "../Stack";
import { SPACINGS } from "../utils/layout/consts";

import KeyValue from ".";

export const Default = () => {
  const label = text("label", "Departure");
  const value = text("value", "Brno ➝ Prague");
  const size = select("size", ["normal", "large"], "normal");
  const spacing = select("Spacing", Object.values(SPACINGS), undefined);

  return <KeyValue label={label} value={value} size={size} direction="column" spacing={spacing} />;
};

export const WithIcon = () => {
  const size = select("size", ["normal", "large"], "normal");
  const spacing = select("Spacing", Object.values(SPACINGS), undefined);

  return (
    <Stack flex justify="between" align="end">
      <KeyValue
        label="Departure"
        value="Brno ➝ Prague"
        size={size}
        direction="column"
        spacing={spacing}
      />
      <KeyValue
        value="6h 10m"
        size={size}
        direction="row"
        spacing={spacing}
        icon={<Clock size="small" />}
      />
    </Stack>
  );
};

export default {
  title: "KeyValue",
};
