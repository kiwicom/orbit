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
  padding: 0 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  ${StyledOnlyButton} {
    visibility: hidden;
    opacity: 0;
  }

  ${({ disabled }) =>
    !disabled &&
    css`
      /* NOTE: Combined selector &:hover, &:focus-within is not ussable here as it renders incorectly in IE and EDGE */
      &:hover {
        ${hoverAndFocus}
      }
      &:focus-within {
        ${hoverAndFocus}
      }
    `};
`;

StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const FilterWrapper: FilterWrapperType = ({ child, children, onOnlySelection }) => {
  const { value, label, disabled } = child.props;
  return (
    <StyledContentWrapper disabled={disabled}>
      {children}
      {onOnlySelection && !disabled && (
        <StyledOnlyButton
          type="secondary"
          size="small"
          onClick={ev => {
            onOnlySelection(ev, { value, label });
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
