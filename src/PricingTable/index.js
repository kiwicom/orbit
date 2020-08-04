// @flow
import React from "react";
import styled from "styled-components";

import Stack from "../Stack";
import Text from "../Text";
import useMediaQuery from "../hooks/useMediaQuery";
import type { Props } from "./index.js.flow";
import { StyledListWrapper } from "./PricingTableItem";

const StyledPricingTable = styled.div``;

const PricingTable = ({ children, dataTest, activeElement, hasError, desktopRadio }: Props) => {
  const { isDesktop } = useMediaQuery();
  const resolveBasis = item => {
    if (item.length) {
      return `${Math.floor(100 / item.length)}%`;
    }
    return `100%`;
  };
  return (
    <>
      {isDesktop !== null && (
        <StyledPricingTable data-test={dataTest}>
          <Stack
            flex
            grow
            spaceAfter="medium"
            spacing="condensed"
            align="stretch"
            desktop={{ spacing: "natural", spaceAfter: "none" }}
            justify="center"
          >
            {React.Children.map(children, (child, i) =>
              React.cloneElement(child, {
                active: isDesktop ? desktopRadio && activeElement === i : activeElement === i,
                compact: !isDesktop,
                basis: !isDesktop && resolveBasis(child),
                hasError,
                desktopRadio,
              }),
            )}
          </Stack>
          {!isDesktop && children && (
            <Stack spacing="condensed">
              <StyledListWrapper>
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
              </StyledListWrapper>
            </Stack>
          )}
        </StyledPricingTable>
      )}
    </>
  );
};

export default PricingTable;
export { default as PricingTableItem } from "./PricingTableItem";
