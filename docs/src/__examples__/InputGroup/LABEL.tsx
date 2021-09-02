import React from "react";
import { InputGroup, InputField, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [month, setMonth] = React.useState<number | string>(12);
    const [year, setYear] = React.useState<number | string>(new Date().getFullYear());
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
            onChange={event => setMonth(event.currentTarget.value)}
            type="number"
          />
          <InputField
            placeholder="YYYY"
            value={year}
            onChange={event => setYear(event.currentTarget.value)}
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
