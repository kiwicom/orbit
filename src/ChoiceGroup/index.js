// @flow
import * as React from "react";
import styled from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import { LABEL_SIZES, LABEL_ELEMENTS } from "./consts";
import FormFeedback, { StyledFormFeedback } from "../FormFeedback";
import defaultTheme from "../defaultTheme";
import ButtonLink from "../ButtonLink";

import type { Props } from "./index";

const getHeadingSize = size => {
  const SIZES = {
    [LABEL_SIZES.NORMAL]: "title3",
    [LABEL_SIZES.LARGE]: "title2",
  };
  return SIZES[size];
};

const StyledChoiceGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${StyledFormFeedback} {
    position: relative;
    margin-top: ${({ theme }) => theme.orbit.spaceXSmall};
    top: initial;
  }
`;

StyledChoiceGroup.defaultProps = {
  theme: defaultTheme,
};

const StyledOnlyButton = styled(ButtonLink)``;

const StyledContentWrapper = styled.div`
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  &:hover,
  &:focus-within {
    ${({ block, theme }) =>
      block &&
      `
     background-color: ${theme.orbit.paletteBlueLight};
  `}

    ${StyledOnlyButton} {
      visibility: visible;
      opacity: 1;
    }
  }

  ${StyledOnlyButton} {
    visibility: hidden;
    opacity: 0;
  }
`;

StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

class ChoiceGroup extends React.PureComponent<Props> {
  handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    ev.persist();
    const { onChange } = this.props;
    if (onChange) {
      onChange(ev);
    }
  };

  handleOnly = (
    ev: SyntheticEvent<HTMLButtonElement>,
    child: { value: string | number, label: string },
  ) => {
    if (this.props.onOnlySelection) {
      this.props.onOnlySelection(ev, child);
    }
  };

  render() {
    const {
      dataTest,
      label,
      labelSize = LABEL_SIZES.NORMAL,
      labelElement = LABEL_ELEMENTS.H4,
      error,
      children,
      block,
      filter,
      onOnlySelection,
    } = this.props;

    return (
      <StyledChoiceGroup data-test={dataTest}>
        {label && (
          <Heading type={getHeadingSize(labelSize)} element={labelElement} spaceAfter="medium">
            {label}
          </Heading>
        )}
        <Stack direction="column" spacing={filter ? "none" : "condensed"}>
          {React.Children.map(children, child => {
            return !filter ? (
              <StyledContentWrapper block={block}>
                {React.cloneElement(child, {
                  onChange: this.handleChange,
                  hasError: !!error,
                })}
              </StyledContentWrapper>
            ) : (
              <FilterWrapper child={child} onClick={this.handleOnly}>
                <StyledContentWrapper block={block}>
                  {React.cloneElement(child, {
                    onChange: this.handleChange,
                    hasError: !!error,
                  })}
                </StyledContentWrapper>
              </FilterWrapper>
            );
          })}
        </Stack>
        {error && (
          <FormFeedback type="error" fixed>
            {error}
          </FormFeedback>
        )}
      </StyledChoiceGroup>
    );
  }
}

const FilterWrapper = ({ child, onClick, children }) => {
  return (
    <StyledContentWrapper block>
      {children}
      <StyledOnlyButton
        type="secondary"
        size="small"
        onClick={ev => {
          onClick(ev, { value: child.props.value, label: child.props.label });
        }}
        transparent
      >
        Only {/* TODO: Dictionary */}
      </StyledOnlyButton>
    </StyledContentWrapper>
  );
};
export default ChoiceGroup;
