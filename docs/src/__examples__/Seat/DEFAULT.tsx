import React from "react";
import { OrbitProvider, Seat, SeatLegend, Stack, defaultTheme } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return (
      <OrbitProvider theme={defaultTheme} useId={React.useId}>
        <Stack direction="column">
          <Seat type="default" size={isTablet ? "medium" : "small"} />
          <SeatLegend type="default" label="Standard ($ 5.99 – $ 12.98)" />
        </Stack>
      </OrbitProvider>
    );
  },
  exampleKnobs: [
    {
      component: "Seat",
      knobs: [
        {
          name: "label",
          type: "text",
          defaultValue: "",
        },
        {
          name: "price",
          type: "text",
          defaultValue: "",
        },
        {
          name: "title",
          type: "text",
          defaultValue: "Seat",
        },
        {
          name: "description",
          type: "text",
          defaultValue: "Presents options for seating",
        },
        {
          name: "size",
          type: "select",
          options: ["small", "medium"],
          defaultValue: "small",
        },
        {
          name: "type",
          type: "select",
          options: ["default", "legroom", "unavailable"],
          defaultValue: "default",
        },
      ],
    },
    {
      component: "SeatLegend",
      knobs: [
        {
          name: "label",
          type: "text",
          defaultValue: "Standard ($ 5.99 – $ 12.98)",
        },
        {
          name: "type",
          type: "select",
          options: ["default", "legroom", "unavailable"],
          defaultValue: "default",
        },
      ],
    },
  ],
};
