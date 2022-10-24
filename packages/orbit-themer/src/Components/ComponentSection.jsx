import React from "react";
import styled from "styled-components";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Stack from "@kiwicom/orbit-components/lib/Stack";

const StyledComponentSection = styled.div`
  margin-top: ${({ theme }) => theme.orbit.spaceXXXLarge};
`;

const ComponentSection = ({ name, children }) => {
  return (
    <StyledComponentSection>
      <Heading as="h1" type="title2" spaceAfter="largest">
        {name}
      </Heading>
      <Stack spacing="large">{children}</Stack>
    </StyledComponentSection>
  );
};

export default ComponentSection;
