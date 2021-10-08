// @flow
import * as React from "react";

import InputField from "../../InputField";
import InputGroup from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => {
    const [month, setMonth] = React.useState(12);
    const [year, setYear] = React.useState(new Date().getFullYear());
    return (
      <Stack>
        <InputGroup flex={["1 1 4em"]} label="Expiration date">
          <InputField placeholder="MM" maxValue={12} minValue={1} type="number" />
          <InputField placeholder="YYYY" type="number" />
        </InputGroup>
        <InputGroup flex={["1 1 4em"]} label="Expiration date">
          <InputField
            placeholder="MM"
            value={month}
            maxValue={12}
            minValue={1}
            onChange={event => setMonth(event.target.value)}
            type="number"
          />
          <InputField
            placeholder="YYYY"
            value={year}
            onChange={event => setYear(event.target.value)}
            type="number"
          />
        </InputGroup>
      </Stack>
    );
  },
  info: {
    title: "Label color",
    description:
      "When all fields within the group have a value, the group's label will be lightened to show that it is not as important anymore.",
  },
};
