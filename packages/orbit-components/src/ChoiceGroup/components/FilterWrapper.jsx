// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import type { FilterWrapperType } from "./FilterWrapper";
import defaultTheme from "../../defaultTheme";
import ButtonLink from "../../ButtonLink";

const StyledOnlyButton = styled.div``;

const hoverAndFocus = () => css`
  background-color: ${({ theme }) => theme.orbit.paletteBlueLight};

  ${StyledOnlyButton} {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledContentWrapper = styled.div`
  ${({ disabled }) => css`
    box-sizing: border-box;
    width: 100%;
    padding-left: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    height: ${({ theme }) => theme.orbit.heightButtonSmall};

    ${StyledOnlyButton} {
      visibility: hidden;
      opacity: 0;
    }

    // https://skypicker.slack.com/archives/CAMS40F7B/p1658992944387749
    ${!disabled &&
    css`
      @media (hover: none) {
        ${StyledOnlyButton} {
          visibility: visible;
          opacity: 0.3;
          &:hover {
            opacity: 1;
          }
        }
      }

      @media (hover) and (pointer: fine) {
        &:hover {
          ${hoverAndFocus};
        }

        &:focus-within {
          ${hoverAndFocus}
        }
      }
    `};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const FilterWrapper: FilterWrapperType = ({
  child,
  children,
  onOnlySelection,
  onlySelectionText,
}) => {
  const { value, label, disabled } = child.props;

  return (
    <StyledContentWrapper disabled={disabled}>
      {children}
      {onOnlySelection && !disabled && (
        <StyledOnlyButton>
          <ButtonLink
            type="secondary"
            size="small"
            onClick={ev => {
              onOnlySelection(ev, { value, label });
            }}
          >
            {onlySelectionText}
          </ButtonLink>
        </StyledOnlyButton>
      )}
    </StyledContentWrapper>
  );
};

export default FilterWrapper;
