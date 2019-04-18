// @flow
import * as React from "react";
import styled from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import { LABEL_SIZES, LABEL_ELEMENTS } from "./consts";
import FormFeedback, { StyledFormFeedback } from "../FormFeedback";
import defaultTheme from "../defaultTheme";
import FilterWrapper from "./components/FilterWrapper";

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
              <React.Fragment>
                {React.cloneElement(child, {
                  onChange: this.handleChange,
                  hasError: !!error,
                })}
              </React.Fragment>
            ) : (
              <FilterWrapper
                child={child}
                onClick={this.handleOnly}
                onOnlySelection={onOnlySelection}
              >
                <React.Fragment>
                  {React.cloneElement(child, {
                    onChange: this.handleChange,
                    hasError: !!error,
                  })}
                </React.Fragment>
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

export default ChoiceGroup;
