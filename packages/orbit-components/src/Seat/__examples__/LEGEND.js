// @flow
import * as React from "react";

import Heading from "../../Heading";
import Seat from "../index";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: () => (
    <Stack>
      <Heading>Select your seat</Heading>
      <Stack direction="row" align="center" spacing="XXLarge">
        <Stack spacing="XSmall" direction="row" inline grow={false} align="center">
          <Seat /> <Text>Standard (€5)</Text>
        </Stack>
        <Stack spacing="XSmall" direction="row" inline grow={false} align="center">
          <Seat type="legroom" /> <Text>Extra legroom (€10)</Text>
        </Stack>
        <Stack spacing="XSmall" direction="row" inline grow={false} align="center">
          <Seat type="selected" /> <Text>Selected</Text>
        </Stack>
        <Stack spacing="XSmall" direction="row" inline grow={false} align="center">
          <Seat type="unavailable" />
          <Text>Unavailable</Text>
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" align="center">
          <Stack inline grow={false} align="center" direction="column">
            <Text>A</Text>
            <Seat type="selected" />
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text>B</Text>
            <Seat />
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text>C</Text>
            <Seat />
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text> </Text>
            <Text> </Text>
            <Text>1</Text>
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text>D</Text>
            <Seat />
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text>E</Text>
            <Seat type="unavailable" />
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text>F</Text>
            <Seat />
          </Stack>
        </Stack>
        <Stack direction="row" align="center">
          <Seat />
          <Seat />
          <Seat />
          <Text>2</Text>
          <Seat type="legroom" />
          <Seat type="legroom" />
          <Seat type="legroom" />
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Legend",
    description: "Including an explanation can help users quickly scan the available options.",
  },
};
