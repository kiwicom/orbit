import * as React from "react";
import { Seat } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return <Seat type="default" size={isTablet ? "medium" : "small"} />;
  },
  info: {
    title: "Default seat",
    description: "Default seats have no special characteristics.",
  },
};
