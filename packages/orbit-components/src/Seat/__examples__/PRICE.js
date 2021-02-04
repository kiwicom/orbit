// @flow
import * as React from "react";

import Seat from "../index";
import useMediaQuery from "../../hooks/useMediaQuery";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return <Seat price="$12" size={isTablet ? "medium" : "small"} />;
  },
  info: {
    title: "Price",
    description: "You can set the price to display with each seat.",
  },
};
