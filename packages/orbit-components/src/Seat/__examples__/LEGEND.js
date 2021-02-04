// @flow
import * as React from "react";

import Seat from "../index";
import SeatLegend from "../components/SeatLegend";
import Stack from "../../Stack";
import useMediaQuery from "../../hooks/useMediaQuery";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return (
      <Stack direction="column">
        <Stack inline>
          <Seat size={isTablet ? "medium" : "small"} />
          <Seat size={isTablet ? "medium" : "small"} type="legroom" />
          <Seat size={isTablet ? "medium" : "small"} type="unavailable" />
        </Stack>
        <Stack direction="column">
          <SeatLegend label="Extra legroom ($ 5.99 – $ 12.98)" />
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
