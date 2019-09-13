// @flow
import React, { useState } from "react";
import styled from "styled-components";

import Stack from "../Stack";
import Text from "../Text";
import useMediaQuery from "../hooks/useMediaQuery";
import type { Props } from "./index.js.flow";

const StyledPricingTable = styled.div``;

const PricingTable = ({ children }: Props) => {
  const { isTablet } = useMediaQuery();
  const [activeElement, setActiveElement] = useState(0);
  return (
    <StyledPricingTable>
      <Stack flex grow spaceAfter="medium">
        {isTablet
          ? children
          : React.Children.map(children, (child, i) =>
              React.cloneElement(child, {
                active: activeElement === i,
                compact: true,
                onClick: () => {
                  if (!isTablet) {
                    setActiveElement(i);
                  }
                },
              }),
            )}
      </Stack>
      {!isTablet && (
        <Stack spacing="condensed">
          <Text weight="bold" size="normal">
            {children[activeElement].props.mobileDescription}
          </Text>
          {children[activeElement].props.children}
          {children[activeElement].props.action}
        </Stack>
      )}
    </StyledPricingTable>
  );
};

export default PricingTable;
export { default as PricingTableItem } from "./PricingTableItem";
