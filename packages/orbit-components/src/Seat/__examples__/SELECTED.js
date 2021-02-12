// @flow
import * as React from "react";

import Seat from "../index";
import Stack from "../../Stack";
import useMediaQuery from "../../hooks/useMediaQuery";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return (
      <Stack>
        <Stack spacing="XXSmall">
          <Stack direction="row">
            <Seat type="default" size={isTablet ? "medium" : "small"} />
            <Seat selected type="default" size={isTablet ? "medium" : "small"} />
            <Seat type="legroom" size={isTablet ? "medium" : "small"} />
            <Seat selected type="legroom" size={isTablet ? "medium" : "small"} />
          </Stack>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Selected",
    description: "Seats can be selected.",
  },
};
