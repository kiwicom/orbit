// @flow
import * as React from "react";

import InputField from "../../InputField";
import InputGroup from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => {
    return (
      <Stack>
        <InputGroup flex={["8 8 15em", "1 1 4em", "2 2 6em"]} label="Departure">
          <InputField placeholder="MM" type="number" />
          <InputField placeholder="DD" type="number" />
          <InputField placeholder="YYYY" type="number" />
        </InputGroup>
        <InputGroup flex={["1 1 4em"]} label="Departure">
          <InputField placeholder="MM" type="number" />
          <InputField placeholder="DD" type="number" />
          <InputField placeholder="YYYY" type="number" />
        </InputGroup>
      </Stack>
    );
  },
  info: {
    title: "Flex",
    description: "You can set flex properties for individual fields or have one value for all.",
  },
};
