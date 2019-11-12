// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import type { FilterWrapperType } from "./FilterWrapper.js.flow";
import defaultTheme from "../../defaultTheme";
import ButtonLink from "../../ButtonLink";

const StyledOnlyButton = styled(ButtonLink)``;

const hoverAndFocus = () => css`
  background-color: ${({ theme }) => theme.orbit.paletteProductLight};

  ${StyledOnlyButton} {
    visibility: visible;
    opacity: 1;
  }
`;
const StyledContentWrapper = styled.div`
  width: 100%;
  padding: 0px 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  &:hover {
    ${hoverAndFocus}
  }
  &:focus-within {
    ${hoverAndFocus}
  }

  ${StyledOnlyButton} {
    visibility: hidden;
    opacity: 0;
  }
`;

StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const FilterWrapper: FilterWrapperType = ({ child, children, onOnlySelection }) => {
  return (
    <StyledContentWrapper>
      {children}
      {onOnlySelection && (
        <StyledOnlyButton
          type="secondary"
          size="small"
          onClick={ev => {
            onOnlySelection(ev, { value: child.props.value, label: child.props.label });
          }}
          transparent
        >
          Only {/* TODO: Dictionary */}
        </StyledOnlyButton>
      )}
    </StyledContentWrapper>
  );
};

export default FilterWrapper;
