// @flow
import React, { useState } from "react";
import styled from "styled-components";

import Stack from "../Stack";
import Text from "../Text";
import useMediaQuery from "../hooks/useMediaQuery";
import type { Props } from "./index.js.flow";

const StyledPricingTable = styled.div``;

const PricingTable = ({ children, defaultActiveElement = 0 }: Props) => {
  const { isDesktop } = useMediaQuery();
  const [activeElement, setActiveElement] = useState(defaultActiveElement);
  const handleOnClick = i => {
    return () => {
      if (!isDesktop) {
        setActiveElement(i);
      }
    };
  };
  const resolveBasis = item => {
    if (item.length) {
      return `${Math.floor(100 / item.length)}%`;
    }
    return `100%`;
  };
  return (
    <>
      {isDesktop !== null && (
        <StyledPricingTable>
          <Stack
            flex
            grow
            spaceAfter="medium"
            spacing="condensed"
            align="stretch"
            desktop={{ spacing: "natural", spaceAfter: "none" }}
          >
            {isDesktop
              ? children
              : React.Children.map(children, (child, i) =>
                  React.cloneElement(child, {
                    active: activeElement === i,
                    compact: true,
                    basis: resolveBasis(child),
                    onClick: handleOnClick(i),
                  }),
                )}
          </Stack>
          {!isDesktop && children && (
            <Stack spacing="condensed">
              {React.Children.map(children, (child, i) => {
                if (i === activeElement) {
                  return (
                    <>
                      {child.props.mobileDescription && (
                        <Text weight="bold" size="normal">
                          {child.props.mobileDescription}
                        </Text>
                      )}
                      {child.props.children && React.cloneElement(child.props.children)}
                      {child.props.action && React.cloneElement(child.props.action)}
                    </>
                  );
                }
                return null;
              })}
            </Stack>
          )}
        </StyledPricingTable>
      )}
    </>
  );
};

export default PricingTable;
export { default as PricingTableItem } from "./PricingTableItem";
