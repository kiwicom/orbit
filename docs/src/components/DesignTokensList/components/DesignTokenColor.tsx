import React from "react";
import styled from "styled-components";
import { Stack } from "@kiwicom/orbit-components";

const StyledDesignTokenColor = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  background: ${({ $color }) => $color};
  border-radius: 10px;
  border: 1px solid #dee7f5;
`;

const DesignTokenColor = ({ value, onClick }) => (
  <Stack inline spacing="XXSmall">
    <StyledDesignTokenColor $color={value} />
    <span onClick={onClick} role="button">
      {value}
    </span>
  </Stack>
);

export default DesignTokenColor;
