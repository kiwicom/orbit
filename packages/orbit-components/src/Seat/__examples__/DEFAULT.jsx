// @flow
import * as React from "react";

import Seat from "../index";
import useMediaQuery from "../../hooks/useMediaQuery";

export default {
  Example: (): React.Node => {
    const { isTablet } = useMediaQuery();
    return <Seat size={isTablet ? "medium" : "small"} />;
  },
  info: {
    title: "Default seat",
    description: "Default seats have no special characteristics.",
  },
};
