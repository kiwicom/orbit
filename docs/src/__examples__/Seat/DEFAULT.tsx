import React from "react";
import { Seat } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return <Seat type="default" size={isTablet ? "medium" : "small"} />;
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
          defaultValue: "",
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
