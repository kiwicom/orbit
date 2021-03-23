import * as React from "react";
import { Seat, Stack, SeatLegend } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

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
          <SeatLegend label="Extra legroom ($ 5.99 – $ 12.98)" type="default" />
          <SeatLegend type="legroom" label="Standard ($ 5.99 – $ 12.98)" />
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
