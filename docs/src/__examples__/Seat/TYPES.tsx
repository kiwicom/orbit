import React from "react";
import { Seat, Heading, Stack } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

export default {
  Example: () => {
    const { isTablet } = useMediaQuery();
    return (
      <Stack flex>
        <Stack spacing="XXSmall">
          <Heading as="h3" type="title3">
            Default
          </Heading>
          <Seat size={isTablet ? "medium" : "small"} type="default" />
        </Stack>
        <Stack spacing="XXSmall">
          <Heading as="h3" type="title3">
            Extra legroom
          </Heading>
          <Seat type="legroom" size={isTablet ? "medium" : "small"} />
        </Stack>
        <Stack spacing="XXSmall">
          <Heading as="h3" type="title3">
            Selected
          </Heading>
          <Seat type="legroom" selected size={isTablet ? "medium" : "small"} />
        </Stack>
        <Stack spacing="XXSmall">
          <Heading as="h3" type="title3">
            Unavailable
          </Heading>
          <Seat type="unavailable" size={isTablet ? "medium" : "small"} />
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Types",
    description: "The types of seats indicate information about the possible options.",
  },
};
