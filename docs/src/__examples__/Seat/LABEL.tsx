import React from "react";
import { Seat } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return <Seat label="XY" size={isTablet ? "medium" : "small"} />;
  },
  info: {
    title: "Seat with label",
    description: "Seat can have a label text inside",
  },
};
