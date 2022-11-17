import React from "react";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Stack from "@kiwicom/orbit-components/lib/Stack";

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
