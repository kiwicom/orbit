// @flow
import * as React from "react";

import Seat from "../index";
import useMediaQuery from "../../hooks/useMediaQuery";

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
