import * as React from "react";
import styled from "styled-components";

import Text from "../Text";
import { Props } from "./types";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const KeyValue = ({ dataTest, label, value, size = "normal" }: Props) => {
  return (
    <StyledWrapper data-test={dataTest}>
      <Text type="secondary" size={size === "normal" ? "small" : "normal"}>
        {label}
      </Text>
      <Text size={size}>{value}</Text>
    </StyledWrapper>
  );
};

export default KeyValue;
