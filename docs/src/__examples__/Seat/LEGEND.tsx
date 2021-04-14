import * as React from "react";
import { Seat, SeatLegend, Stack, useMediaQuery } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return (
      <Stack direction="column">
        <Stack inline>
          <Seat size={isTablet ? "medium" : "small"} type="default" />
          <Seat size={isTablet ? "medium" : "small"} type="legroom" />
          <Seat size={isTablet ? "medium" : "small"} type="unavailable" />
        </Stack>
        <Stack direction="column">
          <SeatLegend type="default" label="Standard ($5.99–$12.99)" />
          <SeatLegend type="legroom" label="Extra legroom ($13.00–$18.75)" />
          <SeatLegend type="unavailable" label="Unavailable" />
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Legend",
    description: "Including an explanation can help users quickly scan the available options.",
  },
};
