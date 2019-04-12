// @flow
import * as React from "react";
import styled from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import { LABEL_SIZES, LABEL_ELEMENTS } from "./consts";
import FormFeedback, { StyledFormFeedback } from "../FormFeedback";
import defaultTheme from "../defaultTheme";
import Checkbox from "../Checkbox";
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

  handleOnly = (obj: { item: {}, index: number }) => {
    if (this.props.onOnlySelection) {
      this.props.onOnlySelection(obj);
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
      filters,
      onOnlySelection,
    } = this.props;
    return (
      <StyledChoiceGroup data-test={dataTest}>
        {label && (
          <Heading type={getHeadingSize(labelSize)} element={labelElement} spaceAfter="medium">
            {label}
          </Heading>
        )}
        <Stack direction="column" spacing={filters ? "none" : "condensed"}>
          {filters
            ? filters.map((child, i) => {
                return (
                  <StyledContentWrapper block={block} key={encodeURIComponent(child.label + i)}>
                    <Checkbox
                      label={child.label}
                      value={child.value}
                      hasError={!!error}
                      onChange={this.handleChange}
                    />
                    {onOnlySelection && (
                      <StyledOnlyButton
                        type="secondary"
                        size="small"
                        onClick={() => {
                          this.handleOnly({ item: child, index: i });
                        }}
                        transparent
                      >
                        Only
                      </StyledOnlyButton>
                    )}
                  </StyledContentWrapper>
                );
              })
            : React.Children.map(children, child => {
                return (
                  <StyledContentWrapper block={block}>
                    {React.cloneElement(child, {
                      onChange: this.handleChange,
                      hasError: !!error,
                    })}
                  </StyledContentWrapper>
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

export default ChoiceGroup;
