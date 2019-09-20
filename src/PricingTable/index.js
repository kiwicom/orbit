// @flow
import React, { useState } from "react";
import styled from "styled-components";

import Stack from "../Stack";
import Text from "../Text";
import useMediaQuery from "../hooks/useMediaQuery";
import type { Props } from "./index.js.flow";

const StyledPricingTable = styled.div``;

const PricingTable = ({ children, defaultActiveElement = 0 }: Props) => {
  const { isTablet } = useMediaQuery();
  const [activeElement, setActiveElement] = useState(defaultActiveElement);
  const handleOnClick = i => {
    return () => {
      if (!isTablet) {
        setActiveElement(i);
      }
    };
  };
  return (
    <StyledPricingTable>
      <Stack
        flex
        grow
        spaceAfter="medium"
        spacing="condensed"
        align="stretch"
        tablet={{ spacing: "natural", spaceAfter: "none" }}
      >
        {isTablet
          ? children
          : React.Children.map(children, (child, i) =>
              React.cloneElement(child, {
                active: activeElement === i,
                compact: true,
                basis: Math.floor(100 / children.length),
                onClick: handleOnClick(i),
              }),
            )}
      </Stack>
      {!isTablet && children[activeElement] && (
        <Stack spacing="condensed">
          {children[activeElement].props.mobileDescription && (
            <Text weight="bold" size="normal">
              {children[activeElement].props.mobileDescription}
            </Text>
          )}
          {children[activeElement].props.children}
          {children[activeElement].props.action}
        </Stack>
      )}
    </StyledPricingTable>
  );
};

export default PricingTable;
export { default as PricingTableItem } from "./PricingTableItem";
