// @flow
import React, { useMemo } from "react";
import styled from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import { LABEL_SIZES, LABEL_ELEMENTS } from "./consts";
import FormFeedback, { StyledFormFeedback } from "../FormFeedback";
import defaultTheme from "../defaultTheme";
import FilterWrapper from "./components/FilterWrapper";
import randomID from "../utils/randomID";

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

const ChoiceGroup = ({
  dataTest,
  label,
  labelSize = LABEL_SIZES.NORMAL,
  labelAs = LABEL_ELEMENTS.H4,
  error,
  children,
  filter,
  onOnlySelection,
  onlySelectionText,
  onChange,
}: Props) => {
  const groupID = useMemo(() => randomID("choiceGroupID"), []);

  const handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    ev.persist();
    if (onChange) {
      onChange(ev);
    }
  };

  return (
    <StyledChoiceGroup data-test={dataTest} role="group" aria-labelledby={groupID}>
      {label && (
        <Heading id={groupID} type={getHeadingSize(labelSize)} as={labelAs} spaceAfter="medium">
          {label}
        </Heading>
      )}
      <Stack direction="column" spacing={filter ? "none" : "condensed"}>
        {React.Children.map(children, child => {
          return !filter ? (
            <>
              {React.cloneElement(child, {
                onChange: handleChange,
                hasError: Boolean(error),
              })}
            </>
          ) : (
            <FilterWrapper
              child={child}
              onOnlySelection={onOnlySelection}
              onlySelectionText={onlySelectionText}
            >
              <>
                {React.cloneElement(child, {
                  onChange: handleChange,
                  hasError: Boolean(error),
                })}
              </>
            </FilterWrapper>
          );
        })}
      </Stack>
      <FormFeedback error={error} />
    </StyledChoiceGroup>
  );
};

export default ChoiceGroup;
