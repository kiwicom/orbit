import * as React from "react";
import { Seat } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return <Seat price="$12" size={isTablet ? "medium" : "small"} type="default" />;
  },
  info: {
    title: "Price",
    description: "You can set the price to display with each seat.",
  },
};
