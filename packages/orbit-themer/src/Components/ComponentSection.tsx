import React from "react";
import { Heading, Stack } from "@kiwicom/orbit-components";

const ComponentSection = ({ name, children }) => {
  return (
    <Stack spacing="large">
      <Heading as="h1" type="title2" spaceAfter="largest">
        {name}
      </Heading>
      {children}
    </Stack>
  );
};

export default ComponentSection;
